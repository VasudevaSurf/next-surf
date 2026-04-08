"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SignupModal from "./registration/SignupModal";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const navLinks = [
    {
      id: "products",
      label: "Products",
      items: [
        { label: "Home", href: "/" },
        { label: "Surf shopping App", href: "/product-surf-app" },
        { label: "Fulfillment by seller", href: "/product-self-delivery" },
        { label: "Surf Seller hub", href: "/product-storefront" },
      ],
    },
    {
      id: "solutions",
      label: "Solutions",
      items: [
        { label: "Plug & Sell", href: "/solution-integrations" },
        { label: "Analytics & Insights", href: "/solution-analytics" },
        { label: "Promotions", href: "/solution-promotions" },
        //{ label: "Surf+ for Sellers", href: "/solution-seller-plus" },
      ],
    },
    // {
    //   id: "business",
    //   label: "Business type",
    //   items: [
    //     { label: "Retailers", href: "/business-retailers" },
    //     { label: "Beauty & Cosmetics", href: "/business-beauty" },
    //     { label: "Construction & B2B", href: "/business-construction" },
    //     { label: "Food & Grocery", href: "/business-food" },
    //     { label: "Fashion & Apparel", href: "/business-fashion" },
    //     { label: "Electronics", href: "/business-electronics" },
    //   ],
    // },
    // {
    //   id: "resources",
    //   label: "Resources",
    //   items: [
    //     { label: "Learning Center", href: "#" },
    //     { label: "Seller Blog", href: "#" },
    //     { label: "Success Stories", href: "#" },
    //   ],
    // },
    {
      id: "learning-center",
      label: "Learning Center",
      href: "#",
    },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm h-16" : "bg-white/80 backdrop-blur-md h-[72px]"
          } border-b border-border-s flex items-center`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-brand font-extrabold text-2xl tracking-tight no-underline shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Surf Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            Surf
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 list-none flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                {link.items ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.id)}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-[0.9rem] font-medium transition-colors cursor-pointer bg-none border-none outline-none ${activeDropdown === link.id ? "bg-grey text-brand" : "text-black hover:bg-grey"
                        }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.id ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.id && (
                        <>
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="absolute top-full left-0 mt-2 bg-white border border-border-s rounded-2xl p-2 shadow-xl min-width-[220px] z-[999] overflow-hidden"
                          >
                            {link.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-3.5 py-2.5 rounded-xl text-sm font-normal text-black no-underline hover:bg-grey transition-colors whitespace-nowrap"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-[0.9rem] font-medium transition-colors text-black hover:bg-grey no-underline"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="#"
              className="px-5 py-[9px] rounded-full border-[1.5px] border-brand bg-transparent text-sm font-semibold text-brand hover:bg-brand/5 transition-all no-underline inline-flex items-center"
            >
              Log in
            </Link>
            <button
              onClick={() => setIsSignupModalOpen(true)}
              className="px-5.5 py-2.5 rounded-full border-none bg-brand text-sm font-semibold text-white hover:bg-brand-d transition-all no-underline inline-flex items-center cursor-pointer"
            >
              Start for free
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-grey transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-border-s md:hidden overflow-hidden shadow-lg"
            >
              <div className="p-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.id} className="flex flex-col gap-2">
                    {link.items ? (
                      <>
                        <div className="text-xs font-bold uppercase tracking-wider text-grey-3 px-2">
                          {link.label}
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {link.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-4 py-2 hover:bg-grey rounded-lg text-sm transition-colors text-black no-underline"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href || "#"}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-2 hover:bg-grey rounded-lg text-[0.9rem] font-medium transition-colors text-black no-underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <hr className="border-border-s" />
                <div className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="w-full text-center py-3 rounded-full border-[1.5px] border-brand font-semibold text-sm no-underline text-brand"
                  >
                    Log in
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsSignupModalOpen(true);
                    }}
                    className="w-full text-center py-3.5 rounded-full bg-brand text-white font-semibold text-sm no-underline cursor-pointer border-none"
                  >
                    Start for free
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {isSignupModalOpen && (
        <SignupModal onClose={() => setIsSignupModalOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
