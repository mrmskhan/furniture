"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { client } from "../../sanity/lib/client";
import { allProducts1Query } from "../../sanity/lib/queries/allProduct-query";

// Product type
type Product = {
  title: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  slug?: {
    current: string;
  };
};

// Utility function to shuffle array
const shuffleArray = (array: Product[]) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

// ProductBox Component
const ProductBox = ({ product }: { product: Product }) => (
  <div>
    <div className="group shadow-md bg-neutral-100 w-[260px] h-[260px] flex justify-center items-center relative cursor-pointer">
      <Link href={`/singleProductPage/${product.slug?.current || ""}`}>
        <Image
          src={product.imageUrl}
          width={260}
          height={100}
          alt={product.title}
          priority
        />
      </Link>
      <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button>
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

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(allProducts1Query);
        const shuffledProducts = shuffleArray(fetchedProducts);
        console.log("Fetched and Shuffled Products: ", shuffledProducts);
        setProducts(shuffledProducts);
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
            Products
          </h1>
          <div className="flex flex-wrap justify-center gap-5">
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
