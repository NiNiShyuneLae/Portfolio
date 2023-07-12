import React from "react";
import pj1 from "../assets/images/project-1.jpg";
import pj2 from "../assets/images/project-2.jpg";
import pj3 from "../assets/images/project-3.jpg";
import pj4 from "../assets/images/project-4.jpg";
import { FiArrowRight } from "react-icons/fi";

const PortfolioCard = () => {
  return (
    <div className="bg-orange-50  py-[100px]">
      <h1 className="uppercase mb-[60px] text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-center">
        my services
      </h1>
      <div className="container mx-auto">
        <div className=" grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-3 pb-12 lg:pb-3">
          <div className="col-span-1 mb-8 md:mb-0 md:my-auto transition-all duration-500 box">
            <div className="relative overflow-x-hidden pocard   ">
              <div className="absolute  top-5 translate-x-[-50px] card">
                <div className=" flex justify-center items-center  p-[8px]  border-secondary border-2 bg-white">
                  <FiArrowRight className="text-[24px]" />
                </div>
              </div>
              <img src={pj1} className=" border-2 border-secondary" alt="" />
            </div>
          </div>
          <div className="col-span-1 w-[100%] md:w-[80%] my-auto">
            <button className="py-2 px-5 rounded-full mb-5 bg-orange-100 uppercase text-sm md:text-base">
              Web Design
            </button>
            <h4 className="text-xl md:text-3xl font-semibold mb-6">
              Website Design for Marketing Agency Startup
            </h4>
            <p className="text-textColor mb-6 text-base lg:text-lg">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores
            </p>
            <button className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary">
              view project
            </button>
          </div>
        </div>
        <div className="reverse-grid grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-3 pb-12 lg:pb-3">
     
          <div className="col-span-1 w-[100%] md:w-[80%] my-auto">
            <button className="py-2 px-5 rounded-full mb-5 bg-orange-100 uppercase text-sm md:text-base">
              Web Design
            </button>
            <h4 className="text-xl md:text-3xl font-semibold mb-6">
              Website Design for Marketing Agency Startup
            </h4>
            <p className="text-textColor mb-6 text-base lg:text-lg">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores
            </p>
            <button className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary">
              view project
            </button>
          </div>
          <div className="col-span-1  md:mb-0 md:my-auto transition-all duration-500 box">
            <div className="relative overflow-x-hidden pocard   ">
              <div className="absolute  top-5 translate-x-[-50px] card">
                <div className=" flex justify-center items-center  p-[8px]  border-secondary border-2 bg-white">
                  <FiArrowRight className="text-[24px]" />
                </div>
              </div>
              <img src={pj2} className=" border-2 border-secondary" alt="" />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-3 pb-12 lg:pb-3">
          <div className="col-span-1 mb-8 md:mb-0 md:my-auto transition-all duration-500 box">
            <div className="relative overflow-x-hidden pocard   ">
              <div className="absolute  top-5 translate-x-[-50px] card">
                <div className=" flex justify-center items-center  p-[8px]  border-secondary border-2 bg-white">
                  <FiArrowRight className="text-[24px]" />
                </div>
              </div>
              <img src={pj3} className=" border-2 border-secondary" alt="" />
            </div>
          </div>
          <div className="col-span-1 w-[100%] md:w-[80%] my-auto">
            <button className="py-2 px-5 rounded-full mb-5 bg-orange-100 uppercase text-sm md:text-base">
              Web Design
            </button>
            <h4 className="text-xl md:text-3xl font-semibold mb-6">
              Website Design for Marketing Agency Startup
            </h4>
            <p className="text-textColor mb-6 text-base lg:text-lg">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores
            </p>
            <button className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary">
              view project
            </button>
          </div>
        </div>
        <div className="reverse-grid grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-3 pb-12 lg:pb-3">
     
          <div className="col-span-1 w-[100%] md:w-[80%] my-auto">
            <button className="py-2 px-5 rounded-full mb-5 bg-orange-100 uppercase text-sm md:text-base">
              Web Design
            </button>
            <h4 className="text-xl md:text-3xl font-semibold mb-6">
              Website Design for Marketing Agency Startup
            </h4>
            <p className="text-textColor mb-6 text-base lg:text-lg">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores
            </p>
            <button className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary">
              view project
            </button>
          </div>
          <div className="col-span-1  md:mb-0 md:my-auto transition-all duration-500 box">
            <div className="relative overflow-x-hidden pocard   ">
              <div className="absolute  top-5 translate-x-[-50px] card">
                <div className=" flex justify-center items-center  p-[8px]  border-secondary border-2 bg-white">
                  <FiArrowRight className="text-[24px]" />
                </div>
              </div>
              <img src={pj4} className=" border-2 border-secondary" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
