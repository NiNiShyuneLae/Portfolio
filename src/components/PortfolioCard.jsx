import React from "react";
import contact from "../assets/images/contact.png";
import db from "../assets/images/dashboard.png";
import interior from "../assets/images/interior.png";
import dummy from "../assets/images/dummy.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PortfolioCard = () => {
  return (
    <div className="bg-orange-50  py-[100px]">
      <h1 className="uppercase mb-[60px] text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-center">
        my projects
      </h1>
      <div className="container mx-auto">
        <div className=" grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-3 pb-12 lg:pb-3">
          <div className="col-span-1 mb-8 md:mb-0 md:my-auto transition-all duration-500 box">
            <div className="relative overflow-x-hidden pocard">
              <a href="https://create-contact.netlify.app/" target="_blank" className="absolute  top-5 translate-x-[-50px] card">
                <div className=" flex justify-center items-center  p-[8px]  border-secondary border-2 bg-white">
                  <FiArrowRight className="text-[24px]" />
                </div>
              </a>
              <img
                src={contact}
                className="lg:p-3 p-0 border-2 border-secondary"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 w-[100%] md:w-[80%] my-auto">
            <button className="py-2 px-5 rounded-full mb-5 bg-orange-100 uppercase text-sm md:text-base">
              Web Application
            </button>
            <h4 className="text-xl md:text-3xl font-semibold mb-6">
              Contact App
            </h4>
            <p className="text-textColor mb-6 text-base lg:text-lg">
              Our feature-rich app, built with React.js, HTML, CSS, and Tailwind
              CSS, lets you effortlessly create and organize contacts. Enjoy a
              seamless user experience on all devices.
            </p>
            <a href="https://create-contact.netlify.app" target="_blank" className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary">
              view project
            </a>
          </div>
        </div>
        <div className="reverse-grid grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-3 pb-12 lg:pb-3">
          <div className="col-span-1 w-[100%] md:w-[80%] my-auto">
            <button className="py-2 px-5 rounded-full mb-5 bg-orange-100 uppercase text-sm md:text-base">
              Web Design
            </button>
            <h4 className="text-xl md:text-3xl font-semibold mb-6">
              Bauen-Interior
            </h4>
            <p className="text-textColor mb-6 text-base lg:text-lg">
              With a perfect blend of HTML, CSS, JavaScript, Tailwind CSS, and
              React, our web page showcases captivating interior design
              projects. Experience responsive and visually stunning websites
              crafted with expertise and passion.
            </p>
            <a
              href="https://bauen-interior.netlify.app/"
              target="_blank"
              className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary"
            >
              view project
            </a>
          </div>
          <div className="col-span-1  md:mb-0 md:my-auto transition-all duration-500 box">
            <div className="relative overflow-x-hidden pocard   ">
              <a href="https://bauen-interior.netlify.app/" target="_blank" className="absolute  top-5 translate-x-[-50px] card">
                <div className=" flex justify-center items-center  p-[8px]  border-secondary border-2 bg-white">
                  <FiArrowRight className="text-[24px]" />
                </div>
              </a>
              <img
                src={interior}
                className=" border-2 lg:p-3 p-0 border-secondary"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-3 pb-12 lg:pb-3">
          <div className="col-span-1 mb-8 md:mb-0 md:my-auto transition-all duration-500 box">
            <div className="relative overflow-x-hidden pocard   ">
              <a href="https://bauen-architecture-dashboard.netlify.app/" target="_blank" className="absolute  top-5 translate-x-[-50px] card">
                <div className=" flex justify-center items-center  p-[8px]  border-secondary border-2 bg-white">
                  <FiArrowRight className="text-[24px]" />
                </div>
              </a>
              <img
                src={db}
                className=" border-2 border-secondary lg:p-3 p-0"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 w-[100%] md:w-[80%] my-auto">
            <button className="py-2 px-5 rounded-full mb-5 bg-orange-100 uppercase text-sm md:text-base">
              Web Design
            </button>
            <h4 className="text-xl md:text-3xl font-semibold mb-6">
              Bauen-Interior Dashboard
            </h4>
            <p className="text-textColor mb-6 text-base lg:text-lg">
              This Admin Dashboard is the powerful control center for our
              interior web page, putting you in charge of effortlessly managing
              your interior design projects and creating captivating blogs.
            </p>
            <a
              href="https://bauen-architecture-dashboard.netlify.app/"
              target="_blank"
              className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary"
            >
              view project
            </a>
          </div>
        </div>
        <div className="reverse-grid grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-3 pb-12 lg:pb-3">
          <div className="col-span-1 w-[100%] md:w-[80%] my-auto">
            <button className="py-2 px-5 rounded-full mb-5 bg-orange-100 uppercase text-sm md:text-base">
              Web Application
            </button>
            <h4 className="text-xl md:text-3xl font-semibold mb-6">QuickBuy</h4>
            <p className="text-textColor mb-6 text-base lg:text-lg">
              Explore a variety of products, read detailed descriptions, and
              shop with ease. Powered by HTML, CSS, Bootstrap , React and Dummy JSON, our user-friendly interface ensures a seamless
              shopping experience on any device.
            </p>
            <a
              href="https://dummy-cart-rtk.netlify.app/"
              target="_blank"
              className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary"
            >
              view project
            </a>
          </div>
          <div className="col-span-1  md:mb-0 md:my-auto transition-all duration-500 box">
            <div className="relative overflow-x-hidden pocard   ">
              <a href="https://dummy-cart-rtk.netlify.app/" target="_blank" className="absolute  top-5 translate-x-[-50px] card">
                <div className=" flex justify-center items-center  p-[8px]  border-secondary border-2 bg-white">
                  <FiArrowRight className="text-[24px]" />
                </div>
              </a>
              <img
                src={dummy}
                className=" border-2  lg:p-3 p-0 border-secondary"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
