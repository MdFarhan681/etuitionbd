import React from "react";
import { NavLink } from "react-router";

const DashboardDropdown = ({ role }) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost font-semibold">
        {role === "student" ? "My Dashboard" : "Tutor Dashboard"}
      </label>

      <ul
        tabIndex={0}
        className="menu dropdown-content mt-3 w-56 rounded-box bg-base-100 p-2 shadow"
      >
        {role === "student" ? (
          <>
            <li><NavLink to="/dashboard/student">Dashboard Home</NavLink></li>
            <li><NavLink to="/dashboard/student/profile">My Profile</NavLink></li>
            <li><NavLink to="/dashboard/student/bookings">My Bookings</NavLink></li>
            <li><NavLink to="/dashboard/student/payments">Payments</NavLink></li>
            <li><NavLink to="/dashboard/student/settings">Settings</NavLink></li>
          </>
        ) : (
          <>
            <li><NavLink to="/dashboard/tutor">Dashboard Home</NavLink></li>
            <li><NavLink to="/dashboard/tutor/profile">Tutor Profile</NavLink></li>
            <li><NavLink to="/dashboard/tutor/classes">My Classes</NavLink></li>
            <li><NavLink to="/dashboard/tutor/students">My Students</NavLink></li>
            <li><NavLink to="/dashboard/tutor/earnings">Earnings</NavLink></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DashboardDropdown;
