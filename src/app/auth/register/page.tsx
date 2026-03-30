"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerAction } from "@/app/auth/actions";
import { Button } from "@/components/auth/button";
import Form from "@/components/auth/Form";
import { FieldError } from "@/components/auth/field-error";
import Footer from "@/components/auth/footer";
import { Input } from "@/components/auth/input";
import Title from "@/components/auth/title";
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

   const [error, setError] = useState<string | undefined>();

   async function onSubmit(data: RegisterSchemaType) {
      const result = await registerAction(data);

      if (result && !result.ok) {
         setError(result.error);
      } else {
         setError(undefined);
      }
   }

   return (
      <>
         <Title>Register Now</Title>
         <Form onSubmit={handleSubmit(onSubmit)}>
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
            <FieldError message={error} />
         </Form>
         <Footer label="Already have an account?" href="/auth/login">
            Login
         </Footer>
      </>
   );
}
