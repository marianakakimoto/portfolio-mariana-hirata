// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
// A importação do BlogCard foi removida, já que não será mais usada.

function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
};

export default Home;
