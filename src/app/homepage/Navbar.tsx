"use client"

import React, { useRef, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { faUser, faSearch, faHeart, faShoppingCart, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoMdCloseCircle } from "react-icons/io";
import { TbShoppingBagX } from "react-icons/tb";


export default function Homepage() {
const [menuOpen, setMenuOpen] = useState(false);
const ref = useRef<HTMLDivElement>(null);

const toggleCart = () => {
  if (!ref.current) return 

  if (ref.current.classList.contains('translate-x-full')) {
    ref.current.classList.remove('translate-x-full')
    ref.current.classList.add('translate-x-0')
  } else {
    ref.current.classList.remove('translate-x-0')
    ref.current.classList.add('translate-x-full')
  }
}

  return (
      <><div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" className="h-12 mr-2" height={290} width={60} />
          <Image src="/logoname.png" alt="Logo Name" className="h-6" height={100} width={120} />
        </div>
        <div className="hidden lg:flex items-center space-x-12 hover:text-gray-800 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex items-center text-xl space-x-4">
          <FontAwesomeIcon icon={faUser} className="hover:text-gray-800" />
          <FontAwesomeIcon icon={faSearch} className="hover:text-gray-800" />
          <FontAwesomeIcon icon={faHeart} className="hover:text-gray-800" />
          <div onClick={toggleCart} ><FontAwesomeIcon icon={faShoppingCart} className="hover:text-gray-800 cursor-pointer" /></div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden flex flex-col mt-4 space-y-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
    
    
    <div
       ref={ref}
       className="sideCart z-50 fixed bg-white border-2 h-[530px] border-orange-200 top-2 right-[-30px] mx-5 transform transition-transform translate-x-full">
        <div className='items-center p-5 justify-center text-center'>
          <div className='items-start flex border-b border-gray-300 pb-6 text-2xl font-bold text-start justify-between'>
            Shopping Cart
            <div onClick={toggleCart}  className='justify-between cursor-pointer'>
              <TbShoppingBagX />
            </div>
          </div>

          <div className='grid'>
            <div className='pt-8 flex justify-between'>
              <div><Image src='/simplebig.png' alt='cart' height={100} width={100} className='rounded-xl bg-orange-100' /></div>
              <div className=' pt-2 grid'>
                <p>Asgaard sofa</p>
                <p>1 x <span className="text-amber-700"> Rs. 250,000.00</span></p>
              </div>
              <div className='pt-5'><IoMdCloseCircle /></div>
            </div>

            <div className='pt-6 lg:pt-8 flex justify-between'>
              <div><Image src='/sidebar2.jpeg' alt='cart' height={100} width={100} className='rounded-xl bg-orange-100' /></div>
              <div className=' pt-2 grid'>
                <p>Casaliving Wood</p>
                <p>1 x <span className="text-amber-700">Rs. 270,000.00</span></p>
              </div>
              <div className='pt-5'><IoMdCloseCircle /></div>
            </div>
          </div>

          <div className='p-5 pt-32'>
            <div className='pb-4 border-b-2 border-gray-300 flex justify-between'>
              <p className='text-xl font-semibold'>Subtotal</p>
              <p className='text-amber-700 font-semibold text-xl '>Rs. 520,000.00</p>
            </div>
            <div className='flex items-end justify-between gap-2 pt-5'>
             <Link href="/cart"><button className='rounded-full hover:bg-gray-200 border border-black h-10 w-16 lg:w-20'>Cart</button></Link>
             <Link href="/checkout"><button className='rounded-full hover:bg-gray-200 border border-black h-10 w-24 lg:w-28'>Checkout</button></Link>
             <Link href="/comparison"><button className='rounded-full hover:bg-gray-200 border border-black h-10 w-24 lg:w-28'>Comparison</button></Link>
            </div>
          </div>
        </div>
      </div>
      </>




    
  )
}
