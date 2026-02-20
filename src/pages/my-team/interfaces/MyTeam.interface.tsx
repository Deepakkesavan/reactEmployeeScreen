import type { TreeNodeDatum } from "react-d3-tree";

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

// export interface BackendOrgChartTeamMember{
//   empId: string;
//   name: string;
//   designation: string;
//   department: string;
//   email: string;
//   phone: string;
//   location: string | null;
//   reportsTo: string | null;
//   hireDate: string;
//   reportsCount: number | null;
//   children: BackendOrgChartTeamMember[];
// }
// export interface BackendCurrentEmployee{
//   empId: string;
//   name: string;
//   designation: string;
// }

// export interface OrgTreeNode extends TreeNodeDatum {
//   name: string;
//   designation: string;
//   empId: string;
//   isCurrentEmployee: boolean;
//   children: OrgTreeNode[];
// }

// export const mapBackendToFrontendOrgChart = (
//   backendData: BackendOrgChartTeamMember,
//   currentEmpId?: string
// ): OrgTreeNode => {
//   return {
//     empId: backendData.empId,
//     name: backendData.name,
//     designation: backendData.designation,
//     isCurrentEmployee: backendData.empId === currentEmpId,
//     children: backendData.children.map(child => mapBackendToFrontendOrgChart(child, currentEmpId)),
//   };
// };


// export interface BackendOrgChartTeamMember {
//   empId: string;
//   name: string;
//   designation: string;
//   department: string;
//   email: string;
//   phone: string;
//   location: string | null;
//   reportsTo: string | null;
//   hireDate: string;
//   reportsCount: number | null;
//   children: BackendOrgChartTeamMember[];
// }

// export interface BackendCurrentEmployee {
//   empId: string;
//   name: string;
//   designation: string;
// }

// /* ===== FRONTEND TREE NODE ===== */

// export interface OrgTreeNode {
//   name: string;
//   empId: string;
//   designation: string;
//   isCurrentEmployee: boolean;
//   children: OrgTreeNode[];
// }

// export interface OrgTreeNodeDatum extends TreeNodeDatum {
//   empId: string;
//   designation: string;
//   isCurrentEmployee: boolean;
//   children?: OrgTreeNodeDatum[];
// }

// /* ===== MAPPER ===== */

// export const mapBackendToFrontendOrgChart = (
//   backendData: BackendOrgChartTeamMember,
//   currentEmpId?: string
// ): OrgTreeNode => {
//   return {
//     name: backendData.name || backendData.empId,
//     empId: backendData.empId,
//     designation: backendData.designation,
//     isCurrentEmployee: backendData.empId === currentEmpId,
//     children: backendData.children.map(child =>
//       mapBackendToFrontendOrgChart(child, currentEmpId)
//     ),
//   };
// };

// Backend data structure for team member
export interface BackendOrgChartTeamMember {
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
  children: BackendOrgChartTeamMember[];
}


// Current employee data structure
export interface BackendCurrentEmployee {
  empId: string;
  name: string;
  designation: string;
}

// Frontend Tree Node (for rendering in OrgTree)
export interface OrgTreeNode {
  name: string;
  empId: string;
  designation: string;
  isCurrentEmployee: boolean;
  children: OrgTreeNode[];
}

// Frontend Tree Node Datum (for D3 Tree library)
export interface OrgTreeNodeDatum extends TreeNodeDatum {
  empId: string;
  designation: string;
  isCurrentEmployee: boolean;
  children?: OrgTreeNodeDatum[];
}

// Mapper function to convert backend data to frontend data
export const mapBackendToFrontendOrgChart = (
  backendData: BackendOrgChartTeamMember,
  currentEmpId?: string
): OrgTreeNode => {
  return {
    name: backendData.name || backendData.empId,
    empId: backendData.empId,
    designation: backendData.designation,
    isCurrentEmployee: backendData.empId === currentEmpId,
    children: backendData.children.map(child =>
      mapBackendToFrontendOrgChart(child, currentEmpId)
    ),
  };
};
