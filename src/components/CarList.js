import React from 'react';
import CarItem from './CarItem';

export default function CarList({ cars }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarItem key={car.id} {...car} />
      ))}
    </div>
  );
}
