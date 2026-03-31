import { redirect } from "next/navigation";
import type React from "react";
import type { User } from "@/../prisma/generated/client";
import { getSessionServer } from "@/lib/auth/getSessionServer";
import DashboardContainer from "@/views/DashboardContainer";

export default async function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const session = await getSessionServer();
   if (!session) redirect("/auth/login");

   const user = session.user as User;

   return (
      <div className="min-h-screen p-2 lg:p-6 flex flex-col justify-start">
         <DashboardContainer user={user}>{children}</DashboardContainer>
      </div>
   );
}
