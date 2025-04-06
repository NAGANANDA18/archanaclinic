import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, date, time, message } = body

    // Create a transporter using your clinic's email credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: Number(465),
      secure: true,
      auth: {
        user: "appointment.archanaclinic@gmail.com", // Your clinic's email address
        pass: "ceqc efub icon xjog", // Your email password or app password
      },
    })

    // Format the time slot text
    const getTimeSlotText = (slot: string) => {
      switch (slot) {
        case "morning":
          return "Morning (9:00 AM - 12:00 PM)"
        case "afternoon":
          return "Afternoon (12:00 PM - 3:00 PM)"
        case "evening":
          return "Evening (7:00 PM - 9:00 PM)"
        default:
          return ""
      }
    }

    // Format the service text
    const getServiceText = (serviceCode: string) => {
      switch (serviceCode) {
        case "neurological":
          return "Neurological Consultation"
        case "psychiatric":
          return "Psychiatric Consultation"
        case "general":
          return "General Medical Check-up"
        case "counseling":
          return "Counseling Session"
        case "follow-up":
          return "Follow-up Visit"
        default:
          return ""
      }
    }

    // Email to the patient
    await transporter.sendMail({
      from: `"Archana Clinic" <${process.env.EMAIL_FROM || "appointment.archanaclinic@gmail.com"}>`,
      to: email,
      subject: "Your Appointment Confirmation - Archana Clinic",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #0891b2;">Appointment Confirmation</h2>
          <p>Dear ${firstName} ${lastName},</p>
          <p>Thank you for booking an appointment with Archana Clinic. Your appointment details are as follows:</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Service:</strong> ${getServiceText(service)}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${getTimeSlotText(time)}</p>
            <p><strong>Doctor:</strong> Dr. Muralidhara K.A</p>
            <p><strong>Location:</strong> #64/38, "Lahari", 1st Main KGS Layout, Vijayanagar, Bangalore, Karnataka 560040</p>
          </div>
          
          <p>Please remember to:</p>
          <ul>
            <li>Arrive 15 minutes before your scheduled appointment time</li>
            <li>Bring your medical records and previous prescriptions if available</li>
            <li>Contact us at +91 9741126784 if you need to reschedule (24-hour notice required)</li>
          </ul>
          
          <p>If you have any questions, please don't hesitate to contact us.</p>
          
          <p>Best regards,<br>Archana Clinic Team</p>
        </div>
      `,
    })

    // Email notification to the clinic staff
    await transporter.sendMail({
      from: `"Appointment System" <${process.env.EMAIL_FROM || "appointment.archanaclinic@gmail.com"}>`,
      to: process.env.ADMIN_EMAIL || "muralianjanappa@gmail.com",
      subject: "New Appointment Booking",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #0891b2;">New Appointment Booking</h2>
          <p>A new appointment has been booked with the following details:</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Patient:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${getServiceText(service)}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${getTimeSlotText(time)}</p>
            <p><strong>Additional Information:</strong> ${message || "None provided"}</p>
          </div>
          
          <p>Please update the appointment schedule accordingly.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

