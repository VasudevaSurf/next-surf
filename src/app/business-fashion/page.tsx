import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import { Heart, Star, Activity } from "lucide-react";
import Link from "next/link";

export default function BusinessFashionPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        variant="split"
        badge="Fashion & Apparel"
        title="Sell fashion and clothing on Surf"
        description="Reach style-conscious shoppers who want your products delivered the same day. Build your brand, your way."
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* Why fashion brands choose Surf */}
      <FeatureGrid
        theme="grey"
        title="Why fashion brands choose Surf"
        features={[
          {
            title: "Own your brand identity",
            description: "Your Surf Storefront reflects your brand — custom colours, logo, and product presentation.",
            icon: <Heart className="w-7 h-7" />
          },
          {
            title: "0% for local fashion brands",
            description: "If you're a local fashion label, you sell on Surf for free. Keep your full margin.",
            icon: <Star className="w-7 h-7" />
          },
          {
            title: "Full catalogue management",
            description: "Sync your Shopify or WooCommerce store in minutes and manage everything from one place.",
            icon: <Activity className="w-7 h-7" />
          }
        ]}
      />

      {/* Your fashion store */}
      <SplitSection
        title="Your fashion store, online and in-app"
        description="Launch your branded Storefront alongside your Surf app listing. Customers can shop from your website, social media, or the Surf app — all orders managed in one place."
        image="https://images.unsplash.com/photo-1556742208-999815fca738?w=800&auto=format&fit=crop&q=80"
        ctaText="Explore Storefront →"
        ctaHref="/product-storefront"
      />

      {/* CTA */}
      <section className="md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black max-w-[480px]">
                Start selling fashion on Surf today
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                Your brand deserves more customers.
              </p>
            </div>
            <Link
              href="#"
              className="px-[28px] py-[12px] rounded-full bg-black text-white text-base font-bold no-underline hover:-translate-y-0.5 transition-all"
            >
              Start selling
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
