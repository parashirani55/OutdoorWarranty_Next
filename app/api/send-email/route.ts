import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, zip } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "outdoorwarranty@gmail.com",
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "Outdoor Warranty Website",
      to: "outdoorwarranty@gmail.com",
      subject: "New RV Warranty Lead",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Zip Code:</strong> ${zip}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}