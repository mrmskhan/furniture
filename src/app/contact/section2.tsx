import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";

const Section2 = () => {
  return (
    <div className="flex w-full lg:w-[1120px] lg:ml-52 justify-center items-center bg-[#F4F4F4] p-5 sm:p-7 md:p-10 lg:p-[50px]">
      <div className="w-full max-w-[1070px] flex flex-col sm:flex-row md:flex-row xl:flex-row justify-between gap-10">
        {/* Item 1 */}
        <div className="flex items-center gap-4">
          <HiOutlineTrophy className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] text-[#242424]" />
          <div>
            <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[25px] text-[#242424]">
              High Quality
            </h3>
            <p className="font-medium text-[14px] sm:text-[16px] md:text-[20px] text-[#898989]">
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4">
          <MdVerified className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] text-[#242424]" />
          <div>
            <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[25px] text-[#242424]">
              Warranty Protection
            </h3>
            <p className="font-medium text-[14px] sm:text-[16px] md:text-[20px] text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4">
          <MdVerified className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] text-[#242424]" />
          <div>
            <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[25px] text-[#242424]">
              24 / 7 Support
            </h3>
            <p className="font-medium text-[14px] sm:text-[16px] md:text-[20px] text-[#898989]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
