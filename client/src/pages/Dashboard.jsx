import { useState } from "react";
import Sidebar from "./Bars/Sidebar";
import Topbar from "./Bars/Topbar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col bg-red-50">
        <Topbar setSidebarOpen={setSidebarOpen} />
        {/* ...rest of your content... */}
      </div>
    </div>
  );
};

export default Dashboard;
