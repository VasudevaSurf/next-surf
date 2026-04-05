"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import CardGrid from "@/components/CardGrid";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { MapPin, Globe, Home } from "lucide-react";
import SignupModal from "@/components/registration/SignupModal";

export default function BusinessRetailersPage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        variant="split"
        badge="Retailers"
        title="Reach more shoppers and grow your retail business"
        description="Partner with Surf and serve customers where they're already shopping."
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&auto=format&fit=crop&q=80"
        ctaText="Get started"
        onCtaClick={() => setIsSignupModalOpen(true)}
      />

      {/* WHY PARTNER */}
      <FeatureGrid
        theme="grey"
        title="Why partner with us?"
        features={[
          {
            title: "Be where your next customer is",
            description: "By partnering with Surf, grow your retail business by tapping into our online audience. Already have an online store? Connect it with Surf to offer quick on-demand delivery.",
            icon: <MapPin className="w-7 h-7" />
          },
          {
            title: "Grow your reach in the city",
            description: "With Surf, expand the physical reach of your store and easily serve customers in a radius of up to 4 km from your location.",
            icon: <Globe className="w-7 h-7" />
          },
          {
            title: "Creating better communities, together",
            description: "Surf's mission is to make local commerce thrive. We're mindful of our impact on local communities and take purposeful action together with our partners.",
            icon: <Home className="w-7 h-7" />
          }
        ]}
      />

      {/* GETTING STARTED */}
      <SplitSection
        title="Getting started"
        description="We'll assist you to set up and upload your items on Surf. We handle customer support, refunds, and the backend of payments including fraud prevention. Together with our extensive last-mile logistics experience, you can focus on growing your business."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
        onCtaClick={() => setIsSignupModalOpen(true)}
      />

      {/* SELLER HUB APP */}
      <SplitSection
        theme="grey"
        reverse
        title="Seller Hub app saves time"
        description="Time is valuable. That's why we tailor-made this app to save 2–3 minutes per order. With support for item substitutions, weighted items, and adjusted invoices, the Seller Hub app also reduces mistakes by up to 50%."
        image="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80"
        ctaText="Learn more →"
      />

      {/* CTA */}
      <section className="py-20 px-8 bg-seller-gradient">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-white max-w-[480px]">
                Getting started is easy — sign up today
              </h2>
              <p className="text-[1.05rem] text-white/90 mt-2 leading-[1.5]">
                Fill in a few details and you'll be live in no time.
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

      {/* ADDITIONAL SOLUTIONS */}
      <section className="py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb-12">
            Advanced solutions for retail sellers
          </h2>
          <CardGrid
            cards={[
              {
                title: "Launch your own promotional campaigns",
                description: "Convert more app visitors into shoppers with self-funded promotions like free delivery fees, discounts, and specials.",
                image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=80",
                href: "/solution-promotions"
              },
              {
                title: "Use data to drive e-commerce",
                description: "Gain access to category benchmarks and performance reports to improve your understanding of your customers.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
                href: "/solution-analytics"
              },
              {
                title: "You run the show",
                description: "Decide when to go online to receive Surf orders. Pay commission only on orders you complete. Full pricing control always.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&auto=format&fit=crop&q=80"
              }
            ]}
          />
          <div className="mt-8">
            <Link href="/" className="inline-flex items-center px-8 py-3.5 rounded-full border-[1.5px] border-border-s text-black text-[0.875rem] font-bold no-underline hover:bg-grey transition-all">
              All seller solutions →
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          {
            question: "What are the fees and commissions?",
            answer: "Surf charges a commission on orders made through the platform, starting from 3.2%. Locally registered brands pay 0%. There are no fees to join and you can end the partnership at any time."
          },
          {
            question: "When do I get paid?",
            answer: "Surf offers flexible payouts. You can choose to be paid every two weeks, once a month, or once every six days."
          },
          {
            question: "What is the delivery radius from my venue?",
            answer: "Surf typically has a delivery radius of up to 4 km from a venue, but this varies by city. With Self-delivery, you can extend beyond this radius."
          },
          {
            question: "Do I have to be online all the hours my business is open?",
            answer: "The choice is yours. You decide when you want to be open for deliveries. You pay commission only on orders you complete."
          },
          {
            question: "Will I be able to offer special sales and discounts?",
            answer: "Yes. We encourage sellers to offer specials — price discounts, bundles, free deliveries, flash sales, and more. All fully controlled by you from the Seller Dashboard."
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
