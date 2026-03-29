"use client";

import { X } from "lucide-react";
import type React from "react";

export type SidebarTitleProps = {
   children: React.ReactNode;
   onClick?: () => void;
};

export default function SidebarTitle({ children, onClick }: SidebarTitleProps) {
   return (
      <div className="text-gray-800 w-full text-2xl p-3 border-b border-b-gray-200 flex justify-between items-center h-16">
         <h1 className="">{children}</h1>
         <button
            type="button"
            onClick={onClick}
            className="lg:hidden p-2 text-zinc-400 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
         >
            <X size={20} />
         </button>
      </div>
   );
}
