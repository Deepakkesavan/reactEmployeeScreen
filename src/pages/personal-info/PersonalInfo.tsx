import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { User, Home, Briefcase, Target } from "lucide-react";
import PageHeader from "@/components/common/page-header/PageHeader";
import BasicInfoSection from "./components/BasicInfoSection";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import SkillsSection from "./components/SkillsSection";
import WorkInfoSection from "./components/WorkInfoSection";
import DataService from "@/common/DataService/DataService";
import { useEmployee } from "@/contexts/EmployeeContext";
import {
  type EmployeeData,
  type BackendEmployeeData,
  mapBackendToFrontend,
} from "./interfaces/PersonalInfo.interface";
import { apiSubRoutes } from "@/common/DataService/Constants";

function PersonalInfo() {
  const basicRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  // const bankRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [employeeData, setEmployeeData] = useState<EmployeeData | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [enableDataFetch, setEnableDataFetch] = useState(true);
  const [activeTab, setActiveTab] = useState("basic");
  const { employeeId } = useEmployee();

  const apiParameter = useMemo(() => ({ EmpId: employeeId }), [employeeId]);

  const tabs = [
    { id: "basic", label: "Basic Info", icon: User, ref: basicRef },
    { id: "personal", label: "Personal", icon: Home, ref: personalRef },
    { id: "work", label: "Work Info", icon: Briefcase, ref: workRef },
    // { id: "bank", label: "Bank", icon: CreditCard, ref: bankRef },
    { id: "skills", label: "Skills", icon: Target, ref: skillsRef },
  ];

  useEffect(() => {
    if (!employeeData) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tabId = tabs.find(
              (tab) => tab.ref.current === entry.target
            )?.id;
            if (tabId) setActiveTab(tabId);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    setTimeout(() => {
      tabs.forEach((tab) => {
        if (tab.ref.current) observer.observe(tab.ref.current);
      });
    }, 200);

    return () => observer.disconnect();
  }, [employeeData]);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    tabId: string
  ) => {
    setActiveTab(tabId);
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        <div className="mb-6">
          <PageHeader
            icon={User}
            title="Personal Information"
            className="mb-0"
          />
        </div>

        <DataService
          enable={enableDataFetch}
          url={apiSubRoutes.GET_EMPLOYEE_BY_ID}
          parameter={apiParameter}
          onSuccess={(data) => {
            const backendData = data.result || data;
            const mappedData = mapBackendToFrontend(
              backendData as BackendEmployeeData
            );
            setEmployeeData(mappedData);
            setLoading(false);
            setEnableDataFetch(false);
            // setbackendEmployeeData()
          }}
          onError={(error) => {
            setError(error.message || "Failed to fetch employee data");
            setLoading(false);
            setEnableDataFetch(false);
          }}
        />

        {loading && (
          <div className="flex justify-center items-center py-12">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <span>Error: {error}</span>
          </div>
        )}

        {employeeData && (
          <>
            <div className="sticky top-0 z-[5] backdrop-blur-3xl pb-4 border-b border-base-200 transition-transform duration-200 ease-out">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <motion.button
                      key={tab.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98, y: 0 }}
                      className={`btn flex bg-base-100/95 backdrop-blur-sm items-center gap-2 transition-all duration-200 ${
                        isActive
                          ? "btn-active bg-primary text-primary-content border-primary"
                          : "btn-outline hover:bg-primary hover:text-primary-content hover:border-primary"
                      }`}
                      onClick={() => scrollToSection(tab.ref, tab.id)}
                    >
                      <Icon size={16} />
                      <span className="inline-flex">{tab.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-8 pt-6">
              <motion.div
                ref={basicRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                id="basic-section"
              >
                <BasicInfoSection data={employeeData.basicInfo} />
              </motion.div>

              <motion.div
                ref={personalRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                id="personal-section"
              >
                <PersonalDetailsSection
                  data={{
                    ...employeeData.personalDetails,
                    emergencyContacts: employeeData.emergencyContacts,
                  }}
                />
              </motion.div>

              <motion.div
                ref={workRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                id="work-section"
              >
                <WorkInfoSection data={employeeData.workInfo} />
              </motion.div>
              {/* 
              <motion.div
                ref={bankRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                id="bank-section"
              >
                <BankDetailsSection data={employeeData.bankDetails} />
              </motion.div> */}

              <motion.div
                ref={skillsRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                id="skills-section"
              >
                <SkillsSection data={employeeData.skills} />
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default PersonalInfo;
