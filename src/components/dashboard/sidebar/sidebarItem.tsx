"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

type SidebarItemProps = {
   children: React.ReactNode;
   href: string;
   icon?: React.ReactNode;
};

export default function SidebarItem({
   children,
   href,
   icon,
}: SidebarItemProps) {
   const pathname = usePathname();

   const isActive = pathname === href;

   return (
      <Link
         href={href}
         className={`
            group flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg
            ${
               isActive
                  ? "bg-violet-50 text-violet-700"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
            }
         `}
      >
         {icon ? <span className="text-gray-500">{icon}</span> : null}
         <span>{children}</span>
      </Link>
   );
}
