import React from 'react'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import HeroSection from '@/app/Components/HeroSection'
import Description from '@/app/Components/Description'
import InputBox from '@/app/Components/textarea'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const page = () => {
  return (
    <section>
        <Navbar/>
        <HeroSection title={"Contact"} />
        <section>
            <div className='my-16 mx-6 lg:mx-40'>
             {/* Main heading */}
             <div className='flex justify-center pb-10'>
                <div className='w-[643px] text-center'>
                <h1 className=' text-4xl font-bold pb-4'>Get In Touch With Us</h1>
                <p className='text-slate-400 font-light'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
             </div>
             <form>
              {/* contact info */}
                <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                  <div className='w-full md:w-[200px] lg:w-[393px] sm:flex-col lg:flex-col md:p-5 lg:p-[75px] font-light '>
                    <div><span className='text-xl font-bold flex items-center'><IoLocation className='text-2xl mr-2'/>Address</span>
                    <p>236 5th SE Avenue, New York NY10000, United States</p></div>
                    <br/>
                    <div className='my-4'><span className='text-xl font-bold flex items-center'><FaPhoneAlt className='text-2xl mr-2'/>Phone</span>
                    <p>Mobile:+(84)546-789</p>
                    <p>Hotline:+(84) 456-6789</p></div>
                    <br/>
                    <div><span className='text-xl font-bold flex items-center'><FaClock className='text-2xl mr-2'/>Working Time</span>
                    <p>Monday-Friday: 9:00 - 22:00</p>
                    <p>Saturday-Sunday: 9:00 - 21:00</p></div>
                  </div>
                  <div>
                    {/* input section */}
                    <InputBox text='Your Name' placeholder='ABC' />
                    <InputBox text='Email Address' placeholder='Abc@def.com' />
                    <InputBox text='Subject' placeholder='This is an optional' />
                    <h3 className="my-7">Message</h3>
                    <div className="border border-slate-500 w-full h-[150px] py-4 px-4 rounded-xl my-7">
                    <input
                    type="text"
                    placeholder='hi! id like to ask about'
                    className="bg-transparent outline-none placeholder-slate-400 text-sm"
                    />
                    </div>
                    <button className='px-14 py-2 font-light border border-black hover:bg-black transition transforem duration-300 rounded-xl hover:text-white'>submit</button>
                  </div>
                </div>
             </form>
            </div>
        </section>
        <Description />
        <Footer />
    </section>
  )
}

export default page
