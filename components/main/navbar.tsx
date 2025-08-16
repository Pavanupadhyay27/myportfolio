'use client';
import { useState } from "react";
import Link from "next/link";

import { LINKS, NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-gradient-to-b from-[#03001417] via-[#03001432] to-transparent backdrop-blur-md z-[100] px-4 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto max-w-7xl">
        {/* Web Navbar */}
        <div className="hidden md:flex h-full flex-row items-center justify-center flex-1">
          <div className="flex items-center justify-center gap-8 h-auto px-6 py-2 rounded-full text-gray-200 bg-gradient-to-r from-[#2A0E61]/30 via-[#2A0E61]/50 to-[#2A0E61]/30 backdrop-blur-md border border-[#2A0E61]/50 hover:border-purple-500/50 transition-all duration-300">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.title}
                href={link.link}
                className="relative cursor-pointer group transition-all duration-300 ease-in-out"
              >
                <span className="text-gray-300 group-hover:text-purple-500 transition-colors">
                  {link.title}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-gray-300 focus:outline-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-purple-500/20 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-[65px] left-0 w-full backdrop-blur-lg bg-[#030014]/90 transform transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.title}
                href={link.link}
                className="w-full text-center py-2 px-4 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};