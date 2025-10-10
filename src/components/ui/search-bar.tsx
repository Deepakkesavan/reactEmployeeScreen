// components/ui/search-bar.tsx
import { Search } from "lucide-react";

export const SearchBar = ({ placeholder = "Search..." }) => (
  <div className="relative w-full max-w-2xl">
    <Search
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      size={20}
    />
    <input
      type="text"
      placeholder={placeholder}
      className="w-full py-3 pl-12 pr-4 rounded-2xl border border-gray-200 shadow-md text-gray-700 focus:ring-2 focus:ring-[#09234D] focus:outline-none"
    />
  </div>
);
