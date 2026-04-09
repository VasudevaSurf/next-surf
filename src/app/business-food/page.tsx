import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import { Clock, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

export default function BusinessFoodPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        variant="split"
        badge="Food & Grocery"
        title="Deliver food and groceries with Surf"
        description="Partner with Surf to reach hungry and time-pressed shoppers who want their food and groceries delivered fast."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* Why food sellers choose Surf */}
      <FeatureGrid
        theme="grey"
        title="Why food sellers choose Surf"
        features={[
          {
            title: "30-minute delivery",
            description: "Surf's courier network delivers food and grocery orders in around 30 minutes from your store to the customer's door.",
            icon: <Clock className="w-7 h-7" />
          },
          {
            title: "High repeat order rate",
            description: "Food and grocery buyers return regularly — building you a base of loyal, recurring customers.",
            icon: <ShoppingCart className="w-7 h-7" />
          },
          {
            title: "Surf+ subscribers",
            description: "Surf+ subscribers shop more frequently and spend more — your store gets featured to them directly.",
            icon: <Star className="w-7 h-7" />
          }
        ]}
      />

      {/* Fast, reliable grocery delivery */}
      <SplitSection
        title="Fast, reliable grocery delivery"
        description="List your full product catalogue on Surf, manage inventory in real time, and let Surf's courier network handle delivery. Or use your own drivers and we'll cover the delivery cost."
        image="https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&auto=format&fit=crop&q=80"
        ctaText="Learn about Self-delivery →"
        ctaHref="/product-self-delivery"
      />

      {/* CTA */}
      <section className="md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black max-w-[480px]">
                Start selling food and groceries today
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                Be live on Surf in 48 hours.
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
