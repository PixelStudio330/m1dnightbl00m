"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Code2, MousePointer2, Star } from "lucide-react";

const projects = [
  {
    title: "Chirp Heavens",
    genre: "High-End Avian Boutique",
    description: "Where premium pet services meet glassmorphic elegance. A sophisticated template designed for the modern sanctuary.",
    liveUrl: "https://chirp-heaven.vercel.app/", 
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    features: [
      "Live Order Tracking & History",
      "Persistent Smart-Cart Logic",
      "Interactive Glassmorphic Components",
      "Curated Pet Gallery Displays"
    ],
    color: "#5FA14C"
  },
  {
    title: "The Dum Pot",
    genre: "Premium Culinary Storefront",
    description: "A slow-cooked digital experience. Bridging the gap between traditional heritage and high-performance e-commerce logic.",
    liveUrl: "https://the-dum-pot.vercel.app/", 
    tech: ["React.js", "TypeScript", "Vercel", "Tailwind CSS"],
    features: [
      "Aesthetic Menu Architecture",
      "Fluid Motion-First Interface",
      "Seamless Local Cart Management",
      "High-Performance Response Logic"
    ],
    color: "#8A6DAF"
  },
  {
    title: "Pixel Studio",
    genre: "Artsy Digital HQ",
    description: "The intersection of raw art and rigid code. A full-stack agency template featuring immersive UI and robust backend utility.",
    liveUrl: "https://pixel-studio-opal.vercel.app/", 
    tech: ["React.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    features: [
      "Signature Immersive Animations",
      "Secure Authentication Systems",
      "Direct-to-Inbox SMTP Integration",
      "Adaptive Multi-Device Layouts"
    ],
    color: "#8A6DAF"
  },
  {
    title: "Honey Haze",
    genre: "Aesthetic Gastronomy",
    description: "A dreamy, visually-driven food experience. Redefining food delivery with playful AI interactions and a golden-hour aesthetic.",
    liveUrl: "https://honey-haze.vercel.app/", 
    tech: ["React.js", "TypeScript", "Figma", "Framer Motion"],
    features: [
      "AI-Powered Interactive Messenger",
      "Real-Time Delivery Dynamics",
      "Vibrant Storybook UI Design",
      "Micro-Interaction Driven Flow"
    ],
    color: "#8A6DAF"
  },
  {
    title: "Pawsky Wawsky",
    genre: "Cozy Sanctuary Hub",
    description: "Emotional storytelling through design. A pet adoption template focused on warmth, cozy visuals, and seamless user journeys.",
    liveUrl: "https://pawsky-wawsky.vercel.app/", 
    tech: ["Github", "TypeScript", "Next.js", "Tailwind CSS"],
    features: [
      "Character-Driven Pet Profiles",
      "Artistic Lead Capture Forms",
      "Cottagecore Visual Language",
      "Optimized Asset Performance"
    ],
    color: "#8A6DAF"
  }
];

// Floating Elements Component for extra "Aesthetic"
const FloatingDecor = ({ color }: { color: string }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-10 -right-10 opacity-20 pointer-events-none"
  >
    <Star size={80} color={color} fill={color} />
  </motion.div>
);

export default function WorksPage() {
  return (
    <main className="relative min-h-screen bg-[#FDFBF4] pt-32 pb-40 px-6 overflow-x-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')] z-50" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 text-center"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-8xl font-serif font-black text-[#8A6DAF] mb-6 tracking-tight"
          >
            Nahar's <span className="text-[#5FA14C] italic">Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#E67E22] font-black uppercase tracking-[0.3em] text-xs md:text-sm"
          >
            ✦ Curating digital experiences from corporate to creative ✦
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-64">
          {projects.map((project, index) => (
            <motion.section 
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center relative`}
            >
              <FloatingDecor color={project.color} />

              {/* Live Preview "Monitor" */}
              <div className="w-full lg:w-3/5 group relative">
                {/* Glow Effect */}
                <div 
                  className="absolute -inset-6 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                  style={{ backgroundColor: project.color }}
                />
                
                {/* Main Frame */}
                <motion.div 
                  whileHover={{ rotate: index % 2 === 0 ? -1 : 1, scale: 1.02 }}
                  className="relative bg-white border-[10px] border-[#8A6DAF] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(138,109,175,0.3)] aspect-video"
                >
                  {/* Browser Header */}
                  <div className="bg-[#8A6DAF] p-4 flex gap-2 border-b border-[#8A6DAF] relative z-30">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#EB9AB2] shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#F6E36B] shadow-inner" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#5FA14C] shadow-inner" />
                  </div>

                  {/* The Iframe Window */}
                  <div className="relative w-full h-full bg-[#FDFBF4] overflow-hidden">
                    <iframe 
                      src={project.liveUrl} 
                      title={project.title}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-[1280px] h-[800px] origin-top scale-[0.34] md:scale-[0.42] border-none pointer-events-none transition-all duration-700 group-hover:opacity-80"
                      loading="lazy"
                    />
                    
                    {/* Shimmer Effect */}
                    <motion.div 
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none skew-x-12 z-10"
                    />
                  </div>

                  {/* PERSISTENT VISIT BUTTON */}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl border-2 border-[#8A6DAF] transition-all"
                    style={{ backgroundColor: project.color, color: 'white' }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 25px ${project.color}80`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MousePointer2 size={16} className="animate-bounce" />
                    Visit Live Site
                    <ExternalLink size={16} />
                  </motion.a>

                  {/* Hover overlay */}
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-40 bg-black/0 group-hover:bg-[#8A6DAF]/5 transition-all cursor-pointer"
                  />
                </motion.div>
              </div>

              {/* Project Info Section */}
              <div className="w-full lg:w-2/5 space-y-8">
                <motion.div 
                  initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="inline-block px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border-2"
                  style={{ backgroundColor: `${project.color}10`, color: project.color, borderColor: `${project.color}40` }}
                >
                  ✦ {project.genre}
                </motion.div>

                <h2 className="text-5xl font-serif font-black text-[#8A6DAF] leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-[#8A6DAF]/80 font-medium text-lg leading-relaxed italic border-l-4 border-[#C7A9D9] pl-6">
                  "{project.description}"
                </p>

                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 font-black text-[#E67E22] text-xs uppercase tracking-tighter">
                    <Sparkles size={18} className="text-[#F6E36B]" /> Key Functions
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.features.map((feat, i) => (
                      <motion.li 
                        key={i} 
                        whileHover={{ x: 10 }}
                        className="flex gap-3 text-sm font-bold text-[#5FA14C] bg-white/50 p-2 rounded-lg border border-transparent hover:border-[#5FA14C]/20 transition-all"
                      >
                        <span className="shrink-0 text-[#C7A9D9] font-serif">✿</span> {feat}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t-2 border-[#C7A9D9]/20">
                   <h4 className="flex items-center gap-2 font-black text-[#8A6DAF] text-xs uppercase mb-4">
                    <Code2 size={18} /> Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <motion.span 
                        key={t} 
                        whileHover={{ y: -5, backgroundColor: "#8A6DAF", color: "#fff" }}
                        className="px-4 py-2 bg-white border-2 border-[#C7A9D9]/40 rounded-xl text-[10px] font-black text-[#8A6DAF] transition-all cursor-default shadow-sm"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}