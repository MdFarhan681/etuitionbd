import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const TuitorCard = ({ tuitor }) => {
 
  return (
    <div
      className=" relative w-full max-w-[250px] mx-auto rounded-2xl shadow-lg hover:shadow-2xl
                 border border-gray-100 overflow-hidden transition-all duration-300
                 h-[350px] flex flex-col  bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100
             "
    >
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative z-20 flex flex-col h-full">
        <div className="pt-6 px-4 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-cyan-200/50">
            <img
              src={tuitor.photo}
              alt={tuitor.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="px-4 pt-5 flex flex-col flex-grow text-center">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
            {tuitor.name}
          </h3>
          <p
            className="text-xs text-gray-600 mt-2 line-clamp-1"
            title={tuitor.educational_institution}
          >
            {tuitor.educational_institution}
          </p>

          <div className="mt-4 text-xs text-gray-700 space-y-1">
            <p className="line-clamp-1">{tuitor.location}</p>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              {tuitor.expected_salary}
            </p>
          </div>

          <div className="mt-auto pt-4 pb-3">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitorCard;