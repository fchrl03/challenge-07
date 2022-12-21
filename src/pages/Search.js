import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/CarSlice';
import { FuncFooter, FuncHeader, Jumbotron } from '../sections';
import { Select } from 'react-daisyui';

export default function Search() {
  const [value, setValue] = React.useState('default');
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-lightblue">
        <FuncHeader />
        <Jumbotron />
      </div>
      <div className="grid grid-cols-5 px-10 py-6 m-10 bg-slate-100 shadow-xl rounded-lg ">
        <div className="flex flex-col gap-3">
          <p>Tipe Driver</p>
          <Select value={value} onChange={setValue}>
            <option value={'default'} disabled>
              Pilih Tipe Driver
            </option>
            <option value={'Homer'}>Dengan Sopir</option>
            <option value={'Marge'}>Tanpa Sopir (Lepas Kunci)</option>
          </Select>
        </div>
      </div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <FuncFooter />
    </div>
  );
}
