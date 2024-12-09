import React from 'react'
import Link from 'next/link' 
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Navlinks from './Navlinks';
import { BsPersonExclamation } from "react-icons/bs";
interface Link {
  href: string;
  title: string;
}

const MenuOverlay = ({ links }: { links: Link[] }) => {
  return (
    <section>
    <div className="block md:hidden bg-slate-100 fixed right-0 left-0  z-50">
        <div className="h-9 bg-[#ffffff] text-slate-400 px-4 flex items-center justify-center">
                <input type='text' className="flex-1  text-sm  bg-transparent outline-none " placeholder='what are you looking for?' />
                <CiSearch className="text-2xl hover:scale-110  mx-5 text-black " />
              </div>
      <ul className='flex flex-col justify-center items-center w-full gap-3 my-2 '>
          {links.map((link,index)=>{
            return(
               <Navlinks key={index} href={link.href} title={link.title} />
            )
          })}
        </ul>
        <div className='flex justify-center my-2 gap-2'>
        <Link href={''}><CiHeart className="text-2xl text-black hover:scale-110" /></Link>
        <Link href={'/cart'}><IoCartOutline className="text-2xl text-black hover:scale-110" /></Link>
        <Link href={'/myaccount'}><BsPersonExclamation className='text-2xl text-black hover:scale-110'/></Link>
        </div>
    </div>
    </section>
  )
}

export default MenuOverlay
