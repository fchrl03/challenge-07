import React from 'react';
import { FuncHeader, FuncFooter, Jumbotron, Ourservices, Whyus } from '../sections';

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
      <FuncFooter />
    </div>
  );
}

export default Homepage;
