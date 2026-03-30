import type React from "react";

type SidebarSectionProps = {
   children: React.ReactNode;
   title: string;
};

export default function SidebarSection({
   children,
   title,
}: SidebarSectionProps) {
   return (
      <section className="py-3 px-2 space-y-1">
         <h2 className="px-2 text-xs tracking-wide uppercase text-app-secondary">
            {title}
         </h2>
         <div className="space-y-0.5">{children}</div>
      </section>
   );
}
