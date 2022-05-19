export default function ProductShoppingGrid() {
  return (
    <div className=" py-10">
      <div className="grid grid-cols-6 gap-4">
        {Array(24)
          .fill(24)
          .map((_, index) => (
            <div
              key={index}
              className={`${index % 6 === 0 ? 'row-span-2 col-span-2 flex flex-col' : 'row-span-1'} overflow-hidden  `}
            >
              <img
                className={`max-w-full rounded ${index % 6 === 0 ? 'h-full' : 'aspect-square'}    bg-white p-5`}
                src="https://v1.tailwindcss.com/img/card-top.jpg "
                alt="Sunset in the mountains"
              />
              <div className="bg-transparent mt-2 block">
                <span className="text-base font-semibold mt-2">35.000.000 đ</span>
                <p className="mb-0 text truncate">iPhone 13 Pro Max Chính Hãng VN/A</p>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-10">
        <button className="bg-transparent hover:bg-zinc-800 transition-all duration-500 w-full text-sky-700 font-medium text-xl py-2 rounded-3xl">
          Xem Thêm &#8744;
        </button>
      </div>
    </div>
  );
}
