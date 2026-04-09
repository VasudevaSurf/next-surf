import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white/75 max-sm:py-12 sm:pt-16 sm:pb-8 px-6 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-10 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="flex flex-col gap-2 sm:gap-4">
            <Link href="/" className="text-white text-2xl font-extrabold no-underline mb-4 block">
              Surf
            </Link>
            <p className="text-[0.85rem] leading-[1.7] text-white/50 mb-5 max-w-[280px]">
              The marketplace built for sellers. Lowest fees, widest reach, and the tools to grow on your own terms.
            </p>
            <div className="flex gap-3 flex-wrap items-center">
              <img
                src="https://images.ctfassets.net/23u853certza/7xaqvusYmbDlca5umD9bZo/a0fa3e1c7ca41a70c6285d6c7b18c92b/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="App Store"
                className="h-9 filter brightness-[0.7] hover:brightness-100 transition-all cursor-pointer"
              />
              <img
                src="https://images.ctfassets.net/23u853certza/1Djo4jOj0doR5PfWVzj9O6/2bba92728f2cb1bcc5196faa57c09f3d/google-play-badge.png"
                alt="Google Play"
                className="h-9 filter brightness-[0.7] hover:brightness-100 transition-all cursor-pointer"
              />
            </div>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/45 text-[0.72rem] font-semibold tracking-[1.5px] uppercase">Products</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><Link href="/product-surf-app" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Surf Customer App</Link></li>
              <li><Link href="/product-self-delivery" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Self-delivery</Link></li>
              <li><Link href="/product-storefront" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Surf Storefront</Link></li>
            </ul>
          </div>

          {/* Solution Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/45 text-[0.72rem] font-semibold tracking-[1.5px] uppercase">Solutions</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><Link href="/solution-integrations" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Integrations</Link></li>
              <li><Link href="/solution-analytics" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Analytics & Insights</Link></li>
              <li><Link href="/solution-promotions" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Promotions</Link></li>
              <li><Link href="/solution-seller-plus" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Surf+ for Sellers</Link></li>
            </ul>
          </div>

          {/* Business Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/45 text-[0.72rem] font-semibold tracking-[1.5px] uppercase">Business type</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><Link href="/business-retailers" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Retailers</Link></li>
              <li><Link href="/business-beauty" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Beauty & Cosmetics</Link></li>
              <li><Link href="/business-construction" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Construction & B2B</Link></li>
              <li><Link href="/business-food" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Food & Grocery</Link></li>
              <li><Link href="/business-fashion" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Fashion & Apparel</Link></li>
              <li><Link href="/business-electronics" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Electronics</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/45 text-[0.72rem] font-semibold tracking-[1.5px] uppercase">Company</h4>
            <ul className="list-none flex flex-col gap-2.5">
              <li><Link href="#" className="text-white/65 hover:text-white text-sm no-underline transition-colors">About Surf</Link></li>
              <li><Link href="#" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Seller Blog</Link></li>
              <li><Link href="#" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Success Stories</Link></li>
              <li><Link href="#" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Support</Link></li>
              <li><Link href="#" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-white/65 hover:text-white text-sm no-underline transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-[0.8rem] text-white/35">© Surf 2026 · All rights reserved</p>
          <div className="flex gap-5">
            <Link href="#" className="text-[0.8rem] text-white/35 no-underline hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="#" className="text-[0.8rem] text-white/35 no-underline hover:text-white/70 transition-colors">Terms</Link>
            <Link href="#" className="text-[0.8rem] text-white/35 no-underline hover:text-white/70 transition-colors">Cookies</Link>
            <Link href="#" className="text-[0.8rem] text-white/35 no-underline hover:text-white/70 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
