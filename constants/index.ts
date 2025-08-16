import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/pawan-kumar-ba44a6266/",
  },
  {
    name: "X (Twitter)",
    icon: RxTwitterLogo,
    link: "https://x.com/pawanupadhyay27?t=-8Y7Ok0ysGptr0XpgBy9Bg&s=09",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Pavanupadhyay27",
  },
] as const;



export const PROJECTS = [
  {
    title: "Web3Social - Decentralized Social Platform",
    description:
      "A next-generation decentralized social networking platform that puts privacy and security first. Built with cutting-edge blockchain technology, Web3Social offers a global community experience where users truly own their data and enjoy lightning-fast interactions in a secure environment.",
    image: "/projects/socio3.jpg",
    link: "https://web3social.example.com",
  },
  {
    title: "Kingsukh - Hotel Booking Platform",
    description:
      "A full-featured hotel booking platform built with Next.js and modern web technologies. This platform offers real-time room availability, secure payment processing, and an intuitive booking interface. Features include interactive room previews, dynamic pricing, user authentication, and a responsive admin dashboard for hotel management.",
    image: "/projects/kingsukh.png",
    link: "https://kingsukh.example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
