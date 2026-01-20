import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import AdminStatsCards from "../components/AdminStatsCards";
import AdminChart from "../components/AdminChart";
import AdminTable from "../components/AdminTable";

const Admin = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1">
        {/* Topbar */}
        <AdminTopbar />

        {/* Stats Cards */}
        <div className="p-6">
          <AdminStatsCards />
        </div>

        {/* Chart */}
        <div className="p-6">
          <AdminChart />
        </div>

        {/* Table */}
        <div className="p-6">
          <AdminTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;
