// components/TuitionPostCard.jsx
import React from "react";
import { SwiperSlide } from "swiper/react";
import MySwiper from "../../Components/MySwiper";


const TuitionCard = ({ post }) => {
  return (
   <div className="px-2 py-4">
              <div
                className=" relative w-full max-w-[270px] mx-auto rounded-2xl shadow-lg hover:shadow-2xl
                           border border-gray-100 overflow-hidden transition-all duration-300
                           h-[360px] flex flex-col
                           bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100"
              >
                {/* Same soft overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Student / Guardian Photo - EXACT same as Tutor Card */}
                  <div className="pt-6 px-4 flex justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-cyan-200/50">
                      <img
                        src={post.photo || post.student_photo || "https://via.placeholder.com/150?text=Student"}
                        alt={post.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content - Identical to Tutor Card */}
                  <div className="px-4 pt-5 flex flex-col flex-grow text-center">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                      {post.name || "Anonymous"}
                    </h3>

                    {/* Description - Max 2 lines */}
                    <p
                      className="text-xs text-gray-600 mt-3 line-clamp-2 leading-snug"
                      title={post.description}
                    >
                      {post.description || "Looking for a tutor..."}
                    </p>

                    {/* Location & Budget */}
                    <div className="mt-5 text-xs text-gray-700 space-y-1">
                      <p className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{post.location}</span>
                      </p>

                      <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 text-sm">
                        Budget: {post.budget}
                      </p>
                    </div>

                    {/* Same button */}
                    <div className="mt-auto py-3">
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 
                                        hover:from-cyan-600 hover:to-blue-700 
                                        text-white font-semibold text-sm py-3 rounded-xl 
                                        shadow-md hover:shadow-lg transition-all duration-200 
                                        active:scale-95">
                        Apply as Tutor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default TuitionCard;