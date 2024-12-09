import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import Btn from "./ViewNowButton"
type Item = {
  src: string;
  description:string;
};

const OurBlogs : React.FC = () => {
  const items: Item[] = [
    { src: '/rect1.png', description:"Going all in with millenial design" },
    { src: '/rect2.png', description:"Going all in with millenial design"},
    { src: 'rect3.png', description:"Going all in with millenial design"},
  ];
  return (
    <section className='p-10'>
        <div>
            <h4 className='flex justify-center text-4xl font-bold mb-4'>Our blogs</h4>
            <p className='flex justify-center text-sm text-slate-600 mb-10'>Find a bright ideal to suit your taste with our great selection</p>
            <div className=' grid md:flex justify-center items-center'>
                {items.map((item, index) => (
            <div key={index} className=" mx-5 hover:scale-105 transition tranforn md:duration-500 rounded-xl  ">
              <img src={item.src} alt={'image'} className="w-[300px] h-[250px] lg:h-[300px] mb-2  mt-10 md:mt-auto md:mb-5"/>
              <h5 className="font-semibold flex justify-center">{item.description}</h5>
              <p className="font-semibold underline flex justify-center">Read More</p>
              <span className='flex justify-center items-center text-sm text-slate-700'><FaRegClock className='mx-1' />5min<FaRegCalendar className='mx-2'/>12th Oct 2022</span>
            </div>
          ))}
            </div>
            <div className='flex justify-center my-10 '><Btn text={"View All"} /></div>
        </div>
    </section>
  )
}

export default OurBlogs
