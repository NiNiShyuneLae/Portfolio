import React from "react";
import "../components/ServiceCard.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import skills from "../assets/images/skills.png";
import Banner from "../components/Banner";
import SkillBanner from "../components/SkillBanner";
import Lottie from 'lottie-react'
import animation from '../assets/icons/animation_lkewrkqh.json'

const Skills = () => {
  return (
 <>
    <section className="lg:p-[100px] p-[4px] py-[100px] data-section bg-orange-50" id="skills">
      <div className="grid  grid-cols-1 md:grid-cols-2 container mx-auto">
        <div className="col-span-1">
          <h1 className="uppercase mb-[60px] text-[35px] md:text-[40px] lg:text-[50px] font-semibold">
            my skills
          </h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <div className="p-[15px]  col-span-1 flex gap-5 border-secondary border-2 bg-[#f69f7a] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaHtml5 className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">
                HTML
              </h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#7ea2f8] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaCss3 className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">
                CSS
              </h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#f7e351] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <IoLogoJavascript className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">
                Javascript
              </h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#e898c0] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaSass className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">
                SASS
              </h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#b377ec] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaBootstrap className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">
                Bootstrap
              </h1>
            </div>{" "}
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#69dff4] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <BiLogoTailwindCss className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">
                Tailwind
              </h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#94def2] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <FaReact className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">
                React JS
              </h1>
            </div>
            <div className="p-[15px] col-span-1 flex gap-5 border-secondary border-2 bg-[#bb90fb] box">
              <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                <SiRedux className="text-[32px]" />
              </div>
              <h1 className="text-base lg:text-lg  font-semibold my-auto">
                Redux
              </h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-[40px] md:pt-0 my-auto">
          <Lottie animationData={animation} loop={true}/>
        </div>
      </div>
      
    </section>
    <SkillBanner /></>
    
  );
};

export default Skills;
