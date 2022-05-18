import { Rate } from 'antd';
import React from 'react';

export default function ProductShopping() {
  return (
    <div className='border-b-2 py-10'>
      <p className='text-sky-700 mb-0 text-base'>DÀNH CHO BẠN</p>
      <h5>Điện thoại di động</h5>
      <div className="flex w-full my-5">
      <div className="w-1/6  overflow-hidden  first:ml-0 last:mr-0 mx-2">
          <img
            className="max-w-full rounded aspect-square bg-white p-5 "
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="bg-transparent mt-2">
            <span className="text-base font-semibold mt-2">35.000.000 đ</span>
            <p className="mb-0">iPhone 13 Pro Max Chính Hãng VN/A</p>
            <div>
              <Rate allowHalf defaultValue={2.5} style={{fontSize: "12px"}}/>
              <span className="text-xs">18.000</span>
            </div>
          </div>
        </div>

        <div className="w-1/6  overflow-hidden  first:ml-0 last:mr-0 mx-2">
          <img
            className="max-w-full rounded aspect-square bg-white p-5"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="bg-transparent mt-2">
            <span className="text-base font-semibold mt-2">35.000.000 đ</span>
            <p className="mb-0">iPhone 13 Pro Max Chính Hãng VN/A</p>
            <div>
            <Rate allowHalf defaultValue={2.5} style={{fontSize: "12px"}}/>
              <span className="text-xs">18.000</span>
            </div>
          </div>
        </div>

        <div className="w-1/6  overflow-hidden  first:ml-0 last:mr-0 mx-2">
          <img
            className="max-w-full rounded aspect-square bg-white p-5"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="bg-transparent mt-2">
            <span className="text-base font-semibold mt-2">35.000.000 đ</span>
            <p className="mb-0">iPhone 13 Pro Max Chính Hãng VN/A</p>
            <div>
                 <Rate allowHalf defaultValue={2.5} style={{fontSize: "12px"}}/>
              <span className="text-xs">18.000</span>
            </div>
          </div>
        </div>

        <div className="w-1/6  overflow-hidden  first:ml-0 last:mr-0 mx-2">
          <img
            className="max-w-full rounded aspect-square bg-white p-5"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="bg-transparent mt-2">
            <span className="text-base font-semibold mt-2">35.000.000 đ</span>
            <p className="mb-0">iPhone 13 Pro Max Chính Hãng VN/A</p>
            <div>
                 <Rate allowHalf defaultValue={2.5} style={{fontSize: "12px"}}/>
              <span className="text-xs">18.000</span>
            </div>
          </div>
        </div>

        <div className="w-1/6  overflow-hidden  first:ml-0 last:mr-0 mx-2">
          <img
            className="max-w-full rounded aspect-square bg-white p-5"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="bg-transparent mt-2">
            <span className="text-base font-semibold mt-2">35.000.000 đ</span>
            <p className="mb-0">iPhone 13 Pro Max Chính Hãng VN/A</p>
            <div>
                 <Rate allowHalf defaultValue={2.5} style={{fontSize: "12px"}}/>
              <span className="text-xs">18.000</span>
            </div>
          </div>
        </div>

        <div className="w-1/6  overflow-hidden  first:ml-0 last:mr-0 mx-2">
          <img
            className="max-w-full rounded aspect-square bg-white p-5"
            src="https://v1.tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="bg-transparent mt-2">
            <span className="text-base font-semibold mt-2">35.000.000 đ</span>
            <p className="mb-0">iPhone 13 Pro Max Chính Hãng VN/A</p>
            <div>
                 <Rate allowHalf defaultValue={2.5} style={{fontSize: "12px"}}/>
              <span className="text-xs">18.000</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
      <button className='bg-transparent hover:bg-zinc-800 transition-all duration-500 w-full text-sky-700 font-medium text-xl py-2 rounded-3xl'>Xem Thêm &#8744;</button>
      </div>
    </div>
  );
}
