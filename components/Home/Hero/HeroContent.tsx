import React from 'react'
import AnimatedTitle from '@/components/Helper/AnimatedTitle'

const HeroContent = () => {

    const textArray = ['Learn.','Grow.','Connect.'];

  return (
    <div>
        {/* title  */}
        <h1 data-aos="fade-right" className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl font-bold md:leading-[3rem] lg:leadin-[3.5rem] xl:leading-[4rem] text-white'>
        Join the Kebbi IT Hub to <AnimatedTitle textArray={textArray} cursorColor="white" typingSpeed={100} />
        </h1>
        {/* description  */}
        <p data-aos="fade-left" data-aos-delay="200" className='mt-12 text-sm md:text-base text-white text-opacity-60'>
        Experience focused tech learning, onsite with us.
        </p>
        {/* button  */}
        <div className='mt-8 flex items-center space-x-4'>
            <button data-aos="zoom-in" data-aos-delay="350" className='button__cls bg-yellow-600 hover:bg-yellow-900'>Get Started</button>
            <button data-aos="zoom-in" data-aos-delay="450" className='button__cls bg-pink-700 hover:bg-pink-900'>Watch Demo </button>
        </div>
        {/* stats  */}
        <div className="flex items-center flex-wrap space-x-16 mt-8">
            <div data-aos="fade-up" data-aos-delay="600" >
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>17+</p>
                <p className='w-[100px] h-[3px] bg-yellow-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Tutors</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="750" >
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>1250+</p>
                <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="900" >
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>8+</p>
                <p className='w-[100px] h-[3px] bg-red-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
            </div>
        </div>
    </div>
  )
}

export default HeroContent