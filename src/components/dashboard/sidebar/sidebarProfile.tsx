"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import type { User } from "@/../prisma/generated/client";
import { authClient } from "@/lib/auth/auth-client";

type SidebarProfileProps = {
   user: User;
};

export default function SidebarProfile({ user }: SidebarProfileProps) {
   const router = useRouter();
   const initials = user.name
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase())
      .slice(0, 2)
      .join("");

   const logout = async () => {
      await authClient.signOut();
      router.push("/auth/login");
   };

   return (
      <div className="mt-auto border-t border-app-border p-3 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-semibold">
               {initials || "U"}
            </div>
            <div className="min-w-0">
               <p className="text-sm font-medium truncate">{user.name}</p>
               <p className="text-xs text-app-secondary truncate">
                  {user.email}
               </p>
            </div>
         </div>
         <div>
            <button
               type="button"
               onClick={logout}
               className="block rounded-md border border-app-border px-3 py-2 text-sm hover:bg-app-hover transition cursor-pointer"
            >
               <LogOut />
            </button>
         </div>
      </div>
   );
}
