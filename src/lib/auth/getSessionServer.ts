import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export async function getSessionServer() {
   return await auth.api.getSession({
      headers: await headers(), // Przekazujemy nagłówki, aby wyciągnąć ciasteczko
   });
}
