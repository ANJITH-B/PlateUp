"use client";
import * as React from "react";
import HomePage from '@/components/Home/Home';
import Footer from '@/components/footer';
import { NextUIProvider } from '@nextui-org/react';
import Image from 'next/image';
import bg from '../../public/image/foodbowllast.png';
import bgMb from '../../public/image/foodbowlmoblie.png';


export default function Home() {
  const [section, setSection] = React.useState(0)
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between relative w-full h-full">
      {/* {section === 0 && (
          <>
          <Image src={bg} alt="background-image" fill className="-z-5 object-bottom object-contain hidden sm:block"/>
          <Image src={bgMb} alt="background-image" fill className="-z-5 object-bottom object-contain sm:hidden" />
          </>

        )}  */}
        <div className="w-full h-full">
          <HomePage section={section} setSection={setSection} /> 
        </div>
        {/* Background image */}
        {/* <div className="w-full h-full absolute top-0 left-0">
          <Image src={bg} alt="background-image" fill className="object-bottom object-contain sm:hidden" />
        </div> */}
      </main>
    </NextUIProvider>
  );
}
