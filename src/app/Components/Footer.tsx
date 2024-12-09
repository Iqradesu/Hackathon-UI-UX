import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="max-w-[1440px] w-full mx-auto h-[350px] px-20 py-10">
      {/* footer information */}
      <div className="lg:flex justify-around h-[90%]">

          <div className='text-slate-400'>400 University Drive Suite 200 Coral Gables,<br />
               FL 33134 USA
          </div>
          {/* links */}
          <nav className="flex flex-col gap-5">
            <h4 className='text-slate-400'>Links</h4>
              <Link href='/'>Home</Link>
              <Link href='/shop'>Shop</Link>
              <Link href=''>About</Link>
              <Link href='/contact'>Contact</Link>
          </nav>
          {/* Help */}
          <nav className="flex flex-col gap-5">
            <h4 className='text-slate-400'>Help</h4>
              <Link href='/shop'>Payment Options</Link>
              <Link href='/'>Returns</Link>
              <Link href=''>Privacy Policies</Link>
          </nav>
          {/* Newsletter */}
          <form action="">
            <h4 className='text-slate-400 mb-4 '>Newsletter</h4>
            <input type="email" className='outline-none border-b border-b-black' placeholder="Enter Your Email Address"/>
            <input type="submit" value="Subscribe" />
          </form>
      </div>

      

      {/* copyright section */}

      <div className='border-t-2'>
        2022 Meubel House. All rights reverved
      </div>
    </footer>
  )
}

export default Footer
