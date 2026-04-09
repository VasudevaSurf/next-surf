import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import Link from "next/link";
import { Star, Users, TrendingUp } from "lucide-react";

export default function SolutionSellerPlusPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Reach loyal, high-value customers with Surf+"
        description="Surf+ subscribers order more frequently and spend more per order. Partner with Surf+ and get featured to our most engaged shoppers."
        image="https://images.unsplash.com/photo-1556742208-999815fca738?w=1800&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* Why join Surf+? */}
      <FeatureGrid
        theme="grey"
        title="Why join Surf+?"
        features={[
          {
            title: "Premium placement",
            description: "Your store is featured in dedicated Surf+ placements on the app — more visibility, more orders.",
            icon: <Star className="w-7 h-7" />
          },
          {
            title: "Higher-spending customers",
            description: "Surf+ subscribers have higher average basket sizes and order more frequently than non-subscribers.",
            icon: <Users className="w-7 h-7" />
          },
          {
            title: "Grow recurring revenue",
            description: "Loyal subscribers place orders regularly — making your revenue more predictable and consistent.",
            icon: <TrendingUp className="w-7 h-7" />
          }
        ]}
      />

      {/* FEATURED */}
      <SplitSection
        title="Get featured to the most engaged shoppers"
        description="When you partner with Surf+, your store is promoted to Surf+ subscribers in dedicated app placements, push notifications, and category features. These are the customers who are already committed to shopping regularly — you just need to be in front of them."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
      />

      {/* CTA */}
      <section className="md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black">
                Ready to reach Surf+ subscribers?
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                Sign up and we'll get you featured in no time.
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
