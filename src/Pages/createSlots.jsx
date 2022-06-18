import DashboardLayout from "../Components/layout/dashboardLayout";
import Tab from "../Components/tabs";

const CreateSlots = () => {
  const breadcrum = ["Appointments", "Create Slots"];
  return (
    <DashboardLayout title="create slots" breadcrum={breadcrum}>
      <Tab />
    </DashboardLayout>
  );
};

export default CreateSlots;
