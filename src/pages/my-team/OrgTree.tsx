import { useState, useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import OrgNodeTree from "./OrgNodeTree";

// Define types for employee data
interface Employee {
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
  children?: Employee[];
}

interface OrgTreeProps {
  employees: Employee;
  loggedInUserId: string;
}

const findEmployee = (root: Employee | null, id: string): Employee | null => {
  if (!root) return null;
  if (root.empId === id) return root;
  if (root.children) {
    for (const child of root.children) {
      const result = findEmployee(child, id);
      if (result) return result;
    }
  }
  return null;
};

const findDirectPath = (root: Employee | null, targetId: string): Employee[] | null => {
  if (!root) return null;

  if (root.empId === targetId) {
    return [root];
  }

  if (root.children) {
    for (const child of root.children) {
      if (child.empId === targetId) {
        return [root, child];
      }

      const res = findDirectPath(child, targetId);
      if (res && res.length > 0) {
        return [root, ...res];
      }
    }
  }

  return null;
};

const OrgTree: React.FC<OrgTreeProps> = ({ employees, loggedInUserId }) => {
  const [orgData, setOrgData] = useState<Employee | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [highlightedPath, setHighlightedPath] = useState<string[]>([]);
  const currentUserRef = useRef<HTMLDivElement | null>(null);
  // Fetch org chart from API
  useEffect(() => {
    const fetchData = async () => {
      // Fetch data here if needed. Using the passed prop `employees` for now
      setOrgData(employees);
    };
    fetchData();
  }, [employees]);

  // Auto-expand to logged-in user's node
  useEffect(() => {
    if (orgData && loggedInUserId) {
      const userEmployee = findEmployee(orgData, loggedInUserId);
      if (userEmployee) {
        const pathToUser = findDirectPath(orgData, loggedInUserId);

        if (pathToUser && pathToUser.length > 0) {
          if (pathToUser.length > 1) {
            // User has a parent - select the parent
            const parentEmployee = pathToUser[pathToUser.length - 2];
            setSelectedId(parentEmployee.empId);
          } else {
            // User is the root
            setSelectedId(loggedInUserId);
          }
          // Highlight the complete path
          setHighlightedPath(pathToUser.map((emp) => emp.empId));
        }
      } else {
        // If user not found, default to root
        setSelectedId(orgData.empId);
        setHighlightedPath([orgData.empId]);
      }
    } else if (orgData) {
      // No logged-in user, default to root
      setSelectedId(orgData.empId);
    }
  }, [orgData, loggedInUserId]);

  // Focus on the current user with better timing and conditions
  useEffect(() => {
    if (
      currentUserRef.current &&
      highlightedPath.length > 0 &&
      loggedInUserId
    ) {
      const scrollToUser = () => {
        try {
          currentUserRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        } catch (error) {
          console.log("Scroll to user failed:", error);
        }
      };

      // Multiple timeouts to ensure DOM is ready
      setTimeout(scrollToUser, 300);
      setTimeout(scrollToUser, 600);
    }
  }, [selectedId, highlightedPath, loggedInUserId, orgData]);

  const getParentEmployee = (root: Employee | null, childId: string): Employee | null => {
    if (!root || !root.children) return null;

    for (const child of root.children) {
      if (child.empId === childId) return root;

      const res = getParentEmployee(child, childId);
      if (res) return res;
    }

    return null;
  };

  const handleSelectEmployee = (id: string) => {
    if (!orgData) return;
    
    if (id === selectedId) {
      const parent = getParentEmployee(orgData, id);
      setSelectedId(parent?.empId || orgData.empId);
    } else {
      setSelectedId(id);
    }
    setHighlightedPath([]);
  };

  if (!orgData) return <p className="p-8">Loading...</p>;

  const parentOfSelected =
    selectedId !== orgData.empId
      ? getParentEmployee(orgData, selectedId || "")
      : null;

  const lineClass = "bg-blue-400 hover:bg-blue-600 transition-all duration-200";
  const highlightedLineClass =
    "bg-blue-400 hover:bg-yellow-500 transition-all duration-200";

  const isInHighlightedPath = (empId: string) => highlightedPath.includes(empId);

  // Helper function to render a node with ref for current user
  const renderNode = (employee: Employee, options: { 
    isSelected?: boolean; 
    onClick: () => void; 
    isHighlighted?: boolean; 
    isChildOfSelected?: boolean; 
    showRef?: boolean;
  }) => {
    const {
      isSelected = false,
      onClick,
      isHighlighted = false,
      isChildOfSelected = false,
      showRef = false,
    } = options;

    const isCurrentUser = employee.empId === loggedInUserId;

    return (
      <div ref={isCurrentUser && showRef ? currentUserRef : null}>
        <OrgNodeTree
          employee={employee}
          isSelected={isSelected}
          onClick={onClick}
          isHighlighted={isHighlighted}
          isCurrentUser={isCurrentUser}
          isChildOfSelected={isChildOfSelected}
        />
      </div>
    );
  };

  return (
    <ScrollArea className="h-full w-full">
        <div className="flex items-start p-8">
          
          {/* Root node when selected */}
          {selectedId === orgData.empId && (
            <div className=" fixed flex flex-col">
              <div className={`relative left-[19rem] h-[2px] top-[2rem] w-[33px] ml-[-3rem] ${lineClass}`}/>
              {renderNode(orgData, {
                isSelected: true,
                onClick: () => handleSelectEmployee(orgData.empId),
                isHighlighted: isInHighlightedPath(orgData.empId),
                showRef: true,
              })}
              </div>
          )}

          {/* Main grid */}
          <div className="grid grid-cols-2 gap-8">

            {/* Siblings area when a parent is selected */}
            {parentOfSelected && parentOfSelected.children && (
              <div className="flex flex-col gap-3 relative">
                {parentOfSelected.children.map((sibling) => {
                  const isSelected = sibling.empId === selectedId;
                  const isHighlighted = isInHighlightedPath(sibling.empId);

                  return (
                    <div key={sibling.empId} className="relative flex-none">
                      <div className="flex">
                        <div className="flex flex-col flex-none relative top-3">
                          {renderNode(sibling, {
                            isSelected,
                            onClick: () => handleSelectEmployee(sibling.empId),
                            isHighlighted,
                            showRef: true,
                          })}
                        </div>

                        {/* Children of selected sibling */}
                        {isSelected &&
                          sibling.children &&
                          sibling.children.length > 0 && (
                            <>
                              <div className="flex items-center px-4">
                                <div
                                  className={`h-[2px] top-[1rem] w-12 ml-[-3rem] ${lineClass}`}
                                />
                              </div>

                              <div className="absolute left-[250px] ml-[3rem] top-0 flex flex-col gap-3">
                                <div
                                  className={`absolute left-[-2rem] top-[2.1rem] bottom-[2rem] w-[2px] ${lineClass}`}
                                />

                                {sibling.children.map((child) => {
                                  const childHighlighted =
                                    isInHighlightedPath(child.empId);

                                  return (
                                    <div
                                      key={child.empId}
                                      className="flex items-center gap-0 relative animate-fade-in"
                                    >
                                      <div
                                        className={`absolute left-[-2rem] top-1/2 w-8 h-[2px] ${
                                          childHighlighted
                                            ? highlightedLineClass
                                            : lineClass
                                        }`}
                                      />

                                      <div className="flex flex-col items-center">
                                        {renderNode(child, {
                                          onClick: () =>
                                            handleSelectEmployee(child.empId),
                                          isHighlighted: childHighlighted,
                                          isChildOfSelected: true,
                                          showRef: true,
                                        })}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Root children when root is selected */}
            {selectedId === orgData.empId &&
              orgData.children &&
              orgData.children.length > 0 && (
                <div className="flex flex-col gap-8 relative left-[20rem]">
                  <div
                    className={`absolute left-[-2rem] top-[2.1rem] bottom-[2rem] w-[2px] ${
                      highlightedPath.length > 0
                        ? highlightedLineClass
                        : lineClass
                    }`}
                  />

                  {orgData.children.map((child) => {
                    const isHighlighted =
                      isInHighlightedPath(child.empId);

                    return (
                      <div
                        key={child.empId}
                        className="flex items-center gap-0 relative animate-fade-in"
                      >
                        <div
                          className={`absolute left-[-2rem] top-1/2 w-8 h-[2px] ${
                            isHighlighted
                              ? highlightedLineClass
                              : lineClass
                          }`}
                        />

                        <div className="flex flex-col items-center">
                          {renderNode(child, {
                            onClick: () =>
                              handleSelectEmployee(child.empId),
                            isHighlighted,
                            showRef: true,
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

          </div>
      </div>
    </ScrollArea>
  );
};

export default OrgTree;

