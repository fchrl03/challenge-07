import React from 'react';
import CarItemBody from './CarItemBody';
import CarItemImage from './CarItemImage';
import { Button } from 'react-daisyui';

export default function CarItem({ manufacture, model, type, rentPerDay, description, capacity, transmission, year }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <CarItemImage />
      <CarItemBody manufacture={manufacture} model={model} type={type} rentPerDay={rentPerDay} description={description} capacity={capacity} transmission={transmission} year={year} />
      <div className="flex items-end pl-4 pb-4">
        <Button className="ouline-none border-none text-center text-white bg-limegreenlight">Pilih Mobil</Button>
      </div>
    </div>
  );
}
