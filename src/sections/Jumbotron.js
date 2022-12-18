import React from 'react';
import { Button } from 'react-daisyui';
import { ImgCar } from '../assets/images';

function Jumbotron() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-y-2 md:px-14 md:gap-y-3">
        <p className="text-4xl font-bold md:mb-5">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <Button className="text-white font-bold text-sm normal-case btn-width max-w-xs bg-limegreenlight outline-none border-none" href="/">
          Mulai Sewa Mobil
        </Button>
      </div>
      <div>
        <img className="w-full" src={ImgCar} alt="" />
      </div>
    </div>
  );
}

export default Jumbotron;
