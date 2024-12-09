import React from 'react';
import Link from 'next/link';

const OurInstagram: React.FC = () => {
  return (
    <section className="h-[450px] bg-bannerImg flex justify-center items-center">
      <div className="text-center">
        <h4 className="text-5xl font-bold">Our Instagram</h4>
        <p className="mt-2">Follow our store on Instagram</p>
        <Link href={''}>
          <button className="mt-6 px-14 py-2 bg-[#F4F4F4] rounded-full hover:bg-slate-300 transform transition duration-500 shadow-xl">
            Follow Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurInstagram;
