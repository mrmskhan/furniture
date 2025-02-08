import React, { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import popularProductsQuery from "../sanity/lib/queries/popular-query";
import Image from "next/image";

interface Product {
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  image: {
    asset: {
      url: string;
    };
  };
  category: {
    title: string;
  };
  description: string;
  inventory: number;
  tags: string[];
}

const Popular = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const data = await client.fetch(popularProductsQuery);
      console.log("Fetched Products:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching popular products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-start mt-10 lg:mt-20 mb-10 lg:mb-20">
      {/* First div: Paragraph */}
      <div className="w-full lg:w-[52px] lg:h-[200px] mt-10 lg:mt-52 mr-0 lg:mr-4 ml-4 lg:ml-16">
        <p className="text-black font-roboto font-normal text-[20px] lg:text-[40px] flex justify-center lg:leading-[39.84px] rotate-0 lg:rotate-90 origin-right whitespace-nowrap">
          Explore new and popular styles
        </p>
      </div>

      {/* Second div: Large Image */}
      <div className="w-full lg:w-[620px] lg:h-[620px] ml-4 lg:ml-4 mt-4 lg:mt-0">
        <Image
          src="/feature3.png"
          alt="big"
          className="w-full h-auto lg:h-full object-cover"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>

      {/* Third div: Small images in grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 lg:mt-0 ml-4 lg:ml-4">
        {products.length > 0 ? (
          products.slice(0, 4).map((product, index) => (
            <div key={index} className="w-full">
              <Image
                src={product.image.asset.url}
                alt={product.title}
                className="object-cover"
                width={300}
                height={300}
              />
            </div>
          ))
        ) : (
          <p>Loading popular products...</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
