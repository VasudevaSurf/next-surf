"use client";

import React, { useState } from "react";
import { QrCode, Clock, Smartphone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import FeatureGrid from "@/components/FeatureGrid";
import Steps from "@/components/Steps";
import CardGrid from "@/components/CardGrid";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import SignupModal from "@/components/registration/SignupModal";

export default function ProductSelfDeliveryPage() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Surf orders. Fulfilled by you."
        description="Use your own delivery team to fulfil Surf orders and set your own delivery rates, offer same day and next day delivery service to your customers."
        image="/assets/fulfillment.jpg"
        ctaText="Get started"
        onCtaClick={() => setIsSignupModalOpen(true)}
      />

      {/* WHAT IS SELF-DELIVERY */}
      <SplitSection
        title="What is Fulfilment by Seller?"
        description="Fulfilment by Seller gives you all the benefits of selling on Surf- more customers, more orders, more revenue. while keeping full control of your delivery operation. Use your own couriers, set your own delivery timeframe, and decide the delivery fee your customers pay. You run the last mile, your way."
        image="/assets/whatIsFull.png"
        ctaText="Get started →"
        onCtaClick={() => setIsSignupModalOpen(true)}
      />

      {/* HOW IT WORKS — NUMBERED */}
      <section className="py-12 md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center lg:[direction:rtl]">
            <div className="[direction:ltr] aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl">
              <img src="/assets/howFull.png" />
            </div>
            <div className="[direction:ltr]">
              <Steps
                title="How does Fulfilment by Seller work?"
                steps={[
                  { title: "Customer places an order", description: "A customer browses for your product on the Surf app or website and places an order for delivery. You get notified instantly on your Seller Hub app." },
                  { title: "Accept and prepare", description: "Confirm the order through your Seller Hub app or point-of-sale integration. Pack it, prepare it, and get it ready for dispatch; all managed from one place." },
                  { title: "Your courier delivers, you collect the fee", description: "Hand the order to your own courier for delivery. The delivery fee you set is collected from the customer at checkout and added directly to your payout." }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOWER COST */}
      {/* <SplitSection
        title="Reach new customers at a lower cost"
        description="Self-delivery partners enjoy the full range of marketing and sales benefits available to Surf sellers, but at a lower commission rate. You deliver, we cover the delivery cost — customers get free delivery."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80"
        ctaText="Get started →"
        onCtaClick={() => setIsSignupModalOpen(true)}
      /> */}

      {/* HYBRID */}
      <SplitSection
        theme="grey"
        reverse
        title="Use Surf's logistics partner network when you need it"
        description="With Fulfilment by Seller's hybrid option, Surf's logistics partner network is always on standby, whether an order comes in after your team's delivery hours, during peak demand periods, or outside your usual delivery area. You stay in control, with backup always ready."
        image="/assets/logistics.png"
      />

      {/* QR STEPS — RESTORING ORIGINAL ICONS */}
      <FeatureGrid
        title="Easy delivery notifications. No setup needed."
        columns={4}
        features={[
          {
            title: "1. Receipt with QR code",
            description: "Each receipt includes a QR code. No additional setup on your end.",
            icon: <QrCode className="w-7 h-7" />
          },
          {
            title: "2. Scan and start delivery",
            description: "Your courier scans the QR code, sees drop-off details, and taps 'Start Delivery'.",
            icon: <Clock className="w-7 h-7" />
          },
          {
            title: "3. Instant customer update",
            description: "Customers get notified in the Surf app that their order is on its way.",
            icon: <Smartphone className="w-7 h-7" />
          },
          {
            title: "4. Easy delivery confirmation",
            description: "Couriers tap 'Mark delivered'. Customer gets confirmation and you get timestamps.",
            icon: <Check className="w-7 h-7" />
          }
        ]}
      />

      <section className="md:py-20 px-8 bg-seller-gradient">
        <div className="max-w-[1280px] mx-auto">
          <div className="p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-white max-w-[480px]">
                Getting started is easy — sign up today
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

      {/* ALSO INCLUDES */}
      <section className="py-12 md:py-20 px-8 bg-white">
        <CardGrid
          title="Self-delivery also includes:"
          cards={[
            {
              title: "Promotional campaigns",
              description: "Convert more app visitors to shoppers with self-funded promotions like free delivery, discounts and specials.",
              image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&auto=format&fit=crop&q=80",
              href: "/solution-promotions"
            },
            {
              title: "Business management portal",
              description: "Track live purchases and make changes to your inventory in real time.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
              href: "/solution-analytics"
            },
            {
              title: "World-class support",
              description: "24/7 support that replies in minutes, available until the last order is delivered.",
              image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=80"
            }
          ]}
        />
      </section>

      <FAQ
        theme="grey"
        items={[
          {
            question: "I have my own delivery staff. Can I still use Surf?",
            answer: "Yes! Surf Self-delivery is ideal for businesses who already have delivery teams and want to increase orders by tapping into the Surf customer base."
          },
          {
            question: "What if I'd like Surf couriers to fulfil some orders?",
            answer: "No problem. Our hybrid fulfilment option lets you tap into the Surf courier network to manage delivery volume, expand your area, and increase orders — all without sacrificing delivery quality."
          },
          {
            question: "How do I deliver my own Surf orders?",
            answer: "Accept orders through the Seller Hub app or POS, prepare the goods, and dispatch with your own staff. Customers are notified at each step automatically."
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
