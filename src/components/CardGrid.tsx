"use client";

import React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface Card {
  title: string;
  description: string;
  image: string;
  href?: string;
  flat?: boolean;
}

interface CardGridProps {
  title?: string;
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ title, cards }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div className="max-w-[1280px] mx-auto" ref={ref}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb:8 md:mb-12"
        >
          {title}
        </motion.h2>
      )}

      <div 
        className="grid gap-6 mt-8 md:mt-12"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className={`group flex flex-col bg-white rounded-[20px] overflow-hidden border border-border-s transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] ${
              card.flat ? "border-none shadow-none" : "shadow-none"
            }`}
          >
            <div className="h-[180px] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-[20px_24px_24px] flex flex-col gap-2 flex-1">
              <h3 className="text-[1rem] font-bold text-black leading-[1.3]">
                {card.title}
              </h3>
              <p className="text-[0.875rem] text-text-2 leading-[1.6] flex-1 mb-3.5">
                {card.description}
              </p>
              {card.href && (
                <Link
                  href={card.href}
                  className="text-[0.875rem] font-bold text-brand no-underline hover:underline transition-all"
                >
                  Learn more →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
