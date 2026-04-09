import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import { Monitor, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function BusinessElectronicsPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        variant="split"
        badge="Electronics"
        title="Sell electronics and tech products on Surf"
        description="Reach tech-savvy buyers who want their purchases fast. From gadgets to appliances — Surf supports your full catalogue."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* Why electronics sellers choose Surf */}
      <FeatureGrid
        theme="grey"
        title="Why electronics sellers choose Surf"
        features={[
          {
            title: "Large catalogue support",
            description: "List thousands of SKUs across multiple categories. Sync with your existing inventory system in real time.",
            icon: <Monitor className="w-7 h-7" />
          },
          {
            title: "Fast delivery on tech",
            description: "Customers want tech products fast. Surf's delivery network gets items from your store to their door in hours.",
            icon: <Zap className="w-7 h-7" />
          },
          {
            title: "Secure payments",
            description: "Surf handles all payment processing, fraud prevention, and secure transactions — no setup needed on your side.",
            icon: <Shield className="w-7 h-7" />
          }
        ]}
      />

      {/* Manage entire tech catalogue */}
      <SplitSection
        title="Manage your entire tech catalogue on Surf"
        description="Connect your existing e-commerce platform, sync your full product catalogue, and start selling immediately. Our integrations support Shopify, WooCommerce, Magento, and more."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
        ctaText="See integrations →"
        ctaHref="/solution-integrations"
      />

      {/* CTA */}
      <section className="md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black max-w-[480px]">
                Start selling electronics on Surf today
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                Be live in 48 hours with your full catalogue.
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
