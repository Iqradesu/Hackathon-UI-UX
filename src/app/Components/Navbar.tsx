'use client'
import { useState } from 'react';
import React from 'react';
import Navlinks from './Navlinks';
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { BsPersonExclamation } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import MenuOverlay from './MenuOverlay';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const navLinks = [
  { href: '/', title: "Home" },
  { href: '/Shop', title: "Shop" },
  { href: '/blogs', title: "About" },
  { href: '/contact', title: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname=usePathname()
  return (
    <section className={`${pathname==='/'?'fixed':'relative'} w-full py-2 md:py-6 px-10 lg:px-10 bg-white md:bg-transparent z-50 `}>
      <div className='flex md:justify-center justify-end items-center gap-10 '>
        <ul className=' hidden md:flex gap-8'>
          {navLinks.map((link, index) => (
            <Navlinks key={index} href={link.href} title={link.title} />
          ))}
        </ul>
        <div>
          <div className='block md:hidden ml-auto overflow-visible z-50' >
      { !menuOpen ?
      (<button onClick={()=>setMenuOpen(true)}><HiMiniBars3 className='text-2xl '/></button>)
      :
      (<button onClick={()=>setMenuOpen(false)}><FaXmark className='text-2xl '/></button>)}
    </div>
        </div>
        {/* Icons Section */}
        <div className=' hidden md:flex gap-6 '>
          <Link href={'/myaccount'}><BsPersonExclamation className='text-2xl  hover:scale-110' /></Link>
          <Link href={''}><CiSearch className='text-2xl hover:scale-110' /></Link>
          <Link href={''}><CiHeart className='text-2xl hover:scale-110' /></Link>
          <Link href={'/cart'}><IoCartOutline className='text-2xl hover:scale-110' /></Link>
        </div>
      </div>
      <div className={`${!menuOpen?'opacity-0':'opacity-100'} transition-all duration-500 ease-in-out bg-slate-100 md:h-auto`}>
            <MenuOverlay links={navLinks} />
        </div>
    </section>
  );
};

export default Navbar;
