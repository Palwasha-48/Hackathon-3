import React from 'react'
import Image from 'next/image'
import { FaUser, FaCalendar, FaTag } from 'react-icons/fa'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { LuBadgeCheck } from 'react-icons/lu'
import { RiHandHeartLine } from 'react-icons/ri'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

export default function page () {
  return (
<div className='bg-white min-h-full pb-4'>
          <div className='relative w-full h-full sm:h-[50vh] lg:h-[70vh] inset-0 bg-cover backdrop-blur-xl  bg-center flex justify-center items-center text-center'
            style={{ backgroundImage: "url('/bgimg.jpeg')" }}>
            <div className="text-center text-black">
              <Image src="/logo.png" alt="Logo" height={50} width={100}/>
                <h1 className="text-[50px]"> Blog </h1>
                <p className="text-[20px]"> <b> Home </b> {'>'} Blog</p>
            </div>
          </div>
          <div>

          <div className='lg:flex md:grid container m-4 items-start mx-auto gap-10 justify-between'>

            <div className='w-full mx-4 lg:mx-0 grid pt-14 justify-center items-center text-center'>
              <div>
                <Image src="/blog1.jpeg" alt="blog1" height={700} width={700} className='rounded-xl'/>
              </div>
              <div className='pt-4 text-gray-500 gap-4 flex '>
                <div className='flex gap-2'><FaUser /> Admin</div>
                <div className='flex gap-2'><FaCalendar />14 Oct 2022</div>
                <div className='flex gap-2'><FaTag /> Wood</div>
              </div>
              <div>
                <h1 className='black pt-6 text-2xl text-start md:text-3xl font-semibold'>Going all-in with millennial design</h1>
                <p className='text-gray-500 pt-6 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <h1 className='black pt-8 text-start hover:text-gray-800 underline'>Read More</h1>
              </div>
              <div>
                <Image src="/blog2.jpeg" alt="blog2" height={700} width={700} className='rounded-xl pt-8'/>
              </div>
              <div className='pt-4 text-gray-500 gap-4 flex '>
                <div className='flex gap-2'><FaUser /> Admin</div>
                <div className='flex gap-2'><FaCalendar />14 Oct 2022</div>
                <div className='flex gap-2'><FaTag /> Wood</div>
              </div>
              <div>
                <h1 className='black pt-6 text-2xl text-start md:text-3xl font-semibold'>Going all-in with millennial design</h1>
                <p className='text-gray-500 pt-6 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <h1 className='black pt-8 text-start hover:text-gray-800 underline'>Read More</h1>
              </div>
              <div>
                <Image src="/blog3.jpeg" alt="blog3" height={700} width={700} className='rounded-xl pt-8'/>
              </div>
              <div className='pt-4 text-gray-500 gap-4 flex '>
                <div className='flex gap-2'><FaUser /> Admin</div>
                <div className='flex gap-2'><FaCalendar />14 Oct 2022</div>
                <div className='flex gap-2'><FaTag /> Wood</div>
              </div>
              <div>
                <h1 className='black pt-6 text-2xl text-start md:text-3xl font-semibold'>Going all-in with millennial design</h1>
                <p className='text-gray-500 pt-6 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <h1 className='black pt-8 text-start hover:text-gray-800 underline'>Read More</h1>
              </div>
              <div className='justify-center items-center flex gap-8 pt-8 pb-8'>
                 <button className='bg-amber-200 h-12 w-12 rounded'>1</button>
                 <button className='bg-orange-50 h-12 w-12 rounded hover:bg-orange-100'>2</button>
                 <button className='bg-orange-50 h-12 w-12 rounded hover:bg-orange-100'>3</button>
                 <button className='bg-orange-50 h-12 w-16 rounded hover:bg-orange-100'>Next</button>
               </div>
            </div>

            <div className='w-full md:w-1/2 lg:w-1/3 grid pt-14  justify-center text-center'>
              <div>
                <input 
                  type="text" 
                  className="rounded-xl border-2 border-gray-500 h-14 w-60 px-2 py-2" />
              </div> 
              <div className='black pt-6 text-2xl md:text-2xl font-semibold text-center justify-center items-center'>Categories</div>
              <div className='pt-4'>
                <ul className='text-gray-500'>
                  <li className='pt-4 flex justify-between'><span>Crafts</span> <span>2</span></li>
                  <li className='pt-4 flex justify-between'><span>Design</span> <span>8</span></li>
                  <li className='pt-4 flex justify-between'><span>Handmade</span> <span>7</span></li>
                  <li className='pt-4 flex justify-between'><span>Interior</span> <span>1</span></li>
                  <li className='pt-4 flex justify-between'><span>Wood</span> <span>6</span></li>
                </ul>
              </div>
              <div>
                <h2 className='text-start text-2xl pt-28'>Recent Posts</h2>
                <div className='flex pt-8'>
                  <Image src="/blogsmall1.jpeg" alt="small1" height={100} width={100} className='rounded-xl'/>
                  <div className='grid text-start ml-4'>
                  <p className='black'>Going all-in with millennial design</p>
                  <p className='text-gray-500'>03 Aug 2022</p>
                  </div>
                </div>
                <div className='flex pt-8'>
                  <Image src="/blogsmall2.jpeg" alt="small2" height={100} width={100} className='rounded-xl'/>
                  <div className='grid text-start ml-4'>
                  <p className='black'>Exploring new ways of decorating</p>
                  <p className='text-gray-500'>03 Aug 2022</p>
                  </div>
                </div>
                <div className='flex pt-8'>
                  <Image src="/blogsmall3.jpeg" alt="small3" height={100} width={100} className='rounded-xl'/>
                  <div className='grid text-start ml-4'>
                  <p className='black'>Handmade pieces that took time to make</p>
                  <p className='text-gray-500'>03 Aug 2022</p>
                  </div>
                </div>
                <div className='flex pt-8'>
                  <Image src="/blogsmall4.jpeg" alt="small4" height={100} width={100} className='rounded-xl'/>
                  <div className='grid text-start ml-4'>
                  <p className='black'>Modern home in Milan</p>
                  <p className='text-gray-500'>03 Aug 2022</p>
                  </div>
                </div>
                <div className='flex pt-8'>
                  <Image src="/blogsmall5.jpeg" alt="small5" height={100} width={100} className='rounded-xl'/>
                  <div className='grid text-start ml-4'>
                  <p className='black'>Colorful office redesign</p>
                  <p className='text-gray-500'>03 Aug 2022</p>
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
</div>
  )
}
