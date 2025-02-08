import React from "react";
import Image from "next/image";

const CompanyLogos = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center pt-14 gap-24 px-4">
      <div className="flex justify-center items-center">
        <Image
          src="/logo1.png"
          alt="logo1"
          width={85}
          height={87}
          className="bg-transparent"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/logo2.png"
          alt="logo2"
          width={107}
          height={109}
          className="bg-transparent"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/logo3.png"
          alt="logo3"
          width={135}
          height={139}
          className="bg-transparent"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/logo4.png"
          alt="logo4"
          width={63}
          height={65}
          className="bg-transparent"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/logo5.png"
          alt="logo5"
          width={98}
          height={101}
          className="bg-transparent"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/logo6.png"
          alt="logo6"
          width={113}
          height={115}
          className="bg-transparent"
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/logo7.png"
          alt="logo7"
          width={84}
          height={87}
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default CompanyLogos;
