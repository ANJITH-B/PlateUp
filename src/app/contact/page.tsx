'use client';

import React, { FormEvent, useState } from 'react';
// import { BackgroundBeams } from '@/components/ui/background-beams';
// import Link from 'next/link';
// import { Button } from '@/components/ui/moving-border';
import ContactForm from '@/components/contactForm'
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log('Submitted:', { email, message });
  // };
  const tabs = [
    {
      title: "Corporate",
      value: "Corporate",
      content: (
        <div className="max-w-5xl h-auto justify-center mx-auto rounded-2xl p-10 text-xl md:text-4xl font-bold border border-white text-white bg-gradient-to-br from-gray-600 to-black">
          {/* <p>Corporate Tab</p> */}
          <h3>This is Corporate tab</h3>
          <ContactForm/>
        </div>
      ),
    },
    {
      title: "Employee",
      value: "Employee",
      content: (
        <div className="max-w-5xl h-auto justify-center mx-auto rounded-2xl p-10 text-xl md:text-4xl font-bold border border-white text-white bg-gradient-to-br from-gray-600 to-black">
          {/* <p>Employee tab</p> */}
          <h1>This is Employee tab</h1>
          <ContactForm/>
        </div>
      ),
    },
    {
      title: "Merchant",
      value: "Merchant",
      content: (
        <div className="max-w-5xl h-auto justify-center mx-auto rounded-2xl p-10 text-xl md:text-4xl font-bold border border-white text-white bg-gradient-to-br from-gray-600 to-black">
          {/* <p>Merchant tab</p> */}
          <h1>This is Merchant tab</h1>
          <ContactForm/>
        </div>
      ),
    },
  ];
 
  return (
    <>
    <div className="backdrop-blur-xl bg-blue-400 bg-opacity-80 h-max px-4 pb-[100px] flex flex-col mx-auto items-start justify-start pt-16">
      <Tabs tabs={tabs} />
    </div>
    <div className="-z-30 max-h-screen max-w-screen">
    <img src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{backgroundSize:"cover"}} className='h-screen w-full' alt="plateup"/>
    </div>
    </>
  );
}


export default ContactUs;