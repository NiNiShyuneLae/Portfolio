import React, { useEffect, useRef } from "react";
import "./Intro.css";
import "./Nav.css";
import Typed from "typed.js";
import home from "../assets/images/home-banner.png";
import Nav from "./Nav";

const Intro = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Devloper", "Designer"],
      typeSpeed: 100,
      loop: true,
      backDelay: 700,
      backSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="home">
      <div className="container mx-auto min-h-screen flex items-center justify-center lg:justify-between ">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="col-span-1 mb-[50px] lg:mb-0 pt-[120px] pb-[80px] lg:pt-[180px] lg:pb-[100px] text-center lg:text-start">
            <p className="font-semibold tracking-[2px] mb-[30px] text-base uppercase">
              👋, My name is Krinky
            </p>
            <p className="xl:text-[70px] lg:text-[60px] text-[40px] mb-[25px] md:mb-[35px] font-semibold">
              I'm a <span ref={el}></span>
            </p>
            <p className="text-textColor mb-[8px] text-[20px]">
              Based in Los Angeles, California.
            </p>
            <button className="uppercase mt-[10px] py-[10px] px-[20px] tracking-[2px] btn text-white bg-primary">
              Let's Start
            </button>
          </div>
          <div className="col-span-1">
            <img src={home} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;