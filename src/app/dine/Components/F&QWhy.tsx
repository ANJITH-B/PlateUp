import React from "react";
import { motion } from 'framer-motion'

const FAndQWhy: React.FC = () => {
  return (
    <div className="w-full h-[300px] bg-[#507BA6] rounded-3xl flex flex-col justify-between p-5">
      <div className="flex flex-row justify-between w-full">
        <p className="text-md font-xl">
          Why ?<br />
          <span className="text-sm font-normal">By using the Plateup card</span>
        </p>
        <button className="border px-4 rounded-xl pb-1 h-10">..</button>
      </div>
      <div className="flex flex-row justify-between w-full gap-2 items-center">
        <p>
          To Enjoy convenience and peace of mind, knowing that your pantry is
          always stocked
        </p>
        <button className="px-4 pb-1 text-2xl rounded-full h-11 bg-black">
          +
        </button>
      </div>
    </div>
  );
};

export default FAndQWhy;
