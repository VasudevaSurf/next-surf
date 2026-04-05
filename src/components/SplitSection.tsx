"use client";

import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface SplitSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  image: string;
  reverse?: boolean;
  theme?: "light" | "grey" | "dark" | "brand";
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const SplitSection: React.FC<SplitSectionProps> = ({
  title,
  description,
  children,
  image,
  reverse = false,
  theme = "light",
  ctaText,
  ctaHref = "#",
  onCtaClick,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const themeClasses = {
    light: "bg-white text-black",
    grey: "bg-grey text-black",
    dark: "bg-black text-white",
    brand: "bg-brand text-white",
  };

  const textClasses = ["dark", "brand"].includes(theme) ? "text-white/80" : "text-text-2";

  return (
    <section className={`py-20 px-6 md:px-8 overflow-hidden transition-colors ${themeClasses[theme]}`}>
      <div className="max-w-[1280px] mx-auto" ref={ref}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`[direction:ltr] relative aspect-[4/3] rounded-3xl overflow-hidden`}
          >
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="[direction:ltr] flex flex-col justify-center gap-6"
          >
            <h2 className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] leading-[1.15]">
              {title}
            </h2>
            {description && (
              <p className={`text-lg leading-[1.65] ${textClasses}`}>
                {description}
              </p>
            )}
            {children && (
              <div className={`flex flex-col gap-3 text-[0.975rem] leading-[1.6] ${textClasses} ${theme === "brand" ? "split-list-white" : "split-list-brand"}`}>
                {children}
              </div>
            )}
            {ctaText && (
              <div className="mt-8">
                {onCtaClick ? (
                  <button
                    onClick={onCtaClick}
                    className={`inline-flex items-center px-[28px] py-[12px] rounded-full font-bold no-underline transition-all hover:-translate-y-0.5 cursor-pointer border-none ${
                      ["dark", "brand"].includes(theme)
                        ? "bg-white text-black hover:bg-grey"
                        : "bg-brand text-white hover:bg-brand-d"
                    }`}
                  >
                    {ctaText}
                  </button>
                ) : (
                  <Link
                    href={ctaHref}
                    className={`inline-flex items-center px-[28px] py-[12px] rounded-full font-bold no-underline transition-all hover:-translate-y-0.5 ${
                      ["dark", "brand"].includes(theme)
                        ? "bg-white text-black hover:bg-grey"
                        : "bg-brand text-white hover:bg-brand-d"
                    }`}
                  >
                    {ctaText}
                  </Link>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
