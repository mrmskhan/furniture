import React from "react";
import Image from "next/image";

const TopCategories = () => {
  return (
    <section className="w-full px-4 py-[5rem] sm:py-[6rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8 pb-10 text-left">
          Top Categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Left image */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-[4/3] w-full">
              <Image
                src="/topCat1.png"
                alt="Wing Chair"
                width={424}
                height={424}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    Wing Chair
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    3,584 Products
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-[4/3] w-full">
              <Image
                src="/topCat2.png"
                alt="Wooden chair"
                width={424}
                height={424}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    Wooden Chair
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    157 Products
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-[4/3] w-full">
              <Image
                src="/topCat3.png"
                alt="Desk Chair"
                width={424}
                height={424}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    Desk Chair
                  </h3>
                  <p className="font-inter text-sm text-gray-200">
                    154 Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
