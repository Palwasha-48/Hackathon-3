import React from 'react'
import Image from 'next/image'
import { MdArrowDropDownCircle } from 'react-icons/md'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { LuBadgeCheck } from 'react-icons/lu'
import { RiHandHeartLine } from 'react-icons/ri'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import Link from 'next/link'


const page = () => {
  return (
    <div className='bg-white min-h-full pb-4'>
        <div
            className='relative w-full h-full sm:h-[50vh] lg:h-[70vh] bg-cover bg-center flex justify-center items-center text-center'
            style={{ backgroundImage: "url('/bgimg.jpeg')"  }}>
            <div className="items-center justify-center text-center text-black">
                <div
                   className='justify-center items-center px-40 lg:px-60'>
                    <Image src="/logo.png" alt="Logo" height={50} width={100}/></div>
                <h1 className="text-[35px] lg:text-[50px] "> Product Comparison </h1>
                <p className="text-[20px]"> <b> Home </b> {'>'} Comparison </p>  
            </div>
        </div>


<div className='container p-4 pb-20'>
    <div className='lg:flex md:grid-cols-2 justify-between p-8 items-start  lg:p-12'>

        <div className='text-2xl text-start text-black font-semibold'>
            <div>
                Go to Product<br />
                page for more<br />
                Products
            </div>
            <Link href="/shop">
                <div className='cursor-pointer hover:underline text-xl pt-3 lg:pt-5 font-normal'>
                    View More
                </div>
            </Link>
        </div>

        <div className='grid pt-5 lg:pt-0'>
            <div className='bg-pink-100 h-28 w-36 items-start justify-start'>
                <Image src="/simplebig.png" alt="item1" height={100} width={150} />
            </div>
            <div className='pt-2 text-xl font-semibold'>
                Asgaard Sofa
            </div>
            <div className='text-sm'>
                Rs. 250,000.00
            </div>
            <div className='text-sm'>
                4.7 * * * * * |<div className='text-gray-500'> 204 review </div>
            </div>
        </div>

        <div className='grid pt-5 lg:pt-0'>
            <div className='bg-pink-100 h-28 w-36 items-start justify-start'>
                <Image src="/singlesmallone.png" alt="item2" height={100} width={150} />
            </div>
            <div className='pt-2 text-xl font-semibold'>
                Outdoor Sofa Set
            </div>
            <div className='text-sm'>
                Rs. 224,000.00
            </div>
            <div className='text-sm'>
                4.2 * * * * * |<div className='text-gray-500'> 145 review </div>
            </div>
        </div>

        <div className='grid items-start justify-start pt-10 lg:pt-0'>
            <div className='text-2xl font-semibold pb-3'>
                Add A Product
            </div>
            <Link href="/shop">
            <div className='rounded-xl cursor-pointer hover:bg-amber-700 text-white bg-amber-600 w-48 h-11 items-center justify-center'>
                <div className='flex font-semibold text-center p-2 justify-between'>
                    Choose a Product
                    <span>
                       <MdArrowDropDownCircle /> 
                    </span>
                </div>
            </div>
            </Link>
        </div>
    </div>

<div className='text-[30px] p-3 lg:pl-12 pt-5 font-semibold'>
    General
</div>

    <div className='items-start p-3 h-auto lg:pl-12 pt-5'>
        <div className='flex gap-12 lg:gap-28'>
            <div className='lg:text-xl grid gap-y-4'>
                <div>Sales Package</div>
                <div>Model Number</div>
                <div>Secondary Material</div>
                <div>Configuration</div>
                <div>Upholstery Material</div>
                <div>Upholstery Color</div>
            </div>
            <div className='lg:text-xl grid gap-y-4'>
                <div>1 sectional sofa</div>
                <div>TFCBLIGRBL6SRHS</div>
                <div>Solid Wood</div>
                <div>L-shaped</div>
                <div>Fabric + Cotton</div>
                <div>Bright Grey & Lion</div>
            </div>
            <div className='grid lg:text-xl gap-y-4'>
                <div>1 Three Seater, 2 Single Seater</div>
                <div>DTUBLIGRBL568</div>
                <div>Solid Wood</div>
                <div>L-shaped</div>
                <div>Fabric + Cotton</div>
                <div>Bright Grey & Lion</div>
            </div>
        </div>
    </div>

<div className='text-[30px] p-3 lg:pl-12 pt-14 font-semibold'>
    Product 
</div>

    <div className='items-start p-3 h-auto lg:pl-12 pt-5'>                       
        <div className='flex gap-12 lg:gap-20'>
            <div className='grid lg:text-xl gap-y-4'>
                <div>Filling Material</div>
                <div>Finish Type</div>
                <div>Adjustable Headrest</div>
                <div>Maximum Load Capacity</div>
                <div>Origin of Manufacture</div>
            </div>
            <div className='grid lg:text-xl gap-y-4'>
                <div>Foam</div>
                <div>Bright Grey & Lion</div>
                <div>No</div>
                <div>280 KG</div>
                <div>India</div>
            </div>
            <div className='grid gap-y-4 lg:text-xl '>
                <div>Matte</div>
                <div>Bright Grey & Lion</div>
                <div>Yes</div>
                <div>300 KG </div>
                <div>India</div>
            </div>
        </div>
    </div>

<div className='text-[30px] p-3 lg:pl-12 pt-14 font-semibold'>
    Dimensions 
</div>

    <div className='items-start p-3 h-auto lg:pl-12 pt-5'>                       
        <div className='flex gap-24 lg:gap-44'>
            <div className='grid lg:text-xl  gap-y-4'>
                <div>Width</div>
                <div>Height</div>
                <div>depth</div>
                <div>Weight</div>
                <div>Seat Height</div>
                <div>Leg Height</div>
            </div>
            <div className='lg:text-xl grid gap-y-4'>
                <div>265.32 cm</div>
                <div>76 cm</div>
                <div>167.76 cm</div>
                <div>45 Kg</div>
                <div>41.52 cm</div>
                <div>5.46 cm</div>
            </div>
            <div className='lg:text-xl grid gap-y-4'>
                <div>265.32 cm</div>
                <div>76 cm</div>
                <div>167.76 cm</div>
                <div>65 Kg</div>
                <div>41.52 cm</div>
                <div>5.46 cm</div>
            </div>
        </div>
    </div>

<div className='text-[30px] p-3 lg:pl-12 pt-14 font-semibold'>
    Warranty 
</div>

    <div className='items-start p-3 h-auto lg:pl-12 pt-5'>                       
        <div className='flex gap-12 lg:gap-28 lg:gap-x-40'>
            <div className='lg:text-xl grid gap-y-10 lg:gap-y-4'>
                <div>Warranty Summary</div>
                <div>Warranty Service Type</div>
                <div>Covered in Warranty</div>
                <div>Not Covered in Warranty</div>
                <div>Domestic Warranty</div>
            </div>
            <div className='grid lg:text-xl gap-y-10 lg:gap-y-4'>
                <div>1 Year Manufacturing Warranty</div>
                <div>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</div>
                <div>Warranty Against Manufacturing Defect</div>
                <div>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
                <div>1 Year</div>
            </div>
            <div className='grid gap-y-10 lg:text-xl lg:gap-y-4'>
                <div>1.2 Year Manufacturing Warranty</div>
                <div>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</div>
                <div>Warranty of the product is limited to manufacturing defects only.</div>
                <div>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
                <div>3 Months</div>
            </div>
        </div>
    </div>

<div className='flex'>
    <div className='pl-28 lg:pl-64 pt-16 '>
        <button className='h-14 w-40 text-xl font-semibold bg-amber-700'>
            Add To Cart
        </button>
    </div>
    <div className='pl-28 lg:pl-[400px] pt-16 '>
        <button className='h-14 w-40 text-xl font-semibold bg-amber-700'>
            Add To Cart
        </button>
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
<div/>
        
      




    </div>
  )
}

export default page
