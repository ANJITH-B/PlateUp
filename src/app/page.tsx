"use client";
import * as React from "react";
import HomePage from "@/components/Home/Home";
import Footer from "@/components/footer";
import {NextUIProvider} from "@nextui-org/react";
import Image from "next/image";
import bg from '../../public/image/foodbowllast.png'
import bgMb from '../../public/image/foodbowlmoblie.png'
import ParallaxText from "@/components/Home/parallax/ParallaxText";

export default function Home() {
  const [section, setSection] = React.useState(0)

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  // Update window width when component mounts
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update window width
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  ;
 
  const imageSrc = windowWidth <= 640 ? bgMb : bg;
  // const classes = isMediumScreen ? '-z-5 h-100 object-bottom object-contain' : '-z-5 object-bottom object-contain';
  return (
    <NextUIProvider>
    <main className="flex min-h-screen flex-col items-center justify-between relative w-full h-full">
    {section === 0 && (
          // <Image src={bg} alt="background-image" fill className="-z-5 h-100 object-bottom object-contain sm:object-none sm:h-46 sm:w-150"/>
          <Image src={imageSrc} alt="background-image" fill className="-z-5 object-bottom object-contain "/>

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
