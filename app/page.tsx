import Landing from './components/Landing';
import { Navbar } from './components/Navbar';
import { TracingBeam } from './components/ui/tracing-beam';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <section className="flex flex-col min-h-screen dark:bg-black">
        <Navbar
          navItems={[
            { name: 'Home', link: '/' },
            { name: 'Projects', link: '#projects' },
            { name: 'Contact', link: '/contact' },
          ]}
        />
        <main className="flex-grow">
          <TracingBeam className="px-6">
            <Landing />
            <Projects />
          </TracingBeam>
          <Footer />
        </main>
      </section>
    </>
  );
}
