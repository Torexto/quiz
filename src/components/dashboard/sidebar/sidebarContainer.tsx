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
         className={`w-70 z-50 bg-app-background flex flex-col shadow-lg border-b lg:border-r-0 border-r border-app-border transition absolute top-0 left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static`}
      >
         {children}
      </div>
   );
}
