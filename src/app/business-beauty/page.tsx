import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import { Star, Globe, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function BusinessBeautyPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        variant="split"
        badge="Beauty & Cosmetics"
        title="Grow your beauty brand with Surf"
        description="Join thousands of beauty sellers on Surf — reach customers who are already searching for products like yours."
        image="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* Why beauty brands choose Surf */}
      <FeatureGrid
        theme="grey"
        title="Why beauty brands choose Surf"
        features={[
          {
            title: "0% commission for local brands",
            description: "If you're a locally built beauty brand, you sell on Surf for free. Keep every penny of every sale.",
            icon: <Star className="w-7 h-7" />
          },
          {
            title: "Reach beauty enthusiasts",
            description: "Your products are discoverable by thousands of beauty shoppers already browsing the Surf app daily.",
            icon: <Globe className="w-7 h-7" />
          },
          {
            title: "Branded Storefront included",
            description: "Launch a professional online shop with your branding, no developers needed.",
            icon: <LayoutDashboard className="w-7 h-7" />
          }
        ]}
      />

      {/* Your own store */}
      <SplitSection
        title="Your own store, powered by Surf"
        description="Launch your branded Storefront in days, connect your existing Shopify or WooCommerce store in minutes, and start selling to customers already in the Surf app. We handle payments, support, and delivery logistics."
        image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
      />

      {/* CTA */}
      <section className="md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black max-w-[480px]">
                Start selling your beauty products today
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                Join thousands of beauty brands already growing on Surf.
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
