"use client";

import { motion as m } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <m.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-4 md:px-20 mt-32 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-8 justify-center items-center md:items-start m-auto text-center md:text-left">
        <m.p
          variants={slideInFromTop}
          className="text-sm md:text-base text-purple-400 tracking-wider uppercase"
        >
          Full Stack & Web3 Developer
        </m.p>

        <m.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
              Pawan Kumar
            </span>
          </h1>
        </m.div>

        <m.div
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-xl text-gray-400 max-w-2xl px-4"
        >
          <TypeAnimation
            sequence={[
              'Building modern web experiences',
              2000,
              'Creating decentralized solutions',
              2000,
              'Transforming ideas into reality',
              2000
            ]}
            wrapper="p"
            speed={40}
            repeat={Infinity}
            cursor={true}
            className="font-light"
          />
        </m.div>

        <m.div 
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 mt-4"
        >
          <m.a
            variants={slideInFromLeft(1.1)}
            href="/documents/Pawankumar's Resume.pdf"
            download="Pawankumar's Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 button-primary text-white rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            Download CV
            <svg 
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </m.a>
          <m.a
            variants={slideInFromLeft(1.2)}
            href="#contact"
            className="px-6 py-3 rounded-full font-medium border border-purple-500 text-white hover:bg-purple-500/10 transition-all"
          >
            Let&apos;s Talk
          </m.a>
        </m.div>
      </div>

      <m.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden md:flex"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none animate-pulse"
        />
      </m.div>
    </m.div>
  );
};
