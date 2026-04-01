"use client";

import { BookOpen } from "lucide-react";

type QuizSelectorProps = {
   title: string;
   description: string;
   isActive: boolean;
   openAction: () => void;
};

export default function QuizSelector({
   title,
   description,
   isActive,
   openAction,
}: QuizSelectorProps) {
   return (
      <div className="group bg-app-surface border border-app-border rounded-2xl p-6 transition-all hover:border-app-brand/50 hover:shadow-xl hover:shadow-app-brand/5">
         <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-app-brand/10 rounded-xl text-app-brand">
               <BookOpen size={24} />
            </div>
            {isActive ? (
               <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  Active
               </span>
            ) : (
               <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                  Disabled
               </span>
            )}
         </div>
         <h3 className="text-lg font-bold text-app-text mb-1">{title}</h3>
         <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            {description}
         </p>
         <div className="flex items-center justify-between pt-4 border-t border-app-border">
            <button
               type="button"
               onClick={openAction}
               className="text-sm font-semibold text-app-brand hover:underline"
            >
               View Details
            </button>
         </div>
      </div>
   );
}
