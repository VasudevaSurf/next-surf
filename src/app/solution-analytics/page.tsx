"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { Activity, Users, LayoutDashboard } from "lucide-react";
import SignupModal from "@/components/registration/SignupModal";

export default function SolutionAnalyticsPage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Access valuable analytics and insights"
        description="Track your business performance, view sales dashboards, and get customer analytics to grow your business even more."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&auto=format&fit=crop&q=80"
        ctaText="Get started"
        onCtaClick={() => setIsSignupModalOpen(true)}
      />

      {/* 3 FEATURES */}
      <FeatureGrid
        theme="grey"
        title="Use data to make smarter business decisions"
        features={[
          {
            title: "Dig into the data",
            description: "Track net sales, average order size, unique customers, popular items, and more across any period of time.",
            icon: <Activity className="w-7 h-7" />
          },
          {
            title: "Unlock customer insights",
            description: "Understand what your customers order and view operational metrics like punctuality, rejections, and availability.",
            icon: <Users className="w-7 h-7" />
          },
          {
            title: "Get a dashboard view",
            description: "See all the key information in one simple view, and easily filter to show what matters most to you.",
            icon: <LayoutDashboard className="w-7 h-7" />
          }
        ]}
      />

      {/* SALES ANALYTICS */}
      <SplitSection
        title="Utilise powerful sales analytics"
        description="Stay on top of the most important business statistics. Review key data including sales by delivery type, payouts, number of orders, popular items, average basket size, error charges, and more across all your venues."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
        ctaText="Try it →"
      />

      {/* CUSTOMER ANALYTICS */}
      <SplitSection
        theme="grey"
        reverse
        title="Better understand your customers"
        description="Get a breakdown of new and returning customers, plus see purchases made in real time. From the Seller Dashboard, you can also run promotions to attract new customers and reward loyal ones."
        image="https://images.unsplash.com/photo-1556742208-999815fca738?w=800&auto=format&fit=crop&q=80"
        ctaText="Try it →"
      />

      {/* OPERATIONS */}
      <SplitSection
        title="Improve your operations"
        description="Discover opportunities to run your business more smoothly with data points on your order accuracy, cancellations, wait times, and downtime. Know exactly where to improve and by how much."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80"
        ctaText="Try it →"
      />

      {/* CTA */}
      <section className="py-20 px-8 bg-seller-gradient">
        <div className="max-w-[1280px] mx-auto">
          <div className="p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-white">
                Getting started is easy — sign up today
              </h2>
              <p className="text-[1.05rem] text-white/90 mt-2 leading-[1.5]">
                Fill in a few details and you'll have access to your dashboard in no time.
              </p>
            </div>
            <button
              onClick={() => setIsSignupModalOpen(true)}
              className="px-[28px] py-[12px] rounded-full bg-white text-black text-base font-bold no-underline hover:bg-grey transition-all cursor-pointer border-none"
            >
              Get started
            </button>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          {
            question: "Where can I see my sales and order data?",
            answer: "Log in to the Seller Dashboard to view your Surf sales and order data. You'll see an overview of main metrics plus specific reports you can filter for metrics, timeframes, and products:\n\n• Performance report: sales, orders, average basket size, and delivery type breakdown\n• Operations report: rejected orders, punctuality metrics, preparation time\n• Customer base report: total, returning, and new customers\n• Ratings and reviews: total reviews, positive/negative ratings"
          },
          {
            question: "What actions can I take in real-time?",
            answer: "You can edit your catalogue or inventory, set up promotional campaigns, watch live purchases, and change your store details — all from the Seller Dashboard."
          },
          {
            question: "Does the dashboard contain data from all Surf products?",
            answer: "Yes. The Seller Dashboard is your destination for data from the Surf App, Self-delivery, and Storefront orders."
          }
        ]}
      />

      <Footer />

      {isSignupModalOpen && (
        <SignupModal onClose={() => setIsSignupModalOpen(false)} />
      )}
    </main>
  );
}
