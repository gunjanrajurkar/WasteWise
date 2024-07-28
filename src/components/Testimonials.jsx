import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Eight from "../assets/Testimonials/8img.jpeg";

function Testimonials() {
  return (
    <div className='mt-10'>
      <div className="flex justify-center w-full font-bold text-4xl mb-10">
        Te <span className="underline decoration-gray-400">stimonia</span>ls
      </div>
      <div className="flex justify-center items-center w-full mb-10">
        <a href="#">
          <div className="drop-shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden relative ">
            <img className="object-cover absolute w-40 h-40 rounded-full bg-white p-2 ml-24 top-[10px]" src={Eight} alt="Eight" />
            <div className='pt-20 h-full flex items-center justify-center'>
              <div className='bg-[#E1EED0] p-5 w-full h-full flex-col pt-28 items-center justify-center rounded-lg'>
                <p className='text-center text-sm'>I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!</p>
                <p className='text-center text-3xl mt-10'>John Doe</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="drop-shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden relative">
            <img className="object-cover absolute w-40 h-40 rounded-full bg-white p-2 ml-24 top-[10px]" src={Eight} alt="Eight" />
            <div className='pt-20 h-full flex items-center justify-center'>
              <div className='bg-[#E1EED0] p-5 w-full h-full flex-col pt-28 items-center justify-center rounded-lg'>
                <p className='text-center text-sm'>I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!</p>
                <p className='text-center text-3xl mt-10'>John Doe</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="drop-shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden relative">
            <img className="object-cover absolute w-40 h-40 rounded-full bg-white p-2 ml-24 top-[10px]" src={Eight} alt="Eight" />
            <div className='pt-20 h-full flex items-center justify-center'>
              <div className='bg-[#E1EED0] p-5 w-full h-full flex-col pt-28 items-center justify-center rounded-lg'>
                <p className='text-center text-sm'>I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!</p>
                <p className='text-center text-3xl mt-10'>John Doe</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="flex justify-center items-center w-full">
        <a href="#">
          <div className="drop-shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden relative">
            <img className="object-cover absolute w-40 h-40 rounded-full bg-white p-2 ml-24 top-[10px]" src={Eight} alt="Eight" />
            <div className='pt-20 h-full flex items-center justify-center'>
              <div className='bg-[#E1EED0] p-5 w-full h-full flex-col pt-28 items-center justify-center rounded-lg'>
                <p className='text-center text-sm'>I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!</p>
                <p className='text-center text-3xl mt-10'>John Doe</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="drop-shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden relative">
            <img className="object-cover absolute w-40 h-40 rounded-full bg-white p-2 ml-24 top-[10px]" src={Eight} alt="Eight" />
            <div className='pt-20 h-full flex items-center justify-center'>
              <div className='bg-[#E1EED0] p-5 w-full h-full flex-col pt-28 items-center justify-center rounded-lg'>
                <p className='text-center text-sm'>I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!</p>
                <p className='text-center text-3xl mt-10'>John Doe</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="drop-shadow-lg bg-black-900 w-[40vh] h-[40vh] flex flex-col ml-10 mr-10 rounded-lg overflow-hidden relative">
            <img className="object-cover absolute w-40 h-40 rounded-full bg-white p-2 ml-24 top-[10px]" src={Eight} alt="Eight" />
            <div className='pt-20 h-full flex items-center justify-center'>
              <div className='bg-[#E1EED0] p-5 w-full h-full flex-col pt-28 items-center justify-center rounded-lg'>
                <p className='text-center text-sm'>I've been using their service for over a year and couldn't be happier. They are always on time and very reliable. Highly recommend!</p>
                <p className='text-center text-3xl mt-10'>John Doe</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Testimonials;
