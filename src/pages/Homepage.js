import React from 'react';
import { FuncHeader, FuncFooter, Jumbotron, Ourservices } from '../sections';

function Homepage() {
  return (
    <div>
      <div className="bg-lightblue">
        <FuncHeader />
        <Jumbotron />
      </div>
      <Ourservices />
      <FuncFooter />
    </div>
  );
}

export default Homepage;
