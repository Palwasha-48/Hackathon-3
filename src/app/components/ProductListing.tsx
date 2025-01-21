import React from 'react';
import Image from "next/image";


const ProductListing = ({product} : {product : Product}) => {
  return (
    <div>
       <>
    
    <div className="p-4">
    
    <div  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={400}
        height={300}
        className="w-full h-48 cursor-pointer object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2 text-center hover:text-slate-500">
        {product.title}
      </h3>
      <p className="text-gray-600 mb-2 text-center">${product.price}</p>
    </div>

      </div></>
    </div>
  )
}

export default ProductListing
