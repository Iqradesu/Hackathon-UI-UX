import Navbar from './Components/Navbar'
import Image from 'next/image'
import TopPicks from './Components/TopPicks'
import NewArrivals from './Components/NewArrivals'
import OurBlogs from './Components/OurBlogs'
import OurInstagram from './Components/OurInstagram'
import Footer from './Components/Footer'
import Btn from './Components/ViewNowButton'
const page = () => {
  return (
    <section>
      <div className='bg-[#FBEBB5] h-screen w-full md:pl-10 '>
        <Navbar/>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className=' mt-20 md:mt-20 lg:mt-44 mx-auto '>
            <h3 className='text-4xl md:text-6xl font-bold '>Rocket single<br/>seater<br/><Btn text={"Shop Now"} /></h3>
          </div>
          <div><Image alt='sofa image' width={500} height={500} src={'/BigSofa.png'} className='w-full'></Image></div>
        </div>
      </div>
      <div className="bg-[#FAF4F4] py-10">
  <div className="grid grid-cols-2 ">
    {[
      { src: '/SideTable.png', alt: 'Side Table', label: 'SideTable' },
      { src: '/sideSofa.png', alt: 'Side Sofa', label: 'SideTable' },
    ].map((item, index) => (
      <div key={index} className="h-[300px] text-center ">
        <Image
          src={item.src}
          alt={item.alt}
          width={500}
          height={500}
          className="h-full mx-auto"
        />
        <p className="text-2xl font-semibold ">{item.label}</p>
        <p className="font-semibold underline py-4 bg-[#FAF4F4]">View More</p>
      </div>
    ))}
  </div>
</div>
    <TopPicks text='Top picks for you' Information='Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.' />
    <NewArrivals />
    <OurBlogs />
    <OurInstagram />
    <Footer />
    </section>
  )
}

export default page
