import {
  type PersonalDetails,
  type EmergencyContact,
} from "../../interfaces/PersonalInfo.interface";

export interface PersonalDetailsSectionProps {
  data: PersonalDetails & {
    emergencyContacts: {
      contact1: EmergencyContact;
      contact2: EmergencyContact;
    };
  };
}