import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/main/hero').then(mod => ({ default: mod.Hero })));
const TechStack = dynamic(() => import('@/components/main/tech-stack').then(mod => ({ default: mod.TechStack })));
const Projects = dynamic(() => import('@/components/main/projects').then(mod => ({ default: mod.Projects })));
const Contact = dynamic(() => import('@/components/main/contact').then(mod => ({ default: mod.Contact })));

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
