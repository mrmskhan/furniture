import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex justify-center items-center rounded-[8px]">
      <div className="w-full max-w-screen-xl h-auto rounded-bl-[50px] bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
        <div className="flex flex-col lg:justify-center lg:pb-32 items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-[14px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left">
            WELCOME TO CHAIRY
          </h1>
          <p className="w-full sm:w-[557px] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6">
            Best Furniture Collection for your interior.
          </p>
          <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700 mx-auto sm:mx-0">
            <span>Shop Now</span>
            <FaArrowRightLong />
          </button>
          <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
            <img
              src="/Product-Image.png"
              alt="Furniture product showcasing a collection"
              className="w-[334px] h-[484px] lg:absolute lg:top-[260px] lg:left-[877px] sm:w-[full] sm:h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
