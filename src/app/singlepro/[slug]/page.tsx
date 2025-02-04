import { client } from "@/sanity/lib/backendClient";
import { Product } from "../../../../sanity.types";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == slug][0]{
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags,
        isNew
      }`
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-col-1 md:grid-cols-2 gap-12">
        <div className="aspect-square ">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.producttitle}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        <div className=" felx flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-sans">{product.price}</p>
        </div>
      </div>
    </div>
  );
}
