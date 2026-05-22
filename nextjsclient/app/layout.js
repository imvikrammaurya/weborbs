
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import BackgroundGradient from "@/components/public/BackgroundGradient";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Vooklu — Build Faster. Scale Without Limits.",
  description: "Vooklu builds high-performance websites, SaaS platforms, and scalable digital products.",
  icons: {
    icon: "/images/logo2.jpg",
    shortcut: "/images/logo2.jpg",
    apple: "/images/logo2.jpg",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundGradient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
