import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './fonts.css' 
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { usePathname, useRouter } from "next/navigation"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plateup",
  description: "Official Website for Plateup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer/>  */}
      </body>
    </html>
  );
}
