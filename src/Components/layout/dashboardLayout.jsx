import Dashboard from "../dashboard";
import Sidebar from "../sidebar";
import "./dashboardLayout.scss";

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DashboardLayout;
