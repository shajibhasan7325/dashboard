import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsCurrencyDollar, BsCurrencyEuro } from 'react-icons/bs';
import Pie from './Charts/Pie';
import Bar from './Charts/Bar';

const Charts = () => {
  const [active, setActive] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setActive(buttonNumber);
  };
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div className="col-span-1 p-4 bg-white rounded-lg">
        <div className="flex items-center gap-4">
          <Image src="/images/source-type.svg" width={34} height={34} />
          <h2 className="text-slate-500 font-semibold">Source Type</h2>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <h3 className="font-semibold">Summary</h3>
            <p className="flex items-center gap-3 mt-1 text-slate-400 text-xs">
              <AiOutlineCalendar />
              <span>From 1-6 Mar 2023</span>
            </p>
          </div>
          <div className=" ">
            <button
              onClick={() => handleButtonClick(1)}
              className={`${
                active == 1 && 'bg-blue-500 text-white '
              }  px-3 py-1 rounded-tl-full rounded-bl-full bg-blue-100`}
            >
              <BsCurrencyDollar />
            </button>
            <button
              onClick={() => handleButtonClick(2)}
              className={`${
                active == 2 && 'bg-blue-500 text-white '
              } text-gray-500 px-3 py-1 rounded-tr-full rounded-br-full bg-blue-100`}
            >
              <BsCurrencyEuro />
            </button>
          </div>
        </div>
        <Pie />
      </div>
      <div className="col-span-2 p-4 bg-white h-auto rounded-lg">
        <div className="flex items-center gap-4">
          <Image src="/images/source-type.svg" width={34} height={34} />
          <h2 className="text-slate-500 font-semibold">
            Outcome vs Income Inventory
          </h2>
        </div>
        <Bar />
      </div>
    </div>
  );
};

export default Charts;
