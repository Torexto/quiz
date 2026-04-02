import { Search } from "lucide-react";

export default function SearchBar() {
   return (
      <div className="flex-1 border border-current rounded-full flex items-center justify-between h-full invisible">
         <Search className="h-5 w-5 ml-3 mr-1" size={16} />
         <input
            type="search"
            className="w-full h-full rounded-r-full p-2 outline-none bg-transparent"
         />
      </div>
   );
}
