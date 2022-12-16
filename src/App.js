import React from 'react';
import { Button } from 'react-daisyui';
import { FuncHeader, FuncFooter } from './sections';

function App() {
  return (
    <div>
      <FuncHeader />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button color="primary">Click me!</Button>
      <FuncFooter />
    </div>
  );
}

export default App;
