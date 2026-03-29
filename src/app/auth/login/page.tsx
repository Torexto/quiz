"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginAction } from "@/app/auth/actions";
import { AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/auth/button";
import { FieldError } from "@/components/auth/field-error";
import { Input } from "@/components/auth/input";
import { LoginSchema, type LoginSchemaType } from "@/lib/schema/auth";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchemaType) {
    await loginAction(data);
  }

  return (
    <AuthShell title="Login Now">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Input
          label="Email *"
          placeholder="Enter your email"
          type="email"
          {...register("email")}
        />
        <Input
          label="Password *"
          placeholder="Enter your password"
          type="password"
          {...register("password")}
        />
        <Button type="submit">Login</Button>
        <FieldError message={errors.email?.message} />
        <FieldError message={errors.password?.message} />
      </form>
      <p className="text-center text-zinc-400">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-cyan-500">
          Register
        </Link>
      </p>
    </AuthShell>
  );
}
