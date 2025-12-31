export interface BackendEmployeeData {
  empGuid: string;
  empId: string;
  firstName: string;
  lastName: string;
  desgId: number;
  projId: number;
  desg: string;
  project: string;
  desgGuid: string;
  managerEmpCode: string;
  email: string;
  profile?: string;
  projGuid: string;
  dob: string;
  age: string;
  gender: string;
  emergencyContact1: string;
  personalPhoneNumber: string;
  emergencyContactName1: string;
  emergencyContactName2: string;
  emergencyContact2: string;
  permanentAddress: string;
  presentAddress: string;
  sourceOfHire: string;
  doj: string;
  doc: string;
  status: string;
  currExp: string;
  totalExp: string;
  role: string;
  emailTriggerStatus: string;
  transferFromDate: string;
  typeId: number;
  reportingManager: string;
  projectName: string;
  uan: string;
  pan: string;
  aadhar: number;
  ifsc: string;
}

export interface BasicInfo {
  employeeId: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePhoto: string;
}

export interface PersonalDetails {
  dateOfBirth: string;
  age: number;
  gender: string;
  pan: string;
  aadhar: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface EmergencyContact {
  name: string;
  phone: string;
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  uan: string;
}

export interface Skill {
  id: string;
  skillName: string;
  proficiencyLevel: string;
  yearsOfExperience: number;
}

export interface WorkInfo {
  designationId: string;
  designation: string;
  department: string;
  location: string;
  employmentType: string;
  employeeStatus: string;
  managerCode: string;
  reportingManager: string;
  projectId: string;
  projectName: string;
  client: string;
  zohoRole: string;
  sourceOfHire: string;
  emailTriggerStatus: string;
  dateOfJoining: string;
  dateOfConfirmation: string;
  dateOfExit?: string;
  currentExperience: number;
  totalExperience: number;
}

export interface EmployeeData {
  basicInfo: BasicInfo;
  personalDetails: PersonalDetails;
  emergencyContacts: {
    contact1: EmergencyContact;
    contact2: EmergencyContact;
  };
  bankDetails: BankDetails;
  skills: Skill[];
  workInfo: WorkInfo;
}

export const mapBackendToFrontend = (
  backendData: BackendEmployeeData
): EmployeeData => {
  return {
    basicInfo: {
      employeeId: backendData.empId || "",
      email: backendData.email || "",
      firstName: backendData.firstName || "",
      lastName: backendData.lastName || "",
      phoneNumber: backendData.personalPhoneNumber || "",
      profilePhoto: backendData.profile || '',
    },
    personalDetails: {
      dateOfBirth: backendData.dob
        ? new Date(backendData.dob).toISOString().split("T")[0]
        : "",
      age: parseInt(backendData.age) || 0,
      gender: backendData.gender || "",
      pan: backendData.pan || "",
      aadhar: backendData.aadhar?.toString() || "",
      presentAddress: backendData.presentAddress || "",
      permanentAddress: backendData.permanentAddress || "",
    },
    emergencyContacts: {
      contact1: {
        name: backendData.emergencyContactName1 || "",
        phone: backendData.emergencyContact1 || "",
      },
      contact2: {
        name: backendData.emergencyContactName2 || "",
        phone: backendData.emergencyContact2 || "",
      },
    },
    bankDetails: {
      bankName: "", // Not provided in backend
      accountNumber: "", // Not provided in backend
      ifscCode: backendData.ifsc || "",
      uan: backendData.uan || "",
    },
    skills: [], // Skills need to be fetched separately or provided
    workInfo: {
      designationId: backendData.desgId?.toString() || "",
      designation: backendData.desg || "",
      department: "", // Not provided in backend
      location: "", // Not provided in backend
      employmentType: "", // Not provided in backend
      employeeStatus: backendData.status || "",
      managerCode: backendData.managerEmpCode || "",
      reportingManager: backendData.reportingManager || "",
      projectId: backendData.projId?.toString() || "",
      projectName: backendData.projectName || backendData.project || "",
      client: "", // Not provided in backend
      zohoRole: backendData.role || "",
      sourceOfHire: backendData.sourceOfHire || "",
      emailTriggerStatus: backendData.emailTriggerStatus || "",
      dateOfJoining: backendData.doj
        ? new Date(backendData.doj).toISOString().split("T")[0]
        : "",
      dateOfConfirmation: backendData.doc
        ? new Date(backendData.doc).toISOString().split("T")[0]
        : "",
      currentExperience: parseFloat(backendData.currExp) || 0,
      totalExperience: parseFloat(backendData.totalExp) || 0,
    },
  };
};
