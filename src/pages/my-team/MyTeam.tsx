import { Suspense } from "react";
import OrgView from "./OrgView";

// const OrgRemote = React.lazy(() => import("orgchart/App"));

function MyTeam() {
  return (
    <Suspense fallback={<p>Loading team module...</p>}>
      <OrgView/>
    </Suspense>
  );
}

export default MyTeam;
