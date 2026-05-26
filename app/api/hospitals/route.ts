import { connectDB } from "../../../lib/mongodb";
import Hospital from "../../../models/Hospital";

export async function GET() {
  try {
    await connectDB();

    // Clear old data
    await Hospital.deleteMany({});

    // Insert fresh hospitals
    await Hospital.create([
      {
        name: "Apollo BGS Hospital",
        specialization: "Cardiology",
        description:
          "Leading multi-speciality hospital with international patient care.",
        location: "Mysuru, Karnataka",
        contact: "+91 9876543210",
        image:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
        rating: 4.8,
        internationalPatientDesk: true,
        keyFeatures: [
          "24/7 Emergency",
          "Advanced ICU",
          "International Desk",
          "Cardiac Surgery",
        ],
        languages: ["English", "Hindi", "Kannada", "Arabic"],
      },
      {
        name: "Manipal Hospital",
        specialization: "Neurology",
        description:
          "Advanced neurology and surgical treatment center.",
        location: "Mysuru, Karnataka",
        contact: "+91 9988776655",
        image:
          "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
        rating: 4.7,
        internationalPatientDesk: true,
        keyFeatures: [
          "Neuro Surgery",
          "MRI & CT",
          "ICU",
          "Trauma Care",
        ],
        languages: ["English", "Hindi", "Kannada"],
      },
      {
        name: "Narayana Multispeciality Hospital",
        specialization: "Orthopedics",
        description:
          "Comprehensive orthopedic and trauma care hospital.",
        location: "Mysuru, Karnataka",
        contact: "+91 9123456780",
        image:
          "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
        rating: 4.6,
        internationalPatientDesk: true,
        keyFeatures: [
          "Joint Replacement",
          "Sports Medicine",
          "Trauma Center",
          "Rehabilitation",
        ],
        languages: ["English", "Hindi", "Kannada", "Tamil"],
      },
    ]);

    const hospitals = await Hospital.find();

    return Response.json(hospitals);
  } catch (error: any) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
