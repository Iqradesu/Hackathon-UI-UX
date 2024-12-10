import React from 'react'
import Image from 'next/image'

const Description = () => {
  return (
    <section className='px-4 lg:px-14 py-10 border-t '>
        <div className='flex justify-center gap-8 lg:gap-14 font-light  text-lg lg:text-2xl text-slate-400 '>
            <h3 className='text-black'>Description</h3>
            <h3 >Additional Information</h3>
            <h3>Reviews [5]</h3>
        </div>
        {/* Description Text */}
        <div className='px-2 md:px-16 lg:px-28 py-10 text-slate-400 text-sm lg:text-base '><p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <br/>
        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        {/* Description Images */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
            <div className='w-full bg-[#FFF9E5] h-full '>
                <Image src={'/bigwhitesofa1.png'} alt='whiteSofa image 1' width={500} height={500} className='w-full'></Image>
            </div>
            <div className='w-full  bg-[#FFF9E5] h-full  gap-4 lg:gap-8'>
                <Image src={'/bigwhitesofa2.png'} alt='whiteSofa image 2' width={500} height={500} className='w-full'></Image>
            </div> 
        </div>
    </section>
  )
}
export default Description
