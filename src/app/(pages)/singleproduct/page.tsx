import Navbar from '../../Components/Navbar'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import { IoStarSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import Description from '@/app/Components/Description';
import TopPicks from '@/app/Components/TopPicks';
import Footer from '@/app/Components/Footer';

const sizes = ["L","xL","xxL"];
const colors = ["bg-indigo-400","bg-black","bg-yellow-600"]
const buttons = ["1","Add to Cart"]

const page = () => {
  return (
    <section>
  <Navbar />
  <div className="h-[100px] px-4 md:px-16 flex items-center text-slate-400 text-sm md:text-base">
    Home<IoIosArrowForward className="mx-3 text-black" />
    Shop<IoIosArrowForward className="mx-3 text-black" />|
    <span className="mx-3 text-black">Asgaard Sofa</span>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-[10%_45%_45%] px-4 md:px-16 gap-4">
    {/* small Images grid */}
    <div className="flex lg:flex-col gap-2 md:gap-4 items-center md:items-start">
      <Image
        src={"/group1.png"}
        alt="sofaset"
        width={500}
        height={500}
        className="w-[60px] h-[60px] md:w-[76px] md:h-[80px]"
      />
      <Image
        src={"/group2.png"}
        alt="sofaset"
        width={500}
        height={500}
        className="w-[60px] h-[60px] md:w-[76px] md:h-[80px]"
      />
      <Image
        src={"/group3.png"}
        alt="sofaset"
        width={500}
        height={500}
        className="w-[60px] h-[60px] md:w-[76px] md:h-[80px]"
      />
      <Image
        src={"/group4.png"}
        alt="sofaset"
        width={500}
        height={500}
        className="w-[60px] h-[60px] md:w-[76px] md:h-[80px]"
      />
    </div>

    {/* Main Product Image */}
    <div className="bg-[#FFF9E5] rounded-lg h-fit flex justify-center items-center">
      <Image
        src={"/Asgaardsofa.png"}
        alt="sofaImg"
        width={500}
        height={500}
        className="w-full md:w-auto"
      />
    </div>

    {/* Product Details */}
    <div className="mx-4 lg:mx-20 text-sm md:text-base">
      <h3 className="text-xl md:text-4xl mb-2">Asgaard Sofa</h3>
      <h2 className="text-lg md:text-2xl text-slate-400">Rs:250,000.00</h2>
      <p className="flex text-yellow-300 text-base md:text-lg items-center my-2">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <span className="text-slate-400">| 5 customers review</span>
      </p>
      <p>
        Setting the bar as one of the loudest speakers in its class, the
        Kilburn is a compact, stout-hearted hero with a well-balanced audio
        which boasts a clear midrange and extended highs for a sound.
      </p>
      <div>
        {/* Sizes */}
          <h4 className="text-slate-400 my-2">Size</h4>
          <div>
            {sizes.map((size, index) => (
              <button
                key={index}
                className="px-3 py-2 bg-orange-100 hover:bg-orange-300 mr-2 rounded-sm"
              >
                {size}
              </button>
            ))}
          </div>
        <h3 className="my-2 text-slate-400">Color</h3>
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`p-3 rounded-full ${color}`}
              />
            ))}
          </div>

          {buttons.map((button,index)=>{
            return(<button key={index} className="border border-slate-400 px-14 my-3 py-3 rounded-xl hover:border-black mr-3">
          {button}
        </button>)
          })}
        

        <div className="border-t pt-4 my-10 text-xs md:text-sm text-slate-400 border-t-slate-400">
          <p>sku : SS001</p>
          <p className="my-3">Category : Sofas</p>
          <p>tags : Sofa,Chair,Home,Shop</p>
          <p className="flex items-center gap-3 my-3">
            share :{" "}
            <FaFacebook className="text-lg md:text-xl text-black" />
            <AiFillTwitterCircle className="text-lg md:text-xl text-black" />
            <TbBrandLinkedinFilled className="text-lg md:text-xl text-black" />
          </p>
        </div>
      </div>
    </div>
  </div>
  <Description />
  <TopPicks text='Related-products' Information='' />
  <Footer />
</section>

  )
}

export default page
