'use client'
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Navlinks from './Navlinks';
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsPersonExclamation } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import MenuOverlay from './MenuOverlay';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Cartsidebar from './cartsidebar';
const navLinks = [
  { href: '/', title: "Home" },
  { href: '/Shop', title: "Shop" },
  { href: '/blogs', title: "About" },
  { href: '/contact', title: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname=usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (headerRef.current) {
          const height = headerRef.current.getBoundingClientRect().height;
          if (window.scrollY > height) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section ref={headerRef} className={`${pathname==='/'?'fixed':'relative'} w-full py-2 md:py-6 px-10 top-0 left-0 ${scrolled?'bg-white':'bg-transparent'} transition-all duration-700 z-50 `}>
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
          <Cartsidebar />
        </div>
      </div>
      <div className={`${!menuOpen?'opacity-0':'opacity-100'} transition-all duration-500 ease-in-out bg-slate-100 md:h-auto`}>
            <MenuOverlay links={navLinks} />
        </div>
    </section>
  );
};

export default Navbar;
