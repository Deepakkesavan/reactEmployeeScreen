import React from "react";
import { Clock9, TrendingUp, Calendar, GraduationCap } from "lucide-react";
import ActionButton from "../buttons/ActionButtons";

function QuickActions() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-start">
      <ActionButton icon={<Clock9 size={16} />} label="Submit Timesheet" />
      <ActionButton icon={<TrendingUp size={16} />} label="Role Development" />
      <ActionButton icon={<Calendar size={16} />} label="View Holiday" />
      <ActionButton
        icon={<GraduationCap size={16} />}
        label="My Learning Studio"
      />
    </div>
  );
}

export default QuickActions;
