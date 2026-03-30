"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

type SidebarItemProps = {
   children: React.ReactNode;
   href: string;
   icon?: React.ReactNode;
   onClickAction?: () => void;
};

export default function SidebarItem({
   children,
   href,
   icon,
   onClickAction,
}: SidebarItemProps) {
   const pathname = usePathname();

   const isActive = pathname === href;

   return (
      <Link
         href={href}
         onClick={onClickAction}
         className={`
            group flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg
            ${isActive ? "bg-app-hover text-app-brand" : "hover:bg-app-hover"}
         `}
      >
         {icon}
         <span>{children}</span>
      </Link>
   );
}
