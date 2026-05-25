import type { Hospital, Doctor, Treatment } from './types'

// Seed data for hospitals
export const seedHospitals: Omit<Hospital, '_id'>[] = [
  {
    name: 'Manipal Hospitals Mysuru',
    specialization: 'Multi-specialty',
    description: 'One of India\'s leading healthcare providers offering world-class medical services with cutting-edge AI-powered diagnostics, organ transplant programs, and comprehensive international patient support.',
    keyFeatures: [
      'AI-Powered Diagnostics',
      'Organ Transplant Center',
      'Robotic Surgery',
      'Comprehensive Cancer Care',
      '24/7 Emergency Services',
      'International Patient Lounge'
    ],
    internationalPatientDesk: true,
    languages: ['English', 'Arabic', 'Hindi', 'Kannada'],
    location: 'KRS Road, Mysuru, Karnataka 570004',
    contact: '+91-821-4299999'
  },
  {
    name: 'JSS Ayurvedic Hospital',
    specialization: 'Ayurveda & Holistic Wellness',
    description: 'A premier institution combining ancient Ayurvedic wisdom with modern diagnostic facilities. Specializing in Panchakarma therapy, we serve patients from Europe and the Middle East seeking authentic holistic healing.',
    keyFeatures: [
      'Authentic Panchakarma',
      'Modern Diagnostics',
      'Herbal Medicine Lab',
      'Yoga & Meditation Center',
      'Specialized Diet Kitchen',
      'Residential Treatment Facility'
    ],
    internationalPatientDesk: true,
    languages: ['English', 'Arabic', 'Hindi', 'German'],
    location: 'Mysuru-Ooty Road, Mysuru, Karnataka 570025',
    contact: '+91-821-2548400'
  },
  {
    name: 'Mysuru Yoga & Wellness Centre',
    specialization: 'Yoga & Rejuvenation',
    description: 'Located in the yoga capital of the world, our center welcomes guests from 87+ countries for transformative wellness experiences. We blend traditional Ashtanga yoga with modern wellness practices.',
    keyFeatures: [
      'Ashtanga Yoga Programs',
      'Meditation Retreats',
      'Naturopathy Treatments',
      'Detox Programs',
      'Wellness Consultation',
      'Long-term Stay Options'
    ],
    internationalPatientDesk: true,
    languages: ['English', 'Arabic', 'French', 'German', 'Spanish'],
    location: 'Gokulam, Mysuru, Karnataka 570002',
    contact: '+91-821-4266666'
  },
  {
    name: 'Narayana Multispeciality Hospital, Mysuru',
    specialization: 'Cardiology, Cardiac Surgery & Multi-Specialty',
    description: 'Part of India\'s largest healthcare network founded by renowned cardiac surgeon Dr. Devi Prasad Shetty. Features 6 operation theatres, 42-bed ICU, largest dialysis unit in Mysuru, 64-slice CT scan, MRI and Cath Lab. Over 69 specialist doctors. Free transport and free OPD consultations for all patients.',
    keyFeatures: [
      'Cardiology & Cardiac Surgery',
      'Nephrology & Urology',
      'Neurology & Neurosurgery',
      'Orthopaedics & Joint Replacement',
      '42-Bed ICU',
      'Largest Dialysis Unit in Mysuru',
      '64-Slice CT Scan & Cath Lab',
      'Free Transport for All Patients',
      'Free OPD Consultations'
    ],
    internationalPatientDesk: true,
    languages: ['English', 'Hindi', 'Kannada', 'Arabic'],
    location: 'R.S. Naidu Nagar, Mysuru, Karnataka',
    contact: '+91-821-5555001',
    accreditation: 'NABH'
  },
  {
    name: 'Apollo BGS Hospitals, Mysuru',
    specialization: 'Super-Specialty & Organ Transplantation',
    description: 'NABH-accredited super-specialty hospital, part of the prestigious Apollo Hospitals Group. Treats over 200,000 patients annually. Only hospital in Mysuru with full-time specialist system for 24/7 access. Performs live donor liver and kidney transplants, complex spine surgeries and advanced neonatal care.',
    keyFeatures: [
      'Live Donor Liver & Kidney Transplants',
      'Complex Spine Surgery',
      'Advanced Oncology',
      'Neonatal Intensive Care',
      '24/7 Full-Time Specialist System',
      'Orthopaedics & Joint Replacement',
      'Neurosciences & Gastroenterology',
      'Teleconsultations & Second Opinions',
      'International Patient Assistance Programme',
      'Apollo 24/7 Digital Platform'
    ],
    internationalPatientDesk: true,
    languages: ['English', 'Hindi', 'Kannada', 'Arabic', 'Telugu'],
    location: 'Adichunchanagiri Road, Kuvempunagar, Mysuru',
    contact: '+91-821-5555002',
    accreditation: 'NABH | Apollo Hospitals Group'
  },
  {
    name: 'ClearMedi Radiant Hospital, Mysuru',
    specialization: 'Oncology, Neurology & Comprehensive Multi-Specialty',
    description: 'NABH-accredited 100-bed modern multi-specialty hospital with advanced VMAT and IGRT-enabled radiation therapy for cancer care. Complete gastro suite, round-the-clock emergency and critical care, rehabilitation, mental health support and cutting-edge diagnostic technology.',
    keyFeatures: [
      'Advanced Cancer Care (VMAT & IGRT)',
      'Neurology & Neurosurgery',
      'Gastroenterology & GI Surgery',
      'Nephrology & Urology',
      'Orthopaedics & Joint Replacement',
      'Plastic & Cosmetic Surgery',
      'Physiotherapy & Rehabilitation',
      'Mental Health Support',
      '24/7 Emergency & Critical Care',
      'Cardiology & Cardiac Surgery'
    ],
    internationalPatientDesk: true,
    languages: ['English', 'Hindi', 'Kannada'],
    location: 'Vijayanagar, Mysuru, Karnataka',
    contact: '+91-821-2336666',
    accreditation: 'NABH'
  },
  {
    name: 'Sri Jayadeva Institute of Cardiovascular Sciences and Research, Mysuru',
    specialization: 'Cardiovascular Sciences — Largest Cardiac Centre in South East Asia',
    description: 'Government of Karnataka autonomous institute and one of the largest single centres for cardiac care in South East Asia. Founded in 1972. Performs 3,000+ open heart surgeries and 30,000+ cath lab procedures annually. World-class cardiac care at government-subsidised affordable rates with 1,150 beds.',
    keyFeatures: [
      'Largest Cardiac Centre in South East Asia',
      '3000+ Open Heart Surgeries Annually',
      '30,000+ Cath Lab Procedures Per Year',
      'Interventional Cardiology',
      'Primary Angioplasty for Heart Attacks',
      '24/7 Emergency Cardiac ICU',
      'Blood Bank On-Site',
      'Government-Subsidised Rates',
      'CT Scan, MRI, X-Ray, Path Lab',
      'Non-Coronary Interventions'
    ],
    internationalPatientDesk: true,
    languages: ['English', 'Kannada', 'Hindi'],
    location: 'Gokulam 3rd Stage, Mysuru, Karnataka',
    contact: '+91-821-5555004',
    accreditation: 'Government of Karnataka | Autonomous Institute'
  }
]

