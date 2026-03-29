import {getSessionServer} from "@/lib/auth/getSessionServer";
import {redirect} from "next/navigation";
import React from "react";

export default async function DashboardLayout({children}: { children: React.ReactNode }) {
   if (!await getSessionServer()) redirect("/auth/login");

   return <div className="min-h-screen p-6 flex flex-col justify-start">
      <div className="w-full h-full bg-white rounded-2xl p-5 flex-1">
         {children}
      </div>
   </div>
}