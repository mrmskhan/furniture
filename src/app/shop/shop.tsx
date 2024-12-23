import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const Shop = () => {
  return (
    <div className="px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <Image
          src="/feature2.png"
          alt="Image 3"
          width={600}
          height={300}
          className="w-full lg:w-[600px] h-[300px] lg:h-[550px] rounded-lg lg:ml-36 lg:mr-20 mb-4 lg:mb-0"
        />

        {/* Content Section */}
        <div className="flex flex-col">
          <h1 className="font-inter font-bold text-[40px] lg:text-[60px] leading-[44px] lg:leading-[66px] text-[#272343] mb-4 pr-0 lg:pr-40">
            Library Stool Chair
          </h1>
          <button className="w-[118px] h-[32px] font-inter font-semibold text-[16px] lg:text-[20px] leading-[22px] text-white bg-[#029FAE] rounded-full p-1">
            $20.00 USD
          </button>
          <div className="w-full lg:w-[521px] h-[1px] bg-[#D9D9D9] mt-6 lg:mt-10"></div>
          <div>
            <p className="w-full lg:w-[543px] opacity-60 font-inter font-normal text-[18px] lg:text-[22px] leading-[26px] lg:leading-[33px] text-[#272343] mt-5 mb-5 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
          </div>
          <button className="flex flex-row justify-center items-center px-4 lg:px-6 py-3 gap-2.5 mt-2 w-full lg:w-[212px] h-[50px] lg:h-[63px] bg-[#029FAE] rounded-lg text-white">
            <FaShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
