import { motion } from "motion/react";
import { useState } from "react";
import CardComponent from "@/pages/overview/card/OverviewCardComponent";
import { type DashboardCard } from "./interfaces/DashboardCards.interface";
import { GraduationCap, Clock, Box, ClipboardList } from "lucide-react";

import img1 from "../../assets/dashboard-images/lms-bg.jpg";
import img2 from "../../assets/dashboard-images/timesheet-bg.jpg";
// import img3 from "../../assets/dashboard-images/ess-bg.jpg";
import img4 from "../../assets/dashboard-images/resources-bg.jpg";
// import img5 from "../../assets/dashboard-images/announcements-bg.jpg";
// import img6 from "../../assets/dashboard-images/directory-bg.jpg";
// import img7 from "../../assets/dashboard-images/onboard-bg.jpg";
// import img8 from "../../assets/dashboard-images/project-management-bg.jpg";
import img9 from "../../assets/dashboard-images/Media.jpg";

function DashboardCards() {
  const [showToast] = useState(false);

  // const showComingSoon = () => {
  //   setShowToast(true);
  //   setTimeout(() => setShowToast(false), 3000);
  // };

  const cards: DashboardCard[] = [
    {
      image: img1,
      icon: <GraduationCap className="text-primary w-5 h-5" />,
      title: "Leave Management System",
      description: "Request for Leaves, Track Balances and view Leave history.",
      buttonText: "Open LMS",
      onButtonClick: () => (window.location.href = "ssoui/dashboard/lms"),
    },
    {
      image: img2,
      icon: <Clock className="text-secondary w-5 h-5" />,
      title: "Timesheet",
      description: "Log daily , submit timesheets, and view approvals.",
      buttonText: "Submit Timesheet",
      onButtonClick: () => (window.location.href = "ssoui/dashboard/tms"),
    },

    {
      image: img4,
      icon: <Box className="text-info w-5 h-5" />,
      title: "Resource Requisition",
      description: "View Scheduled Interviews.",
      buttonText: "Schedule",
      onButtonClick: () => (window.location.href = "dashboard/rrf"),
    },
    {
      image: img9,
      icon: <ClipboardList className="text-accent w-5 h-5" />,
      title: "Project Management",
      description:
        "Plan tasks, monitor progress, and collaborate efficiently across vatious teams.",
      buttonText: "Manage Projects",
      onButtonClick: () => (window.location.href = "dashboard/pm"),
    },
    {
      image: img1,
      icon: <GraduationCap className="text-primary w-5 h-5" />,
      title: "Org-Charts",
      description: "Request for Leaves, Track Balances and view Leave history.",
      buttonText: "Open Org-Charts",
      onButtonClick: () => (window.location.href = "dashboard/lms"),
    },
  ];

  return (
    <>
      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-info shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Coming Soon! This feature is under development.</span>
          </div>
        </div>
      )}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.9,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <CardComponent {...card} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default DashboardCards;
