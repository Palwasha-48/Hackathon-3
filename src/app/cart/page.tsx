import React from 'react'
import Image from 'next/image'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { LuBadgeCheck } from 'react-icons/lu'
import { RiHandHeartLine } from 'react-icons/ri'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { MdDelete } from 'react-icons/md'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-white min-h-full pb-4'>
        <div className='relative w-full h-full sm:h-[50vh] lg:h-[70vh] inset-0 bg-cover backdrop-blur-xl  bg-center flex justify-center items-center text-center'
            style={{ backgroundImage: "url('/bgimg.jpeg')" }}>
           <div className="text-center text-black">
                <Image src="/logo.png" alt="Logo" height={50} width={100} className='text-center items-center justify-center mx-8'/>
                <h1 className="text-[50px]"> Cart </h1>
                <p className="text-[20px]"> <b> Home </b> {'>'} Cart</p>
            </div>
        </div>

    <div className="container mx-auto px-4 py-8">
      <div className="md:grid lg:flex lg:space-x-5 pb-8">
        <div className="grid items-start justify-start p-6 md:p-10 lg:w-3/5">
          <div className="bg-orange-50 py-6 font-bold flex gap-6 lg:gap-16 rounded text-sm md:text-base">
            <p className="flex-1 text-center">Product</p>
            <p className="flex-1 text-center">Price</p>
            <p className="flex-1 text-center">Quantity</p>
            <p className="flex-1 text-center">Subtotals</p>
          </div>

          <div className="pl-4 md:pl-8 flex flex-col md:flex-row items-center md:items-start mt-6 gap-6">
            <Link href='/singlepro'>
                <div className="mb-4 md:mb-0">
                  <Image
                    src="/simplebig.png"
                    height={100}
                    width={100}
                    alt="sofaset"
                    className="bg-orange-50 rounded"
                  />
                </div>
            </Link>
            <div className="flex gap-6 justify-center items-center">
              <p className="text-gray-500 flex-1 text-center md:text-left">Asgaard sofa</p>
              <p className="text-gray-500 flex-1 text-center md:text-left">Rs. 250,000.00</p>
              <button className="rounded h-7 w-7 border border-gray-500 flex-1 text-center">1</button>
              <p className="flex-1 text-center md:text-left">Rs. 250,000.00</p>
              <div className="text-2xl text-orange-800 flex-1 text-center md:text-left">
                <MdDelete />
              </div>
            </div>
          </div>
        </div>

        
        <div className="pt-10 lg:pt-0 lg:w-2/5">
          <div className="bg-orange-50 p-6 md:p-10 rounded-lg">
            <div className="grid text-xl md:text-2xl pt-3 font-semibold items-center justify-center">
              Cart Totals
            </div>
            <div className="grid pt-10">
              <div className="flex justify-between">
                Subtotal<span className="text-gray-500">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between pt-6">
                Total<span className="text-[20px] text-amber-700">Rs. 250,000.00</span>
              </div>
            </div>
            <div className="flex justify-center pt-12 pb-16">
              <Link href='/checkout'>
                 <button className="text-xl rounded-2xl h-16 w-48 border border-gray-500 bg-none hover:bg-orange-100">
                   Check Out
                 </button>
              </Link>
            </div>
          </div>
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
