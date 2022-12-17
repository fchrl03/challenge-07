import React from 'react';
import { Button } from 'react-daisyui';
import { FuncHeader, FuncFooter, Jumbotron } from '../sections';

function Homepage() {
  return (
    <div>
      <div className="bg-lightblue">
        <FuncHeader />
        <Jumbotron />
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button color="primary">Click me!</Button>
      <FuncFooter />
    </div>
  );
}

export default Homepage;
