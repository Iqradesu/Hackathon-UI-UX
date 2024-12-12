import React from 'react'
import Navbar from '@/app/Components/Navbar'
import HeroSection from '@/app/Components/HeroSection'
import Description from '@/app/Components/Description'
import Footer from '@/app/Components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { FaTrash } from "react-icons/fa";
const page = () => {
  return (
    <section>
        <Navbar />
        <HeroSection title='Cart' />
        <div className='px-14 py-14 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4'>
          <div className='grid grid-cols-2 lg:grid-cols-1 gap-4'>
          {/* first row with specific grid layout */}
            <div className='lg:bg-[#FFF9E5] lg:h-[55px] grid grid-cols-1 lg:grid-cols-[35%_20%_20%_15%_10%] gap-3'>
              <div className='flex lg:justify-center items-center'>product</div>
              <div className='flex items-center'>price</div>
              <div className='flex items-center'>quantity</div>
              <div className='flex items-center'>subtotal</div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[35%_20%_20%_15%_10%] lg:mt-10 gap-3'>
              <div className='flex items-center'>
                <Image src={'/asg.png'} width={500} height={500} alt='asgaardsofa' className='w-[50px] h-[50px]  md:w-[100px] md:h-[100px]'></Image>
                <p className='text-slate-400 ml-4'>Asgaardsofa</p>
              </div>
              <div className='flex items-center text-slate-400'>250,000.00</div>
              <div className='flex items-center'><div className='border border-black px-5 py-2 rounded-md'>1</div></div>
              <div className='flex items-center'>Rs 250,000.00</div>
              <div className='flex items-center text-orange-300'><FaTrash /></div>
            </div>
</div>
           {/* second column (30 %) */}

            <div className='bg-[#FFF9E5] text-center py-5'>
                <h4 className='text-xl font-bold pb-2'>Cart Tools</h4>
                <p>Subtotal</p><span className='text-slate-400'>Rs 250,000.00</span>
                <br/>
                <p>Total</p><span className='text-yellow-600 font-semibold mb-4'>Rs 250,000.00</span>
                <br/>
                <Link href={'/checkout'}><button className='border rounded-xl border-black px-16 py-2 hover:bg-black hover:text-white transition transform duration-500 my-4'>Check Out</button></Link>
            </div>
            
            
        </div>
        <Description />
        <Footer />
    </section>
  )
}

export default page
