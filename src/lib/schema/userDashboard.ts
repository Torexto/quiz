import { z } from "zod";

export const roleSchema = z.enum(["TEACHER", "STUDENT", "ADMIN"]);

export const updateUserActionSchema = z.object({
   id: z.string(),
   name: z.string().min(3, { message: "Name must be at least 3 characters." }),
   email: z.email(),
   role: roleSchema,
});

export type updateUserActionType = z.infer<typeof updateUserActionSchema>;

export const createUserActionSchema = z.object({
   name: z.string().min(3, { message: "Name must be at least 3 characters." }),
   email: z.email(),
   password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
   role: roleSchema,
});

export type createUserActionType = z.infer<typeof createUserActionSchema>;
