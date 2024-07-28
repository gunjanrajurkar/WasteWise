import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import One from "../assets/OurServices/1img.jpeg"
import Two from "../assets/OurServices/2img.jpeg"
import Three from "../assets/OurServices/3img.jpeg"
import Four from "../assets/OurServices/4img.jpeg"
import Five from "../assets/OurServices/5img.jpeg"
import Six from "../assets/OurServices/6img.jpeg"

function OurServices() {
  return (
    <div>
        <div className="flex justify-center w-full font-bold text-4xl mb-10">Ou <span className="underline decoration-gray-400">r Servic</span> es</div>
        <div className="flex justify-center items-center w-full mb-10">
            <a href="#">
                <div className=" shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden">
                    <img className="w-full h-3/4 object-cover" src={One} alt="One" />
                    <div className="bg-green-300 p-2 rounded-b-lg">
                        <p className='font-bold text-2xl'>Waste Management</p>
                        <p className='flex'>Know More <span className='flex pt-1 ml-2'><FaArrowRight /></span></p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className=" shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden">
                    <img className="w-full h-3/4 object-cover" src={Two} alt="Two" />
                    <div className="bg-green-300 p-2 rounded-b-lg">
                        <p className='font-bold text-2xl'>E-waste EPR</p>
                        <p className='flex'>Know More <span className='flex pt-1 ml-2'><FaArrowRight /></span></p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className=" shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden">
                    <img className="w-full h-3/4 object-cover" src={Three} alt="Three" />
                    <div className="bg-green-300 p-2 rounded-b-lg">
                        <p className='font-bold text-2xl'>Plastic waste EPR</p>
                        <p className='flex'>Know More <span className='flex pt-1 ml-2'><FaArrowRight /></span></p>
                    </div>
                </div>
            </a>
        </div>
        <div className="flex justify-center items-center w-full">
            <a href="#">
                <div className=" shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden">
                    <img className="w-full h-3/4 object-cover" src={Four} alt="Four" />
                    <div className="bg-green-300 p-2 rounded-b-lg">
                        <p className='font-bold text-2xl'>Battery waste EPR</p>
                        <p className='flex'>Know More <span className='flex pt-1 ml-2'><FaArrowRight /></span></p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className=" shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden">
                    <img className="w-full h-3/4 object-cover" src={Five} alt="Five" />
                    <div className="bg-green-300 p-2 rounded-b-lg">
                        <p className='font-bold text-2xl'>Tyre waste EPR</p>
                        <p className='flex'>Know More <span className='flex pt-1 ml-2'><FaArrowRight /></span></p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className=" shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden">
                    <img className="w-full h-3/4 object-cover" src={Six} alt="Six" />
                    <div className="bg-green-300 p-2 rounded-b-lg">
                        <p className='font-bold text-2xl'>Recyler Registration</p>
                        <p className='flex'>Know More <span className='flex pt-1 ml-2'><FaArrowRight /></span></p>
                    </div>
                </div>
            </a>
        </div>
        <div className='flex justify-center mt-10'>
            <div className='font-bold text-3xl'>More</div>
            <div className='flex justify-center items-center ml-3 size'><FaArrowRight /></div>
        </div>
    </div>
  )
}

export default OurServices
