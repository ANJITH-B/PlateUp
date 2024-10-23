import React from "react";
import hotel0 from "../assets/images/Poult.png";
import hotel1 from "../assets/images/Cafe Free India.png";
import hotel2 from "../assets/images/Pleo.png";
import hotel3 from "../assets/images/Maharaja Bhog.png";
import hotel4 from "../assets/images/O Pedro.png";
import hotel5 from "../assets/images/Angrezi Dhaba.png";
import hotel6 from "../assets/images/Butterfly High.png";
import hotel7 from "../assets/images/Oudhe Premium Dining.png";
import hotel8 from "../assets/images/Miro Deli.png";
import Image from "next/image";
import ModalCart from "./ModalCart";
import Restaurant from "../RestaurantArray";

const imageArray = [hotel0, hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7,hotel8];
const paths = [
  {
    d: "M9.39935 6.46985L9.50555 6.82754H9.87867H14.5416L10.6826 9.82602L10.4096 10.0381L10.5116 10.3684L11.989 15.1533L8.31075 12.2353L8 11.9888L7.68925 12.2353L4.00985 15.1542L5.48482 10.3681L5.58652 10.0381L5.31392 9.82613L1.45757 6.82754H6.12133H6.49445L6.60065 6.46985L8 1.75671L9.39935 6.46985Z",
    fill: "white",
    stroke: "white",
  },
];

const RestaurantCard: React.FC = () => {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[...Restaurant].map((item, index) => (
        <div key={index} className="flex flex-col w-full">
          <div className="flex items-end pb-3">
            <div className="flex flex-row absolute m-2 gap-1">
              <p className="text-4xl">10%</p>
              <p className="text-4xl font-extralight">I</p>
              <div className="flex flex-col">
                <div className="leading-4 font-bold pt-1">
                  Discount
                  <br />
                  <span className="text-xs font-light uppercase">with app</span>
                </div>
              </div>
            </div>
            <Image src={imageArray[index]} alt="" width={200} height={200}className="w-full" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row gap-1">
              <svg  width="92" height="17"  viewBox="0 0 92 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <path key={index} d={paths[0].d} fill={paths[0].fill} stroke={paths[0].stroke} transform={`translate(${index * 20}, 0)`}/>
                  ))}
              </svg>
              <p className="hidden md:block font-thin text-gray-300 text-[11px] md:text-[14px] px-1">
                {item[3]} 
              </p>
            </div>
            <ModalCart item={item} index={index} />
          </div>
          <p className="text-xl font-md">
            {item[0]}
            <br />
            <span className="text-[16px] font-light text-gray-300">
              {item[2]}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCard;









// sample for large scale Dynamic Restaurant Image with Gradient and text above

{/* <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article> */}