"use client";
import Image from "next/image";
import Phone from "./assets/Mask group (20).png";
import React from "react";
import Cauliflower from "./assets/cauliflower.png";
import leaf from "./assets/leaf.png";
import WordPopping from "./components/WordPopping";
import SectionHeading from "../dine/Components/SectionHeading";
import GroceryCard from "./components/GroceryCard";
import GrocerySection from "./components/GrocerySection";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Description from "./components/Description";
import FramEssetnals from "./components/FramEssetnals";
import { container } from "./animation";
import FAndQWhy from "./components/F&QWhy";
import FAndQHow from "./components/F&QHow";
import FAndQWhat from "./components/F&QWhat";
import ShopCard from "./components/RestaurantCard";
import StepOne from "./components/StepOne";

function page() {
  const { scrollYProgress } = useViewportScroll();
  const moveDown = useTransform(scrollYProgress, [0, 1], [40, 500]);
  const moveDown1 = useTransform(scrollYProgress, [0, 1], [-200, 120]);
  const moveDown3 = useTransform(scrollYProgress, [0, 1], [-200, 30]);
  const moveDown2 = useTransform(scrollYProgress, [0, 1], [0, 380]);
  return (
    <main className="px-5 md:px-20 lg:px-40 xl:px-40 w-full bg-[#030303] relative overflow-hidden">
      <div className="  w-full mt-32 h-[42vh] ">
        <GrocerySection />
      </div>
      <div className="flex w-full pt-28 gap-5">
        <Description />
      </div>

      <div className="w-full h-full flex flex-col md:flex-row pt-28 ">
        <div className="flex w-full md:w-2/3 flex-col items-start pb-10 md:pb-0 pr-0 md:pr-40 gap-5 text-3xl text-[#FBFEE1]">
          <WordPopping phrase="Fresh Finds, Big Savings" />
          <motion.p
            variants={container}
            className="text-[14px] md:text-[16.5px] font-normal text-[#FBFEE1]"
          >
            Get the freshest farm produce delivered straight to your door! Enjoy
            30% off on crisp vegetables, quality staples, bread, milk, veggies,
            and pulses. Your farm-fresh pickup is just a click away
          </motion.p>
        </div>
        <FramEssetnals />
      </div>
      <div className="flex flex-row pt-28">
        <div className="w-1/2 md:w-2/3 h-full flex items-start">
          <p className="font-black text-3xl md:text-[80px] text-[#FBFEE1] z-10 text-right leading-tight">
            HOW <span className="text-black">..</span> THIS<br></br> WORKS
          </p>
        </div>
        <StepOne />
      </div>
      <div className="flex flex-row pt-10">
        <div className="hidden md:block w-1/3 p-5"> </div>
        <div className="w-1/2 md:w-1/3 h-[400px] rounded-3xl bg-[#77A964] p-2 md:p-5 pt-3 m-2">
          <p className="font-black text-[100px] p-0 text-black text-left">3</p>
          <p className="text-lg md:text-xl text-black md:pt-2 font-bold">
            Weekend Savings
          </p>
          <p className="text-[14px] md:text-[16.5px] text-black pt-2 leading-1">
            Unlock exclusive discounts of 15% to 30% on all purchases every
            Friday through Sunday. Also, take part in monthly contests for a
            chance to win exciting prizes. Experience the benefits of smart
            shopping with Pantry Plus.
          </p>
        </div>
        <div className="w-1/2 md:w-1/3 h-[400px] z-10 rounded-3xl bg-[rgba(118,151,105,0.5)] backdrop-blur-sm backdrop-opacity-1 p-2 md:p-5 pt-3 m-2">
          <p className="font-black text-[100px] p-0 text-white text-left">2</p>
          <p className=" text-xl font-bold text-white md:pt-2">Variety Hub</p>
          <p className=" text-[14px] md:text-[16.5px] text-[#FBFEE1] pt-2 ">
            Discover a diverse assortment of fresh vegetables, dairy products,
            and more to fulfill your requirements. Explore our extensive range
            of selections and conveniently locate all your essentials in one
            place.
          </p>
        </div>

        <motion.div
          style={{ y: moveDown }}
          className="absolute w-full z-0 items-center pr-60 flex justify-end"
        >
          <Image src={Cauliflower} alt="cauliflower" width={200} height={200} />
        </motion.div>
        <motion.div
          style={{ y: moveDown3, rotateX: 180 }}
          className="absolute blur-sm w-full z-0 items-center pr-60 flex justify-end"
        >
          <Image src={leaf} alt="cauliflower" width={100} height={100} />
        </motion.div>
        <motion.div
          style={{ y: moveDown1, x: 50 }}
          className="absolute w-full z-0 items-center pr-60 flex justify-end"
        >
          <Image src={leaf} alt="cauliflower" width={150} height={150} />
        </motion.div>
        <motion.div
          style={{ y: moveDown2, rotate: 90 }}
          className="absolute w-full z-0 items-center pr-60 flex justify-end"
        >
          <Image src={leaf} alt="cauliflower" width={200} height={200} />
        </motion.div>
      </div>

      <div className="flex flex-row pt- gap-2">
        <div className="w-1/2 md:w-1/3 h-[400px] rounded-3xl bg-[#CDE0B5] p-2 md:p-5">
          <p className="font-black text-[100px] p-0 text-black text-left">4</p>
          <p className=" text-xl text-black md:pt-2 font-bold">
            Coverage Areas
          </p>
          <p className=" text-md text-black pt-2">
            Experience the convenience of real-time availability both online and
            in-store, serving Mumbai, Pune, Bangalore, Gurgaon, and beyond
            essentials in one place.
          </p>
        </div>
        <div className="hidden md:block  w-1/2 md:w-1/3 h-90 ">
          <div className=" w-full h-full flex items-start justify-end rounded-3xl bg-gradient-to-tr to-[#77A964] from-[#CDE0B5] m-2">
            <Image src={Phone} alt="..." className="w-60 " />
          </div>
        </div>
        <div className="hidden md:block w-1/3 p-5"> </div>
      </div>

      {/* 02 PlateUp Fresh! */}

      <SectionHeading heading="Plateup Fresh !" mealExpressIcon={false} />
      <div className="h-full md:h-screen w-full pt-[3vh] flex flex-col md:flex-row">
        <motion.div className="hidden md:block w-2/5">
          <div className="flex flex-col gap-5 w-full h-full">
            <motion.p
              variants={container}
              initial="initial"
              whileInView="visible"
              className="text-xl font-light flex items-start"
            >
              {" "}
              <WordPopping phrase="Near SuperMarkets" />
            </motion.p>
            <ShopCard />
          </div>
        </motion.div>
        <div className=" w-full md:w-3/5 h-full md:h-[85vh]">
          <p className="text-xl font-light pb-[3vh] flex items-start">
            <WordPopping phrase="Popular this week" />
          </p>
          <GroceryCard />
        </div>
      </div>

      {/* 03 FAQ  */}

      <SectionHeading
        heading="Frequently asked questions !"
        mealExpressIcon={false}
      />
      <div className="h-full w-full py-[4vh] md:pt-[10vh] ">
        <div className="flex flex-row gap-3">
          <div className="hidden md:block w-2/6">
            <div className="flex flex-col w-full gap-3">
              <div className="w-full h-[300px] flex items-start justify-end">
                <FAndQWhy />
              </div>
              <div className="w-full h-[300px]">
                <FAndQHow />
              </div>
            </div>
          </div>
          <div className="md:w-4/6 flex flex-row items-end justify-start">
            <FAndQWhat />
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
