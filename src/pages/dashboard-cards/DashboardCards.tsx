"use client";

import React from "react";
import { motion } from "framer-motion";
import CardComponent from "@/components/common/card/CardComponent";
import {
  GraduationCap,
  Clock,
  Users,
  Megaphone,
  User,
  Box,
} from "lucide-react";

import img1 from "../../assets/dashboard-images/lms-bg.jpg";
import img2 from "../../assets/dashboard-images/timesheet-bg.jpg";
import img3 from "../../assets/dashboard-images/ess-bg.jpg";
import img4 from "../../assets/dashboard-images/resources-bg.jpg";
import img5 from "../../assets/dashboard-images/announcements-bg.jpg";
import img6 from "../../assets/dashboard-images/directory-bg.jpg";

function DashboardCards() {
  const cards = [
    {
      image: img1,
      icon: <GraduationCap className="text-blue-600 w-5 h-5" />,
      title: "Leave Management System",
      description: "Request for Leaves, Track Balances and view Leave history.",
      buttonText: "Open LMS",
      onButtonClick: () => alert("Opening LMS..."),
    },
    {
      image: img2,
      icon: <Clock className="text-purple-600 w-5 h-5" />,
      title: "Timesheet",
      description:
        "Log daily or weekly hours, submit timesheets, and view approvals.",
      buttonText: "Submit Timesheet",
      onButtonClick: () => alert("Opening Timesheet..."),
    },
    {
      image: img3,
      icon: <User className="text-green-600 w-5 h-5" />,
      title: "Employee Services",
      description: "Update personal details, manage benefits, and view leave.",
      buttonText: "Manage Profile",
      onButtonClick: () => alert("Opening Employee Services..."),
    },
    {
      image: img4,
      icon: <Box className="text-orange-700 w-5 h-5" />,
      title: "Resource Requisition",
      description: "View Scheduled Interviews.",
      buttonText: "Schedule",
      onButtonClick: () => alert("Opening Employee Services..."),
    },
    {
      image: img5,
      icon: <Megaphone className="text-purple-900 w-5 h-5" />,
      title: "Company Announcements",
      description: "View company-wide news and updates",
      buttonText: "View Announcement",
      onButtonClick: () => alert("Opening Employee Services..."),
    },
    {
      image: img6,
      icon: <Users className="text-green-900 w-5 h-5" />,
      title: "Team Directory",
      description: "Find and connect with colleagues.",
      buttonText: "Browse Directory",
      onButtonClick: () => alert("Opening Employee Services..."),
    },
  ];

  return (
    <motion.div
      className="flex flex-wrap gap-9  mt-5 "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <CardComponent {...card} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default DashboardCards;
