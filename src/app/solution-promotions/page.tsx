import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import Link from "next/link";
import { Tag, Clock, Package, BarChart3 } from "lucide-react";

export default function SolutionPromotionsPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Boost sales with promotions"
        description="Turn more app visitors into shoppers and increase visibility with self-funded promotions — all controlled by you, with no approval delays."
        image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1800&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* 4 FEATURES */}
      <FeatureGrid
        theme="grey"
        title="Your prices. Your rules."
        columns={4}
        features={[
          {
            title: "Custom discount codes",
            description: "Create unique discount codes for loyal customers and new shoppers alike.",
            icon: <Tag className="w-7 h-7" />
          },
          {
            title: "Flash sales in one click",
            description: "Create time-limited sales instantly from your dashboard. No setup required.",
            icon: <Clock className="w-7 h-7" />
          },
          {
            title: "Bundle offers",
            description: "Set up quantity discounts and bundle deals to increase average order size.",
            icon: <Package className="w-7 h-7" />
          },
          {
            title: "Track performance live",
            description: "See how your promotions are performing in real time from your Seller Dashboard.",
            icon: <BarChart3 className="w-7 h-7" />
          }
        ]}
      />

      {/* FREE DELIVERY */}
      <SplitSection
        title="Offer free delivery promotions"
        description="Free delivery is one of the most powerful conversion tools available. Run free delivery promotions on specific days, order sizes, or customer segments — and watch your order volume grow."
        image="https://images.unsplash.com/photo-1556742208-999815fca738?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
      />

      {/* MEASURE */}
      <SplitSection
        theme="grey"
        reverse
        title="Measure what's working"
        description="Track the ROI of every promotion directly from your Seller Dashboard. See which campaigns drive the most orders and revenue, so you can double down on what works and drop what doesn't."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
        ctaText="Explore Analytics →"
        ctaHref="/solution-analytics"
      />

      {/* CTA */}
      <section className="py-12 md:py-20 px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black">
                Ready to drive more sales?
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                Sign up and start running promotions from day one.
              </p>
            </div>
            <Link
              href="#"
              className="px-[28px] py-[12px] rounded-full bg-black text-white text-base font-bold no-underline hover:-translate-y-0.5 transition-all"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
