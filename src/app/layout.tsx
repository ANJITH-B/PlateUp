import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
// import './fonts.css' 
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { usePathname, useRouter } from "next/navigation"
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
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
      <body className={`${inter.variable} font-mono`}>
        <Navbar />
        {children}
        {/* <Footer/>  */}
      </body>
    </html>
  );
}
