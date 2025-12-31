import process from "process";

function OrgChartIframe() {
  // const orgUrl = "https://people-dev.clarium.tech/orgui";
  const orgUrl = "http://localhost:4173";
  return (
    <iframe
      src={orgUrl}
      title="Org Chart"
      width="100%"
      height="100%"
      style={{
        border: "none",
        minHeight: "calc(100vh - 100px)",
      }}
    />
  );
}

export default OrgChartIframe;
