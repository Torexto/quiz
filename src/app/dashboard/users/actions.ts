"use server";

import type { User } from "@prisma/client";
import { getSessionServer } from "@/lib/auth/getSessionServer";
import { prisma } from "@/lib/prisma";
import type { updateUserActionType } from "@/lib/schema/userDashboard";

async function isAuthorized() {
   const session = await getSessionServer();
   if (!session) return false;
   const user = await prisma.user.findFirst({ where: { id: session.user.id } });
   if (!user) return false;
   return user && user?.role !== "STUDENT";
}

export async function deleteUserAction(id: User["id"]) {
   if (!(await isAuthorized())) return;
   await prisma.user.delete({ where: { id } });
}

export async function updateUserAction(data: updateUserActionType) {
   if (!(await isAuthorized())) return;
   await prisma.user.update({ where: { id: data.id }, data });
}

export async function createUserAction() {}
