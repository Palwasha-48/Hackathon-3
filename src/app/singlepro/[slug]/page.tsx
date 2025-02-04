import Image from "next/image";
import { Product } from "../../../../type";
import { client } from "@/sanity/lib/backendClient";

const getProductBySlug = async (slug: string) => {
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      price,
      description,
      discountPercentage,
      "imageUrl": productImage.asset->url,
      tags,
      isNew

    } , [slug]
  `;
  return await client.fetch(query, { slug });
};

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const product: Product = await getProductBySlug(params.slug);

  if (!product) {
    return;
    <p className="text-center text-2xl font-semibold mt-10">
      Product not found.
    </p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-2">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            ${product.price}
          </p>

          {/* Discount */}
          {product.dicountParcentage && (
            <p className="text-md text-red-600 mb-4">
              Discount: {product.dicountParcentage}%
            </p>
          )}

          {/* Tags */}
          <div className="mb-4">
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
