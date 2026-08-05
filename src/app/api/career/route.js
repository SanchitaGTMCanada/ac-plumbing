import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const job = formData.get("job");
    const message = formData.get("message");
    const resume = formData.get("resume");

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = [];

    if (resume && typeof resume.arrayBuffer === "function") {
      const buffer = Buffer.from(await resume.arrayBuffer());

      attachments.push({
        filename: resume.name,
        content: buffer,
        contentType: resume.type,
      });
    }

    await transporter.sendMail({
      from: `"AC Plumbing Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,

      subject: `New Career Application - ${fullName}`,

      html: `
        <h2>New Career Application</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Job Applying For:</strong> ${job}</p>
        <p><strong>Message:</strong> ${message || "-"}</p>
      `,

      attachments,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}