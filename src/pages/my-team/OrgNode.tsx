// import React from "react";

// type OrgNodeType = "manager" | "you" | "sibling" | "child";

// interface OrgNodeProps {
//   name: string;
//   designation?: string;
//   type?: OrgNodeType;
// }

// export const OrgNode: React.FC<OrgNodeProps> = ({
//   name,
//   designation,
//   type = "child",
// }) => {
//   const baseClasses =
//     "w-30 h-10 rounded-lg px-2 py-1 text-center font-sans shadow-sm flex flex-col justify-center";

//   const typeClasses: Record<OrgNodeType, string> = {
//     manager: "border-2 border-blue-600 bg-blue-100",
//     you: "border-2 border-green-600 bg-green-100",
//     sibling: "border border-slate-400 bg-slate-100",
//     child: "border border-slate-300 bg-white",
//   };

//   return (
//     <div className={`${baseClasses} ${typeClasses[type]}`}>
//       <div className="text-[10px] font-semibold text-slate-900 truncate">
//         {name || "—"}
//       </div>

//       <div className="text-[7px] text-slate-600 truncate">
//         {designation || ""}
//       </div>
//     </div>
//   );
// };

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

type OrgNodeType = "manager" | "you" | "sibling" | "child";

interface OrgNodeProps {
  name: string;
  designation?: string;
  type?: OrgNodeType;
}

export const OrgNode: React.FC<OrgNodeProps> = ({ name, designation, type = "child" }) => {
  const baseClasses = "w-50 h-30 rounded-lg px-2 py-1 text-center font-sans shadow-sm flex flex-col justify-center";

  const typeClasses: Record<OrgNodeType, string> = {
    manager: "border-2 border-blue-600 bg-blue-100",
    you: "border-2 border-green-600 bg-green-100",
    sibling: "border border-slate-400 bg-slate-100",
    child: "border border-slate-300 bg-white",
  };
  const initials = name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .toUpperCase()
  .slice(0, 2);

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <div className="flex justify-center">
       <Avatar className="h-10 w-10">
          <AvatarImage alt={name} />
          <AvatarFallback className={`font-semibold`}>
            {initials}
          </AvatarFallback>
        </Avatar> 
        </div>
      <div className="text-[12px] font-semibold text-slate-900 truncate">{name || "—"}</div>
      <div className="text-[9px] text-slate-600 truncate">{designation || ""}</div>
    </div>
  );
};
