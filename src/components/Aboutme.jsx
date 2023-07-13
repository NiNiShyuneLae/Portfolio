import React from "react";
import about from "../assets/images/aboutme-banner.png";

const Aboutme = () => {
  return (
    <div className="container mx-auto">
      <div className="flex min-h-screen justify-between py-[45px] md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 mx-auto mb-[25px] lg:mb-0 lg:mx-0">
            <img src={about} alt="" />
          </div>
          <div className="col-span-1">
            <h1 className="font-semibold text-[26px] md:text-[40px] mb-[25px]">
              I'm a Freelancer Front-end Developer with over 3 years of
              experience.
            </h1>
            <p className="text-textColor text-[16px] md:text-[18px] mb-[25px]">
              I'm a Freelancer Front-end Developer with over 3 years of
              experience. I'm from San Francisco. I code and create web elements
              for amazing people around the world. I like work with new people.
              New people new Experiences.
            </p>
            <div className="flex items-center gap-10 mb-[18px]">
            <h4 className="">
              <span className="text-primary text-[26px] font-semibold">
                285+
              </span>{" "}
              <div className="text-textColor">Project Completed</div>
            </h4>
            <h4 className="">
              <span className="text-primary text-[26px] font-semibold">
                190+
              </span>{" "}
              <div className="text-textColor">Happy Client</div>
            </h4>
            </div>
            <div>
            <a href="#contact"  className="uppercase font-medium mt-[10px] mr-4 py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary">
              Contact Me
            </a>
            <a href="#portfolio" className="uppercase font-medium mt-[10px] py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary">
              Portfolio
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
