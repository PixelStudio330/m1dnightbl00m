import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll"; // Import the new component

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "M1DNIGHT BL00M | Nahar",
  description: "Frontend Developer & Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Header />
            
            {/* Main content grows to push footer down */}
            <main className="flex-grow">
              {children}
            </main>

            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}