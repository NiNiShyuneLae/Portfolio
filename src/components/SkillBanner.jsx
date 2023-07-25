import React from "react";

const SkillBanner = () => {
  return (
    <div className="py-10 bg-secondary">
      <div className="container mx-auto flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between">
        <h1 className="text-[25px] md:text-[30px] lg:text-[35px] font-semibold text-white">
          Intrested working with me?
        </h1>
        <a href="#contact" className="uppercase mt-[10px] py-[10px] px-[20px] tracking-[2px] yellowish font-medium  bg-caution">
          contact now
        </a>
      </div>
    </div>
  );
};

export default SkillBanner;
