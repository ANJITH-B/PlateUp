"use client"
import React, { useEffect } from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import TransitionLink from "../components/TransitionLink";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations";
export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const router = useRouter()
   const pathname = usePathname()
   const menuItems = [
      { name: 'HOME', href: '/' },
      { name: 'ABOUT', href: '/about' },
      { name: 'SERVICES', href: '/services' },
      { name: 'IMPACT', href: '/impact' },
      { name: 'CAREER', href: '/careers' },
      { name: 'CONTACT', href: '/contact' },
   ];

   const handleClick = () => {
      if (pathname !== '/') {
         animatePageOut('/', router)
      }
   }
   const audio = new Audio('./bg.mp3') 
   const handlePlay = () =>{
      console.log('handle playlll');
      if(audio.paused){
         audio.play()
      }else{
         audio.pause()
      }   
   }
   useEffect(()=>handlePlay(),[])
   addEventListener("canplay", (event) => {

      audio.play()
   });

oncanplay = (event) => {
   audio.play()
};

   const path = menuItems.findIndex(item => item.href === pathname)
   return (
      <div className="w-full flex justify-center items-center ">
         <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="max-w-screen-xl  bg-black border border-orange-200 rounded-full">
            <NavbarContent className="w-full">
               <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  className="sm:hidden text-white "
               />
               <NavbarBrand onClick={handleClick}>

                  <Image alt="plateUp" src="/image/logo.png" href="/" height={50} width={70} />

                  <div className="w-full h-1 ml-3 md:bg-orange-300 text-black">-</div>
               </NavbarBrand>

            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-1 text-md text-white " justify="end">
               {menuItems.map((item, index) => {
                  const className = `w-6 h-1 text-black ${index <= path ? "bg-orange-300" : "bg-black"}`
                  if (index) return (
                     <>
                        {index !== 1 && <NavbarItem><div className={className}>-</div></NavbarItem>}
                        <NavbarItem><TransitionLink href={item.href} label={item.name} /></NavbarItem>
                     </>
                  )
               })}
               {/* <NavbarItem><TransitionLink href="/about" label="ABOUT" /></NavbarItem>
          <NavbarItem><div className="w-6 h-1 bg-orange-300 text-black">-</div></NavbarItem>
          <NavbarItem><TransitionLink href="/services" label="SERVICES" /></NavbarItem>
          <NavbarItem><div className="w-6 h-1 bg-orange-300 text-black">-</div></NavbarItem>
          <NavbarItem><TransitionLink href="/blogs" label="IMPACT" /></NavbarItem>
          <NavbarItem><div className="w-6 h-1 bg-orange-500 text-black">-</div></NavbarItem>
          <NavbarItem> <TransitionLink href="/careers" label="CAREER" /></NavbarItem>
          <NavbarItem><div className="w-6 h-1 bg-orange-500 text-black">-</div></NavbarItem>
          <NavbarItem><TransitionLink href="/contact" label="CONTACT" /></NavbarItem> */}
            </NavbarContent>

            <NavbarContent className="w-full">

               <div className=" h-1 ml-3 md:bg-orange-300 text-black w-full">-</div>
               <button className="bg-orange-600 rounded-xl text-xs w-40 h-8 hidden sm:block py-2 px-4">Get<span className="text-orange-600">_</span>Started</button>
            {/* <div className="rounded-3xl overflow-hidden border "><div className="w-20"></div> </div> */}
            {!audio?.paused ? <button onClick={handlePlay}>play</button> : <Image className="" src={'/gif/audio.gif'} width={40} height={40} onClick={handlePlay}/>
            }
            </NavbarContent>
            <NavbarMenu>
               {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                     <TransitionLink className="w-full mx-auto text-center font-bold text-xl py-2   hover:text-orange-500" href={item.href} size="lg" label={item.name} />
                  </NavbarMenuItem>
               ))}
         
            </NavbarMenu>
         </Navbar>
      </div>
   );
}
