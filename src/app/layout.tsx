import type { Metadata } from "next";
import { Inter, Outfit, Questrial, Roboto, Ruthie } from "next/font/google";
import "./globals.css";
// import './fonts.css' 
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { usePathname, useRouter } from "next/navigation"
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable:'--font-roboto-mono'
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const questrial = Questrial({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-questrial',
});
const outfit = Outfit({
  weight: ['400','900'],
  subsets: ['latin'],
  variable:'--font-outfit'
});
const ruthie = Ruthie({
  weight: ['400'],
  subsets: ['latin'],
  variable:'--font-ruthie'
});

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
      <body className={`${inter.variable} ${roboto.variable} ${questrial.variable} ${outfit.variable} ${ruthie.variable} font-mono`}>
        <Navbar />
        {children}
        {/* <Footer/>  */}
      </body>
    </html>
  );
}
