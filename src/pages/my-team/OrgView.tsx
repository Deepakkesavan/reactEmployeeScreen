// import { useState, useCallback } from "react";
// import OrgTree from "./OrgTree";
// import OrgBlockView from "./OrgBlockView";
// import DataService from "@/common/DataService/DataService";
// import { mapBackendToFrontendOrgChart, type BackendOrgChartTeamMember } from "./interfaces/MyTeam.interface";


// function OrgView() {
//   const [viewMode, setViewMode] = useState("tree");
//   const [employeeList, setEmployeeList] = useState<BackendOrgChartTeamMember | null>(null);
//   const [currentEmpId, setCurrentEmpId] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [enableDataFetch, setEnableDataFetch] = useState(true);

//   const handleCurrentUserSuccess = useCallback((data:any) => {
//     setCurrentEmpId(data?.result?.empId ?? null);
//   }, []);

//   const handleOrgChartSuccess = useCallback((data:any) => {
//     setEmployeeList(data?.result ?? []);
//   }, []);

//   return (
//     <div className="w-full">
//       <div className="mb-4 flex gap-2">
//         <button
//           className="px-4 py-2 border rounded"
//           onClick={() => setViewMode("tree")}
//         >
//           Tree View
//         </button>
//         <button
//           className="px-4 py-2 border rounded"
//           onClick={() => setViewMode("block")}
//         >
//           Block View
//         </button>
//       </div>

//       <DataService
//         enable={enableDataFetch}
//         url="/GetCurrentUser"
//         parameter={null}
//         onSuccess={(data) => {
//             setCurrentEmpId(data?.result?.empId ?? null);
//             setEnableDataFetch(false);
//           }}
//           onError={(error) => {
//             setError(error.message || "Failed to fetch employee data");
//             setEnableDataFetch(false);
//           }}
//       />

// <DataService
//         enable={enableDataFetch}
//         url="/GetOrgChartMyTeam"
//         parameter={null}
//         onSuccess={(data) => {
//             const backendData = data.result || data;
//             setEmployeeList(backendData as BackendOrgChartTeamMember);
//             setEnableDataFetch(false);
//           }}
//           onError={(error) => {
//             setError(error.message || "Failed to fetch employee data");
//             setEnableDataFetch(false);
//           }}
//       />


//       {viewMode === "tree" ? (
//         <OrgTree
//           employees={employeeList}
//           currentEmpId={currentEmpId}
//         />
//       ) : (
//         <OrgBlockView
//           employees={employeeList}
//           currentEmpId={currentEmpId}
//         />
//       )}
//     </div>
//   );
// }

// // export default OrgView;import { useState } from "react";
// import OrgTree from "./OrgTree";
// import OrgBlockView from "./OrgBlockView";
// import { useState } from "react";
// import DataService from "@/common/DataService/DataService";
// import type {
//   BackendOrgChartTeamMember,
// } from "./interfaces/MyTeam.interface";
// import { apiSubRoutes } from "@/common/DataService/Constants";

// type ViewMode = "tree" | "block";

// const OrgView: React.FC = () => {
//   const [viewMode, setViewMode] = useState<ViewMode>("tree");

//   const [orgChart, setOrgChart] =
//     useState<BackendOrgChartTeamMember | null>(null);

//   const [currentEmpId, setCurrentEmpId] = useState<string>("");

//   const [error, setError] = useState<string | null>(null);

//   const [enableDataFetch, setEnableDataFetch] =
//     useState<boolean>(true);

//   /* ===== CURRENT USER ===== */
//   const handleCurrentUserSuccess = (data: any) => {
//     const empId = data?.result?.empId;
//     if (empId) setCurrentEmpId(empId);
//     setEnableDataFetch(false);
//   };

//   /* ===== ORG CHART ===== */
//   const handleOrgChartSuccess = (data: any) => {
//     const backendTree = data?.result;
//     if (backendTree) {
//       setOrgChart(backendTree as BackendOrgChartTeamMember);
//     }
//     setEnableDataFetch(false);
//   };

//   return (
//     <div className="w-full">
//       {/* ===== VIEW TOGGLE ===== */}
//       <div className="mb-4 flex gap-2">
//         <button
//           className={`px-4 py-2 rounded border ${
//             viewMode === "tree"
//               ? "bg-slate-900 text-white"
//               : "bg-white"
//           }`}
//           onClick={() => setViewMode("tree")}
//         >
//           Tree View
//         </button>

//         <button
//           className={`px-4 py-2 rounded border ${
//             viewMode === "block"
//               ? "bg-slate-900 text-white"
//               : "bg-white"
//           }`}
//           onClick={() => setViewMode("block")}
//         >
//           Block View
//         </button>
//       </div>

