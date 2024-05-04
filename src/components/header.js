"use client"
import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import TransitionLink from "../components/TransitionLink";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full flex justify-center items-center ">
      <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="max-w-screen-xl  bg-black border border-orange-200 rounded-full">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white "
          />
          <NavbarBrand>
            <Image alt="plateUp" src="/image/logo.png" href="/" height={50} width={70} />
            <div className="w-full h-1 ml-3 md:bg-orange-300 text-black">-</div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-3 text-md text-white " justify="end">
          <NavbarItem><h1 href="/about" className='font-bold' >HOME</h1></NavbarItem>
          {/* <NavbarItem><div className="w-6 h-1 bg-orange-300 text-black">-</div></NavbarItem> */}
          <NavbarItem><TransitionLink href="/services" label="SERVICES" /></NavbarItem>
          {/* <NavbarItem><div className="w-6 h-1 bg-orange-300 text-black">-</div></NavbarItem> */}
          <NavbarItem><TransitionLink href="/blogs" label="IMPACT" /></NavbarItem>
          {/* <NavbarItem><div className="w-6 h-1 bg-orange-500 text-black">-</div></NavbarItem> */}
          <NavbarItem> <TransitionLink href="/careers" label="CAREER" /></NavbarItem>
          {/* <NavbarItem><div className="w-6 h-1 bg-orange-500 text-black">-</div></NavbarItem> */}
          <NavbarItem><TransitionLink href="/contact" label="CONTACT" /></NavbarItem>
        </NavbarContent>

        <NavbarContent>
        <div className="w-full h-1 ml-3 md:bg-orange-300 text-black">-</div>
          <button className="bg-orange-600 rounded-xl w-full  py-2 px-4">Get Start</button>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <TransitionLink className="w-full mx-auto text-center font-bold text-xl py-2  hover:text-orange-500" href={item.href} size="lg" label={item.name} />
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
