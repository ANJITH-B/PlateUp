"use client";
import React from "react";
import  '../fonts.css';
import {AuroraBackground} from '@/components/ui/aurora-background';
import { HoverEffect } from "@/components/ui/services-card";

const content = [
  {
    title: "Quick Meals",
    description:
      "Elevate your corporate dining with PlateUp, where a world of cuisines awaits at your table. Redeem your allowance hassle-free and indulge in a diverse array of culinary delights. Savor worry-free meals, enjoying a variety of flavors without any hassle. PlateUp transforms your dining experience, making every meal a delightful journey.",
    link: "/food",
  },
  {
    title: "Pantry Plus",
    description:
      "Maximize your allowance by enjoying unbeatable discounts on groceries at our stores. Pantry Plus is your one-stop shop for all your daily essentials, from fresh veggies to dairy products and more. Simply redeem your Plateup card and conveniently fulfill your needs.",
    link: "/grocery",
  },
  {
    title: "Dine Vista",
    description:
      "Indulge in fine dining at our top-notch restaurants, offering a diverse array of delectable dishes. Redeem your meals effortlessly using the Plateup card or app at Dine vista for a seamless dining experience. Treat your palate to exquisite flavors with utmost convenience.",
    link: "/dine",
  },
  {
    title: "Work Ride",
    description:
      "Skip the hassle of waiting for cabs With WorkRide, Enjoy seamless rides from your office to your home. Schedule your trips according to your schedule. Choose between personalized or shared rides and bid farewell to long waits for your commute. Sit back, relax, and enjoy your journey with WorkRide.",
    link: "/travel",
  },
];

export default function Services() {
  return (<>
  <AuroraBackground>
    <div className="max-w-5xl min-h-screen mt-[10vh] flex justify-center items-center mx-auto px-8">
      <HoverEffect items={content} />
    </div>
  </AuroraBackground>
  </>
  );
}