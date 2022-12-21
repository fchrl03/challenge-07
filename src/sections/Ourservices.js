import React from 'react';
import { ImgService } from '../assets/images';
import { BiCheck } from 'react-icons/bi';

function Ourservices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-15" id="our-services">
      <div className="flex items-center justify-center p-10 lg:p-20">
        <img src={ImgService} className="w-full" alt="" />
      </div>
      <div className="flex flex-col justify-center gap-y-4 px-8">
        <p className="text-2xl font-bold">Best Car Rental for any kind of trip in (Lokasimu)!</p>
        <p className="text-sm">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
        </p>
        <div className="flex flex-row items-center gap-x-3">
          <div className="text-darkblue rounded-full w-6 h-6 bg-lightblue flex items-center justify-center">
            <BiCheck className="stroke-1" />
          </div>
          <p className="text-sm">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
        </div>
        <div className="flex flex-row items-center gap-x-3">
          <div className="text-darkblue rounded-full w-6 h-6 bg-lightblue flex items-center justify-center">
            <BiCheck className="stroke-1" />
          </div>
          <p className="text-sm">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
        </div>
        <div className="flex flex-row items-center gap-x-3">
          <div className="text-darkblue rounded-full w-6 h-6 bg-lightblue flex items-center justify-center">
            <BiCheck className="stroke-1" />
          </div>
          <p className="text-sm">Sewa Mobil Jangka Panjang Bulanan</p>
        </div>
        <div className="flex flex-row items-center gap-x-3">
          <div className="text-darkblue rounded-full w-6 h-6 bg-lightblue flex items-center justify-center">
            <BiCheck className="stroke-1" />
          </div>
          <p className="text-sm">Gratis Antar - Jemput Mobil di Bandara</p>
        </div>
        <div className="flex flex-row items-center gap-x-3">
          <div className="text-darkblue rounded-full w-6 h-6 bg-lightblue flex items-center justify-center">
            <BiCheck className="stroke-1" />
          </div>
          <p className="text-sm">Layanan Airport Transfer / Drop In Out</p>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
