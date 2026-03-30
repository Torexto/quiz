"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "@/app/auth/actions";
import { Button } from "@/components/auth/button";
import Form from "@/components/auth/Form";
import { FieldError } from "@/components/auth/field-error";
import Footer from "@/components/auth/footer";
import { Input } from "@/components/auth/input";
import Title from "@/components/auth/title";
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

   const [error, setError] = useState<string | undefined>();

   async function onSubmit(data: LoginSchemaType) {
      const result = await loginAction(data);

      if (result && !result.ok) {
         setError(result.error);
      } else {
         setError(undefined);
      }
   }

   return (
      <>
         <Title>Login Now</Title>
         <Form onSubmit={handleSubmit(onSubmit)}>
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
            <FieldError message={error} />
         </Form>
         <Footer label="Don't have an account?" href="/auth/register">
            Register
         </Footer>
      </>
   );
}
