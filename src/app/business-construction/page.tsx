import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import { Server, Star, Users } from "lucide-react";
import Link from "next/link";

export default function BusinessConstructionPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        variant="split"
        badge="Construction & B2B"
        title="Sell construction materials and B2B supplies on Surf"
        description="Surf is the only marketplace that supports heavy-industry and B2B categories — from scaffolding to machinery."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* Why construction suppliers choice */}
      <FeatureGrid
        theme="grey"
        title="Why construction suppliers choose Surf"
        features={[
          {
            title: "No category restrictions",
            description: "Surf accepts construction materials, industrial machinery, scaffolding, tools, and all B2B equipment — no other marketplace comes close.",
            icon: <Server className="w-7 h-7" />
          },
          {
            title: "0% for local brands",
            description: "Locally registered construction and B2B suppliers sell on Surf for free.",
            icon: <Star className="w-7 h-7" />
          },
          {
            title: "B2B customer reach",
            description: "Reach contractors, builders, and trade professionals already using Surf to source supplies.",
            icon: <Users className="w-7 h-7" />
          }
        ]}
      />

      {/* Built for bulk */}
      <SplitSection
        title="Built for bulk and specialist orders"
        description="Surf supports large-catalogue listings, bulk pricing, and B2B order management. Connect your existing inventory system and manage everything from one place."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80"
        ctaText="See integrations →"
        ctaHref="/solution-integrations"
      />

      {/* CTA */}
      <section className="md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black max-w-[480px]">
                Start selling construction supplies today
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                The only marketplace that accepts your category.
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
