import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const Get = () => {
  return (
    <div className="w-auto h-auto px-4 sm:px-6 md:px-10 mb-20 overflow-hidden">
      {/* Heading */}
      <h1 className="text-2xl sm:text-xl md:text-2xl font-bold text-center text-gray-800 mt-10 sm:mt-6">
        Get in Touch With Us
      </h1>

      {/* Description */}
      <p className="text-center text-lg sm:text-base text-gray-400 leading-relaxed px-4 md:px-32 lg:px-[440px] my-6">
        For more information about our product & services, please feel free to
        drop us an email. Our staff will always be there to help you out. Do not
        hesitate!
      </p>

      {/* Main Flex Container */}
      <div className="flex flex-col sm:flex-row md:flex-row w-full gap-10 md:gap-16 lg:gap-40 mt-10 md:mt-20 items-center">
        {/* Address Section */}
        <div className="w-full sm:w-[393px] md:w-[393px] lg:w-[393px] h-auto mb-10 sm:mb-20 lg:ml-24">
          {/* Address */}
          <div className="mb-5 mt-5">
            <SiGooglemaps className="w-8 h-8 mx-auto md:ml-20 mb-2" />
            <h3 className="text-lg font-bold text-center md:text-left md:ml-32">
              Address
            </h3>
            <p className="text-center md:text-left md:ml-32">236 5th SE Avenue,</p>
            <p className="text-center md:text-left md:ml-32">New York NY1000,0</p>
            <p className="text-center md:text-left md:ml-32">United States</p>
          </div>

          {/* Phone */}
          <div className="mb-5 mt-5">
            <FaPhoneAlt className="w-8 h-8 mx-auto md:ml-20 mb-2" />
            <h3 className="text-lg font-bold text-center md:text-left md:ml-32">
              Phone
            </h3>
            <p className="text-center md:text-left md:ml-32">Mobile: +(84) 546-6789</p>
            <p className="text-center md:text-left md:ml-32">Hotline: +(84) 456-6789</p>
          </div>

          {/* Working Time */}
          <div className="mb-5 mt-5">
            <MdWatchLater className="w-8 h-8 mx-auto md:ml-20 mb-2" />
            <h3 className="text-lg font-bold text-center md:text-left md:ml-32">
              Working Time
            </h3>
            <p className="text-center md:text-left md:ml-32">Monday-Friday: 9:00 - 21:00</p>
            <p className="text-center md:text-left md:ml-32">Saturday-Sunday: 9:00 - 22:00</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full sm:w-[635px] md:w-[635px] lg:w-[635px]">
          <form className="w-full max-w-md mx-auto md:mx-0">
            {/* Input Fields */}
            <div className="mb-4">
              <label className="block font-bold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="abc"
                className="w-full h-[50px] rounded-xl border-2 border-gray-400 px-4"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Email address</label>
              <input
                type="email"
                placeholder="abc@def.com"
                className="w-full h-[50px] rounded-xl border-2 border-gray-400 px-4"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Subject</label>
              <input
                type="text"
                placeholder="this is an optional"
                className="w-full h-[50px] rounded-xl border-2 border-gray-400 px-4"
              />
            </div>
            <div className="mb-6">
              <label className="block font-bold mb-2">Message</label>
              <textarea
                placeholder="Hi! I’d like to ask about"
                className="w-full h-[120px] rounded-xl border-2 border-gray-400 px-4 py-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className=" ">
              <button
                type="submit"
                className="w-[200px] h-[45px] bg-[#029FAE] text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Get;
