import type React from "react";

type PageShellProps = {
   title: string;
   description?: string;
   actions?: React.ReactNode;
   children: React.ReactNode;
};

export default function PageShell({
   title,
   description,
   actions,
   children,
}: PageShellProps) {
   return (
      <div className="flex flex-col flex-1 min-w-0 min-h-full">
         {/* Nagłówek strony - przyklejony do góry przy skrolowaniu */}
         <div className="px-8 py-6 border-b border-app-border bg-app-surface/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div>
                  <h2 className="text-2xl font-bold text-app-text tracking-tight">
                     {title}
                  </h2>
                  {description && (
                     <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        {description}
                     </p>
                  )}
               </div>

               {/* Miejsce na przyciski typu "Dodaj użytkownika" */}
               {actions && (
                  <div className="flex items-center gap-3">{actions}</div>
               )}
            </div>
         </div>

         {/* Główna treść strony */}
         <div className="p-8 flex-1">
            <div className="max-w-7xl mx-auto h-full">{children}</div>
         </div>
      </div>
   );
}
