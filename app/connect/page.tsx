"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Instagram, 
  Linkedin, 
  Github, 
  Facebook, 
  Mail, 
  FileText, 
  Figma, 
  Sparkles,
  Paperclip,
  Image as ImageIcon,
  X
} from "lucide-react";

export default function ConnectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle generating previews when files are selected
  useEffect(() => {
    if (selectedFiles.length === 0) {
      setPreviews([]);
      return;
    }

    const objectUrls = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviews(objectUrls);

    // Cleanup memory to prevent leaks
    return () => objectUrls.forEach(url => URL.revokeObjectURL(url));
  }, [selectedFiles]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...filesArray]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Helper to convert files to Base64 for Resend
  const fileToBase64 = (file: File): Promise<{ name: string; content: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        resolve({ name: file.name, content: base64String });
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert selected images to base64 (if any exist)
      const attachments = selectedFiles.length > 0 
        ? await Promise.all(selectedFiles.map(file => fileToBase64(file)))
        : [];

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          files: attachments
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setSelectedFiles([]);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Failed to send message"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: "Instagram", icon: <Instagram />, href: "https://www.instagram.com/n._.zaman?igsh=b3k2dzhmbnZ6Nmd3&utm_source=qr", color: "#E1306C" },
    { name: "LinkedIn", icon: <Linkedin />, href: "www.linkedin.com/in/mst-gulnahar", color: "#0077B5" },
    { name: "GitHub", icon: <Github />, href: "https://github.com/PixelStudio330", color: "#333" },
    { name: "Facebook", icon: <Facebook />, href: "https://www.facebook.com/share/179JsC2cPu/", color: "#1877F2" },
  ];

  const inputBaseStyles = "w-full bg-[#FDFBF4] border-2 border-[#C7A9D9]/20 px-6 py-4 focus:border-[#8A6DAF] outline-none transition-all font-medium text-[#8A6DAF] placeholder:text-[#E67E22]/50";

  return (
    <main className="min-h-screen bg-[#FDFBF4] pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-6">
        
        {/* LEFT SIDE: THE LETTER FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-[#8A6DAF]/10 border border-[#C7A9D9]/20 relative"
        >
          <div className="absolute -top-6 -left-6 bg-[#E67E22] text-white p-4 rounded-2xl rotate-[-12deg] shadow-lg">
            <Mail size={32} />
          </div>

          <h1 className="text-4xl font-serif font-black text-[#5FA14C] mb-2">Send a Digital Seed</h1>
          <p className="text-[#8A6DAF] font-medium mb-10">Tell me about your vision, and let’s make it bloom.</p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#5FA14C] ml-2">Name *</label>
                    <input 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`${inputBaseStyles} rounded-2xl`}
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#5FA14C] ml-2">Email *</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`${inputBaseStyles} rounded-2xl`}
                      placeholder="hello@world.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[#5FA14C] ml-2 flex items-center gap-2">
                    <Figma size={14} /> Figma Link or Detailed Description *
                  </label>
                  <textarea 
                    required 
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`${inputBaseStyles} rounded-3xl resize-none`}
                    placeholder="Provide a Figma link if available. If not, please describe your layout, color preferences, and core goals in detail..."
                  />
                  <p className="text-[10px] text-[#8A6DAF] font-bold italic ml-2">* Figma design is highly preferred for pixel-perfect results.</p>
                </div>

                {/* ATTACHMENT SECTION (Optional) */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-[#5FA14C] ml-2 flex items-center gap-2">
                    <Paperclip size={14} /> Attach Requirements/References (Optional)
                  </label>
                  
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="group cursor-pointer w-full py-8 border-2 border-dashed border-[#C7A9D9]/40 rounded-3xl bg-[#FDFBF4]/50 flex flex-col items-center justify-center gap-2 hover:bg-white hover:border-[#8A6DAF] transition-all"
                  >
                    <ImageIcon className="text-[#8A6DAF] group-hover:scale-110 transition-transform" size={28} />
                    <span className="text-sm font-bold text-[#5FA14C]">Click to upload photos</span>
                    <span className="text-[10px] text-[#8A6DAF] uppercase tracking-wider">Works on Phone & PC</span>
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple 
                      accept="image/*" 
                      className="hidden" 
                    />
                  </div>

                  {/* Visual Image Preview Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
                    {previews.map((url, i) => (
                      <motion.div 
                        key={url}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        className="relative aspect-square rounded-xl overflow-hidden border-2 border-[#C7A9D9]/30 shadow-sm group"
                      >
                        <img 
                          src={url} 
                          alt="preview" 
                          className="w-full h-full object-cover"
                        />
                        <button 
                          type="button"
                          onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                          className="absolute top-1 right-1 bg-[#E67E22] text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          <X size={12} />
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-1 px-2">
                           <p className="text-[8px] font-bold text-[#8A6DAF] truncate">
                             {selectedFiles[i]?.name}
                           </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#8A6DAF" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-[#5FA14C] text-white font-black py-5 rounded-2xl shadow-xl shadow-[#5FA14C]/20 flex items-center justify-center gap-3 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>PLANT THE SEED</span>
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-24 h-24 bg-[#5FA14C]/10 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="text-[#5FA14C]" size={48} />
                </div>
                <h2 className="text-3xl font-serif font-black text-[#5FA14C]">Message Bloomed!</h2>
                <p className="text-[#8A6DAF] font-medium">Thank you for reaching out. I’ll check my garden and get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#E67E22] font-black underline decoration-wavy"
                >
                  Send another?
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* RIGHT SIDE: SOCIAL GARDEN */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl font-serif font-black text-[#8A6DAF] leading-tight mb-6 mt-6">
              Let’s stay <br /> <span className="text-[#5FA14C]">Connected.</span>
            </h2>
            <p className="text-xl text-[#5FA14C]/70 font-medium leading-relaxed max-w-md">
              Whether you want to discuss a project, talk about watercolor art, or just say hi—find me in these corners of the web.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                whileHover={{ x: 10, backgroundColor: "white" }}
                className="group flex items-center gap-5 p-6 rounded-[2rem] bg-white/50 border border-[#C7A9D9]/20 transition-all shadow-sm hover:shadow-xl hover:shadow-[#8A6DAF]/5"
              >
                <div 
                  className="p-4 rounded-2xl transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${social.color}15`, color: social.color }}
                >
                  {social.icon}
                </div>
                <div>
                  <h4 className="font-black text-[#5FA14C]">{social.name}</h4>
                  <p className="text-xs text-[#8A6DAF] font-bold">@m1dnightbloom</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* EXTRA CARD: FAQ/INFO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="p-8 rounded-[2.5rem] bg-[#5FA14C]/10 border-2 border-dashed border-[#5FA14C]/30"
          >
            <div className="flex gap-4">
              <div className="shrink-0 text-[#E67E22]"><FileText size={24} /></div>
              <div>
                <h4 className="font-black text-[#5FA14C] mb-2 uppercase text-xs tracking-tighter">Ordering Info</h4>
                <p className="text-sm text-[#5FA14C]/80 font-medium leading-relaxed">
                 For full-scale orders, please include <strong>Figma design</strong> if available, or provide <strong>detailed & clear requirements</strong> for your project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}