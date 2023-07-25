import React from 'react';
import one from '../assets/images/brand-1.svg';
import two from '../assets/images/brand-2.svg';
import three from '../assets/images/brand-3.svg';
import four from '../assets/images/brand-4.svg';
import five from '../assets/images/brand-5.svg';

const Banner = () => {
  return (
    <div className='py-10 bg-secondary'>
        <div className='container mx-auto flex flex-col items-center justify-between'>
            <div className='w-[130px] md:w-[150px]'>
            <img className='w-full  mr-5 p-5' src={one} alt="" />
            </div>
            <div className="w-[130px] md:w-[150px]">
            <img className='w-full  mr-5 p-5' src={two} alt="" />

            </div>
            <div className="w-[130px] md:w-[150px] hidden md:block" >
            <img className='w-full  mr-5 p-5' src={three} alt="" />

            </div>
            <div className="w-[130px] md:w-[150px] hidden md:block">
            <img className='w-full  mr-5 p-5' src={four} alt="" />

            </div>
            <div className="w-[130px] md:w-[150px] hidden md:block">
            <img className='w-full  mr-5 p-5' src={five} alt="" />

            </div>
        </div>
    </div>
  )
}

export default Banner