"use client";

import {
   BarChart3,
   BookOpen,
   Database,
   GraduationCap,
   Settings,
   ShieldCheck,
   Trophy,
   Users,
} from "lucide-react";
import type { User } from "@/../prisma/generated/client";
import SidebarContainer from "@/components/dashboard/sidebar/sidebarContainer";
import SidebarItem from "@/components/dashboard/sidebar/sidebarItem";
import SidebarNav from "@/components/dashboard/sidebar/sidebarNav";
import SidebarProfile from "@/components/dashboard/sidebar/sidebarProfile";
import SidebarSection from "@/components/dashboard/sidebar/sidebarSection";

type SidebarProps = {
   user: User;
   isOpen: boolean;
   closeSidebarAction: () => void;
};

export default function Sidebar({
   user,
   isOpen,
   closeSidebarAction,
}: SidebarProps) {
   return (
      <SidebarContainer isOpen={isOpen}>
         <SidebarNav>
            {(user.role === "STUDENT" ||
               process.env.NODE_ENV === "development") && (
               <SidebarSection title="Student">
                  <SidebarItem
                     href="/dashboard/quizzes"
                     icon={<BookOpen size={18} />}
                     onClickAction={closeSidebarAction}
                  >
                     Active Quizzes
                  </SidebarItem>
                  <SidebarItem
                     href="/dashboard/results"
                     icon={<Trophy size={18} />}
                     onClickAction={closeSidebarAction}
                  >
                     My Results
                  </SidebarItem>
               </SidebarSection>
            )}

            {user.role !== "STUDENT" && (
               <SidebarSection title="Teacher">
                  <SidebarItem
                     href="/dashboard/manage"
                     icon={<Settings size={18} />}
                     onClickAction={closeSidebarAction}
                  >
                     Manage Quizzes
                  </SidebarItem>
                  <SidebarItem
                     href="/dashboard/bank"
                     icon={<Database size={18} />}
                     onClickAction={closeSidebarAction}
                  >
                     Question Bank
                  </SidebarItem>
                  <SidebarItem
                     href="/dashboard/reports"
                     icon={<BarChart3 size={18} />}
                     onClickAction={closeSidebarAction}
                  >
                     Reports
                  </SidebarItem>
                  <SidebarItem
                     href="/dashboard/students"
                     icon={<GraduationCap size={18} />}
                     onClickAction={closeSidebarAction}
                  >
                     Student Progress
                  </SidebarItem>
               </SidebarSection>
            )}

            {user.role === "ADMIN" && (
               <SidebarSection title="Admin">
                  <SidebarItem
                     href="/dashboard/users"
                     icon={<Users size={18} />}
                     onClickAction={closeSidebarAction}
                  >
                     User Management
                  </SidebarItem>
                  <SidebarItem
                     href="/dashboard/logs"
                     icon={<ShieldCheck size={18} />}
                     onClickAction={closeSidebarAction}
                  >
                     Audit Logs
                  </SidebarItem>
               </SidebarSection>
            )}
         </SidebarNav>

         <SidebarProfile user={user} />
      </SidebarContainer>
   );
}
