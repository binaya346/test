import DashboardLayout from "../Components/layout/dashboardLayout";
import SearchFilter from "../Components/searchFilter";
import Table from "../Components/table";

const ListSlots = () => {
  const breadcrum = ["Appointments", "List Slots"];
  return (
    <DashboardLayout title="List Slots" breadcrum={breadcrum}>
      <SearchFilter />
      <Table />
    </DashboardLayout>
  );
};

export default ListSlots;
