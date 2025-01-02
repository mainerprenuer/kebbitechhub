import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        {/* Define grid */}
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8
        border-b-[1.5px] border-white border-opacity-20'>
            {/* 1st footer part */}
            <div>
                <Image src="/images/logo copy.png" alt='Logo' width={100} height={100} className='rounded-lg' />
                <p className='mt-6 text-white text-opacity-50'>
                This is a test This is a test This is a testThis is a test This is a test This is a test This is a test This is a test
                </p>
                {/* socials icons */}
                <div className='flex items-center space-x-4 mt-6'>
                    <FaFacebookF className='w-6 h-6 text-blue-500'/>
                    <FaXTwitter className='w-6 h-6 text-white'/>
                    <FaYoutube className='w-6 h-6 text-red-700'/>
                    <FaInstagram className='w-6 h-6 text-pink-600'/>
                    <FaWhatsapp className='w-6 h-6 text-green-600'/>
                </div>
            </div>
            {/* 2nd part */}
            <div className=''>
                <h1 className='footer_heading'>Popular</h1>
                <p className='footer__link'>Web Development</p>
                <p className='footer__link'>Web Development</p>
                <p className='footer__link'>Web Development</p>
                <p className='footer__link'>Web Development</p>
                <p className='footer__link'>Web Development</p>
            </div>
            {/* 3rd part */}
            <div className=''>
                <h1 className='footer_heading'>Quick Link</h1>
                <p className='footer__link'>Home</p>
                <p className='footer__link'>About</p>
                <p className='footer__link'>Courses</p>
                <p className='footer__link'>Instructor</p>
                <p className='footer__link'>Profile</p>
                <p className='footer__link'>Privacy Policy</p>
            </div>
            {/* 4th part (newsletter) */}
           <div>
           <h1 className='footer_heading'>Subscribe our Newsletter</h1>
           <input type='text' placeholder='Enter you email' className='px-6 py-2 rounded-lg outline-none
            bg-gray-700 w-full text-white'
            />
            <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white'>Subscribe</button>
           </div>
        </div>
        <p className="text-center mt-4 text-base text-white opacity-70">
            {new Date().getFullYear()} &copy; Powered by KEBBI IT HUB
        </p>
    </div>
  )
}

export default Footer