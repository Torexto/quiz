import { BookOpen } from "lucide-react";

export default function UsersPage() {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         {[1, 2, 3, 4].map((i) => (
            <div
               key={i}
               className="group bg-app-surface border border-app-border rounded-2xl p-6 transition-all hover:border-app-brand/50 hover:shadow-xl hover:shadow-app-brand/5"
            >
               <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-app-brand/10 rounded-xl text-app-brand">
                     <BookOpen size={24} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                     Active
                  </span>
               </div>
               <h3 className="text-lg font-bold text-app-text mb-1">
                  Advanced React Patterns
               </h3>
               <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                  Master hooks, render props and compound components.
               </p>
               <div className="flex items-center justify-between pt-4 border-t border-app-border">
                  <div className="flex -space-x-2">
                     {[1, 2, 3].map((u) => (
                        <div
                           key={u}
                           className="size-8 rounded-full border-2 border-app-surface bg-zinc-200 dark:bg-zinc-800"
                        />
                     ))}
                  </div>
                  <button
                     type="button"
                     className="text-sm font-semibold text-app-brand hover:underline"
                  >
                     View Details
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
}
