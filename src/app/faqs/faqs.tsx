import React from 'react'
import { FaPlus } from 'react-icons/fa';

const Faqs = () => {
  return (
    <div className='w-full h-auto mb-24 px-4 md:px-16'>
        <div className='grid grid-cols-1 justify-center items-center w-full h-auto mt-16 mb-16'>
            <h2 className='font-helvetica font-bold text-[48px] leading-[56px] text-[#333333] text-center'>
                Questions Looks Here
            </h2>
            <p className='font-inter font-normal text-[16px] leading-[24px] text-[#4F4F4F] text-center'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-5  lg:w-[1200px]  lg:h-[558px]  lg:ml-[115px]'>
            <div className='w-full bg-[#F7F7F7] p-7'>
                <div className='w-full'>
                    <div className='flex pb-5 justify-between'>
                        <h3 className='font-inter font-bold text-[18px] leading-[26px] text-[#333333]'>
                            What types of chairs do you offer?
                        </h3>
                        <FaPlus className='w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-inter font-normal text-[16px] leading-[24px] text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
            </div>

            <div className='w-full bg-[#F7F7F7] p-7'>
                <div className='w-full'>
                    <div className='flex pb-5 justify-between'>
                        <h3 className='font-inter font-bold text-[18px] leading-[26px] text-[#333333]'>
                            How can we get in touch with you?
                        </h3>
                        <FaPlus className='w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-inter font-normal text-[16px] leading-[24px] text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
            </div>

            <div className='w-full bg-[#F7F7F7] p-7'>
                <div className='w-full'>
                    <div className='flex pb-5 justify-between'>
                        <h3 className='font-inter font-bold text-[18px] leading-[26px] text-[#333333]'>
                            Do your chairs come with a warranty?
                        </h3>
                        <FaPlus className='w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-inter font-normal text-[16px] leading-[24px] text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
            </div>

            <div className='w-full bg-[#F7F7F7] p-7'>
                <div className='w-full'>
                    <div className='flex pb-5 justify-between'>
                        <h3 className='font-inter font-bold text-[18px] leading-[26px] text-[#333333]'>
                            What will be delivered? And When?
                        </h3>
                        <FaPlus className='w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-inter font-normal text-[16px] leading-[24px] text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
            </div>

            <div className='w-full bg-[#F7F7F7] p-7'>
                <div className='w-full'>
                    <div className='flex pb-5 justify-between'>
                        <h3 className='font-inter font-bold text-[18px] leading-[26px] text-[#333333]'>
                            Can I try a chair before purchasing?
                        </h3>
                        <FaPlus className='w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-inter font-normal text-[16px] leading-[24px] text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
            </div>

            <div className='w-full bg-[#F7F7F7] p-7'>
                <div className='w-full'>
                    <div className='flex pb-5 justify-between'>
                        <h3 className='font-inter font-bold text-[18px] leading-[26px] text-[#333333]'>
                            How do I clean and maintain my Comforty chair?
                        </h3>
                        <FaPlus className='w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-inter font-normal text-[16px] leading-[24px] text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs;
