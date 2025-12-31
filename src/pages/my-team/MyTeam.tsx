import React from "react";
import { Suspense } from "react";

const OrgRemote = React.lazy(() => import("orgchart/App"));

function MyTeam() {
  return (
    <Suspense fallback={<p>Loading team module...</p>}>
      <OrgRemote />
    </Suspense>
  );
}

export default MyTeam;
