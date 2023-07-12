import React from "react";
import "./ServiceCard.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { FaColumns } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="bg  py-[100px]">
      <h1 className="uppercase mb-[60px] text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-center">
        my services
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-10 col-span-1 flex gap-5 border-secondary border-2 bg-[#9BD3D0] box">
          <div className="w-[70px] h-[70px] py-[10px] px-[15px] flex justify-center items-center border-secondary border-2 bg-white">
            <BsFillTelephoneFill className="text-[32px]" />
          </div>
          <div>
            <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-3">Web Design</h1>
            <p className="text-textColor text-[14px] md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id labore enim error ipsum saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="p-10 col-span-1 flex gap-5 border-secondary border-2 bg-[#FEC447] box">
          <div className="w-[70px] h-[70px] py-[10px] px-[15px] flex justify-center items-center border-secondary border-2 bg-white">
            <FaLaptop className="text-[32px]" />
          </div>
          <div>
            <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-3">Development</h1>
            <p className="text-textColor text-[14px] md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id labore enim error ipsum saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="p-10 col-span-1 flex gap-5 border-secondary border-2 bg-[#FECCB5] box">
          <div className="w-[70px] h-[70px] py-[10px] px-[15px] flex justify-center items-center border-secondary border-2 bg-white">
            <BsFillExclamationTriangleFill className="text-[32px]" />
          </div>
          <div>
            <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-3">SEO Marketing</h1>
            <p className="text-textColor text-[14px] md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id labore enim error ipsum saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="p-10 col-span-1 flex gap-5 border-secondary border-2 bg-[#92B5FF] box">
          <div className="w-[70px] h-[70px] py-[10px] px-[15px] flex justify-center items-center border-secondary border-2 bg-white">
            <FaColumns className="text-[32px]" />
          </div>
          <div>
            <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-3">Web Design</h1>
            <p className="text-textColor text-[14px] md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id labore enim error ipsum saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="p-10 col-span-1 flex gap-5 border-secondary border-2 bg-[#C4D39B] box">
          <div className="w-[70px] h-[70px] py-[10px] px-[15px] flex justify-center items-center border-secondary border-2 bg-white">
            <FaRulerVertical className="text-[32px]" />
          </div>
          <div>
            <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-3">Devlopment</h1>
            <p className="text-textColor text-[14px] md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id labore enim error ipsum saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="p-10 col-span-1 flex gap-5 border-secondary border-2 bg-[#D2CEFF] box">
          <div className="w-[70px] h-[70px] py-[10px] px-[15px] flex justify-center items-center border-secondary border-2 bg-white">
            <FaGlobe className="text-[32px]" />
          </div>
          <div>
            <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-semibold mb-3">SEO Marketing</h1>
            <p className="text-textColor text-[14px] md:text-base lg:text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id labore enim error ipsum saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
