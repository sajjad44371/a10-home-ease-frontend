import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const Slider = () => {
  return (
    <>
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
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center py-[50px] md:py-20 lg:py-[50px]">
              <div className="max-w-xl lg:max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 md:leading-[50px] lg:leading-[60px] text-[#fafafa]">
                  Verified Experts, Just a Click Away
                </h2>

                <p className="py-5 text-base">
                  Book vetted plumbers, electricians, and cleaners with
                  guaranteed quality service.
                </p>
                <Link
                  to="/services"
                  className="btn rounded-lg btn-primary duration-200 text-white"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center py-[50px] md:py-20 lg:py-[50px]">
              <div className="max-w-xl lg:max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 md:leading-[50px] lg:leading-[60px] text-[#fafafa]">
                  Your Home Tasks, Solved Instantly.
                </h2>
                <p className="py-5">
                  Stop searching for local pros. Get instant quotes and same-day
                  service availability right here.
                </p>
                <Link
                  to="/services"
                  className="btn rounded-lg btn-primary duration-200 text-white"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{ backgroundImage: `url(${image3})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center py-[50px] md:py-20 lg:py-[50px]">
              <div className="max-w-xl lg:max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 md:leading-[50px] lg:leading-[60px] text-[#fafafa]">
                  All Home Needs, One Platform.
                </h2>
                <p className="py-5">
                  From deep cleaning and pest control to appliance repair and
                  carpentry—we cover it all.
                </p>
                <Link
                  to="/services"
                  className="btn rounded-lg btn-primary duration-200 text-white"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
