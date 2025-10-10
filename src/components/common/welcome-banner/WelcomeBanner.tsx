import React from "react";
import { SearchBar } from "@/components/ui/search-bar";
function WelcomeBanner() {
  return (
    <div>
      {/* <h1 className="p-4 text-4xl font-bold bg-gradient-to-r from-[#0B1220] via-[#1D4ED8] to-[#06B6D4] bg-clip-text text-transparent">
        Welcome Back, Franklin
      </h1> */}
      <h1 className="p-4 text-4xl font-bold text-black dark:text-white">
        Welcome Back, Franklin
      </h1>
      <SearchBar placeholder="Search for services, documents, or resources..." />
    </div>
  );
}

export default WelcomeBanner;
