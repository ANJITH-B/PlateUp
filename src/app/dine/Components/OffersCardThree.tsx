import React from "react";
import WordPopping from "./WordPopping";
import Image from "next/image";
import N0 from "../assets/images/0.png";
import N3 from "../assets/images/3.png";

const OffersCardThree: React.FC = () => {
  return (
    <div className="flex flex-row h-[28vh]">
      <div className="md:w-[40vw]  text-right flex flex-col items-end justify-center">
        <div className="text-2xl ">
          <WordPopping phrase="This Sunday" />
        </div>
        <p className="text-sm md:ml-20 mr-3 md:mr-2">
          Treat yourself to seafood seasoned with authentic Maharashtrian
          spices. Create unforgettable memories with each delicious bite.
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full h-full py-14 md:py-6 gap-4 flex md:pl-10">
          <div className="h-full w-20 md:w-28 rounded-full bg-[#507BA6] flex justify-center items-center">
            <Image src={N0} width={80} height={60} alt="" className="w-[45px] md:w-[60px]"/>
          </div>
          <div className="h-full w-20 md:w-28 rounded-full border border-spacing-10  border-[#507BA6] flex justify-center items-center ">
            <Image src={N3} width={60} height={60} alt="" className="w-[35px] md:w-[50px]" />
          </div>
          <div className="hidden md:block h-full w-28 rounded-full border border-spacing-6  border-gray-700 "></div>
          <div className="hidden md:block h-full w-28 rounded-full border border-spacing-6  border-gray-700 "></div>
        </div>
      </div>
    </div>
  );
};

export default OffersCardThree;
