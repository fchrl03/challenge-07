import React from 'react';
import { FuncHeader, FuncFooter, Jumbotron, Ourservices, Whyus, Faq, Testimonial } from '../sections';
import { Button } from 'react-daisyui';

function Homepage() {
  return (
    <div>
      <div className="bg-lightblue">
        <FuncHeader />
        <Jumbotron />
      </div>
      <Ourservices />
      <div className="mt-10 px-10">
        <h1 className="font-bold text-2xl">Why Us?</h1>
        <p className="text-sm">Mengapa harus pilih Binar Car Rental?</p>
        <Whyus />
      </div>
      <div className="my-[10rem]">
        <h1 className="text-2xl font-bold text-center">Testimonial</h1>
        <p className="text-sm mt-[0.75rem] mb-[2.5rem] text-center">Berbagai review positif dari para pelanggan kami</p>
        <Testimonial />
      </div>
      <div className="mt-20 px-10">
        <div className="bg-darkblue rounded-xl sm:h-[326px] h-[400px] flex flex-col gap-5 items-center justify-center p-10">
          <p className="text-2xl md:text-4xl font-bold text-white text-center">Sewa Mobil di (Lokasimu) Sekarang</p>
          <p className="text-sm text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button href="/#" className="bg-limegreenlight mt-8 outline-none border-none font-bold text-sm text-white w-[140px] normal-case">
            Mulai Sewa Mobil
          </Button>
        </div>
      </div>
      <div className="px-10 my-[7rem]">
        <Faq />
      </div>
      <FuncFooter />
    </div>
  );
}

export default Homepage;
