import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Droplet,
  Truck,
  LogOut,
} from "lucide-react";

const navItems = [
  { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/users", icon: Users, label: "Manage Users" },
  { to: "/admin/bloodbanks", icon: Droplet, label: "Blood Banks" },
  { to: "/admin/donations", icon: Droplet, label: "Donations" },
  { to: "/admin/ambulances", icon: Truck, label: "Ambulances" },
];

const AdminLayout = () => {
  return (
    <div className="flex h-[calc(100vh-1rem)] mt-2 bg-gradient-to-tr from-gray-900 via-[#1a1a1a] to-gray-800 text-white rounded-t-xl overflow-hidden shadow-2xl">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-white/5 backdrop-blur-md border-r border-gray-700 shadow-xl p-5 rounded-l-xl">
        <div className="text-2xl font-extrabold text-red-500 tracking-wider mb-8">
          RedFlow Admin
        </div>
        <nav className="flex flex-col gap-3 text-sm">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-red-600 text-white shadow"
                    : "hover:bg-white/10 text-gray-300"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <button className="mt-auto flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all text-gray-400">
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col rounded-r-xl">
        {/* Topbar */}
        <header className="sticky top-0 z-10 bg-black/20 backdrop-blur-sm border-b border-gray-700 px-6 py-4 flex justify-between items-center shadow-md rounded-tr-xl">
          <h1 className="text-lg font-semibold text-white tracking-wide">
            Welcome, Admin
          </h1>
          <div className="text-sm text-gray-300">admin@redflow.com</div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-6 py-4 bg-[#1b1b1f] text-gray-100 rounded-b-xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
