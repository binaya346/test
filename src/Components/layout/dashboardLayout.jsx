import Dashboard from "../dashboard";
import Sidebar from "../sidebar";
import "./dashboardLayout.scss";

const DashboardLayout = (props) => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <Dashboard {...props} />
    </div>
  );
};

export default DashboardLayout;
