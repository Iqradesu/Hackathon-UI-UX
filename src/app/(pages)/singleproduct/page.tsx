import Navbar from '@/Components/Navbar'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import { IoStarSharp } from "react-icons/io5";
const page = () => {
  return (
    <section>
        <Navbar />
        <div className='h-[100px] px-16 flex items-center text-slate-400'>Home<IoIosArrowForward  className='mx-3 text-black'/>Shop<IoIosArrowForward className='mx-3 text-black'/>|<span className='mx-3 text-black'>Asgaard Sofa</span></div>
        <div className='grid grid-cols-[10%_45%_45%] px-16 gap-4'>
            <div className=''>
                <Image src={'/group1.png'} alt='sofaset' width={500} height={500} className='w-[76px] h-[80px]'></Image>
                <Image src={'/group2.png'} alt='sofaset' width={500} height={500}className='w-[76px] h-[80px] my-4'></Image>
                <Image src={'/group3.png'} alt='sofaset' width={500} height={500}className='w-[76px] h-[80px] my-4'></Image>
                <Image src={'/group4.png'} alt='sofaset' width={500} height={500}className='w-[76px] h-[80px]'></Image>
            </div>
        <div className=' bg-[#FFF9E5] rounded-lg'>
            <Image src={'/Asgaardsofa.png'} alt='sofaImg' width={500} height={500} ></Image>
        </div>
        <div className='mx-20'>
            <h3 className='text-4xl mb-2'>Asgaard Sofa</h3>
            <h2 className='text-2xl text-slate-400'>Rs:250,000.00</h2>
            <p className='flex text-yellow-300 text-lg items-center my-2'><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><span className='text-slate-400 '>| 5 customers review</span></p>
            <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
           </p>
           <h4 className='text-slate-400 my-2'>size</h4>
           <div>
            <button className='px-3 py-2 bg-orange-100 hover:bg-orange-300 mx-2 rounded-sm'>L</button>
            <button className='px-3 py-2 bg-orange-100 hover:bg-orange-300 mx-2 rounded-sm'>xL</button>
            <button className='px-3 py-2 bg-orange-100 hover:bg-orange-300 mx-2 rounded-sm'>xxL</button>
            <h3 className='my-2 text-slate-400'>Color</h3>
            <button className='p-3 rounded-full bg-indigo-500'></button>
            <button className='p-3 rounded-full bg-black mx-3'></button>
            <button className='p-3 rounded-full bg-yellow-900'></button>
           </div>
        </div>
        </div>
    </section>
  )
}

export default page