// Seed data for doctors
export const seedDoctors: Omit<Doctor, '_id'>[] = [
  {
    name: 'Dr. Rajesh Kumar',
    hospital: 'Manipal Hospitals Mysuru',
    specialty: 'Cardiothoracic Surgery',
    qualifications: ['MBBS', 'MS (General Surgery)', 'MCh (Cardiothoracic Surgery)', 'Fellowship - Cleveland Clinic'],
    experience: 22,
    languages: ['English', 'Hindi', 'Kannada'],
    availableForVideo: true,
    bio: 'Dr. Rajesh Kumar is a renowned cardiothoracic surgeon with over two decades of experience in complex cardiac procedures including bypass surgeries, valve replacements, and minimally invasive cardiac surgery.'
  },
  {
    name: 'Dr. Priya Nair',
    hospital: 'Manipal Hospitals Mysuru',
    specialty: 'Neurosurgery',
    qualifications: ['MBBS', 'MS (Neurosurgery)', 'Fellowship - Johns Hopkins', 'DBS Certification'],
    experience: 18,
    languages: ['English', 'Hindi', 'Malayalam'],
    availableForVideo: true,
    bio: 'Dr. Priya Nair specializes in conscious brain stimulation and advanced neurosurgical procedures. She has pioneered minimally invasive techniques for movement disorders and chronic pain management.'
  },
  {
    name: 'Dr. Suresh Rao',
    hospital: 'Manipal Hospitals Mysuru',
    specialty: 'Orthopedic & Reconstructive Surgery',
    qualifications: ['MBBS', 'MS (Orthopedics)', 'Fellowship - Royal College of Surgeons'],
    experience: 15,
    languages: ['English', 'Hindi', 'Kannada', 'Tulu'],
    availableForVideo: true,
    bio: 'Dr. Suresh Rao is an expert in limb reconstruction, joint replacement, and complex trauma surgery. He has successfully performed numerous limb re-fixation surgeries with excellent outcomes.'
  },
  {
    name: 'Dr. Anitha Sharma',
    hospital: 'Manipal Hospitals Mysuru',
    specialty: 'Oncology',
    qualifications: ['MBBS', 'MD (Medicine)', 'DM (Medical Oncology)', 'Fellowship - MD Anderson'],
    experience: 20,
    languages: ['English', 'Hindi', 'Arabic', 'Kannada'],
    availableForVideo: true,
    bio: 'Dr. Anitha Sharma is a leading oncologist specializing in personalized cancer treatment. Fluent in Arabic, she has helped numerous patients from the Middle East navigate their cancer journey.'
  },
  {
    name: 'Dr. Venkatesh Murthy',
    hospital: 'JSS Ayurvedic Hospital',
    specialty: 'Ayurvedic Medicine & Panchakarma',
    qualifications: ['BAMS', 'MD (Ayurveda)', 'PhD (Panchakarma)', 'WHO Fellowship'],
    experience: 25,
    languages: ['English', 'Hindi', 'Kannada', 'Sanskrit'],
    availableForVideo: true,
    bio: 'Dr. Venkatesh Murthy is a master of traditional Panchakarma with 25 years of experience. He has treated patients from over 40 countries and is recognized for his authentic approach to Ayurvedic healing.'
  },
  {
    name: 'Dr. Meera Iyer',
    hospital: 'JSS Ayurvedic Hospital',
    specialty: 'Holistic Wellness',
    qualifications: ['BAMS', 'MSc (Yoga Therapy)', 'Certification in Naturopathy'],
    experience: 14,
    languages: ['English', 'Hindi', 'French', 'Kannada'],
    availableForVideo: true,
    bio: 'Dr. Meera Iyer combines Ayurveda with yoga therapy and naturopathy for comprehensive wellness. Fluent in French, she specializes in treating European patients seeking holistic recovery programs.'
  },
  // Narayana Hospital Doctors
  {
    name: 'Dr. Keshava Murthy',
    hospital: 'Narayana Multispeciality Hospital, Mysuru',
    specialty: 'Cardiology & Interventional Cardiology',
    qualifications: ['MBBS', 'MD - Cardiology', 'DM - Interventional Cardiology'],
    experience: 32,
    languages: ['English', 'Kannada', 'Hindi'],
    availableForVideo: true,
    bio: 'Senior Interventional Cardiologist with 32 years of experience. Specialist in complex coronary interventions, angioplasty and stenting. One of Mysuru\'s most recommended cardiac specialists.',
    recommendedPercent: 99
  },
  {
    name: 'Dr. Varadaraj S K',
    hospital: 'Narayana Multispeciality Hospital, Mysuru',
    specialty: 'Orthopaedics & Joint Replacement Surgery',
    qualifications: ['MBBS', 'MS - Orthopaedics', 'Fellowship in Joint Replacement'],
    experience: 29,
    languages: ['English', 'Kannada', 'Hindi'],
    availableForVideo: true,
    bio: 'Leading orthopaedic surgeon specialising in total hip, knee and shoulder replacements with 29 years of experience in complex joint reconstruction and trauma management.',
    recommendedPercent: 96
  },
  {
    name: 'Dr. Pranav Subbaya Kandachar',
    hospital: 'Narayana Multispeciality Hospital, Mysuru',
    specialty: 'Neurology & Neurosurgery',
    qualifications: ['MBBS', 'MD - Neurology', 'DM - Neurosurgery'],
    experience: 28,
    languages: ['English', 'Kannada', 'Hindi'],
    availableForVideo: true,
    bio: 'Highly experienced neurologist and neurosurgeon. Expert in stroke management, epilepsy, brain tumour surgery and complex spine procedures.',
    recommendedPercent: 98
  },
  // Apollo BGS Doctors
  {
    name: 'Dr. Arun Srinivas',
    hospital: 'Apollo BGS Hospitals, Mysuru',
    specialty: 'Cardiology',
    qualifications: ['MBBS', 'MD - Internal Medicine', 'DM - Cardiology'],
    experience: 43,
    languages: ['English', 'Kannada', 'Hindi', 'Telugu'],
    availableForVideo: true,
    bio: 'One of South India\'s most senior cardiologists with 43 years of experience. Managed over 3,500 cardiovascular emergencies with 95% success rate at Apollo BGS.',
    recommendedPercent: 97
  },
  {
    name: 'Dr. Javeed Nayeem',
    hospital: 'Apollo BGS Hospitals, Mysuru',
    specialty: 'Internal Medicine & General Physician',
    qualifications: ['MBBS', 'MD - Internal Medicine'],
    experience: 44,
    languages: ['English', 'Kannada', 'Hindi', 'Urdu', 'Arabic'],
    availableForVideo: true,
    bio: 'Veteran internal medicine specialist with 44 years of experience. Multilingual physician particularly sought after by international patients from the Middle East and Gulf region.',
    recommendedPercent: 97
  },
  {
    name: 'Dr. Nitin Srichand',
    hospital: 'Apollo BGS Hospitals, Mysuru',
    specialty: 'Orthopaedics & Joint Replacement',
    qualifications: ['MBBS', 'MS - Orthopaedics', 'Fellowship - Joint Replacement (Australia)'],
    experience: 20,
    languages: ['English', 'Hindi', 'Kannada'],
    availableForVideo: true,
    bio: 'Internationally trained orthopaedic surgeon with fellowship from Berkeley Vale Hospital, Australia. Specialist in joint replacement and complex foot and ankle surgeries.',
    recommendedPercent: 96
  },
  // ClearMedi Doctors
  {
    name: 'Dr. Sameer Khatri',
    hospital: 'ClearMedi Radiant Hospital, Mysuru',
    specialty: 'Medical Oncology',
    qualifications: ['MBBS', 'MD - Internal Medicine', 'DM - Medical Oncology'],
    experience: 30,
    languages: ['English', 'Hindi', 'Kannada'],
    availableForVideo: true,
    bio: 'Senior Medical Oncologist with 30 years of experience in comprehensive cancer care. Specialist in advanced VMAT and IGRT radiation treatment protocols.',
    recommendedPercent: 98
  },
  {
    name: 'Dr. Jayakumar P',
    hospital: 'ClearMedi Radiant Hospital, Mysuru',
    specialty: 'Cardiology & Interventional Cardiology',
    qualifications: ['MBBS', 'MD - Cardiology', 'DM - Interventional Cardiology'],
    experience: 25,
    languages: ['English', 'Kannada', 'Tamil', 'Hindi'],
    availableForVideo: true,
    bio: 'Interventional cardiologist with 25 years of experience in cardiac diagnostics, coronary interventions and heart failure management.',
    recommendedPercent: 96
  },
  {
    name: 'Dr. Rakesh K N',
    hospital: 'ClearMedi Radiant Hospital, Mysuru',
    specialty: 'Neurosurgery',
    qualifications: ['MBBS', 'MS - General Surgery', 'MCh - Neurosurgery'],
    experience: 24,
    languages: ['English', 'Kannada', 'Hindi'],
    availableForVideo: true,
    bio: 'Highly recommended neurosurgeon specialising in brain and spine surgery, neuro-oncology and minimally invasive neurosurgical procedures.',
    recommendedPercent: 99
  },
  // Sri Jayadeva Institute Doctors
  {
    name: 'Dr. C N Manjunath',
    hospital: 'Sri Jayadeva Institute of Cardiovascular Sciences, Mysuru',
    specialty: 'Interventional Cardiology & Cardiac Electrophysiology',
    qualifications: ['MBBS', 'MD - Cardiology', 'DM - Cardiology', 'FESC', 'FACC'],
    experience: 35,
    languages: ['English', 'Kannada', 'Hindi'],
    availableForVideo: true,
    bio: 'Fellow of European Society of Cardiology (FESC) and American College of Cardiology (FACC). Pioneer in affordable world-class cardiac care in Karnataka with 35 years of expertise.',
    recommendedPercent: 99
  },
  {
    name: 'Dr. Sanjay Rajagopalan',
    hospital: 'Sri Jayadeva Institute of Cardiovascular Sciences, Mysuru',
    specialty: 'Cardiac Surgery & Heart Transplantation',
    qualifications: ['MBBS', 'MS - General Surgery', 'MCh - Cardiothoracic Surgery'],
    experience: 28,
    languages: ['English', 'Kannada', 'Tamil', 'Hindi'],
    availableForVideo: true,
    bio: 'Specialist in open heart surgery, CABG and heart transplantation. Performs 300+ open heart surgeries annually at South East Asia\'s largest cardiac centre.',
    recommendedPercent: 98
  },
  {
    name: 'Dr. Prabhavathi Bhat',
    hospital: 'Sri Jayadeva Institute of Cardiovascular Sciences, Mysuru',
    specialty: 'Cardiology & Heart Failure Management',
    qualifications: ['MBBS', 'MD - General Medicine', 'DM - Cardiology'],
    experience: 26,
    languages: ['English', 'Kannada', 'Hindi', 'Tulu'],
    availableForVideo: true,
    bio: 'Senior cardiologist specialising in heart failure, preventive cardiology and non-invasive cardiac imaging with focus on affordable care for international patients.',
    recommendedPercent: 97
  }
]

