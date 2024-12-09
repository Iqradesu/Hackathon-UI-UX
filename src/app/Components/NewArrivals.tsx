import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NewArrivals = () => {
  return (
    <section className='bg-[#FFF9E5]'>
        <div className='grid md:grid-cols-3 grid-cols-1  mx-10 md:mx-20 py-1'>
            <div className='grid col-span-2'>
                <Image alt='sofaset image' src={'/Asgaardsofa.png'} width={500} height={500} className='w-full' />
            </div>
            <div className='place-items-center md:mt-20 lg:mt-44 items-center'><p className='text-lg font-semibold mb-3'>New Arrivals</p>
            <h4 className='text-3xl lg:text-5xl font-bold'>Asgaard Sofa</h4>
            <Link href={''}><button className=' border border-black px-10 py-2 font-light mt-8 transition transform hover:bg-black hover:text-white duration-500'>Order Now</button></Link></div>
        </div>
    </section>
  )
}

export default NewArrivals
