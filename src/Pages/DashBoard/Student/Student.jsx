import React from "react";
import { Outlet } from "react-router";
import image from "../../../assets/image.png";
import Sidebar from "./Sidebar";
import Navbar from "../../../Components/Navber";

const Student = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <img src={image} className="h-40 w-full object-cover " alt="" />

      <div className="flex-1 px-[5%] md:px-[7%]  bg-blue-100/10">
        <div
          className="
            flex
            flex-col          
            md:flex-row       
            gap-6
            mt-6 
          "
        >
          <div
            className="
              w-full           
              md:w-[30%] 
              mx-auto    
             
            "
          >
            <Sidebar />
          </div>

          <main
            className="
            

              w-full
              md:flex-1 
            "
          >
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Student;
