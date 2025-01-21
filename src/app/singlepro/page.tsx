// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { AiFillTwitterCircle } from 'react-icons/ai'
// import { FaFacebook, FaLinkedin } from 'react-icons/fa'

// const page = () => {
//   return (
//     <div className='bg-white min-h-full pb-2'>
//       <div className="w-full h-20 bg-orange-50 items-center px-4 py-4 flex flex-wrap gap-4 text-xl pl-20 ">
//         <span className='text-gray-500'>Home</span> {'>'} <span className='text-gray-500'>Shop</span> {'>'} <span className='text-gray-600'>|</span> Asgaard sofa
//       </div>

//       <div className='lg:flex pt-10 md:grid items-start container border-b border-gray-300 mx-auto h-auto pb-10'>

//         <div className='grid justify-center gap-5 items-center'>
//           <Image src={'/singlesmallone.png'}
//             height={300}
//             width={300}
//             alt='first'
//             className='bg-orange-50 rounded-2xl' />
//           <Image src={'/singlesmalltwo.png'}
//             height={300}
//             width={300}
//             alt='second'
//             className='bg-orange-50 rounded-2xl' />
//           <Image src={'/singlesmallthree.png'}
//             height={300}
//             width={300}
//             alt='third'
//             className='bg-orange-50 rounded-2xl' />
//           <Image src={'/singlesmallfour.png'}
//             height={300}
//             width={300}
//             alt='fourth'
//             className='bg-orange-50 rounded-2xl' />
//         </div>

//         <div className='justify-center px-4 py-4 items-center flex'>
//           <Image src={'/simplebig.png'}
//             height={1300}
//             width={1300}
//             alt='siglebig'
//             className='bg-orange-50 max-w-full h-auto rounded' />
//         </div>

//         <div className='justify-center items-start pt-12 flex flex-col px-6 lg:px-4 space-y-4 text-center'>
//           <p className='text-2xl sm:text-4xl'>Asgaard sofa</p>
//           <p className='text-lg sm:text-xl text-gray-500'>Rs. 250,000.00</p>
//           <p>* * * * * <span className='text-gray-500'> | 5 Customer Review </span></p>
//           <p className="text-sm sm:text-base px-4">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
//           <p className='text-gray-500'>Size</p>
//           <div className='flex justify-center p-2 gap-x-5'>
//             <button className='rounded bg-yellow-600 w-10 h-10'>L</button>
//             <button className='rounded bg-orange-50 w-10 h-10 hover:bg-orange-100'>Xl</button>
//             <button className='rounded bg-orange-50 w-10 h-10 hover:bg-orange-100'>XS</button>
//           </div>
//           <p className='text-gray-500'>Color</p>
//           <div className='flex justify-center p-2 gap-x-5'>
//             <div className='rounded-full bg-purple-500 w-10 h-10'></div>
//             <div className='rounded-full bg-black w-10 h-10'></div>
//             <div className='rounded-full bg-yellow-600 w-10 h-10'></div>
//           </div>
//           <div className='flex gap-x-3 lg:gap-x-5 pt-4'>
//             <button className='rounded-xl  border-gray-400 border-2 w-24 lg:w-28 h-12'> -   1   + </button>
//            <Link href='/cart'>
//               <button className='rounded-xl hover:bg-gray-200 border-gray-900 border-2 w-36 lg:w-40 h-12'>Add to Cart</button>
//             </Link>
//             <button className='rounded-xl border-gray-900 border-2 w-36 lg:w-40 h-12'>+ Campare</button>
//           </div>
//           <ul className='grid gap-y-2 text-sm pt-12 text-gray-500'>
//             <li className='text-start'>SKU:<span> SS001</span></li>
//             <li className='text-start'>Category: <span>Sofas</span></li>
//             <li className='text-start'>Tags:<span>Sofa, Chair, Home, Shop</span></li>
//             <li className='flex gap-4 text-start'>Share: <span className='text-black gap-2 flex'><FaFacebook /><FaLinkedin /><AiFillTwitterCircle /></span></li>
//           </ul>
//         </div>
//       </div>

//       <div className='items-center pt-10 justify-center'>

