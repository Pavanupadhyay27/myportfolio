'use client';

import { RxHeart } from "react-icons/rx";

export const Footer = () => {
  return (
    <footer className="relative w-full py-8 bg-transparent border-t border-[#2A0E61]/10 backdrop-blur-[2px]">
      <div className="relative max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
        {/* Minimal Text */}
        <div className="flex items-center gap-2 text-xs text-gray-400 font-light">
          <span>Made with</span>
          <RxHeart className="text-pink-400 animate-pulse" />
          <span>by Pawan Kumar</span>
        </div>
        <div className="text-[11px] text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
};
