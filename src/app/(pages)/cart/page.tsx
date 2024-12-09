import React from 'react'
import Navbar from '@/app/Components/Navbar'
import HeroSection from '@/app/Components/HeroSection'
import Description from '@/app/Components/Description'
import Footer from '@/app/Components/Footer'
const page = () => {
  return (
    <section>
        <Navbar />
        <HeroSection title='Cart' />
        <div className='px-14 py-14 grid grid-cols-[70%_30%] gap-4'>
            <div className='bg-[#FFF9E5] h-[55px] flex justify-center items-center gap-20 '>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            <div className='bg-[#FFF9E5] text-center py-14'>
                <h4 className='text-xl font-bold pb-2'>Cart Tools</h4>
                <p>Subtotal</p><span className='text-slate-400'>Rs 250,000.00</span>
                <br/>
                <p>Total</p><span className='text-yellow-600 font-semibold mb-4'>Rs 250,000.00</span>
                <br/>
                <button className='border rounded-xl border-black px-16 py-2 hover:bg-black hover:text-white transition transform duration-500 my-4'>Check Out</button>
            </div>
            
        </div>
        <Description />
        <Footer />
    </section>
  )
}

export default page
