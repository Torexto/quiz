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
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const closeSidebar = () => setIsOpen(false);

   return (
      <div className="w-full h-full bg-app-background rounded-2xl shadow-2xl flex-1 flex relative flex-col">
         <Nav toggleSidebarAction={() => setIsOpen((prev) => !prev)} />
         <div className="flex flex-1 relative">
            {isOpen && (
               <button
                  type="button"
                  className="fixed inset-0 bg-app-secondary/40 z-40 lg:hidden transition-opacity"
                  onClick={closeSidebar}
               />
            )}
            <Sidebar
               user={user}
               isOpen={isOpen}
               closeSidebarAction={closeSidebar}
            />
            <div className="p-2 flex-1">{children}</div>
         </div>
      </div>
   );
}
