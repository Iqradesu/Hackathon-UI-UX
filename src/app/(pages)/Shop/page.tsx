import Header from '../../Components/HeroSection'
import React from 'react'
import Navbar from '../../Components/Navbar'
import ItemList from '../../Components/Shop'
import Footer from '../../Components/Footer'
import FeatureSection from '../../Components/FeatureSection';
const about = () => {
  return (
    <section>
      <Navbar />
      <Header title='Shop' />
      <ItemList />
      <FeatureSection />
      <Footer />
    </section>
  )
}

export default about
