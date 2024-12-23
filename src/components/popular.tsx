import React from 'react';
import Image from 'next/image';

const Popular = () => {
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
      <Image
        src="/pop-img2.png"
        alt="pic1"
        className="object-cover"
        width={300} 
        height={300} 
      />
      <Image
        src="/pop-img3.png"
        alt="pic2"
        className="object-cover"
        width={300}
        height={300} 
      />
      <Image
        src="/pop-img4.png"
        alt="pic3"
        className="object-cover"
        width={300}
        height={300} 
      />
      <Image
        src="/pop-img5.png"
        alt="pic4"
        className="object-cover"
        width={300} 
        height={300} 
      />
      </div>
    </div>
  );
};

export default Popular;
