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
import { useState } from "react";
import type { User } from "@/../prisma/generated/client";
import SidebarContainer from "@/components/dashboard/sidebar/sidebarContainer";
import SidebarItem from "@/components/dashboard/sidebar/sidebarItem";
import SidebarNav from "@/components/dashboard/sidebar/sidebarNav";
import SidebarProfile from "@/components/dashboard/sidebar/sidebarProfile";
import SidebarSection from "@/components/dashboard/sidebar/sidebarSection";
import SidebarTitle from "@/components/dashboard/sidebar/sidebarTitle";

type SidebarProps = {
   user: User;
   onClose?: () => void;
};

export default function Sidebar({ user }: SidebarProps) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <SidebarContainer>
         <SidebarTitle onClick={() => setIsOpen((prev) => !prev)}>
            Quiz App
         </SidebarTitle>
         <SidebarNav>
            <SidebarSection title="Student">
               <SidebarItem
                  href="/dashboard/quizzes"
                  icon={<BookOpen size={18} />}
               >
                  Active Quizzes
               </SidebarItem>
               <SidebarItem
                  href="/dashboard/results"
                  icon={<Trophy size={18} />}
               >
                  My Results
               </SidebarItem>
            </SidebarSection>

            <SidebarSection title="Teacher">
               <SidebarItem
                  href="/dashboard/manage"
                  icon={<Settings size={18} />}
               >
                  Manage Quizzes
               </SidebarItem>
               <SidebarItem
                  href="/dashboard/bank"
                  icon={<Database size={18} />}
               >
                  Question Bank
               </SidebarItem>
               <SidebarItem
                  href="/dashboard/reports"
                  icon={<BarChart3 size={18} />}
               >
                  Reports
               </SidebarItem>
               <SidebarItem
                  href="/dashboard/students"
                  icon={<GraduationCap size={18} />}
               >
                  Student Progress
               </SidebarItem>
            </SidebarSection>

            <SidebarSection title="Admin">
               <SidebarItem href="/dashboard/users" icon={<Users size={18} />}>
                  User Management
               </SidebarItem>
               <SidebarItem
                  href="/dashboard/logs"
                  icon={<ShieldCheck size={18} />}
               >
                  Audit Logs
               </SidebarItem>
            </SidebarSection>
         </SidebarNav>

         <SidebarProfile user={user} />
      </SidebarContainer>
   );
}
