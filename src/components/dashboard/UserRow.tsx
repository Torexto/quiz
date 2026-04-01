"use client";

import type { User } from "@prisma/client";
import { Button } from "@radix-ui/react-toolbar";
import { Edit2, Mail, MoreVertical, Trash2 } from "lucide-react";
import { Dialog, DropdownMenu } from "radix-ui";

export default function UserRow({
   user,
   badgeColor,
}: {
   user: User;
   badgeColor: string;
}) {
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
            <DropdownMenu.Root>
               <DropdownMenu.Trigger asChild>
                  <button
                     className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-app-text cursor-pointer outline-none"
                     type="button"
                  >
                     <MoreVertical size={18} />
                  </button>
               </DropdownMenu.Trigger>

               <DropdownMenu.Portal>
                  <DropdownMenu.Content className="bg-app-background border border-app-border rounded-xl shadow-lg text-center flex flex-col p-2 gap-y-1">
                     <div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                        Actions
                     </div>
                     <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm font-medium text-app-text rounded-lg cursor-pointer outline-none transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:bg-zinc-100 dark:focus:bg-zinc-800 gap-1">
                        <Edit2
                           size={16}
                           className="text-zinc-400 group-hover:text-app-brand transition-colors"
                        />
                        <span>Edit profile</span>
                     </DropdownMenu.Item>
                     <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm font-medium text-rose-500 rounded-lg cursor-pointer outline-none transition-colors hover:bg-rose-50 dark:hover:bg-rose-950/30 focus:bg-rose-50 dark:focus:bg-rose-950/30 gap-1">
                        <Dialog.Root>
                           <Dialog.Trigger>
                              <Trash2
                                 size={16}
                                 className="group-hover:scale-110 transition-transform"
                              />
                              <span>Delete User</span>
                           </Dialog.Trigger>
                           <Dialog.Portal>
                              <Dialog.Content>
                                 <Dialog.Title>
                                    Are you absolutely sure?
                                 </Dialog.Title>
                                 <Dialog.Description>Test</Dialog.Description>
                                 <button type="button">Delete</button>
                              </Dialog.Content>
                           </Dialog.Portal>
                        </Dialog.Root>
                     </DropdownMenu.Item>
                  </DropdownMenu.Content>
               </DropdownMenu.Portal>
            </DropdownMenu.Root>
         </td>
      </tr>
   );
}
