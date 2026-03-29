"use server";

import { LoginSchema, RegisterSchema } from "@/lib/schema/auth";

export async function loginAction(data: unknown) {
  const parsed = LoginSchema.safeParse(data);

  if (!parsed.success) {
    console.log(
      "Login validation errors (server):",
      parsed.error.issues,
    );
    return { ok: false };
  }

  console.log("Login payload (server):", parsed.data);
  return { ok: true };
}

export async function registerAction(data: unknown) {
  const parsed = RegisterSchema.safeParse(data);

  if (!parsed.success) {
    console.log(
      "Register validation errors (server):",
      parsed.error.issues,
    );
    return { ok: false };
  }

  console.log("Register payload (server):", parsed.data);
  return { ok: true };
}
