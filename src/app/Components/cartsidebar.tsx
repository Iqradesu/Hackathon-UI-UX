'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/app/Components/ui/sheet";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import Link from "next/link";

const CartSidebar = () => {
  const [cartItems,setCartItems]= useState([
  {imgSrc:"/Asgaardsofa.png",description:"Asgaardsofa",price:"Rs 250,000.00", id:1},
  {imgSrc:"/barchairs.png",description:"Wine Bar set",price:"Rs 95,000.00", id:2},
  {imgSrc:"/Trenton.png",description:"Trenton",price:"Rs 75,000.00", id:3},
  {imgSrc:"/bigwhitesofa1.png",description:"White sofa",price:"Rs 400,000.00", id:4},
  {imgSrc:"/Diningtable.png",description:"Diningtable",price:"Rs 110,000.00", id:5},
]);

function handleRemoveItem(id:number){
  const updatedCartItems = cartItems.filter((cartItem)=> cartItem.id !== id  );
  setCartItems(updatedCartItems)
}
  return (
    <main>
      <Sheet>
        <SheetTrigger>
          <IoCartOutline className="text-2xl  hover:scale-110" />
        </SheetTrigger>
        <SheetContent side="right" className="h-[80vh] flex flex-col pb-0 ">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold pb-6 border-b border-b-slate-300">Shopping Cart</SheetTitle>
          </SheetHeader>
            <div className="flex-1 overflow-y-auto">
                {cartItems.map((cartItem,index)=>{
                    return(
                       <div key={index} className="flex h-fit w-full  justify-between items-center hover:bg-black hover:bg-opacity-5 hover:scale-95 transition transform duration-300 ">
                    <Image src={cartItem.imgSrc} width={500} height={500} alt="sofaImg" className="h-[100px] w-[100px]"></Image>
            <p className=" text-base md:text-lg">{cartItem.description}<br/>1 x<span className="text-xs text-yellow-600 ml-3">{cartItem.price}</span></p>
            <MdCancel size={20} className="mr-2" onClick={()=>{handleRemoveItem(cartItem.id)}}/>
                </div> 
               ) })}
          </div>
          <div className="flex-2  md:pr-10 ">
            <div className="flex justify-between md:p-3">
              <p>Subtotal</p>
            <span className="text-yellow-600">Rs 200,000.00</span>
            </div>
            <div className="text-sm p-4 border-t border-t-slate-300 flex justify-between gap-4">
              <Link href={'/cart'}><button className="border border-black px-2 md:px-4 py-1 hover:bg-black hover:text-white transition transform duration-500 rounded-full">ViewCart</button></Link>
               <Link href={'/checkout'}><button className="border border-black px-2 md:px-4 py-1 hover:bg-black hover:text-white transition transform duration-500 rounded-full" >checkout</button></Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </main>
  );
};

export default CartSidebar;
