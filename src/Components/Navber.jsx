import React, { use, useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../src/assets/logo.png";
import { handleNav } from "../NavigateLoader";
import toast from "react-hot-toast";
import "animate.css";

import Loader from "./Loader";
import { AuthContext } from "./Provider/AuthProvider";


const Navbar = () => {
  const [loading, setloading] = useState(false);
 
  const navigate = useNavigate();

    const { user, logOut,dbUser  } = useContext(AuthContext);
    const defaultPhoto = "https://i.ibb.co/7dLrnrMw/mann.jpg";

console.log(dbUser)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch(() => {
       toast.success("Do not LogOut.Try again");
      });
  };


  const link = (
    <>
      <NavLink
        onClick={() => handleNav(navigate, "/", setloading)}
        className="px-3 font-semibold"
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        onClick={() => handleNav(navigate, "/allTuitors", setloading)}
        className="px-3 font-semibold"
        to="/allTuitors"
      >
        All Tutors
      </NavLink>

      <NavLink
        onClick={() => handleNav(navigate, "/allTuitions", setloading)}
        className="px-3 font-semibold "
        to="/allTuitions"
      >
        All Tuitions
      </NavLink>

      <NavLink
        onClick={() => handleNav(navigate, "/about", setloading)}
        className="px-3 font-semibold "
        to="/myProduct"
      >
       About
      </NavLink>

      <NavLink
        onClick={() => handleNav(navigate, "/contact", setloading)}
        className="px-3 font-semibold "
        to="/myBooking"
      >
  Contact
      </NavLink>
 {!loading && dbUser?.role && (
  <NavLink
    to={`/dashboard/${dbUser.role}`}
    className="px-3 font-semibold"
  >
    Dashboard
  </NavLink>
)}


    </>
  
  );

  return (
    <>
      {loading && <Loader></Loader>}
      
<div className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-2xl px-[7%]"> <div className="navbar rounded-2xl mt-4 
               shadow-2xl shadow-black/10 
               backdrop-blur-md bg-opacity-90
               border border-base-300
   bg-base-100/30 animate__animated  animate__fadeInDown 
              ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              {link}
            </ul>
          </div>

          <NavLink
            onClick={() => handleNav(navigate, "/", setloading)}
            className="logo animate__animated animate__rubberBand flex btn btn-ghost p-1 h-fit"
            to="/"
          >
            <img className="w-12 h-10 rounded-xl " src={logo} alt="" />
            <p className="hidden sm:block text-xl text-balance text-primary">
              eTuitionBD
            </p>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-2">{link}</ul>
        </div>

        <div className="navbar-end">
      
          {
          
          
          user ? (
            <>
           
              <button
    
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip={user.displayName}
              >
                {" "}
                <img
                  src={user.photoURL || defaultPhoto}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultPhoto;
                  }}
                  className="w-12 h-12 mx-2 rounded-full border border-blue-300
     p-1 hover:"
                  alt=""
                />
              </button>

              <button
                onClick={handleLogOut}
                className="w-20 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 px-4 mr-4"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link to="/auth/login"  className="w-20 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 px-4 mr-4 mx-auto text-center"
              >
              Login
            </Link>
          )} 

        </div>


        
      </div>

      </div>
     
    </>
  );
};

export default Navbar;
