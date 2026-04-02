"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "@prisma/client";
import { Mail, Trash2, UserRoundPen } from "lucide-react";
import { Dialog } from "radix-ui";
import { useForm } from "react-hook-form";
import {
   deleteUserAction,
   updateUserAction,
} from "@/app/dashboard/users/actions";
import { FieldError } from "@/components/auth/field-error";
import {
   updateUserActionSchema,
   type updateUserActionType,
} from "@/lib/schema/userDashboard";

export default function UserRow({
   user,
   badgeColor,
}: {
   user: User;
   badgeColor: string;
}) {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<updateUserActionType>({
      resolver: zodResolver(updateUserActionSchema),
      defaultValues: {
         id: user.id,
         name: user.name,
         email: user.email,
         role: user.role,
      },
   });

   return (
      <tr
         key={user.id}
         className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors"
      >
         <td className="px-6 py-4">
            <div className="flex items-center gap-3">
               <div className="size-9 rounded-full bg-app-brand/10 text-app-brand flex items-center justify-center font-bold text-sm border border-app-brand/20">
                  {user.name?.charAt(0) || "U"}
               </div>
               <div className="flex flex-col">
                  <span className="text-sm font-semibold text-app-text">
                     {user.name}
                  </span>
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                     <Mail size={12} /> {user.email}
                  </span>
               </div>
            </div>
         </td>
         <td className="px-6 py-4">
            <span
               className={`px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase ${badgeColor}`}
            >
               {user.role}
            </span>
         </td>
         <td className="px-6 py-4 text-sm text-zinc-500">
            {new Date(user.createdAt || Date.now()).toLocaleDateString()}
         </td>
         <td className="px-6 py-4 text-right">
            <Dialog.Root>
               <Dialog.Trigger asChild>
                  <button
                     type="button"
                     className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                  >
                     <UserRoundPen
                        size={16}
                        className="text-app-primary hover:text-app-brand"
                     />
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
                           onSubmit={handleSubmit(updateUserAction)}
                        >
                           <input type="hidden" />
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
                                 onClick={() => deleteUserAction(user.id)}
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

            <Dialog.Root>
               <Dialog.Trigger asChild>
                  <button
                     type="button"
                     className="p-2 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors cursor-pointer text-app-primary hover:text-rose-500"
                  >
                     <Trash2 size={16} />
                  </button>
               </Dialog.Trigger>

               <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100" />

                  <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-app-surface border border-app-border p-6 rounded-2xl shadow-2xl z-[101] outline-none">
                     <Dialog.Title className="text-lg font-bold text-app-text">
                        Are you absolutely sure?
                     </Dialog.Title>
                     <Dialog.Description className="mt-2 text-zinc-500">
                        This action will permanently delete the user.
                     </Dialog.Description>

                     <div className="mt-6 flex justify-end gap-3">
                        <Dialog.Close asChild>
                           <button
                              type="button"
                              className="px-4 py-2 text-sm font-medium hover:bg-app-hover rounded-xl transition-colors cursor-pointer"
                           >
                              Cancel
                           </button>
                        </Dialog.Close>
                        <button
                           type="button"
                           className="px-4 py-2 text-sm font-medium bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-colors cursor-pointer"
                        >
                           Delete
                        </button>
                     </div>
                  </Dialog.Content>
               </Dialog.Portal>
            </Dialog.Root>
         </td>
      </tr>
   );
}
