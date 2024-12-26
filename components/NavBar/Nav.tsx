import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='fixed w-full transition-all duration-200 h-[12vh] z-[1000] bg-green-700'>
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto border-r">
            {/* logo */}
            <Image src="/images/logo copy.png" alt='Logo' width={170} height={170} />
            {/* Nav Links */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url}>
                            <p className='nav__link'>{link.label}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Nav