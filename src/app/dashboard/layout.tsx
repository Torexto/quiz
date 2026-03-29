import { redirect } from "next/navigation";
import type React from "react";
import type { User } from "@/../prisma/generated/client";
import { getSessionServer } from "@/lib/auth/getSessionServer";
import Sidebar from "@/views/sidebar";

export default async function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const session = await getSessionServer();
   if (!session) redirect("/auth/login");

   const user = session.user as User;

   return (
      <div className="min-h-screen p-6 flex flex-col justify-start">
         <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex-1 flex">
            <Sidebar user={user} />
            <div className="border-b border-b-zinc-300 flex items-center flex-1 h-20 rounded-tr-xl p-5 bg-slate-300">
               <h1>Dashboard</h1>
            </div>
            {children}
         </div>
      </div>
   );
}
