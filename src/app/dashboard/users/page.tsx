import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "@prisma/client";
import { GraduationCap, ShieldCheck, UserPlus, Users } from "lucide-react";
import { Dialog } from "radix-ui";
import { useForm } from "react-hook-form";
import { createUserAction } from "@/app/dashboard/users/actions";
import { FieldError } from "@/components/auth/field-error";
import AddUser from "@/components/dashboard/AddUser";
import PageShell from "@/components/dashboard/PageShell";
import UserRow from "@/components/dashboard/UserRow";
import { prisma } from "@/lib/prisma";
import {
   createUserActionSchema,
   type createUserActionType,
} from "@/lib/schema/userDashboard";

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
         actions={<AddUser />}
      >
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
            {teachers.length > 0 && (
               <UserTableSection
                  title="Teaching Staff"
                  users={teachers}
                  badgeColor="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
               />
            )}

            {students.length > 0 && (
               <UserTableSection
                  title="Student Registry"
                  users={students}
                  badgeColor="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
               />
            )}
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
   users: User[];
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
                     <UserRow
                        key={user.id}
                        user={user}
                        badgeColor={badgeColor}
                     />
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
