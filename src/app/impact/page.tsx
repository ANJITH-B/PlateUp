
import Image from "next/image";
import React from "react";
import { BlogGrid, BlogGridItem } from "@/components/ui/blogs-grid";
import blog1 from "./assets/Plateup.jpg";
import blog1_1 from "./assets/plateup-mobile.jpg";
import blog4 from "./assets/Employees.jpg";
import blog5 from "./assets/Corporation.jpg";
import {AuroraBackground} from "@/components/ui/aurora-background";
export default function Page() {
  return (
    <AuroraBackground> 
      <div className="w-full min-h-max h-full">
      <BlogGrid className="max-w-7xl py-[15vh] mx-auto z-40">
        {items.map((item, i) => (
          <BlogGridItem
          key={i}
          title={item.title}
          link={item.link}
          header={item.header}
          className={`${(i === 0 ? "md:col-span-2  backdrop-blur-2xl md:block hidden" : (i === 1  ? "md:hidden backdrop-blur-2xl" : "block backdrop-blur-2xl"))} 
          `}
          />
        ))}
      </BlogGrid>
      </div>
    </AuroraBackground>
  );
}
const items = [
  {
    title: "In a groundbreaking move to revolutionize the corporate dining experience, Plateup, a B2B food stack technology platform, has announced an impressive pre-seed round at the recent TTC Conference in Dubai.",
    header:  <Image className="flex w-full h-[15rem] rounded-xl" src={blog1} alt="plateup" />,
    link: "https://www.outlookindia.com/hub4business/plateup-raises-significant-pre-seed-funding-to-transform-corporate-dining"
  },
  {
    title: "In a groundbreaking move to revolutionize the corporate dining experience, Plateup, a B2B food stack technology platform, has announced an impressive pre-seed round at the recent TTC Conference in Dubai.",
    header:  <Image className="flex w-full h-[15rem] rounded-xl" src={blog1_1} alt="plateup" />,
    link: "https://www.outlookindia.com/hub4business/plateup-raises-significant-pre-seed-funding-to-transform-corporate-dining"
  },
  {
    title: "Plateup Unveils Revolutionary Food Allowance Cards to Transform Corporate Dining Landscape",
    header: <img className="flex w-full h-[15rem] rounded-xl" src="https://images.mid-day.com/images/images/2024/mar/ttc0703.1_e.jpg" alt="plateup" />,
    link: "https://www.mid-day.com/brand-media/article/plateup-unveils-revolutionary-food-allowance-cards-to-transform-corporate-dining-23338778  "
  },
  {
    title: "Mumbai Startup Wows Investors at TTC Conference in Dubai",
    header: <img className="flex w-full h-[15rem] rounded-xl" src="https://img.republicworld.com/tr:w-1280,q-75,f-auto/rimages/whatsappimage2024-03-08at11.56.18-170988485045216_9.webp" alt="plateup" />,
    link: "https://www.republicworld.com/initiatives/mumbai-startup-wows-investors-at-ttc-conference-in-dubai/"
  },
  {
    title: "Alleviating the Burden of Pre-Salary Expenses for Indian Employees",
    header: <Image className="flex w-full h-[15rem] rounded-xl" src={blog4} alt="plateup" />,
    link: "https://plateup-final.vercel.app/impact"
  },
  {
    title: "Plateup Revolutionizes Corporate Dining Spaces, Saving Valuable Space and Money",
    header: <Image className="flex w-full h-[15rem] rounded-xl" src={blog5} alt="plateup" />,
    link: "https://plateup-final.vercel.app/impact"
  },
];
