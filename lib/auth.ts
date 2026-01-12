import PasswordResetEmail from "@/components/emails/reset-email";
import VerificationEmail from "@/components/emails/verification-email";
import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
     baseURL: process.env.NODE_ENV === "production" ? "https://noteforge-six.vercel.app" : undefined,
    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            const { data, error } = await resend.emails.send({
  from: 'NoteForge <verify@noteforge.dpdns.org>',
  to: [user.email],
  subject: 'Verify your email address',
  react: VerificationEmail({
    userName: user.name,
    verificationUrl: url
  }),
});

console.log("RESEND DATA:", data);
console.error("RESEND ERROR:", error);

        },
        sendOnSignUp: true,
    },
    socialProviders: {
        google: {
              prompt: "select_account", 
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    emailAndPassword: {
        enabled: true,
        sendResetPassword: async ({ user, url }) => {
            await resend.emails.send({
                from: 'NoteForge <reset@noteforge.dpdns.org>',
                to: [user.email],
                subject: 'Reset your password',
                react: PasswordResetEmail({ userName: user.name, resetUrl: url, requestTime: new Date().toLocaleString() }),
            });
        },
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
    plugins: [nextCookies()]
});
