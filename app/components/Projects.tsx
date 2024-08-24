'use client';
import Image from 'next/image';
import { useState } from 'react';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import behind from '../../public/assets/projects/behind.webp';
import waldo from '../../public/assets/projects/waldo.webp';
import projectx from '../../public/assets/projects/projectx.webp';
import masjid from '../../public/assets/projects/masjid.webp';
import onlyllc from '../../public/assets/projects/only.webp';
import boyah from '../../public/assets/projects/boyah.webp';
import crypto from '../../public/assets/projects/crypto-suuq.webp';
import github from '../../public/assets/projects/GitHub.webp';
import td from '../../public/assets/projects/TD.webp';
import nasa from '../../public/assets/projects/NASA.webp';
import nomad from '../../public/assets/projects/nomad.webp';
import halal from '../../public/assets/projects/halal.webp';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      title: 'Behind the Cutz',
      description: 'A web based mobile waitlist app for my local barber.',
      image: behind,
      alt: 'Behind the cutz landing page to join waitlist',
      link: 'https://github.com/LosmanDev/BehindTheCutz',
      visit: 'https://behindthecutz.vercel.app/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="logos--nextjs-icon w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Next.js</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--react logo w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">React</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--tailwindcss w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Tailwindcss</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="logos--supabase-icon w-2 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Supabase</span>
          </div>
        </>
      ),
    },
    {
      title: 'Waldo Immigration and Refugee Assistance Center Inc',
      description: 'A Nonprofit Organization based in Boston, MA.',
      image: waldo,
      alt: 'Waldo Immigration and Refugee Assistance Center Inc landing page ',
      link: 'https://github.com/LosmanDev/Waldo-Refugee',
      visit: 'https://waldorefugee.org/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="logos--nextjs-icon w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Next.js</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--react logo w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">React</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--tailwindcss w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Tailwindcss</span>
          </div>
        </>
      ),
    },
    {
      title: 'Project X',
      description:
        'Full Stack web application for radiology reporting of COVID-19 chest X-Rays.',
      image: projectx,
      alt: 'Project X landing page',
      link: 'https://github.com/Quick07/Hack-Diversity-SWE-Group-6-Project',
      visit: 'https://techdive6.onrender.com/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="logos--semantic-ui rounded-sm w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Semantic UI</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="simple-icons--mui w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">MUI</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="vscode-icons--file-type-styled w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Styled Components</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--react logo w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">React</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="logos--nodejs-icon w-4 h-4"></span>
            <span className="text-[7px] text-center">Node.js</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--mongodb w-4 h-4"></span>
            <span className="text-[7px] text-center">MongoDB</span>
          </div>
        </>
      ),
    },
    {
      title: 'Masjid At Taqwa',
      description:
        'Local masjid in Malden, MA. A Beacon of Faith and Education',
      image: masjid,
      alt: 'Masjid At Taqwa Landing Page',
      link: 'https://github.com/LosmanDev/Masjid-AT-Taqwa',
      visit: 'https://masjid-at-taqwa.vercel.app/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="logos--nextjs-icon w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Next.js</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--react logo w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">React</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--tailwindcss w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Tailwindcss</span>
          </div>
        </>
      ),
    },
    {
      title: '1 and Only Staffing LLC',
      description: 'Nurse staffing agency based in Minnesota.',
      image: onlyllc,
      alt: '1 and Only Staffing LLC landing page.',
      link: 'https://github.com/LosmanDev/1AndOnlyStaffingLLC',
      visit: 'https://1andonlystaffingllc.com/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--html w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">HTML</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--css w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--bootstrap w-5 h-5 mr-1"></span>
            <span className="text-[7px] text-center">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--javascript w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">JavaScript</span>
          </div>
        </>
      ),
    },
    {
      title: 'Boyah J Farah',
      description: "Boyah J Farah's blog website.",
      image: boyah,
      alt: 'Blog Site for Boyah J Farah',
      link: 'https://github.com/LosmanDev/BoyahJFarah',
      visit: 'https://boyahjfarah.vercel.app/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="logos--nextjs-icon w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Next.js</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--react logo w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">React</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--tailwindcss w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Tailwindcss</span>
          </div>
        </>
      ),
    },
    {
      title: 'Crypto Suuq',
      description:
        'Track your favorite crypto prices utilizing the coin ranking API.',
      image: crypto,
      alt: 'Crypto Suuq landing with latest crypto prices',
      link: 'https://github.com/LosmanDev/crypto-suuq',
      visit: 'https://crypto-suuq.netlify.app/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--react logo w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">React</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--tailwindcss w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">Tailwindcss</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="icon-park-twotone--api w-4 h-4 mr-1 dark:bg-white pr-2 pt-2"></span>
            <span className="text-[7px] text-center">API</span>
          </div>
        </>
      ),
    },
    {
      title: 'Github Profile Finder',
      description:
        'Utilizing GitHubs API, you can track every user and see their profile and latest public repos.',
      image: github,
      alt: 'Github profile finder utilizing githubs api to track users',
      link: 'https://github.com/LosmanDev/Github-Person-Finder',
      visit: 'https://losmandev.github.io/Github-Person-Finder/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--html w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">HTML</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--css w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--bootstrap w-5 h-5 mr-1"></span>
            <span className="text-[7px] text-center">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--javascript w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">JavaScript</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="icon-park-twotone--api w-4 h-4 mr-1 dark:bg-white"></span>
            <span className="text-[7px] text-center">API</span>
          </div>
        </>
      ),
    },
    {
      title: 'TD Garden Events',
      description:
        'A clone of the TD Garden Events section using Javascript to directly manipulate the DOM',
      image: td,
      alt: 'TD Garden Events website',
      link: 'https://github.com/LosmanDev/TD-Garden-Clone',
      visit: 'https://losmandev.github.io/TD-Garden-Clone/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--html w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">HTML</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--css w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--bootstrap w-5 h-5 mr-1"></span>
            <span className="text-[7px] text-center">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--javascript w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">JavaScript</span>
          </div>
        </>
      ),
    },
    {
      title: 'NASA Photo of The Day',
      description:
        "Explore a daily showcase of exceptional images from 1995 to the present, captured through NASA's API.",
      image: nasa,
      alt: 'NASA Photo of the day.',
      link: 'https://github.com/LosmanDev/NASA-Photo-API',
      visit: 'https://losmandev.github.io/NASA-Photo-API/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--html w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">HTML</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--css w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--bootstrap w-5 h-5 mr-1"></span>
            <span className="text-[7px] text-center">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--javascript w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">JavaScript</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="icon-park-twotone--api w-4 h-4 dark:bg-white pr-2 pt-2"></span>
            <span className="text-[7px] text-center">API</span>
          </div>
        </>
      ),
    },
    {
      title: 'Nomad Energy',
      description:
        'A solar energy company providing an affordable, reliable and renewable energy located in Garoowe, Nugaal Somalia.',
      image: nomad,
      alt: 'Nomad Energy landing page.',
      link: 'https://github.com/LosmanDev/Nomad-Energy',
      visit: 'https://losmandev.github.io/Nomad-Energy/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--html w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">HTML</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--css w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--bootstrap w-5 h-5 mr-1"></span>
            <span className="text-[7px] text-center">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--jquery w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">jQuery</span>
          </div>
        </>
      ),
    },
    {
      title: 'Halal Meat Express',
      description:
        'Halal Meat Express is a local shop that sells halal meat and goods, and also offers a money transfer service to various locations around the world.',
      image: halal,
      alt: 'Halal Meat Express landing page.',
      link: 'https://github.com/LosmanDev/HalalMeatExpress',
      visit: 'https://losmandev.github.io/HalalMeatExpress/',
      techStack: (
        <>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--html w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">HTML</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="skill-icons--css w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">CSS</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--bootstrap w-5 h-5 mr-1"></span>
            <span className="text-[7px] text-center">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center justify-center text-neutral-600 dark:text-white pr-2 pt-2">
            <span className="devicon--jquery w-4 h-4 mr-1"></span>
            <span className="text-[7px] text-center">jQuery</span>
          </div>
        </>
      ),
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  return (
    <section id="projects" className="container px-5 lg:w-4/6 mx-auto">
      <h1
        data-aos="fade-down"
        data-aos-delay="200"
        className="text-neutral-600 dark:text-white font-bold text-2xl pt-10"
      >
        Projects
      </h1>
      <div
        data-aos="fade-right"
        data-aos-delay="250"
        className="w-20 h-1 shadow-projects dark:bg-white bg-neutral-600 rounded mt-2 mb-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      ></div>

      <div className="relative h-[600px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full"
          >
            <CardContainer className="inter-var shadow-projects rounded-xl">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  data-aos="fade"
                  data-aos-delay="200"
                  translateZ="50"
                  className="text-center text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {projects[currentIndex].title}
                </CardItem>

                <CardItem
                  data-aos="fade"
                  data-aos-delay="400"
                  translateZ="100"
                  className="w-full mt-4 mb-5"
                >
                  <Image
                    src={projects[currentIndex].image}
                    className="w-full object-contain object-center rounded group-hover/card:shadow-xl"
                    alt={projects[currentIndex].alt}
                  />
                </CardItem>
                <CardItem
                  data-aos="fade"
                  data-aos-delay="600"
                  as="p"
                  translateZ="60"
                  className="mb-5 text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
                >
                  {projects[currentIndex].description}
                </CardItem>
                {projects[currentIndex].techStack && (
                  <CardItem
                    data-aos="fade"
                    data-aos-delay="800"
                    translateZ="60"
                    className="mb-5 flex flex-row justify-center items-end"
                  >
                    {projects[currentIndex].techStack}
                  </CardItem>
                )}
                <div className="flex justify-between items-center mt-5">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={projects[currentIndex].link}
                    target="_blank"
                    className="text-center px-4 py-2 rounded-xl border border-neutral-600 dark:border-white dark:text-white text-neutral-600 text-xs font-bold  hover:bg-neutral-600 hover:text-white pt-2 transition-all duration-300"
                  >
                    Code
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={projects[currentIndex].visit}
                    target="_blank"
                    className="text-center px-4 py-2 rounded-xl border border-neutral-600 dark:border-white dark:text-white text-neutral-600 text-xs font-bold  hover:bg-neutral-600 hover:text-white pt-2 transition-all duration-300"
                  >
                    Visit
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        </AnimatePresence>

        <button
          data-aos="fade-down"
          onClick={prevProject}
          className="absolute sm:left-[87px] left-[-50px] sm:top-[37%] top-[29%] transform -translate-y-1/2 z-10 group p-10"
          aria-label="Previous project"
        >
          <span className="solar--alt-arrow-left-bold-duotone  bg-[linear-gradient(to_right,#3B82F6,#A5B4FC,#93C5FD,#DDD6FE,#60A5FA)] transition duration-300 ease-in-out transform group-hover:scale-150 group-active:scale-90"></span>
        </button>
        <button
          data-aos="fade-down"
          onClick={nextProject}
          className="absolute sm:right-[87px] right-[-50px] sm:top-[37%] top-[29%] transform -translate-y-1/2 z-10 group p-10 "
          aria-label="Next project"
        >
          <span className="solar--alt-arrow-right-bold-duotone bg-[linear-gradient(to_right,#3B82F6,#A5B4FC,#93C5FD,#DDD6FE,#60A5FA)] transition duration-300 ease-in-out transform group-hover:scale-150 group-active:scale-90"></span>
        </button>
      </div>
    </section>
  );
}
