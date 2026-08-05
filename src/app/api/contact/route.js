import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // Port 587 uses STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AC Plumbing Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: data.email || process.env.EMAIL_USER,
      subject: `New Service Booking - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2 style="color:#123B67;">New Booking Request</h2>
          <hr />

          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
            <tr>
              <td><strong>Name:</strong></td>
              <td>${data.name}</td>
            </tr>

            <tr>
              <td><strong>Phone:</strong></td>
              <td>${data.phone}</td>
            </tr>

            <tr>
              <td><strong>Email:</strong></td>
              <td>${data.email || "-"}</td>
            </tr>

            <tr>
              <td><strong>Service:</strong></td>
              <td>${data.service}</td>
            </tr>

            <tr>
              <td><strong>Date:</strong></td>
              <td>${data.date}</td>
            </tr>

            <tr>
              <td><strong>Time:</strong></td>
              <td>${data.time}</td>
            </tr>

            <tr>
              <td><strong>Address:</strong></td>
              <td>${data.address}</td>
            </tr>

            <tr>
              <td><strong>Message:</strong></td>
              <td>${data.message || "-"}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Booking request sent successfully.",
    });
  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send booking request.",
      },
      {
        status: 500,
      }
    );
  }
}