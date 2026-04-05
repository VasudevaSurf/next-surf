"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "full" | "split";
  badge?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  image,
  ctaText = "Start for free",
  ctaHref = "#",
  variant = "full",
  badge,
  onCtaClick,
}) => {
  if (variant === "split") {
    return (
      <section className="relative w-full overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] items-stretch">
          <div className="flex flex-col justify-center px-6 md:px-12 py-16 lg:py-24 max-w-[640px] ml-auto w-full">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="block w-full py-2 px-5 rounded-full bg-brand/10 text-brand text-[0.85rem] font-bold tracking-normal mb-6 text-left"
              >
                {badge}
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold tracking-[-1.2px] leading-[1.1] text-black mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[1.1rem] text-text-2 mb-10 leading-[1.65] w-full"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <button
                onClick={onCtaClick || (() => window.location.href = ctaHref)}
                className="flex w-full items-center justify-start px-8 py-4 rounded-full bg-black text-white text-base font-bold no-underline hover:bg-[#333] transition-all shadow-lg cursor-pointer border-none"
              >
                {ctaText}
              </button>
            </motion.div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[80vh] min-h-[520px] max-h-[760px] overflow-hidden flex items-end">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-8 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-1.5px] leading-[1.05] text-white mb-4 max-w-[640px]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-white/90 mb-8 leading-[1.6] max-w-[520px]"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <button
            onClick={onCtaClick || (() => window.location.href = ctaHref)}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-black text-base font-bold no-underline hover:-translate-y-0.5 transition-all shadow-xl cursor-pointer border-none"
          >
            {ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
