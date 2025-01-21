import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-slate-300 pb-8" >
      <div className="container mx-auto py-8 px-4 border-y-2 border-gray-200 pt-[2px] items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className='pt-[18px] space-x-0 space-y-10'>
            <h1 className="text-lg font-semibold mb-4">Funiro.</h1>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables,
              FL 33134 USA
            </p>
          </div>
          <div className=' pt-[18px] space-y-10 space-x-0 pl-[25px]'>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-10 space-x-0"> 
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div className=' pt-[18px] space-y-10 space-x-0 pl-[-35px]'>
            <h3 className="text-lg font-semibold mb-4 mx-5 lg:mx-0">Help</h3>
            <ul className="space-y-10 space-x-0">
              <li><a href="#" className="text-gray-600 mx-5 lg:mx-0 hover:text-gray-800">Payment Options</a></li>
              <li><a href="#" className="text-gray-600 mx-5 lg:mx-0 hover:text-gray-800">Returns</a></li>
              <li><a href="#" className="text-gray-600 mx-5 lg:mx-0 hover:text-gray-800">Privacy Policies</a></li>
            </ul>
          </div>
          <div className=' pt-[18px] space-y-10 pl-0 pr-10'>
            <h3 className="text-lg font-semibold mb-4 mx-5 lg:mx-0">Newsletter</h3>
            <div className="flex mx-5 lg:mx-0">
              <input 
                type="email" 
                placeholder="Enter Your Email Address" 
                className="border border-b-2 px-2 py-2 focus:outline-none focus:border-gray-300 " 
              />
              <button 
                className="hover:text-gray-300 text-gray-500 underline font-semibold py-2 px-2"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left pl-[130px] text-gray-500 mt-8 ">
        <p>2023 Funiro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

