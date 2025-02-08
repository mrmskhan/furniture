"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { client } from "@/sanity/lib/client";
import { allProducts1Query } from "../../sanity/lib/queries/allProduct-query";
import Link from "next/link";
import { urlFor } from "@/utils/urlFor"; // Import urlFor function

// Product type definition
interface Product {
  title: string;
  price: string;
  oldPrice?: string;
  image: any;
  slug?: {
    current: string;
  };
}

// ProductBox Component
const ProductBox = ({ product }: { product: Product }) => {
  const imageUrl = product.imageUrl || "/fallback-image.jpg";

  return (
    <div>
      <div className="group shadow-md bg-neutral-100 w-[260px] h-[260px] flex justify-center items-center relative cursor-pointer">
        {product.slug?.current ? (
          <Link href={`/singleProductPage/${product.slug.current}`}>
            <Image
              src={imageUrl}
              width={260}
              height={260}
              alt={product.title || "Product Image"}
              unoptimized
            />
          </Link>
        ) : (
          <Image
            src={imageUrl}
            width={260}
            height={260}
            alt={product.title || "Product Image"}
            unoptimized
          />
        )}
      </div>
      <h1 className="font-bold font-sans pt-4 text-center">{product.title}</h1>
      <div className="flex items-center justify-between space-x-4 mt-2">
        <span className="text-gray-800 font-bold">{product.price}</span>
        {product.oldPrice && (
          <span className="text-gray-400 font-bold line-through">
            {product.oldPrice}
          </span>
        )}
        <CiShoppingCart className="text-gray-800 w-[22px] h-[22px] hover:text-green-600 transition-colors" />
      </div>
    </div>
  );
};

const AllProducts1 = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(allProducts1Query);
        console.log("Fetched Products:", fetchedProducts);
        setProducts(fetchedProducts);
        console.log("Sanity Image Data:", product.image);
        console.log("Generated Image URL:", urlFor(product.image)?.url());
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <div className="w-full flex justify-center items-center mt-16 mb-20">
        <div className="w-[80%]">
          <h1 className="text-center text-gray-800 font-bold text-3xl pt-4 pb-10">
            All Products
          </h1>
          <div className="flex flex-wrap justify-center gap-5">
            {products.length > 0 ? (
              products.map((product, index) =>
                product ? <ProductBox key={index} product={product} /> : null
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllProducts1;
