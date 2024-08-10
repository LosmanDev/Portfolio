import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
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
          <span
            style={{ width: '1rem', height: '1rem' }}
            className="logos--nextjs-icon mr-1"
          ></span>
          <span
            style={{ width: '1rem', height: '1rem' }}
            className="devicon--react logo mr-1"
          ></span>
          <span
            style={{ width: '1rem', height: '1rem' }}
            className="devicon--tailwindcss mr-1"
          ></span>
          <span
            style={{ width: '1rem', height: '1rem' }}
            className="devicon--postgresql mr-1"
          ></span>
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
          <span
            style={{ width: '1rem', height: '1rem' }}
            className="logos--nextjs-icon mr-1"
          ></span>
          <span
            style={{ width: '1rem', height: '1rem' }}
            className="devicon--react logo mr-1"
          ></span>
          <span
            style={{ width: '1rem', height: '1rem' }}
            className="devicon--tailwindcss mr-1"
          ></span>
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
    },
    {
      title: 'Masjid At Taqwa',
      description:
        'Local masjid in Malden, MA. A Beacon of Faith and Education',
      image: masjid,
      alt: 'Masjid At Taqwa Landing Page',
      link: 'https://github.com/LosmanDev/Masjid-AT-Taqwa',
      visit: 'https://masjid-at-taqwa.vercel.app/',
    },
    {
      title: '1 and Only Staffing LLC',
      description: 'Nurse staffing agency based in Minnesota.',
      image: onlyllc,
      alt: '1 and Only Staffing LLC landing page.',
      link: 'https://github.com/LosmanDev/1AndOnlyStaffingLLC',
      visit: 'https://1andonlystaffingllc.com/',
    },
    {
      title: 'Boyah J Farah',
      description: "Boyah J Farah's blog website.",
      image: boyah,
      alt: 'Blog Site for Boyah J Farah',
      link: 'https://github.com/LosmanDev/BoyahJFarah',
      visit: 'https://boyahjfarah.vercel.app/',
    },
    {
      title: 'Crypto Suuq',
      description:
        'Track your favorite crypto prices utilizing the coin ranking API.',
      image: crypto,
      alt: 'Crypto Suuq landing with latest crypto prices',
      link: 'https://github.com/LosmanDev/crypto-suuq',
      visit: 'https://crypto-suuq.netlify.app/',
    },
    {
      title: 'Github Profile Finder',
      description:
        'Utilizing GitHubs API, you can track every user and see their profile and latest public repos.',
      image: github,
      alt: 'Github profile finder utilizing githubs api to track users',
      link: 'https://github.com/LosmanDev/Github-Person-Finder',
      visit: 'https://losmandev.github.io/Github-Person-Finder/',
    },
    {
      title: 'TD Garden Events',
      description:
        'A clone of the TD Garden Events section using Javascript to directly manipulate the DOM',
      image: td,
      alt: 'TD Garden Events website',
      link: 'https://github.com/LosmanDev/TD-Garden-Clone',
      visit: 'https://losmandev.github.io/TD-Garden-Clone/',
    },
    {
      title: 'NASA Photo of The Day',
      description:
        "Explore a daily showcase of exceptional images from 1995 to the present, captured through NASA's API.",
      image: nasa,
      alt: 'NASA Photo of the day.',

      link: 'https://github.com/LosmanDev/NASA-Photo-API',
      visit: 'https://losmandev.github.io/NASA-Photo-API/',
    },
    {
      title: 'Nomad Energy',
      description:
        'A solar energy company providing an affordable, reliable and renewable energy located in Garoowe, Nugaal Somalia.',
      image: nomad,
      alt: 'Nomad Energy landing page.',
      link: 'https://github.com/LosmanDev/Nomad-Energy',
      visit: 'https://losmandev.github.io/Nomad-Energy/',
    },
    {
      title: 'Halal Meat Express',
      description:
        'Halal Meat Express is a local shop that sells halal meat and goods, and also offers a money transfer service to various locations around the world.',
      image: halal,
      alt: 'Halal Meat Express landing page.',
      link: 'https://github.com/LosmanDev/HalalMeatExpress',
      visit: 'https://losmandev.github.io/HalalMeatExpress/',
    },
  ];

  return (
    <>
      <section id="projects" className="container px-5 lg:w-4/6 mx-auto ">
        <h1 className="text-neutral-600 dark:text-white font-bold text-2xl">
          Projects
        </h1>
        <div className="w-20 h-1 dark:bg-white bg-neutral-600 rounded mt-2 mb-4"></div>
        <div className="flex flex-row gap-16 items-center justify-center flex-wrap">
          {projects.map((project, index) => (
            <CardContainer
              key={index}
              className="inter-var shadow-projects rounded-xl "
            >
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-center text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    className="w-full object-contain object-center rounded group-hover/card:shadow-xl"
                    alt={project.alt}
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-8 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                {project.techStack && (
                  <CardItem translateZ="60" className="mt-2">
                    {project.techStack}
                  </CardItem>
                )}
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Code →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.visit}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-neutral-600 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Visit
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
    </>
  );
}
