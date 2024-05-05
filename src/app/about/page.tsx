"use client";
import React from "react";
import '../fonts.css';
import {motion} from 'framer-motion';
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import {Card} from "@/components/plateup-card";
import Word from "./Word";
export default function page() {
  const intro = `Welcome to Plateup, a pioneering platform committed to alleviating the everyday hurdles encountered by employees. Our mission is to provide seamless solutions for corporate meal plans, grocery purchases, dining out, and commuting challenges.
  At Plateup, we understand the difficulties faced by employees in managing their daily expenses. Our comprehensive service is designed to address these needs efficiently, empowering employees to redeem their allowances effortlessly. This grants them the flexibility to purchase meals, commute, or buy groceries without unnecessary complications.
  With Plateup, employees enjoy a hassle-free experience, enabling them to focus on what truly matters. Join us as we revolutionize the way employees manage their daily expenses, one meal at a time.`
  return (
    <div className="flex flex-col overflow-hidden bg-transparent">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <motion.div className="flex justify-center items-center mt-[35vh] max-w-5xl mb-[20vh] mx-auto text-center">
        <motion.h1 className="font-semibold text-white">
          <span className="text-6xl md:text-[8rem] text-wrap mt-1 leading-none font-secondary text-center font-light lg-text-5xl py-10 font-primary bg-clip-text text-transparent bg-gradient-to-b from-[#FFC700] to-[#FF5107] h-full align-middle">
            <span className="text-white">About</span> Plateup
          </span>
        </motion.h1>
      </motion.div>
        <motion.div 
        className="flex justify-center items-center w-full min-h-[50vh]">
        <div className="text-justify text-sm lg:text-md font-primary font-medium container mx-auto px-2 w-[100%] text-white">
          <Word paragraph={intro}/>
        </div>
        </motion.div>
        <motion.div className="flex flex-row flex-wrap justify-evenly h-auto w-full">
        <div className="w-full lg:w-1/3 justify-center items-center">
          <Card/>
        </div>
        <div className="flex flex-col w-full lg:w-2/3 items-center justify-center mt-4">
            <p className="text-justify text-base lg:text-xl px-5 font-primary font-medium container mx-auto py-5 text-white">
          Experience the ease of dining with Plateup! No more hassle with cash payments on delivery apps or being restricted to limited canteen options for your meal. Just utilize your Plateup card to enjoy your meal allowance at a standard rate. Elevate your office dining experience with an array of cuisines delivered directly to your table.
          </p>
          <a href="https://drive.google.com/file/d/11zAm_ubXkxG0Z6qPHojHfnlcjOHYIW9G/view?usp=sharing" target="_blank" >
            <Button className="font-black text-sm px-4 w-fit mb-8">Download Brochure</Button>
          </a>
        </div>
      </motion.div>      
    </div>
  );
}


