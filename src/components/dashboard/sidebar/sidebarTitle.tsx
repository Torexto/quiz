"use client";

import type React from "react";

export type SidebarTitleProps = {
   children: React.ReactNode;
};

export default function SidebarTitle({ children }: SidebarTitleProps) {
   return (
      <div className="text-gray-800 w-full text-2xl p-3 border-b border-b-gray-200 flex justify-between items-center h-16">
         <h1 className="">{children}</h1>
      </div>
   );
}
