import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import avatar1 from "../assets/images/avatar-1.jpg";
import avatar2 from "../assets/images/avatar-2.jpg";
import avatar3 from "../assets/images/avatar-3.jpg";
import avatar4 from "../assets/images/avatar-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const breakpoints = {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  };
  return (
    <div className="py-[100px]">
      <h1 className="uppercase mb-[60px] text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-center">
        Testimonial
      </h1>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        className="mySwiper container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 "
        modules={[Pagination]}
      >
        <SwiperSlide className=" mb-10">
          <div className="p-5 lg:p-10 z-10 box col-span-1 flex gap-5 border-secondary border-2 bg-white  relative">
            <img
              src={avatar1}
              className="w-[100px] h-[100px] border-2 border-secondary "
              alt=""
            />
            <div className="">
              <div className="">
                <p className="text-textColor mb-3 text-[14px] md:text-base lg:text-lg ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div>
                  <h6 className="font-semibold">Jennifer Lutheran</h6>
                  <p className="text-sm text-textColor">CEO at pxdraft</p>
                </div>
              </div>
              <FaQuoteLeft className="absolute text-[#e5e7eb] text-[84px] bottom-[35px] right-[35px] z-[-1]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-10">
          <div className="p-5 lg:p-10 z-10 box col-span-1 flex gap-5 border-secondary border-2 bg-white  relative">
            <img
              src={avatar2}
              className="w-[100px] h-[100px] border-2 border-secondary "
              alt=""
            />
            <div className="">
              <div className="">
                <p className="text-textColor mb-3 text-[14px] md:text-base lg:text-lg ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div>
                  <h6 className="font-semibold">Jennifer Lutheran</h6>
                  <p className="text-sm text-textColor">CEO at pxdraft</p>
                </div>
              </div>
              <FaQuoteLeft className="absolute text-[#e5e7eb] text-[84px] bottom-[35px] right-[35px] z-[-1]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-10">
          <div className="p-5 lg:p-10 z-10 box col-span-1 flex gap-5 border-secondary border-2 bg-white  relative">
            <img
              src={avatar3}
              className="w-[100px] h-[100px] border-2 border-secondary "
              alt=""
            />
            <div className="">
              <div className="">
                <p className="text-textColor mb-3 text-[14px] md:text-base lg:text-lg ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div>
                  <h6 className="font-semibold">Jennifer Lutheran</h6>
                  <p className="text-sm text-textColor">CEO at pxdraft</p>
                </div>
              </div>
              <FaQuoteLeft className="absolute text-[#e5e7eb] text-[84px] bottom-[35px] right-[35px] z-[-1]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-10">
          <div className="p-5 lg:p-10 z-10 box col-span-1 flex gap-5 border-secondary border-2 bg-white  relative">
            <img
              src={avatar4}
              className="w-[100px] h-[100px] border-2 border-secondary "
              alt=""
            />
            <div className="">
              <div className="">
                <p className="text-textColor mb-3 text-[14px] md:text-base lg:text-lg ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div>
                  <h6 className="font-semibold">Jennifer Lutheran</h6>
                  <p className="text-sm text-textColor">CEO at pxdraft</p>
                </div>
              </div>
              <FaQuoteLeft className="absolute text-[#e5e7eb] text-[84px] bottom-[35px] right-[35px] z-[-1]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-10">
          <div className="p-5 lg:p-10 z-10 box col-span-1 flex gap-5 border-secondary border-2 bg-white  relative">
            <img
              src={avatar1}
              className="w-[100px] h-[100px] border-2 border-secondary "
              alt=""
            />
            <div className="">
              <div className="">
                <p className="text-textColor mb-3 text-[14px] md:text-base lg:text-lg ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div>
                  <h6 className="font-semibold">Jennifer Lutheran</h6>
                  <p className="text-sm text-textColor">CEO at pxdraft</p>
                </div>
              </div>
              <FaQuoteLeft className="absolute text-[#e5e7eb] text-[84px] bottom-[35px] right-[35px] z-[-1]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-10">
          <div className="p-5 lg:p-10 z-10 box col-span-1 flex gap-5 border-secondary border-2 bg-white  relative">
            <img
              src={avatar2}
              className="w-[100px] h-[100px] border-2 border-secondary "
              alt=""
            />
            <div className="">
              <div className="">
                <p className="text-textColor mb-3 text-[14px] md:text-base lg:text-lg ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div>
                  <h6 className="font-semibold">Jennifer Lutheran</h6>
                  <p className="text-sm text-textColor">CEO at pxdraft</p>
                </div>
              </div>
              <FaQuoteLeft className="absolute text-[#e5e7eb] text-[84px] bottom-[35px] right-[35px] z-[-1]" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
