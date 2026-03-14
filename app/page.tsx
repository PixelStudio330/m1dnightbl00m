"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Flower2, Star, Zap, Sparkles, MousePointer2, Code2, Palette, Globe } from "lucide-react";

export default function HomePage() {
  // 1. Fix Hydration: Prevent rendering until mounted if needed, 
  // though fixing the text nodes usually solves this.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Magnetic Button Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.2);
    mouseY.set((e.clientY - centerY) * 0.2);
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

  // Optional: Return null until mounted to avoid any dynamic mismatch
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#FDFBF4] relative overflow-hidden selection:bg-[#8A6DAF] selection:text-white flex flex-col">
      
      {/* Animated Grain/Noise Overlay */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#C7A9D9]/30 blur-[140px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-[#E67E22]/20 blur-[120px] rounded-full"
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
                transition: { staggerChildren: 0.2, delayChildren: 0.3 }
              }
            }}
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="inline-flex items-center gap-2 bg-[#5FA14C] text-[#FDFBF4] px-5 py-2 rounded-full text-[10px] tracking-[0.2em] font-black mb-8 shadow-xl shadow-[#5FA14C]/20 border border-white/20"
            >
              <Zap size={12} className="fill-[#E67E22] text-[#E67E22] animate-pulse" />
              <span>DESIGNED TO BLOOM</span>
            </motion.div>
            
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-7xl md:text-[10rem] font-serif font-black leading-[0.85] mb-10 text-[#5FA14C]"
            >
              Salam! <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#8A6DAF] via-[#C7A9D9] to-[#8A6DAF] bg-[length:200%_auto] animate-gradient-slow">
                I&apos;m Nahar.
                <motion.span 
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -right-12 top-0 text-[#E67E22] opacity-50 hidden md:block"
                >
                  <Sparkles size={48} />
                </motion.span>
              </span>
            </motion.h2>
            
            <motion.p 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-2xl text-[#5FA14C]/80 font-medium max-w-md leading-relaxed mb-12 border-l-[6px] border-[#E67E22] pl-8 italic"
            >
              <span>Crafting </span>
              <span className="text-[#8A6DAF] font-black not-italic">pixel-perfect</span>
              <span> digital gardens for dreamy ideas.</span>
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-6"
            >
              <motion.button 
                onMouseMove={handleMouseMove}
                onMouseLeave={resetMouse}
                style={{ x: dx, y: dy }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-[#8A6DAF] text-white px-12 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-[#8A6DAF]/40 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Projects <Flower2 size={22} className="group-hover:rotate-90 transition-transform duration-500" />
                </span>
                <motion.div className="absolute inset-0 bg-[#5FA14C] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex-1 order-1 md:order-2 relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
            className="relative w-full aspect-square max-w-[550px]"
          >
            <motion.div 
              animate={{ 
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 70%"] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 bg-[#C7A9D9]/20 blur-2xl scale-110"
            />

            <div 
              className="w-full h-full bg-[#8A6DAF] shadow-[0_40px_100px_-20px_rgba(138,109,175,0.5)] relative z-10 overflow-hidden border-[12px] border-white/30"
              style={{ clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)" }}
            >
              <Image 
                src="/hero.png" 
                alt="Nahar" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-1000" 
                priority 
              />
            </div>

            <motion.div 
              animate={{ y: [0, -30, 0], rotate: [12, -12, 12] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -top-10 -left-10 z-20"
            >
              <div className="bg-[#fff175] p-5 rounded-[2rem] shadow-2xl border-4 border-white flex items-center justify-center">
                <Star className="text-[#5FA14C] fill-[#5FA14C]" size={32} />
              </div>
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -bottom-8 -right-8 z-20"
            >
              <div className="bg-white p-5 rounded-full shadow-2xl flex items-center justify-center">
                <MousePointer2 className="text-[#8A6DAF] fill-[#8A6DAF]/10" size={32} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-5xl font-serif font-black text-[#8A6DAF] flex items-center gap-4">
              <Palette size={40} className="text-[#5FA14C]" /> 
              <span>The Creative</span>
            </h3>
            <div className="space-y-6 text-xl text-[#5FA14C] leading-relaxed font-medium">
              <p>
                <span>I am a </span>
                <span className="text-[#8A6DAF] font-bold">Frontend Developer</span>
                <span> who lives at the intersection of pixel-perfection and high-performance code.</span>
              </p>
              <p className="bg-[#E67E22]/20 p-6 rounded-3xl border-2 border-[#E67E22]/30 border-dashed">
                <span>My superpower is versatility. I am an expert in both </span>
                <span className="text-[#8A6DAF] italic underline decoration-wavy">artsy, folk-inspired aesthetics</span>
                <span> and crisp, </span>
                <span className="font-bold">corporate design systems</span>
                <span>. Whether it’s a dreamy personal brand or a high-converting agency site, I build interfaces that feel human.</span>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border-2 border-[#C7A9D9]/30 shadow-2xl shadow-[#8A6DAF]/5"
          >
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-3xl font-serif font-black text-[#5FA14C] flex items-center gap-3">
                <Code2 size={28} /> 
                <span>What I Work With</span>
              </h3>
              <Globe className="text-[#C7A9D9] animate-spin-slow" size={24} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.8)" }}
                  className="flex items-center justify-between p-4 rounded-2xl border border-[#C7A9D9]/20 bg-white/30 group transition-all"
                >
                  <span className="font-black text-[#5FA14C] group-hover:text-[#8A6DAF] transition-colors">
                    {skill.name}
                  </span>
                  <span 
                    className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mode Toggle */}
      <motion.div 
        drag 
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} 
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 left-10 z-50 group"
      >
        <div className="bg-white/80 backdrop-blur-md p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#C7A9D9] flex items-center gap-4 cursor-grab active:cursor-grabbing">
          <div className="relative">
            <div className="w-4 h-4 bg-[#5FA14C] rounded-full" />
            <div className="absolute inset-0 w-4 h-4 bg-[#5FA14C] rounded-full animate-ping" />
          </div>
          <span className="text-xs font-black tracking-widest text-[#8A6DAF]">M1DNIGHT_BL00M MODE</span>
        </div>
      </motion.div>
    </main>
  );
}