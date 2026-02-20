import { User } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FormField } from "./shared/FormField";
import { type BasicInfoSectionProps } from "./interfaces/BasicInfoSection.interface";
import UploadProfilePhoto from "@/components/common/cards/UploadProfilePhoto";

function BasicInfoSection({ data }: BasicInfoSectionProps) {
  const handleUploadSuccess = () => {
    // You can add a toast notification here if you have a toast library
    // toast.success('Profile photo updated successfully!');
  };

  const handleUploadError = () => {
    // You can add a toast notification here
    // toast.error(`Upload failed: ${error}`);
  };

  return (
    <SectionWrapper title="Basic Information" icon={User}>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col items-center gap-4 lg:w-48">
          <UploadProfilePhoto
            empId={data.employeeId}
            firstName={data.firstName}
            lastName={data.lastName}
            onUploadSuccess={handleUploadSuccess}
            onUploadError={handleUploadError}
          />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Employee ID"
              type="text"
              value={data.employeeId}
              disabled
              onChange={() => {}}
            />
            <FormField
              label="Email"
              type="email"
              value={data.email}
              disabled
              onChange={() => {}}
            />
            <FormField
              label="First Name"
              type="text"
              value={data.firstName}
              disabled
              onChange={() => {}}
            />
            <FormField
              label="Last Name"
              type="text"
              value={data.lastName}
              disabled
              onChange={() => {}}
            />
            <FormField
              label="Phone Number"
              type="tel"
              value={data.phoneNumber}
              disabled
              className="md:col-span-2"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default BasicInfoSection;
