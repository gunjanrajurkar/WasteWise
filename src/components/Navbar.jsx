import React from 'react'
import Logo from '../assets/Vector.png'
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full bg-[#E1EED0] z-50 shadow-md pl-10 pb-4'>
        <div className='text-[#9DCD4F] flex mt-2 '>
            <img src={Logo} alt="logo" />
            <p className='mt-3 text-5xl'><span className='font-bold'>Waste</span>Wise</p>
        </div>
        <div className='flex mt-4 text-3xl absolute right-10 top-1'>
            <div className='ml-5 mr-5 '>Home</div>
            <div className='ml-5 mr-5'>Our Services</div>
            <div className='ml-5 mr-5'>Blog</div>
            <div className='ml-5 mr-5'>About Us</div>
            <div className='ml-5 mr-5'>Contact Us</div>
            <div className='ml-5 mr-5'><FaSearch /> </div>
        </div>
    </div>
  )
}

export default Navbar