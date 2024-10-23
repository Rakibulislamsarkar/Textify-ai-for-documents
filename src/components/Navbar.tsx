import React from 'react'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import {
  MdOutlineMenu,
  MdArrowOutward,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='sticky h-auto p-2 inset-x-0 top-0 z-30 w-full bg-slate-200/40 backdrop-blur-lg drop-shadow-lg transition-all'>
        <MaxWidthWrapper>
            <div className="items-center justify-center max-w-[1200px] w-full mx-auto px-4">
            <div className="flex text-black justify-between items-center">
          {/* Logo */}
          <Link href='/' className="flex gap-2 justify-center items-center">
            <img
              src="/textify(Black).png"
              alt="Logo Black"
              className="w-[2rem] h-auto"
            />
            <span className="hidden md:block">Textify</span>
          </Link>

          {/* Right Section - Avatar */}
          <div className='flex gap-2'>
          <>
                <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'lg',
                  })}>
                  Pricing
                </Link>
              </>
            </div>
          </div>
        </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar