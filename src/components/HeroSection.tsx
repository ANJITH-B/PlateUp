import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import'../app/fonts.css';
function HeroSection() {
  return (
    <div className="min-h-screen bg-black md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden  py-40">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex justify-between mt-5 ml-10">
      <div className=" z-10 w-full text-start">
        <h1 className="mt-20 md:mt-52 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-neutral-100 font-secondary ">
          Plateup
        </h1>
        <p className=" font-primary mt-5 font-semibold text-4xl text-neutral-300 bg-clip-text text-transparent bg-gradient-to-b to-gray-700 from-neutral-300 max-w-lg mx-auto">
          Homepage Design to be implemented
        </p>
        <div className="mt-10 w-auto hover:scale-110 hover:translate-x-5 transition-all">
          <Link href={"/courses"}>
            <Button className="font-bold text-lg">Get Started</Button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
