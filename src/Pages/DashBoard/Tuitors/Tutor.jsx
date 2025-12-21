import React from "react";
import { Outlet } from "react-router";
import image from "../../../assets/image.png";

import Navbar from "../../../Components/Navber";
import TutorSidebar from "./TutorSidebar";

const Tuitor = () => {
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
           <TutorSidebar></TutorSidebar>
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

export default Tuitor;
