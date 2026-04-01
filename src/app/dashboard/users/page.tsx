import {
   GraduationCap,
   Mail,
   MoreVertical,
   ShieldCheck,
   UserPlus,
   Users,
} from "lucide-react";
import PageShell from "@/components/dashboard/PageShell";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
   const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
   });

   const teachers = users.filter((u) => u.role === "TEACHER");
   const students = users.filter((u) => u.role === "STUDENT");
   const admins = users.filter((u) => u.role === "ADMIN");

   return (
      <PageShell
         title="User Management"
         description="Overview of all registered staff and students in the system."
         actions={
            <button
               type="button"
               className="flex items-center gap-2 bg-app-brand text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-app-brand/20"
            >
               <UserPlus size={18} />
               Add User
            </button>
         }
      >
         {/* 1. Szybkie statystyki */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <StatCard
               label="Total Staff"
               value={teachers.length}
               icon={<ShieldCheck />}
               color="text-violet-500"
            />
            <StatCard
               label="Active Students"
               value={students.length}
               icon={<GraduationCap />}
               color="text-blue-500"
            />
            <StatCard
               label="Administrators"
               value={admins.length}
               icon={<Users />}
               color="text-emerald-500"
            />
         </div>

         <div className="space-y-12">
            {/* 2. Sekcja Nauczycieli */}
            <UserTableSection
               title="Teaching Staff"
               users={teachers}
               badgeColor="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
            />

            {/* 3. Sekcja Uczniów */}
            <UserTableSection
               title="Student Registry"
               users={students}
               badgeColor="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            />
         </div>
      </PageShell>
   );
}

// --- Komponenty pomocnicze (możesz je przenieść do osobnych plików) ---

function StatCard({
   label,
   value,
   icon,
   color,
}: {
   label: string;
   value: number;
   icon: React.ReactNode;
   color: string;
}) {
   return (
      <div className="bg-app-surface border border-app-border p-6 rounded-2xl shadow-sm">
         <div className="flex items-center gap-4">
            <div
               className={`p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 ${color}`}
            >
               {icon}
            </div>
            <div>
               <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {label}
               </p>
               <p className="text-2xl font-bold text-app-text">{value}</p>
            </div>
         </div>
      </div>
   );
}

function UserTableSection({
   title,
   users,
   badgeColor,
}: {
   title: string;
   users: any[];
   badgeColor: string;
}) {
   return (
      <div className="space-y-4">
         <h3 className="text-lg font-bold text-app-text px-1">{title}</h3>
         <div className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-zinc-50/50 dark:bg-zinc-900/50 border-b border-app-border">
                     <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        User
                     </th>
                     <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Role
                     </th>
                     <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Joined
                     </th>
                     <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 text-right">
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-app-border">
                  {users.map((user) => (
                     <tr
                        key={user.id}
                        className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors"
                     >
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                              <div className="size-9 rounded-full bg-app-brand/10 text-app-brand flex items-center justify-center font-bold text-sm border border-app-brand/20">
                                 {user.name?.charAt(0) || "U"}
                              </div>
                              <div className="flex flex-col">
                                 <span className="text-sm font-semibold text-app-text">
                                    {user.name}
                                 </span>
                                 <span className="text-xs text-zinc-500 flex items-center gap-1">
                                    <Mail size={12} /> {user.email}
                                 </span>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <span
                              className={`px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase ${badgeColor}`}
                           >
                              {user.role}
                           </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-500">
                           {new Date(
                              user.createdAt || Date.now(),
                           ).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                           <button
                              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-app-text"
                              type="button"
                           >
                              <MoreVertical size={18} />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
