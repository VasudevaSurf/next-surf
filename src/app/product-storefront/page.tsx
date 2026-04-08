import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { Home, Star, Users, Clock, Heart, Shield, Monitor } from "lucide-react";

export default function ProductStorefrontPage() {
  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Your entire business, in your pocket."
        description="Accept orders instantly, monitor your sales, and update your listings. right from your phone."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1800&auto=format&fit=crop&q=80"
        ctaText="Sign up"
      />

      {/* WHY CHOOSE */}
      <FeatureGrid
        theme="grey"
        title="Why sellers choose Surf Storefront"
        features={[
          {
            title: "Your brand, your customers",
            description: "Customise your logos, colours, and images. Build direct relationships with customers who keep coming back.",
            icon: <Home className="w-7 h-7" />
          },
          {
            title: "Lowest commission rates",
            description: "Keep more of every order with our lowest-in-market commission rates. Locally built brands pay 0%.",
            icon: <Star className="w-7 h-7" />
          },
          {
            title: "Trusted experience & support",
            description: "Give your customers the proven Surf ordering flow, while we manage all inquiries, refunds, and issue resolution.",
            icon: <Users className="w-7 h-7" />
          },
          {
            title: "Quick and easy setup",
            description: "Connect to your existing Shopify or WooCommerce store. No new hardware, no training required.",
            icon: <Clock className="w-7 h-7" />
          }
        ]}
        columns={4}
      />

      {/* HOW STOREFRONT WORKS */}
      <SplitSection
        title="How the Seller Hub app works"
        description={
          <>
            Register as a seller directly from the app, get approved by our team, and start listing your products from your phone the same day.
            <br /><br />
            Already have a website? Connect it through the Surf admin backend on your laptop, sync your entire product catalogue at once, and manage everything going forward, right from the app.
          </>
        }
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
        ctaText="Sign up →"
      />

      {/* ONE SYSTEM */}
      <SplitSection
        theme="grey"
        reverse
        title="What you get with Surf seller hub"
        description={
          <>
            <b>Never miss an order or a low stock alert </b><br></br>
            Get notified the moment a new order comes in — accept it, manage it, and update its status directly from the app. Receive automatic low stock alerts so you're never caught off guard.
            <br></br><br></br>
            <b>Add new products in seconds — right from your phone</b> <br></br>
            Got a new product in store? List it instantly. Take a photo on the spot or choose from your gallery, add the product name, description, price, and stock level, and it's live on Surf in a few taps.
            <br></br><br></br>
            <b>Multiple users. One store. Full control.</b> <br></br>
            Give your team access to the Seller Hub app.
            Your sales staff in the store can see incoming orders, pack them, and mark them as ready, all from their own device. You stay in control while your team handles the ground work.
            <br></br><br></br>
            <b>Track sales and get smart insights</b> <br></br>
            Monitor your revenue, top-selling products and much more. Use the built-in Seller AI assistant to get instant answers- ask which products are selling fastest, where your orders are coming from, and what to restock next.
          </>
        }
        image="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80"
        ctaText="Sign up →"
      />

      {/* WHAT YOU GET */}
      {/* <FeatureGrid
        title="What you get with Storefront"
        features={[
          {
            title: "Own your customer relationships",
            description: "Take orders directly through your own channels and build lasting connections with your customers.",
            icon: <Heart className="w-7 h-7" />
          },
          {
            title: "No development costs",
            description: "Skip expensive website builds. Get a professional ordering system ready in days, not months.",
            icon: <Shield className="w-7 h-7" />
          },
          {
            title: "No operational headaches",
            description: "Surf manages payment processing, customer support, refunds, and technical issues end to end.",
            icon: <Clock className="w-7 h-7" />
          },
          {
            title: "Works everywhere",
            description: "One platform for delivery, pickup, and in-store QR ordering. Use Surf's couriers, your own fleet, or both.",
            icon: <Monitor className="w-7 h-7" />
          }
        ]}
        columns={4}
      /> */}

      <section className="py-8 md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black">
                Getting started is easy
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                Download the Surf Seller Hub app, register or login to your business and manage your online store entirely from your phone.
              </p>
            </div>
            <Link
              href="#"
              className="px-[28px] py-[12px] rounded-full bg-black text-white text-base font-bold no-underline hover:-translate-y-0.5 transition-all"
            >
              Download the app
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        items={[
          {
            question: "How do I start with Storefront?",
            answer: "Sign up via the form. Getting started only takes a few days. We'll guide you through connecting your existing store or setting up your product catalogue."
          },
          {
            question: "Who handles customer support for Storefront orders?",
            answer: "Surf takes care of all end-customer support for your Storefront orders, including inquiries, refunds, and technical issues. You focus on running your business."
          },
          {
            question: "Do I need another device if I'm already on Surf?",
            answer: "No. Your existing equipment or integrations will work. No need for new hardware or staff training."
          },
          {
            question: "What payment methods does Surf support?",
            answer: "Surf supports payments via credit/debit cards, Google Pay, and Apple Pay."
          }
        ]}
      />

      <Footer />
    </main>
  );
}
