import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SplitSection from "@/components/SplitSection";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { Zap, Menu, Server, Check } from "lucide-react";

export default function SolutionIntegrationsPage() {
  const partners = [
    "Shopify", "WooCommerce", "Lightspeed", "Square", "Stripe",
    "Magento", "BigCommerce", "Wix Commerce", "Clover", "Revel"
  ];

  return (
    <main className="min-h-screen pt-[72px]">
      <Navbar />

      <Hero
        title="Plug and sell"
        description="Connect your existing website with Surf in a few clicks and everything comes with it; products, images, descriptions, prices, and stock levels synced instantly. No manual uploads, no starting from scratch, no tech team needed."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&auto=format&fit=crop&q=80"
        ctaText="Get started"
      />

      {/* 4 FEATURE ICONS */}
      <FeatureGrid
        theme="grey"
        title="Save time and effort with Surf Plug and Sell feature"
        columns={4}
        features={[
          {
            title: "Smoother operations",
            description: "Connect your website once and you are in. Everything — orders, products, and stock flows between your website and Surf without a hassle.",
            icon: <Zap className="w-7 h-7" />
          },
          {
            title: "Easy catalogue management",
            description: "Update a product on your website and it updates on Surf instantly. New items, edited descriptions, fresh images  all synced automatically, no manual work needed.",
            icon: <Menu className="w-7 h-7" />
          },
          {
            title: "Supporting inventory management",
            description: "Your stock levels stay accurate across both platforms at all times. Sell something on your website, stock level syncs.",
            icon: <Server className="w-7 h-7" />
          },
          {
            title: "A whole new sales channel; zero extra effort",
            description: "List your products on Surf and reach more customers across Malta. More visibility, more orders, more revenue, alongside everything you already do.",
            icon: <Check className="w-7 h-7" />
          }
        ]}
      />

      {/* PARTNER LOGOS */}
      {/* <section className="py-8 md:py-20 px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb-4">
            Surf integration partners
          </h2>
          <p className="text-[1.05rem] text-text-2 leading-[1.65] mb-12 max-w-[640px]">
            Connect your existing tools. Each partner has a ready-to-go integration with Surf.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {partners.map(partner => (
              <div key={partner} className="bg-white border border-border-s rounded-xl px-5 py-3 text-[0.875rem] font-bold text-text-2 flex items-center gap-2">
                {partner}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="#" className="inline-flex items-center px-8 py-3.5 rounded-full bg-brand text-white text-[0.9rem] font-bold no-underline hover:bg-brand-d transition-all">
              Find your integration partner →
            </Link>
          </div>
        </div>
      </section> */}

      {/* WAYS TO CONNECT */}
      <section className="py-8 md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-[-0.8px] leading-[1.15] text-black mb-12">
            Different ways to connect your business with Surf
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-border-s rounded-[20px] overflow-hidden group hover:shadow-lg transition-all">
              <div className="h-[240px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80" alt="Surf App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 pb-10">
                <h3 className="text-xl font-bold text-black mb-2">Surf Customer App</h3>
                <p className="text-[0.875rem] text-text-2 leading-[1.6] mb-6">List your store on Surf and get orders for delivery or pickup. Manage orders, catalogues, and store updates through your POS or existing system.</p>
                <Link href="/product-surf-app" className="text-[0.875rem] font-bold text-brand no-underline hover:underline">
                  Surf App for Sellers →
                </Link>
              </div>
            </div>
            <div className="bg-white border border-border-s rounded-[20px] overflow-hidden group hover:shadow-lg transition-all">
              <div className="h-[240px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80" alt="Self Delivery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 pb-10">
                <h3 className="text-xl font-bold text-black mb-2">Surf Self-delivery</h3>
                <p className="text-[0.875rem] text-text-2 leading-[1.6] mb-6">Use your own logistics to deliver Surf orders. Connect your current fulfilment setup to Surf and we cover the delivery cost for customers.</p>
                <Link href="/product-self-delivery" className="text-[0.875rem] font-bold text-brand no-underline hover:underline">
                  Discover Self-delivery →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API */}
      <SplitSection
        title="Build an integration with the Surf API"
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80"
        ctaText="See documentation →"
      >
        <p className="text-lg text-text-2 leading-[1.7]">Use the power of Surf for your business with our self-serve integration portal and suite of developer tools to manage catalogue, store, and order data.</p>
        <p className="text-lg text-text-2 leading-[1.7]">Access API documentation, SDKs, step-by-step tutorials, and technical support to integrate Surf APIs with your operations in just a few lines of code.</p>
      </SplitSection>

      {/* NOT A PARTNER YET */}
      <section className="py-8 md:py-20 px-8 bg-grey">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-grey rounded-[24px] p-[56px_48px] flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-extrabold tracking-[-0.6px] text-black">
                Not a Surf seller yet?
              </h2>
              <p className="text-[1.05rem] text-text-2 mt-2 leading-[1.5]">
                We'll need a few details about you and your business — then we're ready to set you up for success.
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

      <FAQ
        items={[
          {
            question: "How do I get Surf orders on my POS system?",
            answer: "If your POS or platform is listed on our integrations page, you can get started directly. If not, contact our seller team to request an integration or explore our API documentation."
          },
          {
            question: "How long does it take to integrate?",
            answer: "If Surf already has an integration for your system, you can expect to be onboarded within 1–2 weeks. New integrations vary depending on technical resources."
          },
          {
            question: "Can I integrate with Surf directly?",
            answer: "Yes. Visit Surf for Developers to access our API documentation, SDKs, and support for building your own integration."
          }
        ]}
      />

      <Footer />
    </main>
  );
}
