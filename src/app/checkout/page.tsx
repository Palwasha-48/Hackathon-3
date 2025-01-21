import React from 'react'
import Image from 'next/image'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { LuBadgeCheck } from 'react-icons/lu'
import { RiHandHeartLine } from 'react-icons/ri'

const page = () => {
  return (
    <div className='bg-white min-h-full pb-4'>
        <div className='relative w-full h-full sm:h-[50vh] lg:h-[70vh] bg-cover bg-center flex justify-center items-center text-center'
             style={{ backgroundImage: "url('/bgimg.jpeg')"  }}>
            <div className="text-center text-black">
                <Image src="/logo.png" alt="Logo" height={50} width={100} className='text-center items-center justify-center mx-8'/>
                    <h1 className="text-[50px]"> Checkout </h1>
                    <p className="text-[20px]"> <b> Home </b> {'>'} Checkout</p>  
            </div>
        </div>

        <div className='flex flex-col lg:flex-row pt-10  lg:pt-20 gap-x-0 lg:gap-x-20 items-start justify-center pb-24'>
            <div className='px-8 grid w-full lg:w-auto pt-8 items-center lg:items-start justify-center lg:justify-start lg:text-start text-center'>
                <div className='font-bold text-2xl lg:text-4xl'>Billing details</div>
                <div className='pt-10 gap-6 lg:gap-12 flex flex-col lg:flex-row'>
                    <div className='grid'>
                        <div className='font-semibold'>First Name</div>
                        <div className='pt-4'><input type="text" className='h-12 lg:h-16 w-full lg:w-44 p-4 rounded-lg border-2 border-gray-300'/></div>
                    </div>
                    <div>
                        <div className='font-semibold'>Last Name</div>
                        <div className='pt-4'><input type="text" className='h-12 lg:h-16 w-full lg:w-44 p-4 rounded-lg border-2 border-gray-300'/></div>
                    </div>
                </div>
                <div className='pt-8 lg:pt-10 font-semibold'>Company Name (Optional)</div>
                <div className='pt-4'><input type='text' className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300'/></div>
                <div className='pt-8 lg:pt-10 font-semibold'>Country / Region</div>
                <div className='pt-4'><input type="text" placeholder='Sri Lanka' className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300'/></div>
                <div className='pt-8 lg:pt-10 font-semibold'>Street address</div>
                <div className='pt-4'><input type="text" className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300'/></div>
                <div className='pt-8 lg:pt-10 font-semibold'>Town / City</div>
                <div className='pt-4'><input type="text" className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300'/></div>
                <div className='pt-8 lg:pt-10 font-semibold'>Province</div>
                <div className='pt-4'><input type="text" placeholder='Western Province' className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300'/></div>
                <div className='pt-8 lg:pt-10 font-semibold'>ZIP code</div>
                <div className='pt-4'><input type="text" className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300'/></div>
                <div className='pt-8 lg:pt-10 font-semibold'>Phone</div>
                <div className='pt-4'><input type="text" className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300'/></div>
                <div className='pt-8 lg:pt-10 font-semibold'>Email address</div>
                <div className='pt-4'><input type="text" className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300'/></div>
                <div className='pt-14'><input type="text" placeholder='Additional Information' className='h-12 lg:h-20 w-full lg:w-96 p-4 rounded-lg border-2 border-gray-300' /></div>
            </div>


            <div className='grid p-8 items-start h-auto justify-center lg:justify-start text-start w-full lg:w-auto lg:pl-16'>
                <div className='items-start grid lg:w-96 w-60 border-b-2 '>
                    <div className='justify-between flex font-semibold text-lg lg:text-2xl'>Product<span>Subtotal</span></div>
                    <div className='justify-between flex text-gray-500 pt-4 text-sm lg:text-base'>Asgaard sofa  x  1 <span className='text-black'>Rs. 250,000.00</span></div>
                    <div className='justify-between flex pt-4 text-sm lg:text-base'>Subtotal<span>Rs. 250,000.00</span></div>
                    <div className='justify-between flex pt-6 text-sm lg:text-base pb-5'>Total<span className='text-lg lg:text-2xl text-yellow-700'>Rs. 250,000.00</span></div>                    
                </div>
                <div> <li className='text-black pt-9 text-xl lg:text-xl gap-5 font-semibold'> Direct Bank Transfer</li></div>
                <p className='text-start pt-4 text-gray-500 justify-start text-sm lg:text-base'>Make your payment directly into our bank account.<br /> Please use your Order ID as the payment reference.<br /> Your order will not be shipped until the funds have <br /> cleared in our account.</p>
                <div className='grid pt-4 text-gray-500'>
                    <li>Direct Bank Transfer</li>
                    <li>Cash On Delivery</li>
                </div>
                <p className='pt-4 '>Your personal data will be used to support your <br /> experience throughout this website, to manage <br /> access to your account, and for other purposes <br /> described in our <b> privacy policy</b>.</p>
                <div className='pt-8 items-center justify-center text-center'><button className='text-black text-xl hover:bg-gray-200 items-center justify-center text-center w-64  border-2 border-gray-500 h-12 lg:h-16 mt-4 rounded-2xl'>Place Order</button></div>
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
