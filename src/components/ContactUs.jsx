import React from 'react';
import Background from "../assets/ContactUs/Background.png";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";

function ContactUs() {
  return (
    <div className="m-20 bg-[#E1EED0] flex h-[80vh] relative overflow-hidden shadow-lg rounded">
      <div className="pt-10 pl-10 w-2/3">
        <h1 className='font-bold text-5xl'>Say Hi!</h1>
        <p className='text-2xl mt-5'>We'd like to talk with you.</p>
        <div className='mt-20'>
          <label htmlFor="name">My Name is</label><br />
          <input className='  shadow-lg w-[80vh] p-2 rounded mt-2' type="text" placeholder='Full Name' id='name'/>   
        </div>
        <div className='mt-10'>
          <label htmlFor="name">I'm looking for</label><br />
          <input className=' shadow-lg p-2  w-[80vh] rounded mt-2' type="text" placeholder='What you have' id='name'/>   
        </div>
        <div className='mt-10'>
          <label htmlFor="name">Your message</label><br />
          <textarea className='shadow-lg  w-[80vh] h-[15vh] p-2 rounded mt-2' type="text" placeholder='I want to say that' id='name'/>   
        </div>
      </div>
      <div 
        className="relative h-full w-1/2 text-left bg-cover bg-right pl-40 pt-40 text-white"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h1 className='font-bold text-5xl mb-10'>Contact Information</h1>
        <p className='text-2xl'>Fill up the form and our Team will get back to </p>
        <p className='text-2xl mb-10'>you within 24 hours.</p>
        <div className='text-center'>
          <p>(+40)772 100 200</p>
          <p>hello@creative-tim.com</p>
          <p>Dynonisie Wolf Bucharest, RO 010458</p>
        </div>
        <div className='flex mt-10 text-6xl'>
          <AiOutlineFacebook />
          <CiLinkedin />
          <TfiYoutube />
        </div>
      </div>
      <a href="#">
        <div className='shadow-lg absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#133700] text-white rounded-full p-3 w-60 text-center text-2xl'>
          Send Messages
        </div>
      </a>
    </div>
  );
}

export default ContactUs;
