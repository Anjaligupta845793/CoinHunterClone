"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ImageSlider = () => {
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper ml-5"
      >
        <SwiperSlide>
          <div className="md:w-[300px] md:h-[400px]">
            <Image
              src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/6685844a8bbe58d2fa23eb9d_chart1.svg"
              width={400} // Set the width according to your needs
              height={600} // Set the height according to your needs
              layout="responsive" // Optional: Makes the image responsive
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[300px] md:h-[400px]">
            <Image
              src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/668584b88ef1d9cb14f4a861_chart2.svg"
              width={400} // Set the width according to your needs
              height={600} // Set the height according to your needs
              layout="responsive" // Optional: Makes the image responsive
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[300px] md:h-[400px]">
            <Image
              src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/668584b88ef1d9cb14f4a861_chart2.svg"
              width={400} // Set the width according to your needs
              height={600} // Set the height according to your needs
              layout="responsive" // Optional: Makes the image responsive
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[300px] md:h-[400px]">
            <Image
              src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/6685844a8bbe58d2fa23eb9d_chart1.svg"
              width={400} // Set the width according to your needs
              height={600} // Set the height according to your needs
              layout="responsive" // Optional: Makes the image responsive
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[300px] md:h-[400px]">
            <Image
              src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/668584b88ef1d9cb14f4a861_chart2.svg"
              width={400} // Set the width according to your needs
              height={600} // Set the height according to your needs
              layout="responsive" // Optional: Makes the image responsive
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[300px] md:h-[400px]">
            <Image
              src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/668584b7a95ce51d35c0784c_chart3.svg"
              width={400} // Set the width according to your needs
              height={600} // Set the height according to your needs
              layout="responsive" // Optional: Makes the image responsive
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
