"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconImg?: string;
  href?: string;
}

interface FeatureGridProps {
  title?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  theme?: "light" | "grey";
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ title, features, columns = 3, theme = "light" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={`py-12 sm:py-20 px-6 md:px-8 overflow-hidden ${theme === "grey" ? "bg-grey" : "bg-white"}`}>
      <div className="max-w-[1280px] mx-auto" ref={ref}>
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black sm:mb-12"
          >
            {title}
          </motion.h2>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8 lg:gap-12 mt-6 sm:mt-12`}>
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-2 sm:gap-3.5"
            >
              <div className="w-14 h-14 rounded-[16px] overflow-hidden flex-shrink-0 bg-grey flex items-center sm:justify-center">
                {feature.iconImg ? (
                  <img src={feature.iconImg} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="p-3 text-brand">
                    {feature.icon}
                  </div>
                )}
              </div>
              <h3 className="text-[1.2rem] font-bold tracking-[-0.2px] text-black leading-[1.3]">
                {feature.title}
              </h3>
              <p className="text-[0.95rem] text-text-2 leading-[1.6]">
                {feature.description}
              </p>
              {feature.href && (
                <Link
                  href={feature.href}
                  className="text-[0.875rem] font-semibold text-brand no-underline hover:underline transition-all mt-auto pt-2"
                >
                  Explore →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
