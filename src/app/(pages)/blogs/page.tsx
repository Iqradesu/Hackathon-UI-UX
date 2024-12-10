import React from 'react'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import HeroSection from '@/app/Components/HeroSection'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import Btn from '@/app/Components/ViewNowButton'
import FeatureSection from '@/app/Components/FeatureSection'

const buttons = ["1","2","3","Next"];
const posts = [
  {imgSrc:"/square1.png", description:"Goin all in with millenial designs", date:"3 August 2022"},
  {imgSrc:"/square2.png", description:"Exploring new ways of decorating", date:"3 August 2022"},
  {imgSrc:"/square3.png", description:"Handmade pieces that took time to make", date:"3 August 2022"},
  {imgSrc:"/square4.png", description:"Modern home in Milan", date:"3 August 2022"},
  {imgSrc:"/square5.png", description:"Colorful office redesign", date:"3 August 2022"}

]

const page = () => {
  return (
    <section>
        <Navbar />
        <HeroSection title={"blogs"} />
        <div className='px-5 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10'>
          <div>
            <Image src={'/rectangle1.png'} width={500} height={500} className='w-full' alt='laptopImg'></Image>
            <p className='flex text-sm my-2 items-center text-slate-400'><FaUser className='mx-2' />Admin<FaCalendar className='mx-2' />14 Oct 2022<FaTag className='mx-2'/>Wood</p>
          </div>
          <div >
            <div className='w-[311px] h-[58px] border border-slate-600 flex justify-between items-center px-2 rounded-xl mb-4'><input className='outline-none' type='text' />
            <IoSearch className='size-7'/>
            </div>
            <h3 className='font-bold text-xl'>Categories</h3>
            <div className='text-slate-400 flex justify-between my-3 w-[311px]'>
              <div>
                <p>Crafts</p>
                <br/>
                <p>Design</p>
                <br/>
                <p>handmade</p>
                <br/>
                <p>Interior</p>
                <br/>
                <p>Goods</p>
              </div>
              <div>
                <p>2</p>
                <br/>
                <p>8</p>
                <br/>
                <p>7</p>
                <br/>
                <p>1</p>
                <br/>
                <p>6</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-3xl font-bold mb-3'>Going all in with millenial design</h2>
            <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <Btn text='Read more'/>
            <div>
            <Image src={'/rectangle2.png'} width={500} height={500} className='w-full ' alt='laptopImg'></Image>
            <p className='flex text-sm my-2 items-center text-slate-400 mb-8'><FaUser className='mx-2' />Admin<FaCalendar className='mx-2' />14 Oct 2022<FaTag className='mx-2'/>Wood</p>
            <h2 className='text-3xl font-bold mb-3'>Exploring new ways of decorating</h2>
            <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <Btn text='Read more'/>
          </div>
          <Image src={'/rectangle3.png'} width={500} height={500} className='w-full ' alt='laptopImg'></Image>
            <p className='flex text-sm my-2 items-center text-slate-400 mb-8'><FaUser className='mx-2' />Admin<FaCalendar className='mx-2' />14 Oct 2022<FaTag className='mx-2'/>Wood</p>
            <h2 className='text-3xl font-bold mb-3'>Exploring new ways of decorating</h2>
            <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            <Btn text='Read more'/>
            <div className='flex justify-end'>{buttons.map((button,index)=>{
              return(
                <button key={index} className='px-5 py-3 rounded-lg bg-orange-100 hover:bg-orange-300 transition transform duration-300 mx-3'>{button}</button>
              )
            })}</div>
          </div>

          {/* recent posts */}
          <div>
            <h1 className='text-xl font-bold'>Recent Posts</h1>
               {posts.map((post, index) => (
                <div key={index} className='flex items-center font-semibold'>
            <Image alt="post" className="w-[100px] h-[100px] my-5 mx-3" src={post.imgSrc} width={500} height={500} />
             <p className=''>{post.description}
              <br/>
              <span className='text-xs text-slate-400'>{post.date}</span>
             </p>
             <br/>
    </div>
  ))}
        </div>
        </div>
        <FeatureSection />
        <Footer />
    </section>
  )
}

export default page
