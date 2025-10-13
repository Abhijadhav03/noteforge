import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { schema } from "./../auth-schema";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import VerificationEmail from "@/components/emails/verification-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      try {
        const { data, error } = await resend.emails.send({
          from: "NoteForge <verify@noteforge.dpdns.org>",
          to: [user.email],
          subject: "Verify your email address",
          react: VerificationEmail({
            userName: user.name || "there",
            verificationUrl: url,
          }),
        });

        if (error) {
          console.error("❌ Resend error:", error);
          throw new Error("Failed to send verification email");
        }

        console.log("✅ Verification email sent:", data?.id);
      } catch (err) {
        console.error("Error while sending verification email:", err);
      }
    },
    sendOnSignUp: true,
  },

  emailAndPassword: {
    enabled: true,
  },

  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  plugins: [nextCookies()],
});