//           <div className='items-center justify-center'>
//             <div className='items-center justify-center flex gap-6 lg:gap-10'>
//               <h2 className='text-xl sm:text-xl'>Description</h2>
//               <h2 className='text-xl sm:text-xl text-gray-500'>Additional Information</h2>
//               <h2 className='text-xl sm:text-xl text-gray-500'>Reviews [5]</h2>
//             </div>
//             <div className='text-sm sm:text-base mx-12 lg:mx-20 py-6 items-center justify-center text-[18px]'>
//               <div className='items-center justify-center text-gray-500 my-10'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</div>
//               <div className='items-center justify-center text-gray-500 my-10'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</div>
//             </div>
//           </div>

//           <div className='grid grid-cols-1 md:grid-cols-2 m-6 gap-4 border-b border-gray-300 pb-10 items-center justify-center'>
//             <div>
//              <Image
//               src="/singlepagesofa1.png"
//               alt="Setup 1"
//               width={600}
//               height={600}
//               className="bg-orange-50 object-cover pb-10 items-center justify-center rounded-xl"/>
//             </div>
//             <div>
//              <Image
//               src="/singlepagesofa2.png"
//               alt="Setup 1"
//               width={600}
//               height={600}
//               className="bg-orange-50 items-center justify-center object-cover pb-10 rounded-xl"/>
//             </div>
//         </div>

//         <div className='items-center justify-center flex font-bold text-4xl '>
//           Related Products
//         </div>
//         <div className="container mx-auto px-4 py-0 pb-10 pt-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//            <div className="bg-gray-100 relative">
//              <Image
//                src="/pro1.png"
//                alt="pro1"
//                width={400}
//                height={300} />
//              <div className="p-4 text-left">
//                <p className="text-xl font-bold">Syltherine</p>
//                <p className="font-normal text-gray-600">Stylish cafe chair</p>
//                <p className="text-black">Rp 2.500.000</p>
//                <span className="text-gray-600"><del> Rp 3.500.000 </del></span>
//              </div>
//              <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold px-[8px] py-[15px] rounded-full">
//                -30%
//              </div>
//            </div>
//            <div className="bg-gray-100 relative">
//             <Image
//             src="/bgpic.png"
//             alt='pro2'
//             width={400}
//             height={300} />
//              <div className="p-4 text-left">
//                <p className="text-xl font-bold">Leviosa</p>
//                <p className="font-normal text-gray-600">Stylish cafe chair</p>
//                <p className="text-black">Rp 2.500.000</p>
//              </div>
//            </div>
//            <div className="bg-gray-100 relative">
//              <Image
//                src="/pro2.png"
//                alt="pro2"
//                width={400}
//                height={300} />
//              <div className="p-4 text-left">
//                <p className="text-xl font-bold">Lolito</p>
//                <p className="font-normal text-gray-600">Luxury big sofa</p>
//                <p className="text-black">Rp 7.000.000 </p>
//                <span className="text-gray-600"><del> Rp 14.000.000 </del></span>
//              </div>
//              <div className="absolute top-4 right-4 bg-red-400 text-white text-sm font-semibold px-[8px] py-[15px] rounded-full">
//                -50%
//              </div>
//            </div>
//            <div className="bg-gray-100 relative ">
//              <Image
//                src="/pro3.jpeg"
//                alt="pro3"
//                width={400}
//                height={300} />
//              <div className="p-4 text-left">
//                <p className="text-xl font-bold">Respira</p>
//                <p className="font-normal text-gray-600">Outdoor bar table and stool</p>
//                <p className="text-black">Rp 500.000</p>
//              </div>
//              <div className="absolute top-4 right-4 bg-emerald-400 text-white text-sm font-semibold px-[10px] py-[15px] rounded-full">
//                New
//              </div>
//            </div>
//            </div>
//            <div className='flex justify-center pt-8 pb-4 '>
//          <Link href="/shop"> <button className="bg-white border border-x-yellow-700 border-y-yellow-700 text-yellow-700 font-semibold py-[6px] px-16 hover:bg-amber-100 hover:text-yellow-700 transition-colors">
//             Show More
//           </button></Link>
//           </div>
//         </div>


//       </div>
//     </div>
//   )
// }
// export default page
