"use client"

import {authClient} from "@/lib/auth/auth-client";
import {redirect} from "next/navigation";

export default function Dashboard() {
   const logout = async () => {
      await authClient.signOut();
      redirect("/auth/login");
   };

   return <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
   </div>
}