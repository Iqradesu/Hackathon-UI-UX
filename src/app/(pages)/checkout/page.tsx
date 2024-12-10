import Navbar from '@/app/Components/Navbar'
import React from 'react'
import HeroSection from '@/app/Components/HeroSection'
import InputBox from '@/app/Components/textarea'
import { GoDotFill } from "react-icons/go";
import FeatureSection from '@/app/Components/FeatureSection';
import Footer from '@/app/Components/Footer';

const page = () => {
  return (
    <section>
        <Navbar/>
        <HeroSection title={"Checkout"}/>
        <div className="mx-4  md:mx-16 lg:mx-40 my-16 overflow-x-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32">
    <div className="grid grid-cols-2 gap-4">
      <h2 className="text-3xl font-bold">Billing Details</h2>
      <br />
      <InputBox text={"Firstname"} placeholder={" "} />
      <InputBox text={"Lastname"} placeholder={" "} />
    </div>
    <div className="flex justify-between">
      <div>
        <h4 className="text-xl font-bold">Product</h4>
        <p className="text-slate-400 my-4">
          Asgaard Sofa <span className="text-black">x 1</span>
        </p>
        <p>Subtotal</p>
        <p className="my-4">Total</p>
      </div>
      <div>
        <h4 className="text-xl font-bold">Subtotal</h4>
        <p className="my-4">Rs 2500000.00</p>
        <p>250000.00</p>
        <p className="text-xl font-bold text-yellow-700 md:my-4">
          Rs.250,000.00
        </p>
      </div>
    </div>
  </div>

  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32">
    <div>
      <InputBox text={"CompanyName(optional)"} placeholder={" "} />
      <InputBox text={"Country/Region"} placeholder={"Sri Lanka"} />
      <InputBox text={"Street address"} placeholder={" "} />
      <InputBox text={"Town/City"} placeholder={" "} />
      <InputBox text={"Province"} placeholder={"Western Province"} />
      <InputBox text={"ZIP code"} placeholder={" "} />
      <InputBox text={"Phone"} placeholder={" "} />
      <InputBox text={"Emailaddress"} placeholder={" "} />
      <br />
      <InputBox text={""} placeholder={"Additional information"} />
    </div>

    <div className="pt-4 border-t border-t-black font-light">
      <p className="flex items-center">
        <GoDotFill className="text-2xl font-semibold" />
        Direct Bank Transfer
      </p>
      <p className="my-2 text-slate-500">
        Make your payment directly into our bank account...
      </p>
      <p className="my-3">
        Your personal data will be used to support your experience...
      </p>
      <div className="flex items-center space-x-2 text-slate-500">
        <input type="radio" />
        <span>Direct Bank Transfer</span>
      </div>
      <div className="flex items-center space-x-2 text-slate-500 mt-2">
        <input type="radio" />
        <span>Cash On Delivery</span>
      </div>
      <button className="border border-black px-8 sm:px-10 md:px-16 py-4 rounded-xl my-5 hover:bg-black hover:text-white transition duration-500">
        Place order
      </button>
    </div>
  </div>
</div>

        <FeatureSection />
        <Footer />
    </section>
  )
}

export default page
