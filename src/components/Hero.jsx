import React from 'react'

function Hero() {
  return (
    <div className="flex justify-center items-top w-full h-[93vh] p-9 pt-10 mt-20">
      <div className="relative bg-[url('src/assets/hero.webp')] bg-no-repeat bg-center bg-cover h-[80vh] w-full rounded border-none flex justify-center items-center flex-col">
        <div className=" absolute inset-0 bg-black opacity-50 rounded"></div>
        <h1 className="text-white text-4xl font-bold text-center p-4 relative">Your Partner in Sustainable</h1>
        <h1 className="text-white text-4xl font-bold text-center p-4 relative">Waste Disposal</h1>
        <a href="#">
        <div className=' relative bg-[#133700] text-white text-center font-bold rounded-full w-60 h-20 pt-5 text-3xl shadow-lg'>Read More</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
