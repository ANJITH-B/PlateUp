"use client";
import * as React from "react";
import HomePage from '@/components/Home/Home';
import { NextUIProvider } from '@nextui-org/react';



export default function Home() {
  const [section, setSection] = React.useState(0)

  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between relative w-full h-full">
        <div className="w-full h-full">
          <HomePage section={section} setSection={setSection} /> 
        </div>
      </main>
    </NextUIProvider>
  );
}
