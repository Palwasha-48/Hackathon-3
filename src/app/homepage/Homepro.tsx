import React from 'react'
import Image from 'next/image'
import { IoMdHeartEmpty, IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import Link from 'next/link';


export default function Homepro ()  {
  return (
    <div>
       <div className="bg-white pt-0">
          <div className="container mx-auto px-4 py-0">
          <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">Our Products</h1>
            </div>
      
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-100 relative">
                  <Image
                    src="/pro1.png"
                    alt="pro1"
                    width={400}
                    height={300} />
                 <div className="p-4 text-left">
                    <p className="text-xl font-bold">Syltherine</p>
                    <p className="font-normal text-gray-600">Stylish cafe chair</p>
                    <p className="text-black">Rp 2.500.000</p>
                    <span className="text-gray-600"><del> Rp 3.500.000 </del></span>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold px-[8px] py-[15px] rounded-full">
                -30%
              </div>
                </div>
      
                <div 
                  className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-cover bg-center flex flex-col justify-center items-center space-y-4"
                            style={{ backgroundImage: "url('/bgpic.png') " }}>
                    <div className="bg-white">
                        <button className="items-center justify-center font-bold text-yellow-500 hover:bg-orange-100 h-10 w-40 ">Add to cart</button>
                    </div>
                    <div className="flex items-center justify-center ">
                      <div className="flex justify-evenly ">
                         <IoMdShare />  Share 
                         <MdOutlineCompareArrows />  Compare  
                         <IoMdHeartEmpty />  Like  
                      </div>
                    </div>
                </div>
      
                <div className="bg-gray-100 relative">
                  <Image
                    src="/pro2.png" 
                    alt="pro2"
                    width={400}
                    height={300} />
                    <div className="p-4 text-left">
                    <p className="text-xl font-bold">Lolito</p>
                    <p className="font-normal text-gray-600">Luxury big sofa</p>
                    <p className="text-black">Rp 7.000.000 </p>
                    <span className="text-gray-600"><del> Rp 14.000.000 </del></span>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold px-[8px] py-[15px] rounded-full">
                -50%
              </div>
                </div>
      
                <div className="bg-gray-100 relative ">
                  <Image
                    src="/pro3.jpeg" 
                    alt="pro3"
                    width={400}
                    height={300} />
                  <div className="p-4 text-left">
                    <p className="text-xl font-bold">Respira</p>
                    <p className="font-normal text-gray-600">Outdoor bar table and stool</p>
                    <p className="text-black">Rp 500.000</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-400 text-white text-sm font-semibold px-[10px] py-[15px] rounded-full">
                New
              </div>
                </div>
      
                <div className="bg-gray-100 ">
                  <Image
                    src="/pro4.png" 
                    alt="pro4"
                    width={400}
                    height={300} />
                  <div className="p-4 text-left">
                    <p className="text-xl font-bold">Grifo</p>
                    <p className="font-normal text-gray-600">Night lamp</p>
                    <p className="text-black">Rp 1.500.000</p>
                  </div>
                </div>
      
                <div className="bg-gray-100 relative ">
                  <Image
                    src="/pro5.png" 
                    alt="pro5"
                    width={400}
                    height={300} />
                  <div className="p-4 text-left">
                    <p className="text-xl font-bold">Muggo</p>
                    <p className="font-normal text-gray-600">Small mug</p>
                    <p className="text-black">Rp 150.000</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-400 text-white text-sm font-semibold px-[10px] py-[15px] rounded-full">
                New
              </div>
                </div>
      
                <div className="bg-gray-100 relative">
                  <Image
                    src="/pro6.jpeg" 
                    alt="pro6"
                    width={400}
                    height={300} />
                  <div className="p-4 text-left">
                    <p className="text-xl font-bold">Pingky</p>
                    <p className="font-normal text-gray-600">Cute bed set</p>
                    <p className="text-black">Rp 7.000.000</p>
                    <span className="text-gray-600"><del>Rp 14.000.000</del></span>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold px-[8px] py-[15px] rounded-full">
                -50%
              </div>
                </div>
      
                <div className="bg-gray-100 relative ">
                  <Image
                    src="/pro7.jpeg" 
                    alt="pro7"
                    width={400}
                    height={300} />
                  <div className="p-4 text-left">
                    <p className="text-xl font-bold">Potty</p>
                    <p className="font-normal text-gray-600">Minimalist flower pot</p>
                    <p className="text-black">Rp 500.000</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-400 text-white text-sm font-semibold px-[10px] py-[15px] rounded-full">
                New
              </div>
                </div>
      
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-8 pb-4 '>
         <Link href="/shop"> <button className="bg-white border border-x-yellow-700 border-y-yellow-700 text-yellow-700 font-semibold py-[6px] px-16 hover:bg-orange-100 hover:text-yellow-700 transition-colors">
            Show More
          </button> </Link>
          </div>
    </div>
  )
}