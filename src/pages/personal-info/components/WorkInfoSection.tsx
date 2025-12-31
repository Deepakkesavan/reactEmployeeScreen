import { Briefcase } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FormField } from "./shared/FormField";
import { type WorkInfoSectionProps } from "./interfaces/WorkInfoSection.interface";

const formatExperience = (years: number) => {
  const wholeYears = Math.floor(years);
  const months = Math.round((years - wholeYears) * 12);

  return `${wholeYears} year(s) ${months} month(s)`;
};

function WorkInfoSection({ data }: WorkInfoSectionProps) {
  return (
    <SectionWrapper title="Work Information" icon={Briefcase}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Designation ID"
          value={data.designationId}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Designation"
          value={data.designation}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Department"
          value={data.department}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Location"
          value={data.location}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Employment Type"
          value={data.employmentType}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Employee Status"
          value={data.employeeStatus}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Manager Code"
          value={data.managerCode}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Reporting Manager"
          value={data.reportingManager}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Project ID"
          value={data.projectId}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Project Name"
          value={data.projectName}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Client"
          value={data.client}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Zoho Role"
          value={data.zohoRole}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Source of Hire"
          value={data.sourceOfHire}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Email Trigger Status"
          value={data.emailTriggerStatus}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Date of Joining"
          type="date"
          value={data.dateOfJoining}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Date of Confirmation"
          type="date"
          value={data.dateOfConfirmation}
          disabled
          onChange={() => {}}
        />

        <FormField
          label="Current Experience (years)"
          type="text"
          value={formatExperience(data.currentExperience)}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Total Experience (years)"
          type="text"
          value={formatExperience(data.totalExperience)}
          disabled
          onChange={() => {}}
        />
      </div>
    </SectionWrapper>
  );
}

export default WorkInfoSection;
