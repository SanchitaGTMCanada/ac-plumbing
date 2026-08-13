import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // --------------------------------------------------
    // 1. Check environment variables
    // --------------------------------------------------

    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_USER,
      EMAIL_PASS,
      EMAIL_TO,
    } = process.env;

    console.log("EMAIL CONFIG:", {
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      user: EMAIL_USER,
      passExists: !!EMAIL_PASS,
      to: EMAIL_TO,
    });

    if (
      !EMAIL_HOST ||
      !EMAIL_PORT ||
      !EMAIL_USER ||
      !EMAIL_PASS ||
      !EMAIL_TO
    ) {
      console.error("Missing email environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured correctly.",
        },
        {
          status: 500,
        }
      );
    }

    // --------------------------------------------------
    // 2. Read request data
    // --------------------------------------------------

    const data = await request.json();

    console.log("Booking request received:", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      date: data.date,
      time: data.time,
    });

    // --------------------------------------------------
    // 3. Validate required fields
    // --------------------------------------------------

    if (
      !data.name ||
      !data.phone ||
      !data.service ||
      !data.date ||
      !data.time ||
      !data.address
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required booking fields.",
        },
        {
          status: 400,
        }
      );
    }

    // --------------------------------------------------
    // 4. Escape HTML values
    // --------------------------------------------------

    const escapeHtml = (value) => {
      if (value === null || value === undefined) {
        return "";
      }

      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const name = escapeHtml(data.name);
    const phone = escapeHtml(data.phone);
    const email = escapeHtml(data.email || "-");
    const service = escapeHtml(data.service);
    const date = escapeHtml(data.date);
    const time = escapeHtml(data.time);
    const address = escapeHtml(data.address);
    const message = escapeHtml(data.message || "-");

    // --------------------------------------------------
    // 5. Create SMTP transporter
    // --------------------------------------------------

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),

      // Microsoft 365 SMTP uses STARTTLS on port 587
      secure: false,
      requireTLS: true,

      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },

      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    // --------------------------------------------------
    // 6. Verify SMTP connection
    // --------------------------------------------------

    console.log("Verifying SMTP connection...");

    await transporter.verify();

    console.log("SMTP connection verified successfully.");

    // --------------------------------------------------
    // 7. Send email
    // --------------------------------------------------

    const mailInfo = await transporter.sendMail({
      from: `"AC Plumbing Website" <${EMAIL_USER}>`,

      to: EMAIL_TO,

      replyTo: data.email || EMAIL_USER,

      subject: `New Service Booking - ${data.name}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f5f7fa;
          "
        >

          <div
            style="
              max-width: 700px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 25px;
              border-radius: 10px;
            "
          >

            <h2
              style="
                color: #123B67;
                margin-bottom: 10px;
              "
            >
              New Booking Request
            </h2>

            <hr
              style="
                border: none;
                border-top: 1px solid #dddddd;
                margin: 20px 0;
              "
            />

            <table
              cellpadding="8"
              cellspacing="0"
              width="100%"
              style="
                border-collapse: collapse;
                font-size: 14px;
              "
            >

              <tr>
                <td style="width: 150px;">
                  <strong>Name:</strong>
                </td>
                <td>
                  ${name}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Phone:</strong>
                </td>
                <td>
                  ${phone}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Email:</strong>
                </td>
                <td>
                  ${email}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Service:</strong>
                </td>
                <td>
                  ${service}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Date:</strong>
                </td>
                <td>
                  ${date}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Time:</strong>
                </td>
                <td>
                  ${time}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Address:</strong>
                </td>
                <td>
                  ${address}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Message:</strong>
                </td>
                <td>
                  ${message}
                </td>
              </tr>

            </table>

            <hr
              style="
                border: none;
                border-top: 1px solid #eeeeee;
                margin: 25px 0 15px;
              "
            />

            <p
              style="
                font-size: 12px;
                color: #777777;
                margin: 0;
              "
            >
              This booking request was submitted from the
              AC Plumbing website.
            </p>

          </div>

        </div>
      `,
    });

    // --------------------------------------------------
    // 8. Log successful email
    // --------------------------------------------------

    console.log("Booking email sent successfully:", {
      messageId: mailInfo.messageId,
      response: mailInfo.response,
    });

    // --------------------------------------------------
    // 9. Return success response
    // --------------------------------------------------

    return NextResponse.json({
      success: true,
      message: "Booking request sent successfully.",
    });
  } catch (error) {
    // --------------------------------------------------
    // 10. Detailed error logging
    // --------------------------------------------------

    console.error("====================================");
    console.error("EMAIL ERROR");
    console.error("====================================");

    console.error("Name:", error?.name);
    console.error("Message:", error?.message);
    console.error("Code:", error?.code);
    console.error("Command:", error?.command);
    console.error("Response:", error?.response);
    console.error("Response Code:", error?.responseCode);

    console.error("Full Error:", error);

    console.error("====================================");

    // --------------------------------------------------
    // 11. Return error response
    // --------------------------------------------------

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send booking request.",

        // Temporary debugging information.
        // Remove this after the problem is fixed.
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      {
        status: 500,
      }
    );
  }
}