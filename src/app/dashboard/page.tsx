"use client";

import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";

export default function Dashboard() {
   const logout = async () => {
      await authClient.signOut();
      redirect("/auth/login");
   };

   return (
      <div>
         <h1>Dashboard</h1>
         <button type="button" onClick={logout}>
            Logout
         </button>
      </div>
   );
}
