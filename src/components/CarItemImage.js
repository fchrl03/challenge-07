import React from 'react';

export default function CarItemImage() {
  const myImages = [
    {
      id: 1,
      image: 'car01.min',
    },
  ];
  return (
    <div>
      {myImages.map((item, index) => (
        <div key={index}>
          <img className="w-full" src={require('../assets/imagecar/' + item.image + '.jpg')} alt="" />
        </div>
      ))}
    </div>
  );
}
