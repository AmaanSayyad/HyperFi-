import Image from 'next/image'
import React from 'react'
import Banner from "@/public/assets/hero2.png";

function Hero2() {
  return (
    <div className='text-white h-auto p-4 md:p-10 flex '>
      <div className='w-full  md:mx-10 text-center '>
        <h1 className=' text-5xl md:text-6xl lg:text-8xl p-10 font-bold font-Poppins bg-gradient-to-r from-purple-400 to-pink-600'>

          Simplifying DeFi with HyperFi <br /></h1>
        <p className='p-4'>We are revolutionizing the way people interact with decentralized finance (DeFi) by combining Polygon Cardona, Anon Aadhar, BuidlGuidl Scaffold, Lumio, Avail-powered Rollup, The Graph and Vara with a user-centric approach. 
        Our platform is designed to empower individuals worldwide to make informed financial decisions, calculate investments, protect their assets, and participate in the exciting world of DeFi.</p>
        <div className='w-full'>
          <Image src={Banner} height={800} width={1200} alt="img" className=' object-contain w-full h-full' />

        </div>
      </div>

    </div>
  )
}

export default Hero2