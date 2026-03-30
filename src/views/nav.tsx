import { Bell, Menu, Moon, Search } from "lucide-react";

export default function Nav() {
   return (
      <div className="border-b border-b-zinc-300 flex items-center flex-1 h-16 rounded-tr-xl p-3 bg-white shadow-md space-x-2 ">
         <button
            type="button"
            className="lg:hidden p-2 text-zinc-400 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
         >
            <Menu size={20} className="text-zinc-600" />
         </button>
         <div className="flex-1 border border-zinc-400 rounded-full flex items-center justify-between h-full">
            <Search className="h-5 w-5 text-zinc-400 m-4" size={16} />
            <input type="search" className="w-full h-full rounded-r-full p-2" />
         </div>
         <button
            type="button"
            className="p-2 text-zinc-400 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
         >
            <Bell size={20} className="text-zinc-600" />
         </button>
         <button
            type="button"
            className="p-2 text-zinc-400 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
         >
            <Moon size={20} className="text-zinc-600" />
         </button>
      </div>
   );
}
