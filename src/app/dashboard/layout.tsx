import { redirect } from "next/navigation";

import type { PropsWithChildren } from "react";
import { getSessionServer } from "@/lib/auth/getSessionServer";
import { prisma } from "@/lib/prisma";
import DashboardContainer from "@/views/DashboardContainer";

export default async function DashboardLayout({ children }: PropsWithChildren) {
   const session = await getSessionServer();
   if (!session) redirect("/auth/login");

   const id = session.user.id;

   const user = await prisma.user.findFirst({
      where: {
         id,
      },
   });

   if (!user) redirect("/auth/login");

   return (
      <div className="min-h-screen p-2 lg:p-6 flex flex-col justify-start">
         <DashboardContainer user={user}>{children}</DashboardContainer>
      </div>
   );
}
