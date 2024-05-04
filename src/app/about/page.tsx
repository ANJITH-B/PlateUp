"use client";
import React, { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function page() {
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('hai',e);
    
    setPosition({ x: e.clientY, y: e.clientX });
  };
  return (
    // <div className="flex flex-col overflow-hidden bg-black">
    //   <img src="https://www.visittreasurelake.com/wp-content/uploads/2017/11/fine-dining-meal.jpg" alt="" className = "opacity-40 w-full h-screen top-0 fixed"/>
    //   <ContainerScroll
    //     titleComponent={
    //       <>
    //         <h1 className="text-4xl font-semibold text-white">
    //           <span className="text-7xl md:text-[8rem] font-bold text-wrap mt-1 leading-none">
    //             About Plateup
    //           </span>
    //         </h1>
    //       </>
    //     }
    //   />
    //   <p className="text-center text-xl font-bold container mx-auto pb-10 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cumque reiciendis qui alias et eos magnam, ab eligendi distinctio sit, perferendis vero debitis aliquid voluptatum. Sequi aspernatur rem temporibus quidem?</p>
    // </div>
    <div>
      <div className="sec">
        <h2>Light</h2>
      </div>
      <div
        className="light"
        style={{ '--x': `${position.x}px`, '--y': `${position.y}px` } as React.CSSProperties} // Type assertion
        onMouseMove={handleMouseMove}
      ></div>
    </div>
  );
}


