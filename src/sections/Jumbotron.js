import React from 'react';
import { Button } from 'react-daisyui';
import { ImgCar } from '../assets/images';

function Jumbotron() {
  return (
    <div className="grid grid-cols-1 gap-y-10 md:gap-x-3 md:grid-cols-2 mt-[-5rem] xl:mt-0">
      <div className="flex flex-col gap-y-2 md:px-14 md:gap-y-3 p-10">
        <p className="text-4xl font-bold md:mb-5">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <Button className="text-white font-bold text-sm normal-case btn-width max-w-xs bg-limegreenlight outline-none border-none" href="/search">
          Mulai Sewa Mobil
        </Button>
      </div>
      <div className="flex justify-end items-end">
        <img className="w-full" src={ImgCar} alt="" />
      </div>
    </div>
  );
}

export default Jumbotron;
