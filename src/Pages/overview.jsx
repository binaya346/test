import DashboardLayout from "../Components/layout/dashboardLayout";
import Tab from "../Components/tabs";

const Overview = () => {
  const breadcrum = ["Overview"];
  return (
    <DashboardLayout title="Overview" breadcrum={breadcrum}></DashboardLayout>
  );
};

export default Overview;
