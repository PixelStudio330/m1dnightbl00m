"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  BookOpen, Palette, Code2, Sparkles, Heart, Wind, Coffee, Gamepad2, CloudSun 
} from "lucide-react";
import Image from "next/image";

const FadeInText = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

export default function StoryPage() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const y1 = useTransform(smoothProgress, [0, 1], [0, -500]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 300]);
  const rotateOrn = useTransform(smoothProgress, [0, 1], [0, 45]);
  
  // FIXED: Moved this out of the JSX map to keep hook order consistent
  const imageY = useTransform(smoothProgress, [0, 1], [0, -100]);

  useEffect(() => setMounted(true), []);

  const technicalSkills = [
    { category: "Frameworks", items: ["Next.js", "React", "TypeScript"], icon: <Code2 className="text-[#8A6DAF]" /> },
    { category: "Styling", items: ["Tailwind CSS", "Framer Motion", "Lucide React"], icon: <Sparkles className="text-[#E67E22]" /> },
    { category: "Design", items: ["Figma", "DaisyUI", "UI Architecture"], icon: <Palette className="text-[#5FA14C]" /> },
    { category: "Hosting", items: ["Vercel", "Netlify", "Github"], icon: <Gamepad2 className="text-[#91eeff]" /> },
  ];

  // FIXED: Early return goes AFTER all Hooks are declared
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#FDFBF4] selection:bg-[#8A6DAF] selection:text-white overflow-hidden">
      
      {/* Background Ornaments */}
      <motion.div style={{ y: y1, rotate: rotateOrn }} className="fixed top-20 right-[-10%] w-[500px] h-[500px] bg-[#C7A9D9]/20 blur-[120px] rounded-full pointer-events-none" />
      <motion.div style={{ y: y2, rotate: -rotateOrn }} className="fixed bottom-10 left-[-10%] w-[400px] h-[400px] bg-[#5FA14C]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-30 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center gap-2 bg-white border border-[#C7A9D9]/30 shadow-xl shadow-[#8A6DAF]/10 text-[#8A6DAF] px-6 py-2 rounded-full text-xs font-black tracking-[0.2em] mb-12 uppercase"
        >
          <BookOpen size={14} className="animate-pulse" />
          <span>The Story of Nahar</span>
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl font-serif font-black text-[#5FA14C] leading-[0.9] mb-12">
          <FadeInText>Where Code</FadeInText> <br /> 
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="italic text-[#8A6DAF] inline-block mt-4"
          >
            Meets the Canvas
          </motion.span>
        </h1>

        <div className="text-2xl text-[#5FA14C]/70 max-w-3xl mx-auto leading-relaxed font-medium">
          { "Building digital spaces that feel as warm as a watercolor painting and as sharp as a modern application.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.05 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div 
              animate={{ width: [0, 80, 40] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="h-3 bg-[#E67E22] rounded-full" 
            />
            <h2 className="text-5xl font-serif font-black text-[#8A6DAF] leading-tight">
              A Frontend Specialist <br/> <span className="text-[#5FA14C]">with a Soul.</span>
            </h2>
            <div className="space-y-6 text-xl text-[#5FA14C]/80 leading-relaxed font-medium">
              <p>
                I don’t just write code. I <motion.span whileHover={{ color: "#E67E22" }} className="underline decoration-wavy cursor-help">curate experiences</motion.span>. As a professional developer, I’ve mastered the art of React and Next.js, but my heart beats for the small details.
              </p>
              <p>
                Whether I’m developing high-performance corporate templates or folk-inspired personal brands, my goal is the same: <strong>making the web feel human again.</strong>
              </p>
            </div>
          </motion.div>

          {/* FIXED: Using imageY variable here instead of calling useTransform directly */}
          <motion.div 
            style={{ y: imageY }}
            className="relative group cursor-none"
          >
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="aspect-[4/5] bg-[#C7A9D9]/20 rounded-[4rem] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(138,109,175,0.3)] rotate-6 relative z-10 transition-all duration-700"
            >
                <Image src="/id.png" alt="About Nyra" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8A6DAF]/40 to-transparent mix-blend-overlay" />
            </motion.div>
            <motion.div 
              animate={{ rotate: [-6, -8, -6], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute inset-0 bg-[#5FA14C]/10 rounded-[4rem] -rotate-6 -z-10" 
            />
          </motion.div>
        </div>
      </section>

      {/* Greenhouse Skills */}
      <section className="py-32 bg-[#5FA14C]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-serif font-black text-[#5FA14C]">The Greenhouse</h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "200px" }} className="h-1 bg-[#8A6DAF] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15, rotate: i % 2 === 0 ? 1 : -1 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-xl group"
              >
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }} className="mb-6 inline-block p-4 bg-[#FDFBF4] rounded-2xl shadow-inner">
                  {skill.icon}
                </motion.div>
                <h3 className="text-2xl font-black text-[#5FA14C] mb-6">{skill.category}</h3>
                <ul className="space-y-4">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#8A6DAF] font-bold text-sm group-hover:translate-x-2 transition-transform">
                      <Sparkles size={14} className="text-[#E67E22]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LORE CARDS --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { title: "Artist", desc: "Capturing rural landscapes on paper.", icon: <Palette /> },
             { title: "Fiverr Pro", desc: "Self-employed developer.", icon: <Gamepad2 /> },
             { title: "Lore Builder", desc: "Writing original character scripts.", icon: <CloudSun /> },
             { title: "FullStack Path", desc: "Learning backend for total control.", icon: <Sparkles /> }
           ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ scale: 1.02 }}
               className="flex gap-6 p-8 bg-white border-2 border-dashed border-[#8A6DAF]/20 rounded-[3rem] items-center"
             >
                <div className="p-4 bg-[#8A6DAF]/10 rounded-2xl text-[#8A6DAF]">{item.icon}</div>
                <div>
                  <h4 className="font-black text-[#5FA14C] text-xl">{item.title}</h4>
                  <p className="text-[#5FA14C]/70 font-medium">{item.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- PEAK CTA --- */}
      <section className="pb-40 px-6">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          className="bg-[#8A6DAF] relative overflow-hidden p-20 rounded-[5rem] max-w-6xl mx-auto text-center shadow-[0_50px_100px_-20px_rgba(138,109,175,0.5)]"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-64 h-64 border-[20px] border-white/10 rounded-full" 
          />
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-10 relative z-10 leading-tight">
            Ready to plant something <br /> beautiful together?
          </h2>
          <motion.button 
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#5FA14C] text-white px-14 py-6 rounded-full font-black text-xl shadow-2xl relative z-10"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}