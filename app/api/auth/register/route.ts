import { NextResponse } from 'next/server'

// In-memory user store (replace with database in production)
const users: Array<{
  _id: string
  fullName: string
  email: string
  password: string
  phone?: string
  countryOfOrigin?: string
  isInternationalPatient: boolean
  role: 'patient' | 'admin'
  createdAt: string
  lastLogin?: string
}> = []

// Simple password hashing (use bcrypt in production)
function hashPassword(password: string): string {
  // This is a simple hash for demo - use bcrypt in production
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return `hashed_${Math.abs(hash).toString(36)}_${password.length}`
}

function verifyPassword(password: string, hashedPassword: string): boolean {
  return hashPassword(password) === hashedPassword
}

// Simple JWT-like token (use jsonwebtoken in production)
function generateToken(userId: string, email: string): string {
  const payload = { userId, email, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 }
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, password, phone, countryOfOrigin, isInternationalPatient } = body

    // Validate required fields
    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: 'Full name, email, and password are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate password length
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (existingUser) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // Create new user
    const newUser = {
      _id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fullName,
      email: email.toLowerCase(),
      password: hashPassword(password),
      phone,
      countryOfOrigin,
      isInternationalPatient: isInternationalPatient ?? true,
      role: 'patient' as const,
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)

    // Generate token
    const token = generateToken(newUser._id, newUser.email)

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json({
      message: 'Registration successful',
      token,
      user: userWithoutPassword,
    })
  } catch {
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    )
  }
}
