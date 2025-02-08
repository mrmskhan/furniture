import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../sanity/lib/client";
import topCategoriesQuery from "../sanity/lib/queries/topCategories-query";

// Category structure
interface Category {
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
  products: number;
}

const TopCategories = () => {
  // categories ka state or type
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await client.fetch(topCategoriesQuery);
        console.log("Fetched Categories Data:", data);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="w-full px-4 py-[5rem] sm:py-[6rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 pb-10 text-left">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full">
                <Image
                  src={category.image.asset.url}
                  alt={category.title}
                  width={424}
                  height={424}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="mb-2 font-inter text-xl font-medium text-white">
                      {category.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-200">
                      {category.products} Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
