import type React from "react";

type SidebarNavProps = {
   children: React.ReactNode;
};

export default function SidebarNav({ children }: SidebarNavProps) {
   return <div className="flex-1 p-2 divide-y divide-gray-200 overflow-y-auto">{children}</div>;
}
