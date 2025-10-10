import React from "react";
import img from "../../../assets/img/logo2-while-2.png";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
  return (
    <header className=" fixed top-0 left-0 w-full z-10 bg-primary px-3 py-4 flex justify-between ">
      <img src={img} alt="logo" className="w-[115px]  mr-20" />
      <div className="flex items-center gap-6 mr-7">
        <Bell className="text-white cursor-pointer hover:text-gray-300 transition" />
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;
