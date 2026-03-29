import Link from "next/link";
import type React from "react";

type FooterProps = {
   label: string;
   href: string;
   children: React.ReactNode;
};

export default function Footer({ label, href, children }: FooterProps) {
   return (
      <p className="text-center text-zinc-400">
         {label}{" "}
         <Link href={href} className="text-cyan-500">
            {children}
         </Link>
      </p>
   );
}
