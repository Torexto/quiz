"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "@/../prisma/generated/client";
import { authClient } from "@/lib/auth/auth-client";

export default function Dashboard() {
   const [user, setUser] = useState<User | null>(null);

   useEffect(() => {
      authClient.getSession().then((session) => {
         const user = session?.data?.user as User;
         console.log(user);
         setUser(user);
      });
   }, []);

   const logout = async () => {
      await authClient.signOut();
      redirect("/auth/login");
   };

   return (
      <div className="flex items-center justify-between h-full">
         <h1>Dashboard</h1>
         <div className="flex items-center gap-4">
            <div>{user?.name}</div>
            <button
               type="button"
               onClick={logout}
               className="border-2 border-red-500 rounded-lg p-2 transition cursor-pointer hover:bg-red-500 hover:text-white"
            >
               Logout
            </button>
         </div>
      </div>
   );
}
