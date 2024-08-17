"use client";
import Image from "next/image";
import React from "react";
import CARD from "./assets/Card.png";
import Phone from "./assets/phone.png";
import Chili from "./assets/chili.png";
import Cauliflower from "./assets/cauliflower.png";
import WordPopping from "./components/WordPopping";

function page() {
  return (
    <main className="px-40 bg-black ">
      <div className="overflow-hidden relative flex flex-row justify-center items-center bg-[#212121] w-full mt-32 h-[42vh] rounded-3xl ">
        <div className="absolute md:pr-[40vw] md:pb-56 z-20">
          <Image src={CARD} alt="card" width={400} height={400} />
        </div>
        <div className="absolute md:pr-[vw] md:pb-14 z-20">
          <Image src={Chili} alt="card" width={100} height={100} />
        </div>
        <p className="font-black text-[100px] text-[#FBFEE1] z-10">GROCERY</p>
        <div className="absolute md:pl-80 md:pt-36 ">
          <Image src={Phone} alt="card" width={400} height={400} />
        </div>
      </div>
      <div className="flex  w-full pt-28 gap-5">
        <div className="text-[25px] font-semibold w-1/2 text-[#FBFEE1]">
          <div className="flex flex-col gap-4 w-full items-start">
            <WordPopping phrase="Experience the freedom of GROCERY shopping without the hassle of payment" />
            <div className="text-xl font-medium">
              <WordPopping phrase="Get Download the app" />
            </div>
            <div className="flex flex-row">
              {/* <button>play Store</button> */}
            </div>
          </div>
        </div>
        <p className="w-1/2 text-xl text-[#FBFEE1]">
          No more waiting for your salary to be credited! With Pantry Plus, you
          can easily redeem and get your essential daily needs right at your
          home. Enjoy convenience and peace of mind, knowing that your pantry is
          always stocked
        </p>
      </div>
      <div className="w-full h-full flex flex-row pt-28 g">
        <div className="flex w-2/3 flex-col items-start pr-40 gap-5 text-3xl text-[#FBFEE1]">
          <WordPopping phrase="No more Waiting for Your salary to be Credited!" />
          <p className=" text-xl font-normal text-[#FBFEE1]">
            With Pantry Plus, you can easily redeem and get your essential daily
            needs right at your home. Enjoy convenience and peace of mind,
            knowing that your pantry is always stocked
          </p>
        </div>
        <div className="rounded-3xl w-full h-80 to-[#C5D34A] from-[#459D42] bg-gradient-to-tl">
          .
        </div>
      </div>
      <div className="flex flex-row pt-28">
        <div className="w-2/3 h-full flex items-start leading-tight">
          <p className="font-black text-[80px] text-[#FBFEE1] z-10 text-right">
            HOW <span className="text-black">..</span> THIS<br></br> WORKS
          </p>
        </div>
        <div className="w-1/3 h-full flex flex-col items-start">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="15.5" x2="15.5" y2="32" stroke="#FBFEE1" stroke-width="5"/>
            <line y1="15.5" x2="32" y2="15.5" stroke="#FBFEE1" stroke-width="5"/>
            <line x1="4.10759" y1="5.28474" x2="27.2005" y2="27.4369" stroke="#FBFEE1" stroke-width="5"/>
            <line x1="4.56306" y1="27.2" x2="26.7153" y2="4.10716" stroke="#FBFEE1" stroke-width="5"/>
        </svg>
        <p className="font-black text-[100px] p-0 text-[#E46E27] text-right">1</p>
        <hr className="w-full "/>
        <p className=" text-lg text-[#FBFEE1] pt-10">
            Effortless Redemption  Streamline your daily essentials shopping with 
            Pantry Plus whether it's a quick trip to the store or a few taps on the 
            Plateup app. Add your essentials, and effortlessly redeem your rewards
            with the Pantry Plus.
        </p>
        </div>
      </div>
      <div className="flex flex-row pt-10">
        <div className="w-1/3 p-5"> </div>
        <div className="w-1/3 h-1/3 rounded-3xl bg-[#77A964] p-5 pt-3 m-2">
            <p className="font-black text-[100px] p-0 text-black text-left">3</p>
            <p className=" text-xl text-black pt-2 font-bold">Effortless Redemption</p> 
            <p className=" text-md text-black pt-2">
                Effortless Redemption  Streamline your daily essentials shopping with 
                Pantry Plus whether it's a quick trip to the store or a few taps on the 
                Plateup app. Add your essentials, and effortlessly redeem your rewards
                with the Pantry Plus.
            </p> 
        </div>
        <div className="w-1/3 h-1/3 z-10 rounded-3xl bg-[rgba(118,151,105,0.5)] backdrop-blur-sm backdrop-opacity-1 p-5 pt-3 m-2">
            <p className="font-black text-[100px] p-0 text-white text-left">2</p>
            <p className=" text-xl font-bold text-white pt-2">Effortless Redemption</p> 
            <p className=" text-md text-[#FBFEE1] pt-2">
                Effortless Redemption  Streamline your daily essentials shopping with 
                Pantry Plus whether it's a quick trip to the store or a few taps on the 
                Plateup app. Add your essentials, and effortlessly redeem your rewards
                with the Pantry Plus.
            </p> 
        </div>
        <div className="absolute w-full z-0 items-center pr-60 flex justify-end">
          <Image src={Cauliflower} alt="cauliflower"  width={200} height={200} />
      </div>
      </div>
      
    </main>
  );
}

export default page;
