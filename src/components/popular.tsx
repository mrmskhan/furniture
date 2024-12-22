import React from 'react';

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
        <img
          src="/feature3.png"
          alt="big"
          className="w-full h-auto lg:h-full object-cover"
        />
      </div>

      {/* Third div: Small images in grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 lg:mt-0 ml-4 lg:ml-4">
        <img
          src="/pop-img2.png"
          alt="pic1"
          className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] object-cover"
        />
        <img
          src="/pop-img3.png"
          alt="pic2"
          className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] object-cover"
        />
        <img
          src="/pop-img4.png"
          alt="pic3"
          className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] object-cover"
        />
        <img
          src="/pop-img5.png"
          alt="pic4"
          className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] object-cover"
        />
      </div>
    </div>
  );
};

export default Popular;
