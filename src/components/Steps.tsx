"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface StepsProps {
  title?: string;
  steps: Step[];
}

const Steps: React.FC<StepsProps> = ({ title, steps }) => {
  return (
    <div className="steps-list">
      {title && (
        <h2 className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] leading-[1.15] mb-3 md:mb-5 text-black">
          {title}
        </h2>
      )}
      <div className="flex flex-col">
        {steps.map((step, idx) => (
          <div key={idx} className="grid grid-cols-[48px_1fr] md:gap-5 py-[24px] md:py-[28px] border-b border-border-s last:border-none">
            <div className="text-[1.2rem] font-extrabold text-brand pt-[3px]">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-[1.05rem] font-bold text-black mb-2">
                {step.title}
              </h3>
              <p className="text-[0.9rem] text-text-2 leading-[1.6]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
