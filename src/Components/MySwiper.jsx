// Components/MySwiper.jsx
import React, { memo } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const MySwiper = memo(({ children }) => {
  return (
    <Swiper
      slidesPerView={5}
      loop
      speed={600}
      cssMode={false}
      observer={false}
      observeParents={false}
      resizeObserver={false}
      watchSlidesProgress={false}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      modules={[Autoplay]}
    >
      {children}
    </Swiper>
  );
});

export default MySwiper;
