import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {prisma} from "@/lib/prisma";
import {nextCookies} from "better-auth/next-js";

export const auth = betterAuth({
   plugins: [nextCookies()],
   database: prismaAdapter(prisma, {
      provider: "postgresql",
   }),
   emailAndPassword: {
      enabled: true,
   },
   socialProviders: {},
   trustedOrigins: [
      "http://localhost:3000",
      "http://127.0.0.1:3000"
   ],
   advanced: {
      useSecureCookies: false,
   },
   baseURL: process.env.BETTER_AUTH_URL,
});