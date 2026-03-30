"use client";

import type React from "react";
import { useState } from "react";
import type { User } from "@/../prisma/generated/client";
import Nav from "@/views/nav";
import Sidebar from "@/views/sidebar";

type DashboardContainerProps = {
   children: React.ReactNode;
   user: User;
};

export default function DashboardContainer({
   children,
   user,
}: DashboardContainerProps) {
   const [isOpen, setIsOpen] = useState<boolean>(true);

   return (
      <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex-1 flex">
         <Sidebar user={user} isOpen={isOpen} />
         <Nav />
         {children}
      </div>
   );
}
