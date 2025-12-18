import React from "react";
import { NavLink } from "react-router";
import {
  FiHome,
  FiBookOpen,
  FiPlusCircle,
  FiUsers,
  FiCreditCard,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const menuItems = [
 { name: "My Tuitions", path: "/dashboard/student/myTuition", icon: FiBookOpen },
{ name: "Post Tuition", path: "/dashboard/student/post", icon: FiPlusCircle },
{ name: "Applied Tutors", path: "/dashboard/student/appliedTutor", icon: FiUsers },
{ name: "Payment", path: "/dashboard/student/payment", icon: FiCreditCard },
{ name: "Settings", path: "/dashboard/student/setting", icon: FiSettings },

];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white rounded-2xl shadow-xl p-5 flex flex-col">
      <nav className="space-y-1">
        {menuItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
               ${
                 isActive
                   ? "bg-blue-600 text-white shadow-md"
                   : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
               }`
            }
          >
            <Icon className="text-lg" />
            {name}
          </NavLink>
        ))}
      </nav>

      <div className="flex-grow" />

      <button
        className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl
                   text-sm font-semibold text-blue-600
                   bg-blue-50 hover:bg-blue-100 transition-all"
      >
        <FiLogOut className="text-lg" />
        Sign Out
      </button>
    </aside>
  );
};

export default Sidebar;
