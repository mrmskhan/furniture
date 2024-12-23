import React from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { MdCreditCard, MdOutlineCheckCircle } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between my-20 mx-5 lg:ml-[215px] lg:mr-32 gap-5">
        <div className="bg-[#007580] lg:w-[672px] lg:h-[478px] rounded-lg p-5">
          <div className="lg:w-[495px] lg:h-[161px] gap-[12px]">
            <h3 className="text-3xl font-bold text-[#FFFFFF] text-center lg:text-left lg:mx-14 px-2 pt-10">
              About Us - Comforty
            </h3>
            <p className="text-lg font-normal text-[#FFFFFF] text-center lg:text-left lg:mx-14 px-2 mt-5">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <button className="w-[179px] h-[56px] bg-[#F9F9F926] text-[#FFFFFF] mx-auto lg:mx-14 lg:mt-44">
            View collection
          </button>
        </div>
        <div>
          <Image
            src="/feature1.png"
            alt="image"
            width={619}
            height={478}
            className="lg:w-[619px] lg:h-[478px] mx-auto"
          />
        </div>
      </div>

      <h2 className="font-semibold text-[32px] leading-[35.2px] text-[#272343] mb-10 text-center">
        What makes our Brand Different
      </h2>

      <div className="flex flex-wrap gap-5 justify-center  lg:mb-32 lg:ml-20">
        <div className="w-full sm:w-[260px] p-[48px] gap-10 bg-[#F9F9F9]">
          <TbTruckDelivery className="w-[24px] h-[24px] bg-[#FFFFFF]" />
          <h3 className="font-normal text-[20px] leading-[28px] text-[#007580] mt-3">
            Next day as standard
          </h3>
          <p className="font-normal text-[16px] leading-[24px] text-[#007580] mt-3">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="w-full sm:w-[260px] p-[48px] gap-10 bg-[#F9F9F9]">
          <MdOutlineCheckCircle className="w-[24px] h-[24px] bg-[#FFFFFF]" />
          <h3 className="font-normal text-[20px] leading-[28px] text-[#007580] mt-3">
            Made by true artisans
          </h3>
          <p className="font-normal text-[16px] leading-[24px] text-[#007580] text-center mt-3">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>
        <div className="w-full sm:w-[260px] p-[48px] gap-10 bg-[#F9F9F9]">
          <MdCreditCard className="w-[24px] h-[24px] bg-[#FFFFFF]" />
          <h3 className="font-normal text-[20px] leading-[28px] text-[#007580] mt-3">
            Unbeatable prices
          </h3>
          <p className="font-normal text-[16px] leading-[24px] text-[#007580] mt-3">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        <div className="w-full sm:w-[260px] p-[48px] gap-10 bg-[#F9F9F9]">
          <FaCanadianMapleLeaf className="w-[24px] h-[24px] bg-[#FFFFFF]" />
          <h3 className="font-normal text-[20px] leading-[28px] text-[#007580] mt-3">
            Recycled packaging
          </h3>
          <p className="font-normal text-[16px] leading-[24px] text-[#007580] mt-3">
            We use 100% recycled to ensure our footprint is more manageable
          </p>
        </div>
      </div>

      <h2 className="font-semibold text-[32px] leading-[35.2px] text-[#272343] lg:mb-20 lg:ml-40">
        Our Popular Products
      </h2>
      <div className="flex flex-wrap gap-5 justify-center lg:ml-20 mb-10">
        <div className="w-full sm:w-[630px] mb-5">
          <Image
            src="/sofabig.png"
            alt="large sofa set"
            width={1200}
            height={375}
            className="w-full h-[375px] bg-[#F6F6F6]"
          />
          <div className="">
            <p className="text-[20px] leading-[28px] text-[#2A254B]">
              The Popular suede sofa
            </p>
            <p className="text-[18px] leading-[27px] text-[#2A254B]">$99.00</p>
          </div>
        </div>
        <div className="w-full sm:w-[305px] mb-5">
          <Image
            src="/sofa2.png"
            alt="sofa2"
            width={1200}
            height={375}
            className="w-full h-[375px] bg-[#F6F6F6]"
          />
          <div className="">
            <p className="text-[20px] leading-[28px] text-[#2A254B]">
              The Dandy chair
            </p>
            <p className="text-[18px] leading-[27px] text-[#2A254B]">$99.00</p>
          </div>
        </div>
        <div className="w-full sm:w-[305px] mb-5">
          <Image
            src="/sofa3.png"
            alt="sofa3"
            width={1200}
            height={375}
            className="w-full h-[375px] bg-[#F6F6F6]"
          />{" "}
          <div className="">
            <p className="text-[20px] leading-[28px] text-[#2A254B]">
              The Dandy chair
            </p>
            <p className="text-[18px] leading-[27px] text-[#2A254B]">$99.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
