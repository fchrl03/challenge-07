import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/CarSlice';
import { FuncFooter, FuncHeader, Jumbotron } from '../sections';
import { Button } from 'react-daisyui';
import axios from 'axios';
import CarList from '../components/CarList';

export default function Search() {
  const [carState, setCarState] = React.useState([]);
  const [driver, setDriver] = React.useState('');
  const [date, setDate] = React.useState('');
  const [pick, setPick] = React.useState('');
  const [capacity, setCapacity] = React.useState('');
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getCarsData = async () => {
      try {
        const cars = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
        // console.log(cars);
        setCarState(cars.data);
      } catch (err) {
        console.log(err);
      }
    };

    getCarsData();
  }, []);

  const driverEventHandler = (e) => {
    const value = e.target.value;
    setDriver(value);
  };

  const dateEventHandler = (e) => {
    const value = e.target.value;
    setDate(value);
  };

  const pickEventHandler = (e) => {
    const value = e.target.value;
    setPick(value);
  };

  const capacityEventHandler = (e) => {
    const value = e.target.value;
    setCapacity(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const exist = carState.find((item) => {
      return e.id === item.id;
    });

    if (exist && capacity !== '' && driver === 'Sopir') {
      setCarState(carState.map((item) => <div key={item.id}>{item.id === e.id ? { ...exist } : item}</div>));
    } else {
      setCarState((s) => [...s, { ...e }]);
    }
    // try {
    //   const cars = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');

    //   const filterCar = () => {
    //     if (capacity === '' && driver === 'Sopir' && pick === '') {
    //       return cars.data.filter((car) => car.available === true && car.availableAt <= date);
    //     } else if (capacity !== '' && driver === 'Sopir') {
    //       return cars.data.filter((car) => car.available === true && car.availableAt <= date && car.capacity >= capacity);
    //     } else if (capacity === '' && driver === 'Tsopir') {
    //       return cars.data.filter((car) => car.available === false && car.availableAt <= date);
    //     } else if (capacity !== '' && driver === 'Tsopir') {
    //       return cars.data.filter((car) => car.available === false && car.capacity >= capacity && car.availableAt <= date);
    //     }
    //   };

    //   function filterCar() {
    //     if (capacity === '' && driver === 'Sopir' && pick === '') {
    //       return carState.filter((car) => car.available === true && car.availableAt <= date);
    //     } else if (capacity !== '' && driver === 'Sopir') {
    //       return carState.filter((car) => car.available === true && car.availableAt <= date && car.capacity >= capacity);
    //     } else if (capacity === '' && driver === 'Tsopir') {
    //       return carState.filter((car) => car.available === false && car.availableAt <= date);
    //     } else if (capacity !== '' && driver === 'Tsopir') {
    //       carState.filter((car) => car.available === false && car.capacity >= capacity && car.availableAt <= date);
    //     }
    //   }
    e.target.reset();
    //   setCarState([filterCar()]);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div>
      <div className="bg-lightblue">
        <FuncHeader />
        <Jumbotron />
      </div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="grid grid-cols-5 gap-5 px-10 py-6 m-10 bg-slate-100 shadow-md rounded-lg ">
          <div className="flex flex-col gap-3">
            <label>Tipe Driver</label>
            <select onChange={(e) => driverEventHandler(e)} required>
              <option value="" disabled>
                Pilih Tipe Driver
              </option>
              <option value="Sopir">Dengan Sopir</option>
              <option value="Tsopir">Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label>Tanggal</label>
            <input onChange={(e) => dateEventHandler(e)} className="p-3 border-none rounded-lg outline-none" type="date" placeholder="Pilih Tanggal" required />
          </div>
          <div className="flex flex-col gap-3">
            <label>Waktu Jemput/Ambil</label>
            <input onChange={(e) => pickEventHandler(e)} className="p-3 border-none rounded-lg outline-none" type="time" placeholder="Pilih Waktu" required />
          </div>
          <div className="flex flex-col gap-3">
            <label>Jumlah Penumpang</label>
            <input onChange={(e) => capacityEventHandler(e)} className="p-3 border-none rounded-lg outline-none" type="text" placeholder="Jumlah Penumpang (Optional)" />
          </div>
          <div className="flex items-end">
            <Button type="submit" className="bg-limegreenlight normal-case border-none outline-none text-sm font-bold text-white">
              Cari Mobil
            </Button>
          </div>
        </div>
      </form>
      <div className="px-10">
        <CarList cars={carState} />
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
