import React from "react";
import Image from 'next/image'
import WordPopping from './WordPopping'
import N2 from '../assets/images/02.png'

const OffersCardTwo: React.FC = () => {
  return (
    <div className="w-full h-1/2 my-5 py-6 inner rounded-3xl overflow-hidden">
      <div className="w-full h-full overflow-hidden flex flex-row">
        <div className=" md:py-8 mr-2">
          <div className="text-white font-semibold leading-3 flex flex-col items-start justify-between">
            <div className="flex flex-row pb-2">
              <WordPopping className='mr-1' phrase="JOIN US" />
              <br />
              <span className="text-black bg-red-">.......</span>
            </div>
            <WordPopping className='mr-1' phrase="      AT DINE" /> <br />
            <WordPopping className='mr-1' phrase="VISTA BKC" />
          </div>
          <div className="flex flex-row items-center gap-3">
            <p className="pt-3 text-gray-300 leading-5 w-[30vw]">
              this week with the rich flavors of Punjabi Grill, savoring each
              bite to the fullest
            </p>
          </div>
        </div>
        <div className=" pb-6 ">
          <Image src={N2} alt="" width={230} height={230} className="" />
        </div>
        <div className="h-full flex flex-row items-end p-6">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 28L28 2M28 2V28M28 2H2"
              stroke="#999999"
              stroke-width="3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OffersCardTwo;
