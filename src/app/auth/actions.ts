"use server";

import {LoginSchema, RegisterSchema} from "@/lib/schema/auth";
import {auth} from "@/lib/auth/auth";
import {headers} from "next/dist/server/request/headers";
import {redirect} from "next/navigation";

type AuthResult = { ok: boolean, error: string | undefined };

export async function loginAction(data: unknown): Promise<AuthResult> {
   const parsed = LoginSchema.safeParse(data);

   if (!parsed.success) {
      return {ok: false, error: "Invalid credentials"};
   }

   try {
      await auth.api.signInEmail({
         body: parsed.data,
         headers: await headers()
      });
   } catch (err: any) {
      return {ok: false, error: err.body.message};
   }

   redirect("/dashboard");
}

export async function registerAction(data: unknown): Promise<AuthResult> {
   const parsed = RegisterSchema.safeParse(data);

   if (!parsed.success) {
      return {ok: false, error: "Invalid credentials"};
   }

   try {
      await auth.api.signUpEmail({
         body: parsed.data,
         headers: await headers()
      })
   } catch (err: any) {
      return {ok: false, error: err.body.message};
   }

   redirect("/dashboard");
}
