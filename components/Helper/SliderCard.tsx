import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa6';

// define the type
type Props = {
    name: string;
    image: string;
    role: string;
};

const SliderCard = ({name, image, role }: Props) => {
  return (
    <div className='flex flex-wrap sm:flex-nowrap items-center space-x-10'>
        <div className='h-full w-full'>
            <Image 
                src={image} 
                alt='image'
                width={350}
                height={350}
                className='w-full h-full'
                />
        </div>
        <div className='mt-6 mb-7'>
            <div className='flex items-center'>
                <FaStar className='xl:w-7 xl:h-7 md:h-5 w-4 h-4 text-yellow-600' />
                <FaStar className='xl:w-7 xl:h-7 md:h-5 w-4 h-4 text-yellow-600' />
                <FaStar className='xl:w-7 xl:h-7 md:h-5 w-4 h-4 text-yellow-600' />
                <FaStar className='xl:w-7 xl:h-7 md:h-5 w-4 h-4 text-yellow-600' />
                <FaStar className='xl:w-7 xl:h-7 md:h-5 w-4 h-4 text-yellow-600' />
            </div>
            <p>This is a text 
                contentThis is a text contentThis
                 is a text contentThis is a text 
                 contentThis is a text content
                This is a text content
            </p>
            <div className='mt-7'>
                <h1 className='text-xl text-black font-semibold'>{name}</h1>
                <p className='text-lg text-black text-opacity-60'>{role}</p>
            </div>
        </div>
    </div>
  )
}

export default SliderCard