"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerAction } from "@/app/auth/actions";
import { AuthShell } from "@/components/auth/auth-shell";
import { Button } from "@/components/auth/button";
import { FieldError } from "@/components/auth/field-error";
import { Input } from "@/components/auth/input";
import { RegisterSchema, type RegisterSchemaType } from "@/lib/schema/auth";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterSchemaType) {
    await registerAction(data);
  }

  return (
    <AuthShell title="Register Now">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Input
          label="Name *"
          placeholder="Enter your name"
          {...register("name")}
        />
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
        <Button type="submit">Register</Button>
        <FieldError message={errors.name?.message} />
        <FieldError message={errors.email?.message} />
        <FieldError message={errors.password?.message} />
      </form>
      <p className="text-center text-zinc-400">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-cyan-500">
          Login
        </Link>
      </p>
    </AuthShell>
  );
}
