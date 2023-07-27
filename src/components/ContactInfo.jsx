import React from "react";
import img from "../assets/images/contact-bg.png";
import { FaEnvelope, FaPhoneAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Lottie from 'lottie-react'
import animation from '../assets/icons/animation_lkf8ztyt.json'

const ContactInfo = () => {
  return (
    <div className="mx-auto  w-full md:w-1/2 " >
      <div className="">
      <Lottie animationData={animation} className="h-[500px] " loop={true} />
      </div>
      <div className="p-4">
      <div className=" pb-[35px] flex gap-5 ">
        <div className="w-[55px] h-[55px] p-[10px] flex justify-center items-center border-secondary border-2 bg-[#9BD3D0]">
          <FaPhoneAlt className="text-[26px]" />
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400 font-medium mb-2">
            phone
          </p>
          <p className="text-lg md:text-xl text-gray-100 font-medium">
            09774701629
          </p>
        </div>
      </div>
      <div className=" pb-[35px] flex gap-5 ">
        <div className="w-[55px] h-[55px] p-[10px] flex justify-center items-center border-secondary border-2 bg-[#FEC447]">
          <FaEnvelope className="text-[26px]" />
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400 font-medium mb-2">
          Mail
          </p>
          <p className="text-lg md:text-xl text-gray-100 font-medium">
          ninishyunelae@gmail.com
          </p>
        </div>
      </div>
      <div className=" pb-[35px] flex gap-5 ">
        <div className="w-[55px] h-[55px] p-[10px] flex justify-center items-center border-secondary border-2 bg-[#FECCB5]">
          <FaMapMarkerAlt className="text-[26px]" />
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400 font-medium mb-2">
          Address
          </p>
          <p className="text-lg md:text-xl text-gray-100 font-medium">
          Yadanar Street,
          <br />
          Nyaung Phyu Sakham Quarter ,
          Taunggyi
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactInfo;
