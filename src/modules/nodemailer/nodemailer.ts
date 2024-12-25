import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export async function sendEmail(toEmail: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const htmlContent = `<!doctype html>
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Welcome to My Website!</h2>
        <p>Hello,</p>
        <p>${message}</p>
        <p>We are thrilled to have you on board. Explore our features and enjoy your journey!</p>
        <p>Best regards,</p>
        <p><strong>The Loc Backend Team</strong></p>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: '"From Loc Backend" <your-email@gmail.com>',
      to: toEmail,
      subject: "Notification",
      text: "Fallback plain text content if HTML is not supported",
      html: htmlContent, // Use the HTML content here
    });

    console.log(`Email successfully sent to ${toEmail}`);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}


