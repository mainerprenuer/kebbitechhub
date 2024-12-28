'use client';

import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';


const HeroImage = () => {
  return (
    <Tilt>
        <div className="hidden lg:block">
            <Image className='rounded-lg w-4/5 h-4/5' src="/images/hero1.jpg" width={600} height={400} alt='Hero'/>
        </div>
    </Tilt>
  )
}

export default HeroImage