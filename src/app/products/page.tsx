"use client";

import React, { useState, useEffect } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import ProductDetail from "../components/ProductDetail";
import { product } from "@/sanity/schemaTypes/products";
import ProductListing from "../components/ProductListing";

const sanity = sanityClient({
  projectId: "xc5w2rp6",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  dicountParcentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
  isNew: boolean;
  discount: number;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          dicountParcentage,
          "imageUrl": productImage.asset->url,
          tags,
          isNew
        }
      `;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart`);
  };

  const truncateDescription = (description: string, maxLength: number = 100): string => {
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

  <><div className='relative w-full h-full sm:h-[50vh] lg:h-[70vh] inset-0 bg-cover backdrop-blur-xl  bg-center flex justify-center items-center text-center'
      style={{ backgroundImage: "url('/bgimg.jpeg')" }}>
      <div className="text-center text-black">
        <Image src="/logo.png" alt="Logo" height={50} width={100} className='text-center items-center justify-center mx-8' />
        <h1 className="text-[50px]"> Products </h1>
        <p className="text-[20px]"> <b> Home </b> {'>'} Products </p>
      </div>
    </div><><h2 className="text-center text-4xl font-bold text-slate-800 mt-4 mb-4">Products</h2><div>


      <div className="grid g-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: Product) => (
          <ProductListing product={product} key={product._id} />
        ))}
      </div>
    </div></></>
  );
};

export default ProductCards;
