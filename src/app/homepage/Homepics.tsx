"use client"
import Image from "next/image";
import React from 'react'

const Homepics = () => {
  return (
    <div>

      <div className="flex flex-col items-center justify-center py-4 text-center">
        <h3 className="text-gray-500 font-bold text-xl md:text-2xl items-center justify-center">Share your setup with</h3>
        <h1 className="text-black font-bold text-4xl md:text-4xl mt-2 items-center justify-center">#FuniroFurniture</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/*          images          */}

          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img1.png"
              alt="Setup 1"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
  
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img2.png"
              alt="Setup 2"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
         
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img3.png"
              alt="Setup 3"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
         
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img4.png"
              alt="Setup 4"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
         
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img5.png"
              alt="Setup 5"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
          
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img6.png"
              alt="Setup 6"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
         
          <div  className="overflow-hidden shadow-lg">
            <Image
              src="/img7.png"
              alt="Setup 7"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
        
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img8.png"
              alt="Setup 8"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>
          
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/img9.png"
              alt="Setup 9"
              width={100}
              height={100}
              className="w-full object-cover"/>
          </div>

        </div>
    </div>
  )
}

export default Homepics
