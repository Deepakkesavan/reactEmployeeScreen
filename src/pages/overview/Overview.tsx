import PageHeader from "@/components/common/page-header/PageHeader";
import DashboardCards from "../dashboard-cards/DashboardCards";
import { MapPinHouse } from "lucide-react";

function Overview() {
  return (
    <div>
      <PageHeader icon={MapPinHouse} title="Services & Tools" />
      <div>
        <DashboardCards />
      </div>
    </div>
  );
}

export default Overview;
