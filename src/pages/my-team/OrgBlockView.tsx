// import { OrgNode } from "./OrgNode";
// import { useEffect } from "react";


// function findNodeAndParent(root, empId, parent = null) {
//   if (!root) return null;

//   if (root.empId === empId) {
//     return { node: root, parent };
//   }

//   for (const child of root.children || []) {
//     const result = findNodeAndParent(child, empId, root);
//     if (result) return result;
//   }

//   return null;
// }

// /* -------- Component -------- */

// export const OrgBlockView = ({ orgTree=[], currentEmpId }) => {
//   useEffect(() => {
//     console.log("useEffect triggered", {
//       orgTree,
//       currentEmpId,
//     });
  
//   }, [orgTree, currentEmpId]);
//   if (!orgTree || !currentEmpId) {
//     return (
//       <div className="text-center py-12 text-muted-foreground">
//         Loading organization data...
//       </div>
//     );
//   }

//   const result = findNodeAndParent(orgTree, currentEmpId);

//   if (!result) {
//     return (
//       <div className="text-center py-12 text-muted-foreground">
//         Current employee not found in org tree
//       </div>
//     );
//   }

//   const { node: you, parent: manager } = result;

//   const siblings =
//     manager?.children?.filter(emp => emp.empId !== currentEmpId) || [];

//   const children = you.children || [];

//   const renderSection = (title, items, type) => {
//     if (!items.length) return null;

//     return (
//       <div className="mb-8">
//         <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
//           {title}
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {items.map(emp => (
//             <div key={emp.empId}>
//               <OrgNode
//                 name={emp.name}
//                 designation={emp.designation}
//                 type={type}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="p-6 bg-org-tree-bg rounded-2xl border border-border">
//       {/* Manager */}
//       {manager && (
//         <div className="mb-8">
//           <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
//             Your Manager
//           </h3>
//           <OrgNode
//             name={manager.name}
//             designation={manager.designation}
//             type="manager"
//           />
//         </div>
//       )}

//       {/* You */}
//       <div className="mb-8">
//         <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
//           You
//         </h3>
//         <OrgNode
//           name={you.name}
//           designation={you.designation}
//           type="you"
//         />
//       </div>

//       {/* Peers */}
//       {renderSection("Your Peers", siblings, "sibling")}

//       {/* Reports */}
//       {renderSection("Your Direct Reports", children, "child")}

//       {/* Empty */}
//       {!manager && !siblings.length && !children.length && (
//         <div className="text-center py-12 text-muted-foreground">
//           No organization data available
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrgBlockView;

import { useEffect } from "react";
import { OrgNode } from "./OrgNode";

/* =======================
   Types / Interfaces
======================= */

export type OrgNodeType = "manager" | "you" | "sibling" | "child";

export interface OrgEmployee {
  empId: string;
  name: string;
  designation?: string;
  children?: OrgEmployee[];
}

interface OrgBlockViewProps {
  orgTree: OrgEmployee | null;
  currentEmpId: string | null;
}

/* =======================
   Helpers
======================= */

interface FindResult {
  node: OrgEmployee;
  parent: OrgEmployee | null;
}

function findNodeAndParent(
  root: OrgEmployee | null,
  empId: string,
  parent: OrgEmployee | null = null
): FindResult | null {
  if (!root) return null;

  if (root.empId === empId) {
    return { node: root, parent };
  }

  for (const child of root.children || []) {
    const result = findNodeAndParent(child, empId, root);
    if (result) return result;
  }

  return null;
}

/* =======================
   Component
======================= */

export const OrgBlockView: React.FC<OrgBlockViewProps> = ({
  orgTree,
  currentEmpId,
}) => {
  useEffect(() => {
    console.log("OrgBlockView state:", {
      orgTree,
      currentEmpId,
    });
  }, [orgTree, currentEmpId]);

  if (!orgTree || !currentEmpId) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Loading organization data...
      </div>
    );
  }

  const result = findNodeAndParent(orgTree, currentEmpId);

  if (!result) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Current employee not found in org tree
      </div>
    );
  }

  const { node: you, parent: manager } = result;

  const siblings =
    manager?.children?.filter(emp => emp.empId !== currentEmpId) || [];

  const children = you.children || [];

  const renderSection = (
    title: string,
    items: OrgEmployee[],
    type: OrgNodeType
  ) => {
    if (!items.length) return null;

    return (
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          {title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map(emp => (
            <OrgNode
              key={emp.empId}
              name={emp.name}
              designation={emp.designation}
              type={type}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-org-tree-bg rounded-2xl border border-border">
      {/* Manager */}
      {manager && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Your Manager
          </h3>
          <OrgNode
            name={manager.name}
            designation={manager.designation}
            type="manager"
          />
        </div>
      )}

      {/* You */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          You
        </h3>
        <OrgNode
          name={you.name}
          designation={you.designation}
          type="you"
        />
      </div>

      {/* Peers */}
      {renderSection("Your Peers", siblings, "sibling")}

      {/* Reports */}
      {renderSection("Your Direct Reports", children, "child")}

      {/* Empty */}
      {!manager && !siblings.length && !children.length && (
        <div className="text-center py-12 text-muted-foreground">
          No organization data available
        </div>
      )}
    </div>
  );
};

export default OrgBlockView;
