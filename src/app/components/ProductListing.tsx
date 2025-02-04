import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../type";

const ProductListing = ({ product }: { product: Product }) => {
  return (
    <div className="p-4">
      <div className="group bg-white rounded-lg shadow-md p-4 hover:shadow-lg">
        {/* <Link href={`/singlepro/${product.slug?.current}`}> */}
        <Link href={`/singlepro/${product.slug?.current}`}>
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.title}
            width={400}
            height={300}
            className="w-full h-48 cursor-pointer object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold mb-2 text-center group-hover:hover:text-slate-500">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-2 text-center">${product.price}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductListing;
