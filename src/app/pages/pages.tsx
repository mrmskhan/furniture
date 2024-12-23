import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";

const Pages = () => {
  return (
    <div className="w-full h-[722px] top-[96px]">
      <div className="w-full md:w-[1609px] h-[632.89px] top-[174px] left-0 md:left-[179px] absolute">
        <div className="w-full md:w-[1100px] h-[547.89px]">
          <div className="w-full md:w-[733.33px] h-[547.89px] top-[22px] left-0 md:left-[88px] absolute">
            <h3 className="w-[55px] h-[33px] left-[16px] font-inter font-medium text-[22px] leading-[33px] text-[#111111] absolute">
              Bag
            </h3>
            <div className="flex flex-col md:flex-row w-full md:w-[963px] h-[211px] top-[34px] left-[16px] absolute">
              <div className="flex w-full md:w-[933px] h-[211px] pt-24 pb-24 bg-[#FFFFFF01] shadow-[inset_0_0_0_0px_#E5E5E5,inset_0_-1px_0_0px_#E5E5E5,inset_0_0_0_0px_#E5E5E5,inset_0_0_0_0px_#E5E5E5]">
                <img
                  src="pop-img1.png"
                  alt="Image 1"
                  className="w-[200px] h-[200px] object-cover rounded-lg"
                />
                <div className="flex w-full md:w-[753px] h-[163px] gap-24 md:gap-12">
                  <div className="flex w-full md:w-[687.53px] h-[105px] gap-[376px]">
                    <div className="grid gap-2 w-full md:w-[235.31px] h-[105px]">
                      <div className="flex">
                        <h4>Library Stool Chair</h4>
                      </div>
                      <div className=""></div>
                      <div className="grid">
                        <p>Ashen Slate/Cobalt Bliss</p>
                      </div>
                      <div className="flex gap-5">
                        <div>size</div>
                        <div>L</div>
                        <div>Quantity</div>
                        <div>1</div>
                      </div>
                      <CiHeart className="size-5 ml-2" />
                      <FaTrash className="size-5 ml-2" />
                    </div>
                  </div>
                  <div className="w-full md:w-[537.33px] h-[34px] pr-[43.33px]">
                    MRP: $99
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full md:w-[963px] h-[411px] mt-72">
              <div className="flex w-full md:w-[933px] h-[211px] pt-24 pb-24 pl-4 bg-[#FFFFFF01] shadow-[inset_0_0_0_0px_#E5E5E5,inset_0_-1px_0_0px_#E5E5E5,inset_0_0_0_0px_#E5E5E5,inset_0_0_0_0px_#E5E5E5]">
                <img
                  src="topCat1.png"
                  alt="Image 2"
                  className="w-[200px] h-[200px] object-cover rounded-lg"
                />
                <div className="flex w-full md:w-[753px] h-[163px] gap-12">
                  <div className="flex w-full md:w-[687.53px] h-[105px] gap-[376px]">
                    <div className="grid gap-2 w-full md:w-[235.31px] h-[105px]">
                      <div className="flex">
                        <h4>Library Stool Chair</h4>
                      </div>
                      <div className=""></div>
                      <div className="grid">
                        <p>Ashen Slate/Cobalt Bliss</p>
                      </div>
                      <div className="flex gap-5">
                        <div>size</div>
                        <div>L</div>
                        <div>Quantity</div>
                        <div>1</div>
                      </div>
                      <CiHeart className="size-5 ml-2" />
                      <FaTrash className="size-5 ml-2" />
                    </div>
                  </div>
                  <div className="w-full md:w-[537.33px] h-[34px] pr-[43.33px]">
                    MRP: $99
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
