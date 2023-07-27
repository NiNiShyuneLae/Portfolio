import React from "react";
import about from "../assets/images/aboutme-banner.png";
import Lottie from "lottie-react";
import animation from "../assets/icons/animation_lkex9q7x.json";
import {BsGithub} from 'react-icons/bs';
import resume from '../assets/NiNiShyuneLae-resume.pdf'

const Aboutme = () => {
  return (
    <div className="container mx-auto">
      <div className="flex  justify-between py-[45px] md:py-[100px]">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1  mx-auto mb-[25px] lg:mb-0 lg:mx-0">
            <Lottie animationData={animation} loop={true} />
            
          </div>
          <div className="col-span-1">
            <h1 className="font-semibold text-[26px] md:text-[40px] mb-[25px]">
              I'm a Junior Front-end Developer.
            </h1>
            <p className="text-textColor text-[16px] md:text-[18px] mb-[25px]">
              Welcome to my portfolio website! I am an aspiring junior front-end
              developer with a strong passion for crafting visually stunning and
              user-centric web experiences. I have  2-month workshop experience at MMS IT,
              where I honed my skills in HTML, CSS, and JavaScript. Through my
              showcased projects, you'll witness my dedication to creating
              responsive and engaging websites that leave a lasting impact. I
              thrive on challenges and I am constantly exploring new opportunities
              to expand my knowledge and expertise. Join me on this exciting
              journey of growth and creativity as we build exceptional digital
              experiences together. Thank you for visiting.
            </p>
              <div className="cursor-pointer flex items-center gap-2">
                <BsGithub/>
                <a href="https://github.com/NiNiShyuneLae" target="_blank" className="font-semibold pb-1 hover:text-gray-500  hover:underline transition-all duration-400">Follow me on github for more details</a>
              </div>
            <div className="pt-[25px] flex flex-col lg:flex-row items-start gap-2">
              <a
                href="#contact"
                className="uppercase font-medium mt-[10px] mr-4 py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary"
              >
                Contact Me
              </a>
              <a
                href={resume}
                download='NiNiShyuneLae-resume.pdf'
                className="uppercase cursor-pointer font-medium mt-[10px] py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
