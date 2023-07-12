import React from "react";
import img from "../assets/images/contact-bg.png";
import { FaEnvelope, FaPhoneAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className=" col-span-1 w-full lg:w-[80%] ms-0 lg:ms-[200px]">
      <img src={img} className="w-full mb-10" alt="" />
      <div className=" pb-[35px] flex gap-5 ">
        <div className="w-[55px] h-[55px] p-[10px] flex justify-center items-center border-secondary border-2 bg-[#9BD3D0]">
          <FaPhoneAlt className="text-[26px]" />
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400 font-medium mb-2">
            phone
          </p>
          <p className="text-lg md:text-xl text-gray-100 font-medium">
            +01 123 654 8096
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
          info@domainname.com
          </p>
        </div>
      </div>
      <div className=" pb-[35px] flex gap-5 ">
        <div className="w-[55px] h-[55px] p-[10px] flex justify-center items-center border-secondary border-2 bg-[#FECCB5]">
          <FaMapMarkerAlt className="text-[26px]" />
        </div>
        <div>
          <p className="text-sm uppercase text-gray-400 font-medium mb-2">
          Visit My Studio
          </p>
          <p className="text-lg md:text-xl text-gray-100 font-medium">
          Warnwe Park Streetperrine, 
          <br />
          FL 33157 New York City
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
