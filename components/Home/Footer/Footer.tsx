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
                Your Tech Hub in Kebbi -  The Future of Learning Starts Here.
                </p>
                {/* socials icons */}
                <div className='flex items-center space-x-4 mt-6'>
                    <FaFacebookF className='w-6 h-6 text-blue-500 cursor-pointer'/>
                    <FaXTwitter className='w-6 h-6 text-white cursor-pointer'/>
                    <FaYoutube className='w-6 h-6 text-red-700 cursor-pointer'/>
                    <FaInstagram className='w-6 h-6 text-pink-600 cursor-pointer'/>
                    <FaWhatsapp className='w-6 h-6 text-green-600 cursor-pointer'/>
                </div>
            </div>
            {/* 2nd part */}
            <div className=''>
                <h1 className='footer__heading'>Popular</h1>
                <p className='footer__link'>Robotics</p>
                <p className='footer__link'>Digital Literacy</p>
                <p className='footer__link'>Basic ICT Skills</p>
                <p className='footer__link'>Cyber Security</p>
                <p className='footer__link'>Installation Skills</p>
                <p className='footer__link'>Artificial Intelligence</p>
                <p className='footer__link'>Software Development</p>
            </div>
            {/* 3rd part */}
            <div className=''>
                <h1 className='footer__heading'>Quick Link</h1>
                <p className='footer__link'>Home</p>
                <p className='footer__link'>About</p>
                <p className='footer__link'>Courses</p>
                <p className='footer__link'>Instructor</p>
                <p className='footer__link'>Parent</p>
                <p className='footer__link'>Profile</p>
                <p className='footer__link'>Privacy Policy</p>
            </div>
            {/* 4th part (newsletter) */}
           <div>
           <h1 className='footer__heading'>Subscribe our Newsletter</h1>
           <input type='text' placeholder='Enter you email' className='px-6 py-2 rounded-lg outline-none
            bg-gray-700 w-full text-white'
            />
            <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white hover:bg-rose-900'>Subscribe</button>
           </div>
        </div>
        <p className="text-center mt-4 text-base text-white opacity-70">
            {new Date().getFullYear()} &copy; Powered by KEBBI IT HUB
        </p>
    </div>
  )
}

export default Footer