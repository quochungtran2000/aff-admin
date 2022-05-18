import { Rate } from 'antd';
import React from 'react';

export default function ProductShoppingGrid() {
  const arrayProjectPatern: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  const renderGrid = arrayProjectPatern.map((title, index) => {
    return (
      // aspect-square
      <div key={index} className={`${index % 5  === 0 ? "row-span-2 col-span-2 flex flex-col" : "row-span-1"} overflow-hidden  `}>
        <img
          className={`max-w-full rounded ${index % 5  === 0 ? "h-full" : "aspect-square"}    bg-white p-5`}
          src="https://v1.tailwindcss.com/img/card-top.jpg "
          alt="Sunset in the mountains"
        />
        <div className="bg-transparent mt-2 block">
          <span className="text-base font-semibold mt-2">35.000.000 đ</span>
          <p className="mb-0 text truncate">iPhone 13 Pro Max Chính Hãng VN/A</p>
        </div>
      </div>
    );
  });

  return (
    <div className=' py-10'>
      <div className="grid grid-cols-6 gap-4">{renderGrid}</div>
      <div className='mt-10'>
      <button className='bg-transparent hover:bg-zinc-800 transition-all duration-500 w-full text-sky-700 font-medium text-xl py-2 rounded-3xl'>Xem Thêm &#8744;</button>
      </div>
    </div>
  );
}