// Seed data for treatments
export const seedTreatments: Omit<Treatment, '_id'>[] = [
  {
    name: 'Liver Transplant',
    category: 'Surgery',
    hospital: 'Manipal Hospitals Mysuru',
    costInUSD: { min: 25000, max: 35000 },
    costComparison: { westernAvgUSD: 300000, savingsPercent: 90 },
    waitTime: '2-5 days',
    description: 'State-of-the-art liver transplantation program with living and deceased donor options. Our team includes specialized hepatologists, transplant surgeons, and dedicated post-operative care units.',
    successRate: '92%'
  },
  {
    name: 'Lung Transplant',
    category: 'Surgery',
    hospital: 'Manipal Hospitals Mysuru',
    costInUSD: { min: 30000, max: 45000 },
    costComparison: { westernAvgUSD: 400000, savingsPercent: 91 },
    waitTime: '3-7 days',
    description: 'Comprehensive lung transplant program for end-stage lung diseases. Features advanced ECMO support, pulmonary rehabilitation, and long-term follow-up care.',
    successRate: '88%'
  },
  {
    name: 'Limb Re-fixation Surgery',
    category: 'Surgery',
    hospital: 'Manipal Hospitals Mysuru',
    costInUSD: { min: 8000, max: 15000 },
    costComparison: { westernAvgUSD: 120000, savingsPercent: 88 },
    waitTime: 'Immediate',
    description: 'Emergency and elective limb reconstruction using advanced microsurgical techniques. Includes Ilizarov method, bone grafting, and soft tissue reconstruction.',
    successRate: '94%'
  },
  {
    name: 'Conscious Brain Stimulation',
    category: 'Neurosurgery',
    hospital: 'Manipal Hospitals Mysuru',
    costInUSD: { min: 12000, max: 20000 },
    costComparison: { westernAvgUSD: 150000, savingsPercent: 89 },
    waitTime: '3-5 days',
    description: 'Deep Brain Stimulation (DBS) for Parkinson\'s disease, essential tremor, and dystonia. Performed with awake craniotomy for precise electrode placement.',
    successRate: '90%'
  },
  {
    name: 'Advanced Cardiac Surgery',
    category: 'Surgery',
    hospital: 'Manipal Hospitals Mysuru',
    costInUSD: { min: 7000, max: 12000 },
    costComparison: { westernAvgUSD: 100000, savingsPercent: 88 },
    waitTime: '2-4 days',
    description: 'Comprehensive cardiac surgery including CABG, valve repair/replacement, and minimally invasive procedures. Features hybrid operating rooms and advanced monitoring.',
    successRate: '96%'
  },
  {
    name: 'Panchakarma Therapy',
    category: 'Ayurveda',
    hospital: 'JSS Ayurvedic Hospital',
    costInUSD: { min: 1500, max: 4000 },
    costComparison: { westernAvgUSD: 10000, savingsPercent: 85 },
    waitTime: '1-2 days',
    description: 'Authentic 21-day Panchakarma detoxification program including Vamana, Virechana, Basti, Nasya, and Raktamokshana. Personalized treatment based on Prakriti analysis.',
    successRate: '95%'
  },
  {
    name: 'Ayurvedic Post-op Recovery',
    category: 'Ayurveda',
    hospital: 'JSS Ayurvedic Hospital',
    costInUSD: { min: 2000, max: 5000 },
    costComparison: { westernAvgUSD: 15000, savingsPercent: 87 },
    waitTime: '1-2 days',
    description: 'Specialized Ayurvedic recovery program for post-surgical patients. Combines herbal medicines, Abhyanga massage, and therapeutic yoga for faster healing.',
    successRate: '93%'
  },
  {
    name: 'Yoga & Rejuvenation Retreat',
    category: 'Wellness',
    hospital: 'Mysuru Yoga & Wellness Centre',
    costInUSD: { min: 500, max: 2000 },
    costComparison: { westernAvgUSD: 5000, savingsPercent: 82 },
    waitTime: 'Same day',
    description: '7-21 day immersive wellness retreat featuring Ashtanga yoga, meditation, pranayama, organic meals, and personalized wellness consultations.',
    successRate: '98%'
  }
]

