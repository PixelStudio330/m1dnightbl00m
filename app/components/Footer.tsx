"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Rabbit, 
  Instagram, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <Instagram size={20} />, href: "https://instagram.com/m1dnightbloom", label: "Instagram" },
    { icon: <Github size={20} />, href: "https://github.com/PixelStudio330", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Mail size={20} />, href: "mailto:gulnaharnima@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative mt-auto border-t-8 border-[#EB9AB2]/99">
      {/* Main Rabbit Bar */}
      <div className="bg-[#8A6DAF] py-8 flex justify-around items-center overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
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

      {/* NEW: Bottom Footer Section */}
      <div className="bg-[#FDFBF4] py-12 px-6 flex flex-col items-center gap-8">
        {/* Social Links */}
        <div className="flex gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#5FA14C" }}
              className="text-[#8A6DAF] transition-colors p-3 bg-white rounded-2xl shadow-sm border border-[#C7A9D9]/20"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright & Info */}
        <div className="text-center space-y-2">
          <p className="font-serif font-black text-[#8A6DAF] text-lg">
            Made with <span className="text-[#E67E22]">♥</span> by Lyra NovaX
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5FA14C]/60">
            © {currentYear} M1DNIGHTBL00M • Digital Garden
          </p>
        </div>
      </div>
    </footer>
  );
}