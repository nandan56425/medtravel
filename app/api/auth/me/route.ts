import { NextResponse } from 'next/server'

// Verify JWT-like token
function verifyToken(token: string): { userId: string; email: string } | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString())
    if (payload.exp < Date.now()) {
      return null // Token expired
    }
    return { userId: payload.userId, email: payload.email }
  } catch {
    return null
  }
}

// In-memory user store (in production, query from database)
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
}> = [
  {
    _id: 'demo_user_1',
    fullName: 'Demo Patient',
    email: 'demo@medtravelhub.com',
    password: 'hashed_demo123_8',
    phone: '+91-9876543210',
    countryOfOrigin: 'UAE',
    isInternationalPatient: true,
    role: 'patient',
    createdAt: new Date().toISOString(),
  }
]

export async function GET(request: Request) {
  try {
    // Get authorization header
    const authHeader = request.headers.get('Authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization token required' },
        { status: 401 }
      )
    }

    const token = authHeader.split(' ')[1]
    const decoded = verifyToken(token)

    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    // Find user by email
    const user = users.find(u => u.email === decoded.email)

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to get user profile' },
      { status: 500 }
    )
  }
}
