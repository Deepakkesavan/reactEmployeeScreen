import { User } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FormField } from "./shared/FormField";
// import { SensitiveField } from "./shared/SensitiveField";
import { type PersonalDetailsSectionProps } from "./interfaces/PersonalDetailsSection.interface";

function PersonalDetailsSection({ data }: PersonalDetailsSectionProps) {
  return (
    <SectionWrapper title="Personal Details" icon={User}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Date of Birth"
          type="date"
          value={data.dateOfBirth}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Age"
          type="number"
          value={data.age}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="Gender"
          value={data.gender}
          disabled
          onChange={() => {}}
        />
        {/* <SensitiveField
          label="PAN"
          value={data.pan}
          disabled
          onChange={() => {}}
        />
        <SensitiveField
          label="Aadhar"
          value={data.aadhar}
          disabled
          className="md:col-span-2"
          onChange={() => {}}
        /> */}
        <FormField
          label="Present Address"
          type="textarea"
          value={data.presentAddress}
          disabled
          className="md:col-span-2"
          onChange={() => {}}
        />
        <FormField
          label="Permanent Address"
          type="textarea"
          value={data.permanentAddress}
          disabled
          className="md:col-span-2"
          onChange={() => {}}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-base-content">
          Emergency Contacts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-base-content">
              Emergency Contact 1 *
            </h4>
            <FormField
              label="Name"
              value={data.emergencyContacts?.contact1?.name || ""}
              disabled
              onChange={() => {}}
            />
            <FormField
              label="Phone"
              type="tel"
              value={data.emergencyContacts?.contact1?.phone || ""}
              disabled
              onChange={() => {}}
            />
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base-content">
              Emergency Contact 2
            </h4>
            <FormField
              label="Name"
              value={data.emergencyContacts?.contact2?.name || ""}
              disabled
              onChange={() => {}}
            />
            <FormField
              label="Phone"
              type="tel"
              value={data.emergencyContacts?.contact2?.phone || ""}
              disabled
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PersonalDetailsSection;
