import { z } from "zod";

export const LoginSchema = z.object({
   email: z.email(),
   password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
   name: z.string().min(3, { message: "Name must be at least 3 characters." }),
   email: z.email(),
   password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
