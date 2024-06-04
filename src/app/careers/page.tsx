"use client";
import { motion, cubicBezier } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import '../fonts.css';
import { Button } from "@/components/ui/moving-border";
export default function Careers() {
  const easing = cubicBezier(.35,.17,.3,.86)
  const images = [
    "./image/careers.jpg",
  ];
  return (<>
    <ImagesSlider className="h-[90vh] flex flex-col" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className=" font-primary font-black text-6xl md:text-9xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5, type:easing}}
        >
          JOIN <br /> THE TRIBE
        </motion.p>
        <a href="/contact">
          <Button className="font-medium font-primary text-xl px-4 py-5">Discover Roles →</Button>
        </a>
        
      </motion.div>
    </ImagesSlider>
      <div className="rounded-md flex flex-col antialiased max-w-screen bg-black items-center justify-center overflow-hidden">
      <InfiniteMovingCards
        items={openings}
        direction="right"
        speed="normal"
        pauseOnHover = {false}
      />
    </div>
    </>
  );
}
const openings = [
  {
    name: "Frontend Developer",
    title: "Full-Time",
  },
  {
    name: "Backend Developer",
    title: "Full-Time",
  },
  {name: "UI/UX Designer",
    title: "Summer Intern",
  },
  {
    name: "iOS Developer",
    title: "Summer Intern",
  },
  {
    name: "Media & Content Manager",
    title: "Full-Time",
  },
];