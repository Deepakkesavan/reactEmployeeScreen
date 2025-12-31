export interface BackendTeamMember {
  empGuid: string;
  empId: string;
  firstName: string;
  lastName: string;
  desg: string;
  project: string;
  email: string;
  profile: string;
  projectName: string;
  status: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  email: string;
  project: string;
  status: string;
}

export const mapBackendToTeamMember = (
  backendData: BackendTeamMember
): TeamMember => {
  return {
    id: backendData.empId || backendData.empGuid,
    name: `${backendData.firstName} ${backendData.lastName}`.trim(),
    role: backendData.desg,
    avatar: backendData.profile || undefined,
    email: backendData.email,
    project: backendData.projectName || backendData.project,
    status: backendData.status,
  };
};
