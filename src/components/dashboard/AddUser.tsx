"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";
import { Dialog } from "radix-ui";
import { useForm } from "react-hook-form";
import { createUserAction } from "@/app/dashboard/users/actions";
import { FieldError } from "@/components/auth/field-error";
import {
   createUserActionSchema,
   type createUserActionType,
} from "@/lib/schema/userDashboard";

export default function AddUser() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<createUserActionType>({
      resolver: zodResolver(createUserActionSchema),
      defaultValues: {
         name: "",
         email: "",
         role: "STUDENT",
         password: "",
      },
   });

   return (
      <Dialog.Root>
         <Dialog.Trigger asChild>
            <button
               type="button"
               className="flex items-center gap-2 bg-app-brand text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-app-brand/20 cursor-pointer"
            >
               <UserPlus size={18} />
               Add User
            </button>
         </Dialog.Trigger>

         <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100" />

            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-app-surface border border-app-border p-6 rounded-2xl shadow-2xl z-[101] outline-none">
               <Dialog.Title className="text-xl font-bold text-app-text">
                  Edit User Details
               </Dialog.Title>
               <div className="mt-4 text-app-primary">
                  <form
                     className="flex flex-col gap-4"
                     onSubmit={handleSubmit(createUserAction)}
                  >
                     <label className="text-sm font-medium w-full">
                        <p className="px-2">Name</p>
                        <input
                           type="text"
                           placeholder="Name"
                           className="p-2 rounded-xl border border-app-border focus:outline-none focus:ring-2 focus:ring-app-brand w-full"
                           {...register("name")}
                        />
                     </label>
                     <label className="text-sm font-medium w-full">
                        <p className="px-2">Email</p>
                        <input
                           type="email"
                           placeholder="Email"
                           className="p-2 rounded-xl border border-app-border focus:outline-none focus:ring-2 focus:ring-app-brand w-full"
                           {...register("email")}
                        />
                     </label>

                     <label className="text-sm font-medium w-full">
                        <p className="px-2">Role</p>
                        <select
                           className="w-full p-2 rounded-xl border border-app-border focus:outline-none focus:ring-2 focus:ring-app-brand"
                           {...register("role")}
                        >
                           <option value="STUDENT">Student</option>
                           <option value="TEACHER">Teacher</option>
                           <option value="ADMIN">Admin</option>
                        </select>
                     </label>

                     <FieldError message={errors.name?.message} />
                     <FieldError message={errors.email?.message} />
                     <FieldError message={errors.role?.message} />

                     <div className="flex justify-end gap-3">
                        <Dialog.Close asChild>
                           <button
                              type="button"
                              className="px-4 py-2 text-sm font-medium hover:bg-app-hover rounded-xl transition-colors cursor-pointer"
                           >
                              Cancel
                           </button>
                        </Dialog.Close>
                        <button
                           type="submit"
                           className="px-4 py-2 text-sm font-medium hover:bg-app-hover rounded-xl transition-colors cursor-pointer"
                        >
                           Update
                        </button>
                     </div>
                  </form>
               </div>
            </Dialog.Content>
         </Dialog.Portal>
      </Dialog.Root>
   );
}
