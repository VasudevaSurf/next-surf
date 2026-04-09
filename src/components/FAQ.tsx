"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
  theme?: "light" | "grey";
}

const FAQ: React.FC<FAQProps> = ({ title = "Frequently asked questions", items, theme = "light" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`py-12 md:py-20 px-6 md:px-8 ${theme === "grey" ? "bg-grey" : "bg-white"}`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[800px]">
          {title && (
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb-4 md:mb-12">
              {title}
            </h2>
          )}

          <div className="flex flex-col">
            {items.map((item, idx) => (
              <div key={idx} className="border-b border-border-s last:border-none">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center py-6 gap-4 text-left outline-none bg-none border-none cursor-pointer"
                >
                  <span className="text-[1.05rem] font-bold text-black leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-brand" : "text-black/30"
                      }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-[0.95rem] leading-[1.7] whitespace-pre-line">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
