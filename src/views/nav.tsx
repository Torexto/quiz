"use client";

import { Bell, Home, Menu, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "@/components/dashboard/nav/Button";
import SearchBar from "@/components/dashboard/nav/SearchBar";

type NavProps = {
   toggleSidebarAction: () => void;
};

export default function Nav({ toggleSidebarAction }: NavProps) {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => setMounted(true), []);

   if (!mounted) return <div className="p-2 w-9 h-9" />;

   const toggleTheme = () => {
      if (theme === "light") setTheme("dark");
      else setTheme("light");
   };

   const showNotification = () => {};

   return (
      <div className="w-full border-b border-b-app-border flex items-center h-16 rounded-tr-xl p-3 shadow-md space-x-2 text-app-primary">
         <Button onClick={toggleSidebarAction} className="lg:hidden">
            <Menu />
         </Button>
         <Link
            href="/dashboard"
            className="h-full flex items-center px-2 cursor-pointer hover:bg-app-hover lg:hover:bg-transparent rounded-lg transition-colors"
         >
            <h1 className="hidden lg:block text-2xl">Dashboard</h1>
            <Home className="lg:hidden" />
         </Link>
         <SearchBar />
         <Button onClick={showNotification}>
            <Bell />
         </Button>
         <Button onClick={toggleTheme}>
            <Moon />
         </Button>
      </div>
   );
}
