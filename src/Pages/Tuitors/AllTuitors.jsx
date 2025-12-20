import React, { use, useEffect, useState } from "react";
import TuitorCard from "./TuitorCard";
import { useLoaderData } from "react-router";
import image from "../../../src/assets/image.png";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const AllTuitors = () => {
  const [model, setmodel] = useState([]);

  const [loading, setloading] = useState(true);

  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`https://etuition-server-psi.vercel.app/tuitors`, {
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
            Our All Tutors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto  w-full h-fit item-center max-w-6xl pb-15  ">
            {model.map((tuitor) => (
              <TuitorCard key={tuitor._id} tuitor={tuitor} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllTuitors;
