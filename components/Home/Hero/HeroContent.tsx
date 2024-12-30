import React from 'react'

const HeroContent = () => {
  return (
    <div>
        {/* title  */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text7xl font-bold md:leading-[3rem] lg:leadin-[3.5rem] xl:leading-[4rem] text-white'>
        Tech Skills Made Easy. 
        </h1>
        {/* description  */}
        <p className='mt-12 text-sm md:text-base text-white text-opacity-60'>
        Learn Online, Anytime.
        </p>
        {/* button  */}
        <div className='mt-8 flex items-center space-x-4'>
            <button className='button__cls bg-yellow-600 hover:bg-yellow-900'>Get Started</button>
            <button className='button__cls bg-pink-700 hover:bg-pink-900'>Learn More</button>
        </div>
        {/* stats  */}
        <div className="flex items-center flex-wrap space-x-16 mt-8">
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>215+</p>
                <p className='w-[100px] h-[3px] bg-yellow-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Tutors</p>
            </div>
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>2250+</p>
                <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
            </div>
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>18+</p>
                <p className='w-[100px] h-[3px] bg-red-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
            </div>
        </div>
    </div>
  )
}

export default HeroContent