'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  {
    category: "Frontend & UI",
    technologies: [
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
      { name: "Material-UI", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" }
    ]
  },
  {
    category: "Backend & Database",
    technologies: [
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg" },
      { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
      { name: "REST API", icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" },
      { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" }
    ]
  },
  {
    category: "Web3 & Blockchain",
    technologies: [
      { name: "Solidity", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg" },
      { name: "Hardhat", icon: "https://hardhat.org/favicon.ico" },
      { name: "Ethers.js", icon: "https://raw.githubusercontent.com/ethers-io/logo/master/ethers-logo.svg" },
      { name: "Web3.js", icon: "https://raw.githubusercontent.com/ChainSafe/web3.js/1.x/assets/logo/web3js.svg" },
      { name: "IPFS", icon: "https://www.vectorlogo.zone/logos/ipfs/ipfs-icon.svg" },
      { name: "Metamask", icon: "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg" },
      { name: "Truffle", icon: "https://trufflesuite.com/img/truffle-logo-dark.svg" },
      { name: "OpenZeppelin", icon: "https://www.vectorlogo.zone/logos/openzeppelin/openzeppelin-icon.svg" }
    ]
  },
  {
    category: "Development Tools",
    technologies: [
      { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
      { name: "NPM", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" },
      { name: "Yarn", icon: "https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-circle.svg" }
    ]
  }
];

export const TechStack = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20 overflow-hidden" id="tech-stack">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#2A0E61]/30 to-[#2A0E61]/0 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">Tech</span>{" "}
              <span className="text-white">Stack</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300 max-w-2xl"
              >
                Leveraging cutting-edge technologies to build robust full-stack applications and decentralized solutions.
              </motion.p>
              <span className="h-1 w-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full bg-[#0E1016]/50 backdrop-blur-lg rounded-xl p-6 border border-[#2A0E61]/50 hover:border-purple-500/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 p-2 px-4 rounded-lg bg-[#2A0E61]/20 hover:bg-[#2A0E61]/40 transition-all duration-300 border border-[#2A0E61]/50"
                  >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Remove export default as we're using named export
