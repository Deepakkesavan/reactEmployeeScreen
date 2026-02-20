import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
// import { Mail, Phone, Eye, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";

interface Employee {
  empId: string;
  name: string;
  profile: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  location: string | null;
  reportsTo: string | null;
  hireDate: string;
  reportsCount: number | undefined;
  children?: Employee[];
}

interface OrgNodeNewProps {
  employee: Employee;
  isSelected: boolean;
  onClick: () => void;
  isHighlighted: boolean;
  isCurrentUser: boolean;
  isChildOfSelected: boolean;
}

const OrgNodeNew: React.FC<OrgNodeNewProps> = ({
  employee,
  isSelected,
  onClick,
  isHighlighted,
  isCurrentUser,
  isChildOfSelected,
}) => {
  const getInitials = (employeeName: string): string => {
    if (!employeeName || typeof employeeName !== "string") return "NA";

    return employeeName
      .trim()
      .split(/\s+/) // split by spaces
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // const calculateDirectReports = (emp: Employee): number => {
  //   if (!emp.children || emp.children.length === 0) return 0;
  //   let total = emp.children.length;
  //   return total;
  // };

  // const directReports = calculateDirectReports(employee);
  let stateClasses = "";

  if (isCurrentUser) {
    stateClasses = "ring-4 ring-blue-500 shadow-xl scale-105";
  } else if (isSelected) {
    stateClasses = "bg-blue border-primary shadow-lg";
  } else if (isHighlighted) {
    stateClasses = "bg-blue-50 border-darkblue-400";
  } else if (isChildOfSelected) {
    stateClasses = "border-border hover:border-primary/20 ";
  } else {
    stateClasses = "border-border hover:border-primary/20 opacity-70";
  }

  return (
    <HoverCard openDelay={1000}>
      <HoverCardTrigger asChild>
        <div
          onClick={onClick}
          className={`flex items-center gap-3 mr-[0.5rem] p-3 rounded-lg bg-card border-2 transition-all cursor-pointer
      hover:shadow-md min-w-[250px] max-w-[250px] relative
      ${stateClasses}`}
        >
          <Avatar className="h-10 w-10 ring-2 ring-background">
            <AvatarImage src={employee.profile} alt={employee.name} />
            <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
              {getInitials(employee.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xs truncate max-w-[100px]">
              {employee.name}
            </h3>
            <p className="text-xs text-muted-foreground truncate max-w-[100px]">
              {employee.designation}
            </p>
          </div>
          {employee.reportsCount !== undefined && employee.reportsCount > 0 && (
            <Badge
              className="
         mt-2 
         px-3 py-1 
         rounded-full 
         bg-[hsl(var(--org-badge))] 
         text-[hsl(var(--org-badge-foreground))] 
         font-semibold 
         shadow-sm
         hover:bg-[hsl(var(--org-badge))]
         transition-all
       "
            >
              {employee.reportsCount}
            </Badge>
          )}
          {isCurrentUser && (
            <div className="mt-2 text-xs text-blue-600 font-semibold">
              👤 You
            </div>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-[300px] h-auto  p-0 border-2 border-primary/20 bg-white shadow-glow rounded-2xl overflow-visible"
        side="right"
      >
        <div className="bg-gradient-card p-6">
          <div className="flex gap-3 mb-5">
            <Avatar className="h-10 w-10 ring-4 ring-primary/30">
              <AvatarImage src={employee.profile} alt={employee.name} />
              <AvatarFallback className="bg-gradient-primary  font-bold text-lg">
                {getInitials(employee.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col items-start pt-2 gap-1 mb-3">
                {employee.empId && (
                  <span className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider leading-none">
                    {employee.empId}
                  </span>
                )}
                <h4 className="font-heading font-bold text-sm text-foreground leading-none -mt-0.5">
                  {employee.name}
                </h4>
              </div>
              {employee.email && (
                <p className="text-xs text-primary p-0 m-0 font-medium truncate">
                  {employee.email}
                </p>
              )}
              <p className="text-xs text-foreground p-0 m-0 font-semibold truncate">
                {employee.designation}
              </p>
              <p className="text-xs text-foreground p-0 m-0 font-semibold">
                {employee.department}
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-1 py-4 border-t-2 border-b-1 border-border/50 mb-4">
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-3 text-center">
              <p className="text-xl font-heading font-bold text-primary mb-1">
                {employee.reportsCount || 0}
              </p>
              <p className="text-xs text-muted-foreground font-semibold">
                Total Members
              </p>
            </div>
            <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-3 text-center">
              <p className="text-xl font-heading font-bold text-accent mb-1">
                {directReports || 0}
              </p>
              <p className="text-xs text-muted-foreground font-semibold">
                Direct Reports
              </p>
            </div>
          </div> */}

          {/* <div className="flex items-center justify-center gap-5">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full bg-[hsl(var(--org-badge))] text-white hover:shadow-glow hover:scale-110 transition-all"
            >
              <Eye className="h-5 w-5 " />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full bg-[hsl(var(--org-badge))] text-white hover:shadow-glow hover:scale-110 transition-all"
            >
              <Mail className="h-5 w-5 " />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full bg-[hsl(var(--org-badge))] text-white hover:shadow-glow hover:scale-110 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full bg-[hsl(var(--org-badge))] text-white hover:shadow-glow hover:scale-110 transition-all"
            >
              <Phone className="h-5 w-5" />
            </Button>
          </div> */}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default OrgNodeNew;
