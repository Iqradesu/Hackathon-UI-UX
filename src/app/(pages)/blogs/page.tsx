import React from 'react'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import HeroSection from '@/app/Components/HeroSection'
import Description from '@/app/Components/Description'
const page = () => {
  return (
    <section>
        <Navbar />
        <HeroSection title={"blogs"} />
        <Description />
        <Footer />
    </section>
  )
}

export default page