//       {/* ===== DATA FETCH ===== */}
//       <DataService
//         enable={enableDataFetch}
//         url={apiSubRoutes.GET_ORGCHART_MYTEAM}
//         parameter={null}
//         onSuccess={handleCurrentUserSuccess}
//         onError={(err) => {
//           setError(err.message || "Failed to fetch current user");
//           setEnableDataFetch(false);
//         }}
//       />

//       <DataService
//         enable={enableDataFetch}
//         url={apiSubRoutes.GET_CURRENTUSER}
//         parameter={null}
//         onSuccess={handleOrgChartSuccess}
//         onError={(err) => {
//           setError(err.message || "Failed to fetch org chart");
//           setEnableDataFetch(false);
//         }}
//       />

//       {/* ===== ERROR ===== */}
//       {error && (
//         <div className="p-4 text-sm text-red-600">
//           {error}
//         </div>
//       )}

//       {/* ===== LOADING ===== */}
//       {!error && (!orgChart || !currentEmpId) && (
//         <div className="text-center py-12 text-slate-500">
//           Loading organization data...
//         </div>
//       )}

//       {/* ===== CONTENT ===== */}
//       {orgChart && currentEmpId && (
//         <>
//           {viewMode === "tree" ? (
//             <OrgTree
//               orgChart={orgChart}
//               currentEmpId={currentEmpId}
//             />
//           ) : (
//             <OrgBlockView
//               orgTree={orgChart}
//               currentEmpId={currentEmpId}
//             />
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default OrgView;

import {useState } from "react";
import OrgTree from "./OrgTree";
import OrgBlockView from "./OrgBlockView";
import DataService from "@/common/DataService/DataService";
import type {
  BackendOrgChartTeamMember,
} from "./interfaces/MyTeam.interface";
import { apiSubRoutes } from "@/common/DataService/Constants";

// Type for View Mode
type ViewMode = "tree" | "block";

const OrgView: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("tree");
  const [employees, setEmployees] = useState<BackendOrgChartTeamMember | null>(null);
  const [currentEmpId, setCurrentEmpId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [enableDataFetch, setEnableDataFetch] = useState<boolean>(true);

  // Handler for current user data
  const handleCurrentUserSuccess = (data: any) => {
    const empId = data?.result?.empId;
    if (empId) setCurrentEmpId(empId);
    setEnableDataFetch(false);
  };

  // Handler for org chart data
  const handleOrgChartSuccess = (data: any) => {
    const backendTree = data?.result;
    if (backendTree) {
      setEmployees(backendTree as BackendOrgChartTeamMember);
    }
    setEnableDataFetch(false);
  };

  return (
    <div className="w-full">
      {/* ===== VIEW TOGGLE ===== */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-4 items-center">
          <span className="text-lg font-semibold text-gray-700">View Mode:</span>
          
          {/* Toggle Switch */}
          <label className="inline-flex items-center cursor-pointer">
            <span
              className={`mr-2 text-sm text-gray-600 ${viewMode === "tree" ? "" : "font-semibold"}`}
            >
              Tree View
            </span>

            {/* Toggle Switch */}
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={viewMode === "block"}
                onChange={() => setViewMode(viewMode === "tree" ? "block" : "tree")}
              />
              <div className="w-12 h-6 bg-gray-300 rounded-full peer transition-all duration-300">
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 transform ${
                    viewMode === "block" ? "translate-x-6 bg-green-500" : ""
                  }`}
                ></div>
              </div>
            </div>

            <span
              className={`ml-2 text-sm text-gray-600 ${viewMode === "block" ? "font-semibold" : ""}`}
            >
              Block View
            </span>
          </label>
        </div>
        </div>

      {/* ===== DATA FETCH ===== */}
      <DataService
        enable={enableDataFetch}
        url={apiSubRoutes.GET_CURRENTUSER}
        parameter={null}
        onSuccess={handleCurrentUserSuccess}
        onError={(err) => {
          setError(err.message || "Failed to fetch current user");
          setEnableDataFetch(false);
        }}
      />

      <DataService
        enable={enableDataFetch}
        url={apiSubRoutes.GET_ORGCHART_MYTEAM}
        parameter={null}
        onSuccess={handleOrgChartSuccess}
        onError={(err) => {
          setError(err.message || "Failed to fetch org chart");
          setEnableDataFetch(false);
        }}
      />

      {/* ===== ERROR MESSAGE ===== */}
      {error && <div className="p-4 text-sm text-red-600">{error}</div>}

      {/* ===== LOADING ===== */}
      {!error && (!employees || !currentEmpId) && (
        <div className="text-center py-12 text-slate-500">Loading organization data...</div>
      )}

      {/* ===== CONTENT ===== */}
      {employees && currentEmpId && (
        <>
          {viewMode === "tree" ? (
            <OrgTree employees={employees} loggedInUserId={currentEmpId} />
          ) : (
            <OrgBlockView orgTree={employees} currentEmpId={currentEmpId} />
          )}
        </>
      )}
    </div>
  );
};

export default OrgView;
