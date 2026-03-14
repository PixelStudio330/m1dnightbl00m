"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flower2, Sparkles } from "lucide-react";

// Create a motion-enabled Link component
const MotionLink = motion(Link);

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Works', href: '/works' },
    { name: 'Story', href: '/story' },
  ];

  return (
    <header className="fixed top-6 inset-x-0 z-[100] px-6">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="max-w-5xl mx-auto bg-white/60 backdrop-blur-xl border border-[#C7A9D9]/50 rounded-[2rem] px-8 py-4 flex justify-between items-center shadow-2xl shadow-[#8A6DAF]/10"
      >
        {/* Animated Brand Identity - Now Linkable */}
        <Link href="/">
          <motion.div 
            whileHover="hover"
            className="flex items-center gap-2 cursor-pointer relative group"
          >
            <motion.div
              variants={{ hover: { rotate: 180, scale: 1.2 } }}
              className="text-[#8A6DAF]"
            >
              <Flower2 size={28} />
            </motion.div>
            
            <h1 className="text-xl font-black tracking-tighter flex items-center">
              <span className="text-[#8A6DAF]">M1D</span>
              <span className="text-[#5FA14C]">NIGHT</span>
              <motion.span 
                variants={{ hover: { y: -5, color: "#E67E22" } }}
                className="text-[#C7A9D9] italic"
              >
                BL00M
              </motion.span>
            </h1>

            <motion.div 
              className="absolute -top-4 -right-2 text-[#E67E22] opacity-0 group-hover:opacity-100"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity }}
            >
              <Sparkles size={16} />
            </motion.div>
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <MotionLink
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.1, color: '#5FA14C' }}
              className="text-sm font-bold uppercase tracking-widest text-[#8A6DAF] transition-colors"
            >
              {item.name}
            </MotionLink>
          ))}
          
          {/* Action Button */}
          <MotionLink
            href="/connect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5FA14C] text-white px-5 py-2 rounded-full text-xs font-black shadow-lg shadow-[#5FA14C]/30 hover:shadow-[#E67E22]/40 transition-all"
          >
            LET&apos;S CHAT
          </MotionLink>
        </div>
      </motion.nav>
    </header>
  );
}