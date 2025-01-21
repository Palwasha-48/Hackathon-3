import React from "react";
import Image from "next/image";


const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className="p-8">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={600}
        height={400}
        className="rounded-md"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold text-green-600 mt-2">
        ${product.price}
      </p>
      <p className="text-red-600 mt-1">Discount: {product.discount}%</p>
      <div className="flex flex-wrap mt-2">
        {product.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded m-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;