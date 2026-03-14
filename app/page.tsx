"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Flower2, Star, Zap, Sparkles, MousePointer2, Code2, Palette, Globe } from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Magnetic Button Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.3); // Increased pull for a "stickier" feel
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const skills = [
    { name: "Next.js", level: "Master", color: "#8A6DAF" },
    { name: "TypeScript", level: "Master", color: "#8A6DAF" },
    { name: "Tailwind CSS", level: "Master", color: "#8A6DAF" },
    { name: "Framer Motion", level: "Master", color: "#8A6DAF" },
    { name: "Figma", level: "Master", color: "#8A6DAF" },
    { name: "Vercel", level: "Master", color: "#8A6DAF" },
    { name: "GitHub", level: "Pro", color: "#E67E22" },
    { name: "Lucide React", level: "Pro", color: "#E67E22" },
    { name: "React", level: "Pro", color: "#E67E22" },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#FDFBF4] relative overflow-hidden selection:bg-[#8A6DAF] selection:text-white flex flex-col font-sans">
      
      {/* Animated Grain/Noise Overlay */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Enhanced Dynamic Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-[#C7A9D9]/20 blur-[140px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#E67E22]/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-44 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 order-2 md:order-1">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
              }
            }}
          >
            {/* Tagline */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 bg-[#5FA14C] text-[#FDFBF4] px-6 py-2 rounded-full text-[10px] tracking-[0.3em] font-black mb-8 shadow-xl shadow-[#5FA14C]/20 border border-white/20"
            >
              <Zap size={12} className="fill-[#F6E36B] text-[#F6E36B] animate-pulse" />
              <span>DESIGNED TO BLOOM</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-7xl md:text-[9rem] font-serif font-black leading-[0.85] mb-10 text-[#5FA14C] tracking-tighter"
            >
              Salam! <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#8A6DAF] via-[#C7A9D9] to-[#8A6DAF] bg-[length:200%_auto] animate-gradient-slow pb-2">
                I&apos;m Nahar.
                <motion.span 
                  animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -right-16 top-0 text-[#E67E22] hidden md:block"
                >
                  
                </motion.span>
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="text-2xl text-[#5FA14C]/90 font-medium max-w-lg leading-relaxed mb-12 border-l-[6px] border-[#E67E22] pl-8 italic"
            >
              <span>Crafting </span>
              <span className="text-[#8A6DAF] font-black not-italic decoration-[#C7A9D9] decoration-4 underline-offset-4">pixel-perfect</span>
              <span> digital gardens where code meets creative whimsy.</span>
            </motion.p>
            
            {/* CTA Button */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link href="/work">
                <motion.button 
                  onMouseMove={handleMouseMove}
                  onMouseLeave={resetMouse}
                  style={{ x: dx, y: dy }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-[#8A6DAF] text-white px-14 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl shadow-[#8A6DAF]/30 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    View My Masterpieces 
                    <Flower2 size={24} className="group-hover:rotate-180 transition-transform duration-700" />
                  </span>
                  {/* Liquid fill effect */}
                  <motion.div className="absolute inset-0 bg-[#5FA14C] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <div className="flex-1 order-1 md:order-2 relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.4 }}
            className="relative w-full aspect-square max-w-[550px]"
          >
            {/* Blobbing Background */}
            <motion.div 
              animate={{ 
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 70%"] 
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-tr from-[#8A6DAF]/30 to-[#5FA14C]/20 blur-3xl scale-110"
            />

            {/* Custom Masked Image Container */}
            <div 
              className="w-full h-full bg-[#8A6DAF] shadow-[0_40px_100px_-20px_rgba(138,109,175,0.4)] relative z-10 overflow-hidden border-[12px] border-white/50 group"
              style={{ clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)" }}
            >
              <Image 
                src="/hero.png" 
                alt="Nahar - Portfolio Hero" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8A6DAF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Assets */}
            <motion.div 
              animate={{ y: [0, -25, 0], rotate: [15, -10, 15] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -top-12 -left-12 z-20"
            >
              <div className="bg-[#fff175] p-6 rounded-[2.5rem] shadow-2xl border-4 border-white transform hover:scale-110 transition-transform cursor-pointer">
                <Star className="text-[#5FA14C] fill-[#5FA14C]" size={36} />
              </div>
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.15, 1], x: [0, 25, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -bottom-10 -right-10 z-20"
            >
              <div className="bg-white p-6 rounded-full shadow-2xl flex items-center justify-center border-4 border-[#C7A9D9]/20">
                <MousePointer2 className="text-[#8A6DAF] fill-[#8A6DAF]/20" size={36} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h3 className="text-6xl font-serif font-black text-[#8A6DAF] flex items-center gap-5">
              <Palette size={48} className="text-[#5FA14C]" /> 
              <span>The Creative</span>
            </h3>
            <div className="space-y-8 text-2xl text-[#5FA14C] leading-relaxed font-medium">
              <p>
                <span>I am a </span>
                <span className="text-[#8A6DAF] font-black underline decoration-[#E67E22] decoration-double underline-offset-8">Frontend Developer</span>
                <span> who bridges the gap between raw artistic vision and high-performance system logic.</span>
              </p>
              <div className="bg-[#E67E22]/10 p-10 rounded-[3rem] border-2 border-[#E67E22]/30 border-dashed relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <Sparkles size={100} />
                </div>
                <p className="relative z-10">
                  <span>My superpower is versatility. I specialize in </span>
                  <span className="text-[#8A6DAF] italic font-black">folk-inspired, cozy aesthetics</span>
                  <span> and </span>
                  <span className="font-black text-[#5FA14C]">robust corporate design systems</span>
                  <span>. Every pixel is intentional; every interaction is a story.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] border-2 border-[#C7A9D9]/30 shadow-2xl shadow-[#8A6DAF]/10"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-4xl font-serif font-black text-[#5FA14C] flex items-center gap-4">
                <Code2 size={32} /> 
                <span>Tech Garden</span>
              </h3>
              <Globe className="text-[#C7A9D9] animate-spin-slow" size={32} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255,255,255,0.9)",
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)"
                  }}
                  className="flex items-center justify-between p-5 rounded-2xl border-2 border-[#C7A9D9]/10 bg-white/50 group transition-all"
                >
                  <span className="font-black text-[#5FA14C] group-hover:text-[#8A6DAF] transition-colors text-lg">
                    {skill.name}
                  </span>
                  <span 
                    className="text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-sm"
                    style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                  >
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Status / Mode Toggle */}
      <motion.div 
        drag 
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} 
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-12 left-10 z-50 group"
      >
        <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-2 border-[#C7A9D9]/40 flex items-center gap-4 cursor-grab active:cursor-grabbing">
          <div className="relative">
            <div className="w-3.5 h-3.5 bg-[#5FA14C] rounded-full" />
            <div className="absolute inset-0 w-3.5 h-3.5 bg-[#5FA14C] rounded-full animate-ping" />
          </div>
          <span className="text-[10px] font-black tracking-[0.2em] text-[#8A6DAF] uppercase">
            System: Midnight_Bloom Active
          </span>
        </div>
      </motion.div>
    </main>
  );
}