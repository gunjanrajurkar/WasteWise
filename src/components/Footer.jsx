import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=' flex bg-black h-[40vh] mt-10'>
        <div className=' relative bg-[#E1EED0] mt-40 ml-60 rounded-full h-[5vh] w-[5vh] flex justify-center pt-4'><FaFacebookF /></div>
        <div className=' relative bg-[#E1EED0] mt-40 ml-8 rounded-full h-[5vh] w-[5vh] flex justify-center pt-4'><SiInstagram /></div>
        <div className=' relative bg-[#E1EED0] mt-40 ml-8 rounded-full h-[5vh] w-[5vh] flex justify-center pt-4'><FaTwitter /></div>
        <div className='flex-col relative text-white mt-10 ml-[48vh] '>
            <p className='font-bold text-3xl mb-5 '>SERVICES</p>
            <p>Waste Management</p>
            <p>E-waste EPR</p>
            <p>Plastic waste EPR</p>
            <p>Battery waste EPR</p>
            <p>Tyre waste EPR</p>
            <p>Recycler Registration</p>
            <p>CGWA NOC</p>
            <p>UPGWD NOC</p>
            <p>HWRA NOC</p>
            <p>BIS, WPC, ISO</p>
        </div>
        <div className='flex-col relative text-white mt-10 ml-[48vh] '>
            <p className='font-bold text-3xl mb-5 '>Contact US</p>
            
        </div>
    </div>
  )
}

export default Footer