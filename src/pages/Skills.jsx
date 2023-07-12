import React from "react";
import "../components/ServiceCard.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import skills from '../assets/images/skills.png'
import Banner from "../components/Banner";
import SkillBanner from "../components/SkillBanner";

const Skills = () => {
  return (
    <section className=" pt-[100px] data-section" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
        <div className="col-span-1">
          <h1 className="uppercase mb-[60px] text-[35px] md:text-[40px] lg:text-[50px] font-semibold">
            my skills
          </h1>
          <div className="container mx-auto grid grid-cols-2 gap-2 md:gap-4">
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#9BD3D0] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaHtml5 className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">HTML</h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#FEC447] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaCss3 className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">CSS</h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#FECCB5] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaReact className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">React JS</h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#92B5FF] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaAngular className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">Angular</h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#C4D39B] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaApple className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">IOS App</h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#D2CEFF] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <BsAndroid2 className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">APP Dev</h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-[40px] md:pt-0">
            <img src={skills} className="mx-auto" alt="" />
        </div>
      </div>
      <SkillBanner/>
    </section>
  );
};

export default Skills;
