"use client";
import * as React from "react";
import HomePage from "@/components/Home/Home";
import Footer from "@/components/footer";
import {NextUIProvider} from "@nextui-org/react";
import Image from "next/image";
import bg from '../../public/image/foodbowllast.png'
import ParallaxText from "@/components/Home/parallax/ParallaxText";

export default function Home() {
  const [section, setSection] = React.useState(0);
  return (
    <NextUIProvider>
    <main className="flex min-h-screen flex-col items-center justify-between relative ">
    {section === 0 && (
          <Image src={bg} alt="background-image" fill className="-z-5 h-100 object-bottom object-contain"/>
        )} 
      {/* <ParallaxText  baseVelocity={1}>INCREDIBLE FOOD CHOICES WITH AWESOME REWARD POINTS</ParallaxText> */}
      {/* object-cover object-center */}
      <div className="w-full h-full">

      <HomePage section={section} setSection={setSection}/>
      </div>
    </main>
    </NextUIProvider>
  );
}
