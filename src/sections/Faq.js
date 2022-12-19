import React from 'react';
import Accordion from '../components/Accordion';

function Faq() {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nulla non sem ultricies tristique. Aliquam egestas semper interdum. Sed sit amet ultricies urna. Suspendisse posuere arcu vel turpis maximus dapibus. Nam suscipit felis vitae facilisis eleifend.';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <h1 className="text-2xl font-bold text-center">Frequently Asked Question</h1>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="flex flex-col gap-5">
        <Accordion title="Apa saja syarat yang dibutuhkan?" content={lorem} />
        <Accordion title="Berapa hari minimal sewa mobil lepas kunci?" content={lorem} />
        <Accordion title="Berapa hari sebelumnya sabaiknya booking sewa mobil?" content={lorem} />
        <Accordion title="Apakah Ada biaya antar-jemput?" content={lorem} />
        <Accordion title="Bagaimana jika terjadi kecelakaan" content={lorem} />
      </div>
    </div>
  );
}

export default Faq;
