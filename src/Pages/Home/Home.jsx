import React from "react";
import image from "../../../src/assets/image.png";
import TuitionCard from "../Tuitions/TuitionCard";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import { getLatest } from "../../Components/Filter";
import TuitorCard from "../Tuitors/TuitorCard";
import MySwiper from "../../Components/MySwiper";
import { SwiperSlide } from "swiper/react";
import HowWork from "./HowWork/HowWork";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  const data = useLoaderData();

  const latestTuitions = getLatest(data.tuitions, "dateCreated", 9);
  const latestTuitors = getLatest(data.tuitors, "date_created", 9);


  return (
    <div className=" bg-gradient-to-br from-white to-blue-100/40 mb-0">

      <img className="h-50 w-full " src={image} alt="" />
      <Banner></Banner>

      <main>
        {/* latestTuitors */}
        <div className="latestTuitors pt-4 md:pt-10  bg-blue-100/10">
          <h2 className=" text-2xl md:text-3xl font-bold text-center pb-2 py-4">
            Our latest Tutors
          </h2>

          <div className="w-full px-4 sm:px-6 lg:px-[7%] py-8">
    <MySwiper>
      {latestTuitors.map((tuitor) => (
                <SwiperSlide key={tuitor._id}>
                  <TuitorCard key={tuitor._id} tuitor={tuitor}></TuitorCard>
                </SwiperSlide>
              ))}
    </MySwiper>
          
          </div>
        </div>

        {/* latestTuitions */}
          <div className="latestTuitors pt-4 md:pt-10  bg-blue-100/10">
          <h2 className=" text-2xl md:text-3xl font-bold text-center pb-2 py-4">
            Our latest Tuitions
          </h2>

          <div className="w-full px-4 sm:px-6 lg:px-[7%] py-8">
            <MySwiper>
              {latestTuitions.map((post) => (
                <SwiperSlide key={post._id}>
                  <TuitionCard key={post._id} post={post}></TuitionCard>
                </SwiperSlide>
              ))}
            </MySwiper>
          </div>
        </div>

        {/* how work */}
        <div className="howWork  bg-blue-100/10 ">
          <HowWork></HowWork>
        </div>
      {/* WhyChoose us */}
      <div className="ChooseUs bg-blue-100/10">
      <WhyChoose></WhyChoose>
      </div>



      </main>
    </div>
  );
};

export default Home;
