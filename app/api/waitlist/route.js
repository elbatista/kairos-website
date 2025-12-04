import { NextResponse } from "next/server"
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json()

    const { name, email, company } = body

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"KAIROS Waitlist" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Waitlist Signup",
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 200 }
    )
  } catch (error) {
    console.error("POST /api/waitlist error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
