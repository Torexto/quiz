import { redirect } from "next/navigation";
import { getSessionServer } from "@/lib/auth/getSessionServer";

export default async function Home() {
   if (await getSessionServer()) redirect("/dashboard");
   else redirect("/auth/login");
}
