
import Image from "next/image";
import React from "react";
import { BlogGrid, BlogGridItem } from "@/components/ui/blogs-grid";
import blog4 from "./assets/Employees.jpg";
import blog5 from "./assets/Corporation.jpg";
import {AuroraBackground} from "@/components/ui/aurora-background";
export default function Page() {
  return (
      <div className="w-full min-h-max h-full" style={{background:`url("./universal.png")`,backgroundRepeat:"repeat-y",backgroundSize:"100%"}}>
      <BlogGrid className="max-w-7xl py-[15vh] mx-auto z-40">
        {items.map((item, i) => (
          <BlogGridItem
          key={i}
          title={item.title}
          link={item.link}
          header={item.header}
          className={i === 0 || i === 0 ? "md:col-span-2  backdrop-blur-2xl" : " backdrop-blur-2xl"}
          />
        ))}
      </BlogGrid>
      </div>
  );
}
const items = [
  {
    title: "Plateup Raises Significant Pre-Seed Funding To Transform Corporate Dining",
    header: <img className="flex w-full h-[15rem] rounded-xl" src="https://pbs.twimg.com/profile_banners/1650193823086292993/1687339113/1080x360" alt="plateup" />,
    link: "https://www.outlookindia.com/business-spotlight/plateup-raises-significant-pre-seed-funding-to-transform-corporate-dining"
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
