import React, { use, useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams, useSearchParams } from "react-router";
import { formatDistanceToNow } from "date-fns";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../../Components/Loader";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const [model, setmodel] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(`https://assignmenttenserver-pi.vercel.app/products/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setmodel(data.result);
        setloading(false);
      });
  }, []);

  const handleBook = async () => {
    fetch("https://assignmenttenserver-pi.vercel.app/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...model, customerEmail: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully Booked!");
        } else {
          toast.error("Booking Failed!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const {
    productName,
    category,
    pricePerKg,
    location,
    availability,
    description,
    coverImage,
    userEmail,
    createdAt,
  } = model;

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="details w-full py-10 md:px-15 px-[7%]">
      <div className="pb-3 flex flex-col md:flex-row ">
        <img className="w-65 rounded" src={coverImage} alt="" />

        <div className="topCont pl-3 w-full ">
          <div className="contHead  ">
            <h2 className="font-bold text-3xl text-transparent font-semibold bg-gradient-to-r from-[#20a34a] to-[#69ed93] bg-clip-text ">{productName}</h2>

            <p className="text-secondary pt-1 ">
              Category:{" "}
              <span className="text-transparent font-semibold bg-gradient-to-r from-[#20a34a]  to-[#69ed93] bg-clip-text ">
                {category}
              </span>
            </p>
            <p className="text-secondary pt-1 ">
              Email:{" "}
              <span className="text-transparent font-semibold bg-gradient-to-r from-[#20a34a]  to-[#69ed93] bg-clip-text ">
                {userEmail}
              </span>
            </p>

            <p className="text-secondary pt-1 ">
              Location:{" "}
              <span className="text-transparent font-semibold bg-gradient-to-r from-[#20a34a]  to-[#69ed93] bg-clip-text ">
                {location}
              </span>
            </p>

            <hr className="text-gray-300 w-full " />
          </div>

          <div className="topicons flex justify-between w-full md:w-100 pt-3 ">
            <div className="download flex flex-col">
              <p className="text-gray-400 text-sm py-1">Price Per kg</p>
              <p className="text-[#20a34a] text-[1.25 rem] md:text-xl font-semibold">
                {pricePerKg}
              </p>
            </div>
            <div className="avgRating flex flex-col justify-center items-center ">
              <p className="text-gray-400 text-sm py-1">Availablity</p>
              <p className="text-[#20a34a] text-[1.25 rem] md:text-xl font-semibold">
                {availability}
              </p>
            </div>

            <div className="avgRating flex flex-col ">
              <p className="text-gray-400 text-sm py-1">Stock Date</p>
              <p className="text-[#20a34a] text-[1.25 rem] md:text-xl font-semibold">
                {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-300 w-full " />

      <div className="des w-full h-fit my-10">
        <h1 className="font-bold text-xl  py-3">Description</h1>
        <p className="text-[#627382] text-justify py-2">
          {description}Organic food is cultivated without synthetic chemicals,
          pesticides, or genetically modified organisms, ensuring natural
          growth. Rich in nutrients and free from harmful additives, it supports
          overall health and well-being. By choosing organic, consumers promote
          sustainable farming, protect the environment, and enjoy fresher,
          tastier produce. Organic products offer a safer, healthier, and more
          eco-friendly lifestyle for everyone.
        </p>
      </div>

      <div className="bookedBtn flex justify-center item-center ">
        <button
          onClick={handleBook}
          className="btn px-9 shadow-xl shadow-green border border-green-700 py-3 font-semibold rounded-md text-black bg-green-500  hover:text-white hover:border-white transition-all duration-300 "
        >
          {" "}
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
