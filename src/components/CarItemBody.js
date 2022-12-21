import React from 'react';
import { BiGroup, BiCog, BiCalendarAlt } from 'react-icons/bi';

export default function CarItemBody({ manufacture, model, type, rentPerDay, description, capacity, transmission, year }) {
  return (
    <div className="flex flex-col px-4 py-3">
      <p className="text-sm">
        {manufacture}-{model} ({type})
      </p>
      <p className="text-base font-bold">Rp. {rentPerDay} / Hari</p>
      <p className="text-sm font-light">{description}</p>
      <div className="flex items-center gap-3">
        <BiGroup />
        <p>{capacity} Orang</p>
      </div>
      <div className="flex items-center gap-3">
        <BiCog />
        <p>{transmission}</p>
      </div>
      <div className="flex items-center gap-3">
        <BiCalendarAlt />
        <p>{year}</p>
      </div>
    </div>
  );
}
