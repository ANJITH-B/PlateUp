import { cn } from "@/utils/cn";
import React from "react";
import { BlogGrid, BlogGridItem } from "@/components/ui/blogs-grid";

export default function BlogGridDemo() {
  return (
    <BlogGrid className="max-w-7xl py-[15vh] mx-auto">
      {items.map((item, i) => (
        <BlogGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BlogGrid>
  );
}
const Skeleton = () => (
  <div className="flex w-full min-h-[15rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 "></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of current technology.",
    header: <Skeleton />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
];
