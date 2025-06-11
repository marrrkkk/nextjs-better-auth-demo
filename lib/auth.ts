import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";
import { schema } from "@/db/schema";
import { sendEmail } from "./email";

export const auth = betterAuth({
    socialProviders: {
        google: {
            prompt: "select_account",
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url }) => {
            await sendEmail({
                to: user.email,
                subject: "Reset your password",
                text: `Click the link to reset your password: ${url}`,
            });
        },
    },

    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({user, token}) => {
            const verificationUrl  =`${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
            await sendEmail({
                to: user.email,
                subject: "Verify your email address",
                text: `Click the link to verify your email: ${verificationUrl}`,
            })
        }
    },
    resetPasswordTokenExpiresIn: 3600,
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: schema
    }),
    plugins: [nextCookies()]
});