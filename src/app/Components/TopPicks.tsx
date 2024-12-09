import React from 'react'
import Btn from './ViewNowButton'
type Item = {
  src: string;
  title: string;
  price: string;
};

type TopPicksProps = {
  text: string;
};
const TopPicks: React.FC<TopPicksProps> = ({ text }) => {
  const items: Item[] = [
    { src: '/Trenton.png', title: 'Trenton Modular Sofa_3', price:'Rs:25000.00' },
    { src: '/Diningtable.png', title: 'Granite Dining table with dining chair', price:'Rs:25000.00' },
    { src: '/barchairs.png', title: 'Outside bar table and stool', price:'Rs:25000.00' },
    { src: '/console.png', title: 'Plain console with teak mirro', price:'Rs:25000.00' },
  ];

  return (
    <section className='py-20'>
        <div>
            <h4 className='flex justify-center text-2xl font-bold mb-3'>{text}</h4>
            <p className='flex justify-center text-slate-600 px-4'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className=" grid grid-cols-2 md:flex mt-10 items-center mx-5 lg:mx-20">
          {items.map((item, index) => (
            <div key={index} className="md:mx-2 lg:mx-1 md:hover:scale-105 md:transition md:tranforn md:duration-500 rounded-xl md:hover:shadow-xl">
              <img src={item.src} alt={item.title} className="w-[300px] h-[290px] mb-10"/>
              <h5 className="font-semibold">{item.title}</h5>
              <h5 className="font-semibold mt-">{item.price}</h5>
            </div>
          ))}
        </div>
        </div>
        <h4 className='flex justify-center mt-10'><Btn text={"View Now"}/></h4>
    </section>
  )
}

export default TopPicks
