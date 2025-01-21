import React from 'react'
import Image from 'next/image'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { LuBadgeCheck } from 'react-icons/lu'
import { RiHandHeartLine } from 'react-icons/ri'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FaClock, FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
const page = () => {
  return (

<div className='bg-white min-h-full pb-4'>
       
        <div className='relative w-full h-full sm:h-[50vh] lg:h-[70vh] inset-0 bg-cover backdrop-blur-xl  bg-center flex justify-center items-center text-center'
             style={{ backgroundImage: "url('/bgimg.jpeg')" }}>
            <div className="text-center text-black">
                <Image src="/logo.png" alt="Logo" height={50} width={100} className='text-center items-center justify-center mx-8'/>
                    <h1 className="text-[50px]"> Contact </h1>
                    <p className="text-[20px]"> <b> Home </b> {'>'} Contact</p>
            </div>
        </div>

        <div className='text-center justify-center pt-16 lg:pt-20'>
            <h1 className='text-2xl lg:text-4xl font-semibold'>Get In Touch With Us</h1>
            <p className='font-normal pt-6 text-gray-500'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.</p>
            <p className='font-normal text-gray-500'>Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>


      <div className="lg:flex lg:pl-48 md:grid container space-x-5 items-start pt-10 min-h-screen p-6">
        <div className="items-center justify-center max-w-6xl bg-white rounded-lg p-6 grid grid-cols-1 md:grid-cols-1 gap-8">

          <div className="flex items-start space-x-4">
            <div><FaLocationDot /></div>
            <div className='grid'>
              <p className='text-xl font-bold'>Address</p>
              <p className="black">236 5th SE Avenue,<br /> New York NY10000,<br /> United States</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div><FaPhoneAlt /></div>
            <div className='grid'>
              <p className='text-xl font-bold'>Phone</p>
              <p className='black'>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div><FaClock /></div>
            <div className='grid'>
              <p className='text-xl font-bold'>Working Time</p>
              <p className="black">Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

        </div>

        <div className='grid items-center space-y-4 justify-center'>
          <div className='pt-0'>
            <p className='pb-3 text-xl font-normal'>Your name</p>
            <input type="text" placeholder='Abc' className='border  border-gray-500 rounded-md p-2 h-14 w-96' />
          </div>
          <div className='pt-6'>
            <p className='pb-3 text-xl font-normal'>Email address</p>
            <input type="text" placeholder='Abc@def.com' className='border  border-gray-500 rounded-md p-2 h-14 w-96' />
          </div>
          <div className='pt-6'>
            <p className='pb-3 text-xl font-normal'>Subject</p>
            <input type="text" placeholder='This is an optional' className='border  border-gray-500 rounded-md p-2 h-14 w-96' />
          </div>
          <div className='pt-6'>
            <p className='pb-3 text-xl font-normal'>Message</p>
            <input type="text" placeholder='Hi! i’d like to ask about' className='border  border-gray-500 rounded-md p-2 h-24 w-96' />
          </div>
          <div className='pt-16'>
            <button className='bg-yellow-600 rounded-lg hover:bg-yellow-700 h-14 w-60 text-xl text-white'>Submit</button>
          </div>
        </div>
      </div>
        

        


<div className='w-full h-auto flex flex-wrap bg-orange-50 justify-center items-center gap-x-10 gap-y-5 p-5'>
<div className='flex gap-1'>
          <div className='text-6xl md:text-5xl'>
            <HiOutlineTrophy />
          </div>
          <div className='text-xl grid'>
            <div className='text-black font-bold'>
              High Quality
            </div>
            <div className='text-gray-500'>
              crafted from top materials
            </div>
          </div>
        <div/>
</div>
<div className='flex gap-1'>
        <div className='text-6xl md:text-5xl'>
          <LuBadgeCheck />
        </div>
        <div className='text-xl grid'>
          <div className='text-black font-bold'>
            Warranty Protection
          </div>
          <div className='text-gray-500'>
            Over 2 years
          </div>
        </div>
</div>
<div className='flex gap-1'>
        <div className='text-6xl md:text-5xl'>
          <RiHandHeartLine />
        </div>
        <div className='text-xl grid'>
          <div className='text-black font-bold'>
            Free Shipping
          </div>
          <div className='text-gray-500'>
            Order over 150 $
          </div>
        </div>
</div>
<div className='flex gap-1'>
        <div className='text-6xl md:text-5xl'>
          <TfiHeadphoneAlt />
        </div>
        <div className='text-xl grid'>
          <div className='text-black font-bold'>
            24 / 7 Support
          </div>
          <div className='text-gray-500'>
            Dedicated support
          </div>
        </div>
</div>
        </div>

</div>
  )
}

export default page
