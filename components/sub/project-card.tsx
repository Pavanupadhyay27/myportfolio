"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="block overflow-hidden rounded-xl border border-[#2A0E61]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
      >
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="relative p-6 transition-all duration-300 backdrop-blur-sm bg-[#030014]/10">
          <h1 className="text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-purple-400">{title}</h1>
          <p className="text-sm sm:text-base text-gray-300/90 line-clamp-3 group-hover:text-gray-200">{description}</p>
          <div className="mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300">
              Learn more →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
