import React from 'react'
import { FaArrowRight, FaAward } from 'react-icons/fa6'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      {/* define grid */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* 1st part */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <div className="flex items-center space-x-4"> 
            <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
              <FaAward className='h-6 w-6 text-white' />
            </div>
            <h1 className='text-xl text-black font-semibold'>Guaranteed and Certified</h1>
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>
          Tired of feeling left behind in the tech world?
          </h1>
          <p className='mt-4 text-gray-600'>Kebbi Tech Hub makes learning a breeze! Our online & onsite courses are designed to be fun and engaging, fitting seamlessly into your busy schedule. Unlock your tech potential today – let's get started!</p>
          <button className='flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white'>
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </div>
        {/* 2nd part */}
          <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="150">
            <div>
              <h1 className='text-7xl lg:text-9xl font-bold text-black text-opacity-5'>
                01
              </h1>
              <div className='-mt-10'>
                <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>
                Focus on Convenience
                </h1>
                <p className='w-[90%] lg:w-[70%] text-base text-black text-opacity-60'>
                The courses were bite-sized, the interface was intuitive, and the instructors were genuinely enthusiastic.
                </p>
              </div>
            </div>
            <div>
              <h1 className='text-7xl lg:text-9xl font-bold text-black text-opacity-5'>
                02
              </h1>
              <div className='-mt-10'>
                <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>
                Affordable for everyone
                </h1>
                <p className='w-[90%] lg:w-[70%] text-base text-black text-opacity-60'>
                We believe tech education should be accessible to all. Ensuring that financial constraints don't limit your learning journey.                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About