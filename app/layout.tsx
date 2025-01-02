import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Space_Grotesk({
  weight:['300', '400', '500', '600', '700'],
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Kebbi Innovation and Technology Hub",
  description: "Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
