import React from "react";
import hotel1 from "../assets/images/hotel1.png";
import Image from "next/image";

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
      {[...Array(6)].map((_, index) => (
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
            <Image
              src={hotel1}
              alt=""
              width={200}
              height={200}
              className="w-full"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row gap-1">
              <svg
                width="92"
                height="17"
                viewBox="0 0 92 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <path
                      key={index}
                      d={paths[0].d}
                      fill={paths[0].fill}
                      stroke={paths[0].stroke}
                      transform={`translate(${index * 20}, 0)`}
                    />
                  ))}
              </svg>
              <p className="hidden md:block font-thin text-gray-300 text-[11px] md:text-[14px] px-1">
                21 reviews
              </p>
            </div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="14" fill="white" />
              <path
                d="M17.437 18.5802C17.793 18.5802 18.1344 18.7235 18.386 18.9785C18.6377 19.2336 18.7791 19.5795 18.7791 19.9402C18.7791 20.3009 18.6377 20.6468 18.386 20.9019C18.1344 21.1569 17.793 21.3002 17.437 21.3002C17.0811 21.3002 16.7397 21.1569 16.488 20.9019C16.2363 20.6468 16.0949 20.3009 16.0949 19.9402C16.0949 19.1854 16.6922 18.5802 17.437 18.5802ZM6.7002 7.7002H8.89454L9.52533 9.0602H19.4502C19.6282 9.0602 19.7989 9.13184 19.9247 9.25936C20.0505 9.38689 20.1212 9.55985 20.1212 9.7402C20.1212 9.8558 20.0877 9.9714 20.0407 10.0802L17.6384 14.4798C17.4102 14.8946 16.9673 15.1802 16.464 15.1802H11.4647L10.8607 16.2886L10.8406 16.3702C10.8406 16.4153 10.8583 16.4585 10.8897 16.4904C10.9212 16.5223 10.9639 16.5402 11.0084 16.5402H18.7791V17.9002H10.7265C10.3706 17.9002 10.0292 17.7569 9.7775 17.5019C9.52581 17.2468 9.38441 16.9009 9.38441 16.5402C9.38441 16.3022 9.4448 16.0778 9.54546 15.8874L10.4581 14.2214L8.0423 9.0602H6.7002V7.7002ZM10.7265 18.5802C11.0825 18.5802 11.4238 18.7235 11.6755 18.9785C11.9272 19.2336 12.0686 19.5795 12.0686 19.9402C12.0686 20.3009 11.9272 20.6468 11.6755 20.9019C11.4238 21.1569 11.0825 21.3002 10.7265 21.3002C10.3706 21.3002 10.0292 21.1569 9.7775 20.9019C9.52581 20.6468 9.38441 20.3009 9.38441 19.9402C9.38441 19.1854 9.98164 18.5802 10.7265 18.5802ZM16.766 13.8202L18.6315 10.4202H10.1494L11.7331 13.8202H16.766Z"
                fill="#111111"
              />
            </svg>
          </div>
          <p className="text-xl font-md">
            Cecconl’s Mumbai
            <br />
            <span className="text-[16px] font-light text-gray-300">
              Italian | 12 tables available | Mumbai
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCard;
