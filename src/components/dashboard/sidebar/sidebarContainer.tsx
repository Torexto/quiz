import type React from "react";

type SidebarContainerProps = {
   children: React.ReactNode;
   isOpen: boolean;
};

export default function SidebarContainer({
   children,
   isOpen,
}: SidebarContainerProps) {
   return (
      <div
         className={`w-70 flex flex-col bg-linear-to-b from-white to-gray-100 rounded-l-xl shadow-lg border-r border-gray-200 ${isOpen ? "block" : "block"}`}
      >
         {children}
      </div>
   );
}
