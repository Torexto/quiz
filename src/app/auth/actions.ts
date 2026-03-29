"use server";

import { headers } from "next/dist/server/request/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/auth";
import { LoginSchema, RegisterSchema } from "@/lib/schema/auth";

type AuthResult = { ok: boolean; error: string | undefined };
type AuthError = { body: { message: string } };

export async function loginAction(data: unknown): Promise<AuthResult> {
   const parsed = LoginSchema.safeParse(data);

   if (!parsed.success) {
      return { ok: false, error: "Invalid credentials" };
   }

   try {
      await auth.api.signInEmail({
         body: parsed.data,
         headers: await headers(),
      });
   } catch (err) {
      const authError = err as AuthError;
      return { ok: false, error: authError.body?.message || "Internal error" };
   }

   redirect("/dashboard");
}

export async function registerAction(data: unknown): Promise<AuthResult> {
   const parsed = RegisterSchema.safeParse(data);

   if (!parsed.success) {
      return { ok: false, error: "Invalid credentials" };
   }

   try {
      await auth.api.signUpEmail({
         body: parsed.data,
         headers: await headers(),
      });
   } catch (err) {
      const authError = err as AuthError;
      return { ok: false, error: authError.body?.message || "Internal error" };
   }

   redirect("/dashboard");
}
