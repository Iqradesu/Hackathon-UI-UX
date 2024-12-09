import Header from '../../Components/Header'
import React from 'react'
import Navbar from '../../Components/Navbar'
import ItemList from '../../Components/Shop'
import Footer from '../../Components/Footer'
import FeatureSection from '../../Components/FeatureSection';
const about = () => {
  return (
    <section>
      <Navbar />
      <Header title='About' />
      <ItemList />
      <FeatureSection />
      <Footer />
    </section>
  )
}

export default about
