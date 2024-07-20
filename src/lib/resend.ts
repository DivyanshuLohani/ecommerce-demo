import { EmailTemplate } from "@/components/VerifyEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOTP(
  toEmail: string,
  name: string,
  verifyCode: string
) {
  const { data, error } = await resend.emails.send({
    from: "Team <team@webbros.online>",
    to: [toEmail],
    subject: "Verification code",
    react: EmailTemplate(name, verifyCode),
  });
}
