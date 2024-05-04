"use client";
import React from "react";

// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];
export default function Services() {
  return (<>
    <div className="relative flex gap-10 flex-col">
      <section className="w-[95%] p-3 mx-auto min-h-[90vh] sticky flex flex-wrap z-10 top-[12vh] rounded-xl overflow-x-hidden backdrop-blur-sm">
          <div className="w-2/5 min-w-[22rem] min-h-full mx-auto my-auto ">
            <img src="https://th.bing.com/th/id/R.b745a932221d26a2ea27b0cb7ef1b737?rik=dhKFU9KbPlXhFw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2ff%2f8%2f942947-download-free-dinner-wallpapers-1920x1080.jpg&ehk=VQNTeUQGyTil3W8tg5J%2bzxzyluax2xbR3n4ANN99xsk%3d&risl=&pid=ImgRaw&r=0" alt="Plateup" className=" h-full w-full rounded-xl" />
          </div>
          <div className="w-3/5 min-w-[22rem] min-h-full mx-auto my-auto">
            <h1 className="text-center font-black text-3xl py-2 text-white">
              Dine In
            </h1>
            <p className="font-semibold p-4 text-white"> 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quo laudantium repellat tempore ex! Quibusdam inventore ex error. Id asperiores dolorem consequatur architecto non officia voluptatum illo veritatis inventore unde.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur, aperiam rerum aliquam facilis et cumque odit cum repudiandae placeat iusto quos id a inventore laboriosam sint perspiciatis quisquam eaque?
            </p>
          </div>
      </section>
      <section className="w-[95%] p-3 mx-auto min-h-[90vh] sticky flex flex-wrap z-10 top-[12vh] rounded-xl overflow-x-hidden backdrop-blur-md">
          <div className="w-2/5 min-w-[22rem] min-h-full mx-auto my-auto ">
            <img src="https://wallpaperaccess.com/full/1624848.jpg" alt="Plateup" className=" h-full w-full rounded-xl" />
          </div>
          <div className="w-3/5 min-w-[22rem] min-h-full mx-auto my-auto ">
          <h1 className="text-center font-black text-3xl py-2 text-white">
              Grocery
            </h1>
            <p className="font-semibold p-4 text-white"> 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quo laudantium repellat tempore ex! Quibusdam inventore ex error. Id asperiores dolorem consequatur architecto non officia voluptatum illo veritatis inventore unde.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur, aperiam rerum aliquam facilis et cumque odit cum repudiandae placeat iusto quos id a inventore laboriosam sint perspiciatis quisquam eaque?
            </p>
          </div>
      </section>
      <section className="w-[95%] p-3 mx-auto min-h-[90vh] sticky flex flex-wrap z-10 top-[12vh] rounded-xl overflow-x-hidden backdrop-blur-md">
          <div className="w-2/5 min-w-[22rem] min-h-full mx-auto my-auto ">
            <img src="https://th.bing.com/th/id/R.3a7acb86025af03e21aa5b6edf063598?rik=R3QVn%2b9ZK4BkXg&riu=http%3a%2f%2fwww.lynchburgparksandrec.com%2fwp-content%2fuploads%2f2016%2f01%2fcamaje-cooking-7.jpg&ehk=UG6FEWj5%2fmzTOaxUe2XLcoSnGHFaBokH%2fm9OzB6TG2s%3d&risl=&pid=ImgRaw&r=0" alt="Plateup" className=" h-full w-full rounded-xl" />
          </div>
          <div className="w-3/5 min-w-[22rem] min-h-full mx-auto my-auto">
          <h1 className="text-center font-black text-3xl py-2 text-white">
              Food
            </h1>
            <p className="font-semibold p-4 text-white"> 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quo laudantium repellat tempore ex! Quibusdam inventore ex error. Id asperiores dolorem consequatur architecto non officia voluptatum illo veritatis inventore unde.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur, aperiam rerum aliquam facilis et cumque odit cum repudiandae placeat iusto quos id a inventore laboriosam sint perspiciatis quisquam eaque?
            </p>
          </div>
      </section>
    </div>
    <img src="https://wallpapercave.com/wp/wp4906049.jpg" alt="plateup" className="h-screen w-screen overflow-hidden fixed top-0" />
  </>
  );
}
