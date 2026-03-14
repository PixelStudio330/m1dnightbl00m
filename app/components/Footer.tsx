"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rabbit } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t-8 border-[#EB9AB2]/99">
      {/* Main Rabbit Bar */}
      <div className="bg-[#8A6DAF] py-8 flex justify-around items-center overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.2 }}
            className="text-white"
          >
            <Rabbit size={42} strokeWidth={1.5} fill="currentColor" />
          </motion.div>
        ))}
      </div>
      
      {/* Secondary Pattern Layer */}
      <div className="bg-[#5FA14C] h-3 w-full flex">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className={`h-full flex-1 ${i % 2 === 0 ? 'bg-[#F6E36B]' : 'bg-[#5FA14C]'}`} 
          />
        ))}
      </div>
    </footer>
  );
}