"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Careers() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (<>
    <ImagesSlider className="h-[40rem] flex flex-col" images={images}>
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
        <motion.p className="font-black text-5xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          JOIN <br /> THE TRIBE
        </motion.p>
        <button className="hover:scale-110 transition-transform px-4 py-3 backdrop-blur-sm w-full bg-yellow-500 text-xl font-black text-white mx-auto text-center rounded-xl relative mt-4">
          <span className="font-semibold">Discover Roles →</span>
          {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" /> */}
        </button>
      </motion.div>
    </ImagesSlider>
      <div className="rounded-md flex flex-col antialiased max-w-screen items-center justify-center overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover = {false}
      />
    </div>
    </>
  );
}
const testimonials = [
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