import {getSessionServer} from "@/lib/auth/getSessionServer";
import {redirect} from "next/navigation";

export default async function Home() {
   if (await getSessionServer()) redirect("/dashboard")
   else redirect("/auth/login")
}
