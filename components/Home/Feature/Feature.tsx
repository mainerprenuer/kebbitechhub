'use client';

import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaRobot } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';

const Feature = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto'>
                {/* image  */}
                <Tilt>
                    <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <Image src="/images/d6.jpg" alt='FeatureImage' width={1000} height={1000} className='rounded-lg' />
                    </div>
                </Tilt>
                {/* text content  */}
                    <div>
                        {/* subheading  */}
                        <div className="flex items-center space-x-4">
                            <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                                <FaRobot className='h-6 w-6 text-white' />
                            </div>
                            <h1 className='text-xl text-black font-semibold'>Build the Future of Robotics</h1>
                        </div>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>
                        Elevate Your Learning Journey.
                        </h1>
                        <p className='mt-4 text-gray-600'>Introduce young minds to the exciting world of robotics! Our program provides a playful and interactive learning experience that builds confidence and inspires innovation.</p>
                        <button className='flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white'>
                            <span>Learn More</span>
                            <FaArrowRight />
                        </button>
                    </div>
                
            </div>
        </div>
    )
}

export default Feature