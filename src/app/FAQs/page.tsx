"use client";
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import '../fonts.css';
import {AuroraBackground} from '@/components/ui/aurora-background';

export default function FAQs() { 
    const AddIcon = () => (
      <svg
      viewBox="0 0 24 24"
      fill="white"
      height="1.5em"
      width="1.5em"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </svg>
    );

    const SubIcon = () => (
      <svg height="1em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
        <line x1="15" y1="0" x2="15" y2="25" style={{stroke:"white",strokeWidth:"1"}} />
      </svg>
    );
  return(
    <div className=" pt-[11vh] min-h-screen max-w-[99vw] px-2 w-full" style={{background:`url("./universal.png")`,backgroundRepeat:"repeat-y",backgroundSize:"100%"}}>
      <h1 className="text-center font-secondary font-medium text-4xl py-6 px-2 bg-clip-text text-transparent bg-gradient-to-b from-[#FFC700] to-[#FF5107]">Frequently Asked Questions</h1>
      <hr />
      <div className="container mx-auto py-5">
      <Accordion variant="shadow" 
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}>
      <AccordionItem key="1" title="Ques. Do I need to carry any other wallet to pay for my meals?"  className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
        You don't need to carry any wallet. You can simply use the Plateup card at the nearest Plateup food hubs or redeem your allowance through the Plateup app.
        </span>
      </AccordionItem>
      <AccordionItem key="2" title="Ques. If I don't want to redeem it for my meals, can I redeem it somewhere else?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         Yes, you can also redeem it at the marketplace of Plateup. You don't need money; you can simply redeem it with your allowance. You can opt for groceries.
        </span>
      </AccordionItem>
      <AccordionItem key="3" title="Ques. Can I save my allowance into the card and spend it after next month?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         No, it's not possible. You have an expiry of 1 month as policy allowance was given for your daily usage for your benefits so you can work freely.
        </span>
      </AccordionItem>
      <AccordionItem key="4" title="Ques. How much would my allowance be?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         It depends on the corporate to corporate how much they set your allowance.
        </span>
      </AccordionItem>
      <AccordionItem key="5" title="Ques. What all services and where can I use it?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         You can use it for grocery buying, meals, dine-in, events, and even travel.
        </span>
      </AccordionItem>
      <AccordionItem key="6" title="Ques. If I don't like today's meal at the corporate?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         If you don't love today's meal, you can also opt for the food whichever you prefer, so no more problems
        </span>
      </AccordionItem>
      <AccordionItem key="7" title="Ques. So if I miss my lunch today due to fieldwork then?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         Even if you miss your meal, no issues. You can easily opt for the meal at the nearest Plateup hub by using the scan app or with the Plateup card. Plateup is located every 5 km radius of the corporate. You can also find it through our app; you can also order the food right at your place.
        </span>
      </AccordionItem>
      <AccordionItem key="8" title="Ques. Where can I use it for dine-in?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         You can use it at Plateup hubs.
        </span>
      </AccordionItem>
      <AccordionItem key="9" title="Ques. Can I use it for travel?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         Yes, you can use it as redemption for the cab or bus services. We make you feel that no more burden work for your passion and company.
        </span>
      </AccordionItem>
      <AccordionItem key="10" title="Ques. Do you require space at the corporate?" className="font-bold font-primary" indicator={({ isOpen }) => (isOpen ? <SubIcon/> : <AddIcon/>)}>
      <hr className="pb-2"/> <span className="text-gray-100 font-semibold">
         No, we don't require any space for the canteen opposite by traditional model. We make sure every corporate space is valuable. We make sure corporate don't feel the burden of the food service we provide them at an economical standard rate with every type of cuisine.
        </span>
      </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
}
