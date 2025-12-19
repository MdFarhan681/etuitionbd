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
    <aside
      className="
        bg-[#fbfbfc] rounded-2xl shadow-xl p-4
        flex md:flex-col flex-row
        md:w-64 w-auto
        overflow-x-auto
        fixed bottom-4 left-1/2 transform -translate-x-1/2  
        md:relative md:bottom-auto md:left-auto md:transform-none
        h-16 md:h-auto
        z-50  md:ml-30
      "
    >
      <nav className="flex md:flex-col flex-row gap-4 w-full justify-around md:justify-start">
        {menuItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `
              flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap
              transition-all
              ${isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }
              `
            }
          >
            <Icon className="text-lg" />
            <span className="hidden md:inline">{name}</span>
          </NavLink>
        ))}
      </nav>

      <button
        className="
          hidden md:flex mt-6 items-center gap-3 px-4 py-3 rounded-xl
          text-sm font-semibold text-blue-600
          bg-blue-50 hover:bg-blue-100 transition-all
        "
      >
        <FiLogOut className="text-lg" />
        Sign Out
      </button>
    </aside>
  );
};



export default Sidebar;
