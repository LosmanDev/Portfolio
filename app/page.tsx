'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Landing from './components/Landing';
import { Navbar } from './components/Navbar';
import { TracingBeam } from './components/ui/tracing-beam';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <>
      <section className="flex flex-col min-h-screen dark:bg-black">
        <Navbar
          navItems={[
            { name: 'Home', link: '/' },
            { name: 'Projects', link: '#projects' },
            { name: 'Contact', link: '#contact' },
          ]}
        />
        <main className="flex-grow">
          <TracingBeam className="px-6">
            <Landing />
            <Projects />
            <Contact />
          </TracingBeam>
          <Footer />
        </main>
      </section>
    </>
  );
}
