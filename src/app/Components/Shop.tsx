import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type Item = {
  imageSrc: string;
  description: string;
  price: string;
};

const items: Item[] = [
  { imageSrc: '/whitesofa.jpg', description: 'Trenton Modular sofa_3', price: 'Rs:25000.00' },
  { imageSrc: '/granite.jpg', description: 'Granite dining table', price: 'Rs:25000.00' },
  { imageSrc: '/bar.jpg', description: 'outdoor bar and sool', price: 'Rs:25000.00' },
  { imageSrc: '/conso.jpg', description: 'Plain console with teak mirror', price: 'Rs:25000.00' },
  { imageSrc: '/pic5.jpg', description: 'Grain coffe table', price: 'Rs:25000.00' },
  { imageSrc: '/pic6.jpg', description: 'kent coffee table', price: 'Rs:25000.00' },
  { imageSrc: '/pic7.jpg', description: 'RoundCoffee table', price: 'Rs:25000.00' },
  { imageSrc: '/pic8.jpg', description: 'reclainmed teak coffe', price: 'Rs:25000.00' },
  { imageSrc: '/pic9.jpg', description: 'plain console', price: 'Rs:25000.00' },
  { imageSrc: '/pic10.jpg', description: 'reclaimed teak sideboard', price: 'Rs:25000.00' },
  { imageSrc: '/pic11.jpg', description: 'sjp_0825', price: 'Rs:25000.00' },
  { imageSrc: '/pic12.jpg', description: 'Bella chair and table', price: 'Rs:25000.00' },
  { imageSrc: '/pic13.jpg', description: 'Granite side table', price: 'Rs:25000.00' },
  { imageSrc: '/pic14.jpg', description: 'Asgaard sofa', price: 'Rs:25000.00' },
  { imageSrc: '/pic15.jpg', description: 'Maya sofa three seater', price: 'Rs:25000.00' },
  { imageSrc: '/pic16.jpg', description: 'outdoor soofa set', price: 'Rs:25000.00' },
];
const ItemList: React.FC = () => {
  return (
    <section className=' mx-2 md:mx-16'>
        {/* showing furniture cards */}
    <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {items.map((item, index) => (
        <div key={index} className=' p-2 mx-5 my-5 rounded-lg md:hover:scale-105 transition transform duration-500 md:hover:shadow-xl z-10' >
          <Image src={item.imageSrc} alt={item.description} width={500} height={500} className='w-[200px] h-[200px]  md:w-[250px] md:h-[250px]'></Image>
          <p className='text-sm'>{item.description}</p>
          <p className='text-lg font-semibold'>{item.price}</p>
        </div>
      ))}
    </div>
    {/* page Navigation buttons */}
    <div className='my-10 flex justify-center items-center gap-4 transform'>
       <Link href={''}><button className='px-4 py-2 bg-orange-100 hover:bg-orange-300 transition transforn duration-300 rounded-sm'>1</button></Link>
       <Link href={''}><button className='px-4 py-2 bg-orange-100 hover:bg-orange-300 transition transforn duration-300 rounded-sm'>2</button></Link>
       <Link href={''}><button className='px-4 py-2 bg-orange-100 hover:bg-orange-300 transition transforn duration-300 rounded-sm'>3</button></Link>
       <Link href={''}><button className='px-4 py-2 bg-orange-100 hover:bg-orange-300 transition transforn duration-300 rounded-sm'>Next</button></Link>
    </div>
    </section>
  );
};

export default ItemList