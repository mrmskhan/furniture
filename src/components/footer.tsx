import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaCcPaypal,
} from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
import { RiMastercardLine } from "react-icons/ri";
import { TbBrandVisa } from "react-icons/tb";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[#E1E3E5] text-gray-600 py-10 px-5 md:px-20 lg:px-56">
        {/* Parent Div */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* 1st Child Div */}
          <div className="flex flex-col lg:flex-row gap-8 lg:w-3/5">
            {/* Logo + Link 1 */}
            <div className="flex flex-col w-full lg:w-1/3">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo-Icon.png" // Image ka path
                  alt="Logo" // Alt text
                  width={48} // Image ki width (12 * 4 = 48px)
                  height={48} // Image ki height (12 * 4 = 48px)
                />
                <span className="text-lg font-bold text-gray-800">
                  Comfortly
                </span>
              </div>
              <p className="mt-4 text-sm hover:underline hover:text-teal-600">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus
              </p>
              {/* Social Media Icons */}
              <div className="flex justify-start gap-4 mt-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-xl text-gray-600 hover:text-teal-600"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-xl text-gray-600 hover:text-teal-600"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-xl text-gray-600 hover:text-teal-600"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://nl.pinterest.com/"
                  target="_blank"
                  className="text-xl text-gray-600 hover:text-teal-600"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="text-xl text-gray-600 hover:text-teal-600"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Links 2, 3 */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 w-full lg:w-2/3">
              {/* Links 2 */}
              <div className="ml-10">
                <h4 className="text-lg font-semibold mb-4">CATEGORY</h4>
                <ul className="text-sm text-gray-800 space-y-2">
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Sofa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Armchair
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Wing Chair
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Desk Chair
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Wooden Chair
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Park Bench
                    </a>
                  </li>
                </ul>
              </div>

              {/* Links 3 */}
              <div className="ml-10">
                <h4 className="text-lg font-semibold mb-4">SUPPORT</h4>
                <ul className="text-sm text-gray-800 space-y-2">
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Help & Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-teal-600">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2nd Child Div */}
          <div className="w-full lg:w-1/3">
            <h4 className="text-lg font-semibold">NEWSLETTER</h4>
            <form className="flex flex-col sm:flex-row mt-4 gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded bg-gray-100 text-gray-800 text-sm"
              />
              <button className="bg-[#029FAE] hover:bg-teal-600 text-white py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 hover:underline hover:text-teal-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </footer>

      <div className="w-full h-[75px] flex flex-col sm:flex-row items-center justify-between bg-gray-200 px-10 sm:px-20 lg:px-40">
        {/* Left div */}
        <div className="text-sm text-gray-600">
          <span>
            @ 2021 - Blogy - Designed & Developed by{" "}
            <a href="#" target="_blank" className="font-semibold">
              Zakirsoft
            </a>
          </span>
        </div>

        {/* Right div */}
        <div className="flex justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
          <a
            href="https://www.paypal.com/pk/home"
            target="_blank"
            className="text-gray-600 hover:text-teal-600"
          >
            <RiMastercardLine className="w-8 h-8" />
          </a>
          <a
            href="https://www.mastercard.us/en-us.html"
            target="_blank"
            className="text-gray-600 hover:text-teal-600"
          >
            <FaCcPaypal className="w-8 h-8" />
          </a>
          <a
            href="https://www.americanexpress.com/"
            target="_blank"
            className="text-gray-600 hover:text-teal-600"
          >
            <FaCcAmex className="w-8 h-8" />
          </a>
          <a
            href="https://www.cimbanque.com/"
            target="_blank"
            className="text-gray-600 hover:text-teal-600"
          >
            <TbBrandVisa className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
