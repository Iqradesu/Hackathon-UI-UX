import FeatureSection from '@/app/Components/FeatureSection'
import Footer from '@/app/Components/Footer'
import HeroSection from '@/app/Components/HeroSection'
import Navbar from '@/app/Components/Navbar'
import InputBox from '@/app/Components/textarea'
import React from 'react'

const signup = () => {
  return (
    <section>
      <Navbar />
      <HeroSection title='My Account'/>
      <div className='mx-10 md:mx-10 lg:mx-40 my-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-40'>
        {/* Login */}
        <div className='w-full lg:w-full'>
          <h2 className='text-4xl font-bold mb-10'>Log in</h2>
          <InputBox text='Username or Email address' placeholder='' />
          <InputBox text='Password' placeholder='' />
          <div className='py-4 flex items-center' ><input type='checkbox' className='w-5 h-5 mr-3'/>Remember me</div>
          <button className='px-20 py-4 border border-black rounded-2xl hover:bg-black transform transition duration-500 hover:text-white'>Log in</button>
        </div>
        {/* Register */}
        <div className='w-full lg:w-full'>
          <h2 className='text-4xl font-bold mb-10'>Register</h2>
          <InputBox text='Email address' placeholder='' />
          <p className='my-6 font-light text-sm'>A link to set a new password will be sent to your email address.</p>
          <p className='mt-6 mb-6 md:mb-10 lg:mb-20 font-light text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          <button className='px-20 py-4 border border-black rounded-2xl hover:bg-black transform transition duration-500 hover:text-white'>Register</button>
        </div>
        </div>
        <FeatureSection />
        <Footer />
    </section>
  )
}

export default signup
