"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import CardGrid from "@/components/CardGrid";
import Link from "next/link";
import { ShoppingCart, Star, BarChart3, Smartphone } from "lucide-react";
import SignupModal from "@/components/registration/SignupModal";

export default function ProductSurfAppPage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Grow your online sales with the Surf Shopping App"
        description="List your products and start selling today."
        image="/assets/surfCustApp.jpg"
        ctaText="Get started"
        onCtaClick={() => setIsSignupModalOpen(true)}
      />

      {/* 3 FEATURE ICONS */}
      {/* <FeatureGrid
        theme="grey"
        title="Let's grow your online business together"
        features={[
          {
            title: "Offer delivery and pickup",
            description: "Open a new revenue stream and offer pickup and delivery on Surf, with our courier network or your own drivers.",
            icon: <ShoppingCart className="w-7 h-7" />
          },
          {
            title: "Access big spenders",
            description: "Tap into Surf+ subscribers — customers who order more frequently and spend more per order.",
            icon: <Star className="w-7 h-7" />
          },
          {
            title: "Keep track of your business",
            description: "Use our Seller Hub app and analytics portal to track performance and boost sales.",
            icon: <BarChart3 className="w-7 h-7" />
          }
        ]}
      /> */}

      {/* HOW IT WORKS */}
      <SplitSection
        title="Plug in and start selling"
        description="Once registered as a seller ,connect your existing website and sync all products at once or upload your product catalogue directly to your Seller Panel. 
Control your prices, stock levels, and images and you're ready to go. 
No tech expertise needed. Our seller support team is on hand to help you get set up via demo call."
        image="/assets/howItWorks.png"
      //ctaText="Get started →"
      />

      {/* SURF+ REACH */}
      <SplitSection
        theme="grey"
        reverse
        title="Your products go live"
        description="Once our team reviews your listings for description quality, image standards, and stock accuracy, your products are approved and live on the Surf app- visible to thousands of shoppers across Malta, ready to buy."
        image="/assets/goLive.png"
      //ctaText="Learn about Surf+ →"
      //ctaHref="/solution-seller-plus"
      />

      {/* PICKUP */}
      <SplitSection
        title="Accept orders and grow your business"
        description="When a customer places an order, you get notified instantly on the Seller Hub app. Accept it, pack it, and hand it over to your own courier, collect the delivery fee through Surf or our logistics partner picks it up directly from your store and handles the rest.
Now you can focus on growing your business."
        image="/assets/surfAccept.png"
      //ctaText="Get started →"
      />

      {/* SIGN UP CTA */}
      <section className="md:py-20 px-8 bg-seller-gradient">
        <div className="max-w-[1280px] mx-auto">
          <div className="p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-white">
                Getting started is easy. Sign up today
              </h2>
              <p className="text-[1.05rem] text-white/90 mt-2 leading-[1.5]">
                Fill in a few details about your business and you'll be live in no time.
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

      {/* ADDITIONAL SERVICES */}
      {/* <section className="py-20 px-8 bg-white">
        <CardGrid
          title="Additional services to grow your business"
          cards={[
            {
              title: "Promotional campaigns",
              description: "Turn more app visitors into shoppers and increase visibility with self-funded promotions like free delivery, discounts and specials.",
              image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=80",
              href: "/solution-promotions"
            },
            {
              title: "Business management portal",
              description: "Track live purchases and make changes to your listings in real time. Access valuable performance reports to increase sales.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
              href: "/solution-analytics"
            },
            {
              title: "World-class support",
              description: "Our 24/7 support team replies in minutes. We're available to you and your customers until the last order of the day is delivered.",
              image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=80"
            },
            {
              title: "Seller Hub app",
              description: "Manage every order from your phone. Accept, update, and track orders on the go with push notifications for every new sale.",
              image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=80"
            }
          ]}
        />
      </section> */}

      <Footer />

      {isSignupModalOpen && (
        <SignupModal onClose={() => setIsSignupModalOpen(false)} />
      )}
    </main>
  );
}
