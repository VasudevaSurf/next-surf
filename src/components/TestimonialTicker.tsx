"use client";

import React from "react";
import Link from "next/link";

interface TickerItem {
  image: string;
  caption: string;
  href?: string;
}

interface TestimonialTickerProps {
  items?: TickerItem[];
  title?: string;
  subtitle?: string;
}

const defaultItems: TickerItem[] = [
  {
    image: "/assets/testimonials/1.png",
    caption: '"Revenue tripled in six months."',
  },
  {
    image: "/assets/testimonials/2.png",
    caption: '"A game-changer. We serve customers better."',
  },
  {
    image: "/assets/testimonials/3.png",
    caption: '"50% of all sales now come through Surf."',
  },
  {
    image: "/assets/testimonials/4.png",
    caption: '"76% of customers return after first order."',
  },
  {
    image: "/assets/testimonials/5.png",
    caption: '"A reliable platform was crucial for us."',
  },
  {
    image: "/assets/testimonials/6.png",
    caption: '"Revenue tripled in six months."',
  },
  {
    image: "/assets/testimonials/7.png",
    caption: '"A game-changer. We serve customers better."',
  },
  {
    image: "/assets/testimonials/8.png",
    caption: '"50% of all sales now come through Surf."',
  },
  {
    image: "/assets/testimonials/9.png",
    caption: '"76% of customers return after first order."',
  },
  {
    image: "/assets/testimonials/10.png",
    caption: '"A reliable platform was crucial for us."',
  },
  {
    image: "/assets/testimonials/11.png",
    caption: '"Revenue tripled in six months."',
  },
  {
    image: "/assets/testimonials/12.png",
    caption: '"A game-changer. We serve customers better."',
  },
  {
    image: "/assets/testimonials/13.png",
    caption: '"50% of all sales now come through Surf."',
  },
  {
    image: "/assets/testimonials/14.png",
    caption: '"76% of customers return after first order."',
  },
  {
    image: "/assets/testimonials/15.png",
    caption: '"A reliable platform was crucial for us."',
  },
  {
    image: "/assets/testimonials/16.png",
    caption: '"Revenue tripled in six months."',
  },
  {
    image: "/assets/testimonials/17.png",
    caption: '"A game-changer. We serve customers better."',
  },
  {
    image: "/assets/testimonials/18.png",
    caption: '"50% of all sales now come through Surf."',
  },
  {
    image: "/assets/testimonials/19.png",
    caption: '"76% of customers return after first order."',
  },
  {
    image: "/assets/testimonials/20.png",
    caption: '"A reliable platform was crucial for us."',
  },
  {
    image: "/assets/testimonials/21.png",
    caption: '"Revenue tripled in six months."',
  },
  {
    image: "/assets/testimonials/22.png",
    caption: '"A game-changer. We serve customers better."',
  },
  {
    image: "/assets/testimonials/23.png",
    caption: '"50% of all sales now come through Surf."',
  },
  {
    image: "/assets/testimonials/24.png",
    caption: '"76% of customers return after first order."',
  },
  {
    image: "/assets/testimonials/25.png",
    caption: '"A reliable platform was crucial for us."',
  },
  {
    image: "/assets/testimonials/26.png",
    caption: '"Revenue tripled in six months."',
  },
  {
    image: "/assets/testimonials/27.png",
    caption: '"A game-changer. We serve customers better."',
  },
  {
    image: "/assets/testimonials/28.png",
    caption: '"50% of all sales now come through Surf."',
  },
  {
    image: "/assets/testimonials/29.png",
    caption: '"76% of customers return after first order."',
  },
  {
    image: "/assets/testimonials/30.png",
    caption: '"A reliable platform was crucial for us."',
  },
  {
    image: "/assets/testimonials/31.png",
    caption: '"Revenue tripled in six months."',
  },
  {
    image: "/assets/testimonials/32.png",
    caption: '"A game-changer. We serve customers better."',
  },
  {
    image: "/assets/testimonials/33.png",
    caption: '"50% of all sales now come through Surf."',
  },
  {
    image: "/assets/testimonials/34.png",
    caption: '"76% of customers return after first order."',
  },
  {
    image: "/assets/testimonials/35.png",
    caption: '"A reliable platform was crucial for us."',
  },
];

const TestimonialTicker: React.FC<TestimonialTickerProps> = ({ items = defaultItems, title, subtitle }) => {
  // Duplicate items twice to ensure smooth infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {title && (
        <div className="max-w-[1280px] mx-auto px-8 mb-12 text-center">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-text-2 text-sm max-w-[600px] mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="relative">
        {/* Decorative gradients on edges */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>

        <div className="flex animate-ticker w-max gap-4 px-4">
          {displayItems.map((item, idx) => (
            <Link
              key={`${item.caption}-${idx}`}
              href={item.href || "#"}
              className="group relative flex-shrink-0 w-55 h-55 rounded-2xl overflow-hidden no-underline"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex items-end">
                <span className="text-white text-[0.875rem] font-bold leading-[1.35] line-clamp-2">
                  {item.caption}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialTicker;