// Testimonials data
export const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    country: 'UAE',
    treatment: 'Cardiac Surgery',
    hospital: 'Manipal Hospitals Mysuru',
    review: 'The care I received at Manipal was exceptional. From the moment I arrived, the international patient desk handled everything - visa assistance, airport pickup, and accommodation for my family. The surgery was successful, and I saved over $80,000 compared to Dubai.',
    rating: 5
  },
  {
    id: 2,
    name: 'Hans Mueller',
    country: 'Germany',
    treatment: 'Panchakarma Therapy',
    hospital: 'JSS Ayurvedic Hospital',
    review: 'I came to Mysuru skeptical about Ayurveda, but left as a believer. Dr. Murthy\'s personalized Panchakarma program helped me manage my chronic pain better than years of Western medication. The authentic approach and peaceful environment were exactly what I needed.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    country: 'United Kingdom',
    treatment: 'Yoga Retreat & Wellness',
    hospital: 'Mysuru Yoga & Wellness Centre',
    review: 'Mysuru truly is the yoga capital of the world. My 21-day retreat was transformative - not just physically, but mentally and spiritually. The combination of traditional practices with modern amenities made it comfortable yet authentic.',
    rating: 5
  }
]

// Journey steps
export const journeySteps = [
  {
    step: 1,
    title: 'Enquire Online',
    description: 'Fill out our simple enquiry form with your medical details. Our team responds within 24 hours.'
  },
  {
    step: 2,
    title: 'Video Consultation',
    description: 'Connect with our specialists via video call to discuss your treatment options and get a personalized plan.'
  },
  {
    step: 3,
    title: 'Medical Visa',
    description: 'We assist with your medical visa application through the Ayush Portal for a smooth travel experience.'
  },
  {
    step: 4,
    title: 'Airport Transfer',
    description: 'Our team greets you at Mysuru airport with comfortable transport to your accommodation or hospital.'
  },
  {
    step: 5,
    title: 'Treatment & Recovery',
    description: 'Receive world-class treatment with dedicated post-operative care and follow-up support.'
  }
]

// Why Mysuru features
export const whyMysuruFeatures = [
  {
    icon: 'brain',
    title: 'AI-Powered Diagnostics',
    description: 'Cutting-edge artificial intelligence integrated into diagnostic processes for faster, more accurate results.'
  },
  {
    icon: 'piggyBank',
    title: 'Cost Efficiency',
    description: 'Save up to 90% compared to Western healthcare costs without compromising on quality or outcomes.'
  },
  {
    icon: 'clock',
    title: 'Minimal Wait Times',
    description: 'No lengthy queues. Most treatments can be scheduled within days, not months or years.'
  },
  {
    icon: 'lotus',
    title: 'Yoga & Ayurveda Heritage',
    description: 'Access authentic traditional medicine in Mysuru - the yoga capital serving 87+ countries.'
  }
]

// Stats
export const stats = [
  { value: '87+', label: 'Countries Served' },
  { value: '90%', label: 'Cost Savings vs Western Nations' },
  { value: '2-5', label: 'Days Average Wait Time' },
  { value: '7', label: 'World-Class Facilities' }
]
