import {auth} from "@/lib/auth/auth";
import {headers} from "next/headers";

export async function getSessionServer() {
   return await auth.api.getSession({
      headers: await headers() // Przekazujemy nagłówki, aby wyciągnąć ciasteczko
   });
}
