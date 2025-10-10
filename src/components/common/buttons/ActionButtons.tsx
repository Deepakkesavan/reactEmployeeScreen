import React from "react";
import { type ActionButtonProps } from "./ActionButtonProps.interface";

function ActionButtons({ icon, label }: ActionButtonProps) {
  return (
    // <button className="btn btn-primary w-full md:w-auto text-white border-none flex items-center gap-2">
    //   {icon}
    //   <span>{label}</span>
    // </button>
    <button className="btn btn-primary btn-wide">
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default ActionButtons;
