import React, { use, useEffect, useState } from "react";
import TuitionCard from "./TuitionCard";
import image from "../../../src/assets/image.png";
import { useLoaderData } from "react-router";
import axios from "axios";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Alltuitions = () => {
  const [model, setmodel] = useState([]);

  const [loading, setloading] = useState(true);

  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`https://etuition-server-psi.vercel.app/tuitions`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setmodel(data);
        setloading(false);
      });
  }, []);

  return (
    <div className="  bg-gradient-to-br from-blue-30  to-blue-70 ">
      <img className="h-40 w-full  " src={image} alt="" />
      <div className=" ">
        <main className=" flex flex-col w-[92%] mx-auto ">
          <h2 className=" text-2xl md:text-3xl font-bold text-center pb-5 text-black">
            Our All Tuitions
          </h2>

          {/* search bar */}
          {/* <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-5 sm:p-6 border border-gray-100 w-100 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <select
                defaultValue="Bangla"
                className="select select-bordered select-info w-full text-sm"
              >
                <option disabled>Select Version</option>
                <option>Bangla</option>
                <option>English</option>
              </select>

              <select
                defaultValue=""
                className="select select-bordered select-info w-full text-sm"
              >
                <option disabled>Class</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
                <option>O-Level</option>
                <option>A-Level</option>
              </select>
            </div>

            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 items-center">
              <select
                defaultValue=""
                className="select select-bordered select-info w-full text-sm col-span-2 sm:col-span-2"
              >
                <option disabled>Subject</option>
                <option>Math</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>English</option>
                <option>Science</option>
              </select>

              <button className="btn btn-info text-white font-semibold text-sm hover:scale-105 transition-transform">
                Search
              </button>
            </div>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto  w-full h-fit item-center max-w-6xl pb-15  ">
            {model.map((post) => (
              <TuitionCard key={post._id} post={post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Alltuitions;
