import Image from 'next/image';
import liban from '../../public/assets/liban.webp';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import TypingEffect from './ui/typing-effect';

export default function Landing() {
  return (
    <>
      <section className="text-neutral-600 mt-0 pt-24 pb-5">
        <div className="container px-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg overflow-hidden mb-5">
              <h1
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-anchor-placement="bottom-center"
                className="text-3xl md:text-5xl font-bold dark:text-white text-center"
              >
                Hi, I'm Liban Osman
              </h1>
              <h2
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-anchor-placement="bottom-center"
                className="font-medium italic text-base md:text-xl dark:text-neutral-200 py-4 text-center"
              >
                Digitalizing{' '}
                <span className="bg-gradient-to-r from-[#f6b048] to-[#D3A433] text-transparent bg-clip-text">
                  Ideas
                </span>
                ✨ for the Web
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div
                  data-aos="fade-down"
                  data-aos-delay="400"
                  className="w-28 h-28 lg:w-52 lg:h-52 rounded-full inline-flex items-center justify-center"
                >
                  <Image
                    className="w-24 h-24 lg:w-48 lg:h-48 rounded-full transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                    src={liban}
                    alt="A Headshot of Liban Osman"
                  ></Image>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <TypingEffect />
                  <div
                    data-aos="fade"
                    data-aos-delay="400"
                    className="w-12 h-1 dark:bg-white bg-neutral-600 rounded mt-2 mb-4"
                  ></div>
                  <div className="flex flex-row items-center gap-1">
                    <a
                      target="_blank"
                      className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                      href="https://www.linkedin.com/in/liban-osman-losmandev/"
                      aria-label="linkedin link"
                    >
                      <span
                        data-aos="fade-right"
                        data-aos-delay="500"
                        className="akar-icons--linkedinv1-fill w-6 h-6 dark:bg-white"
                      ></span>
                    </a>
                    <a
                      className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                      href="https://github.com/LosmanDev"
                      target="_blank"
                      aria-label="github link"
                    >
                      <span
                        data-aos="fade-right"
                        data-aos-delay="600"
                        className="fa-brands--github-square w-6 h-6 dark:bg-white"
                      ></span>
                    </a>
                    <a
                      target="_blank"
                      className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                      href="https://x.com/LosmanDev"
                      aria-label="X/Twitter link"
                    >
                      <span
                        data-aos="fade-right"
                        data-aos-delay="700"
                        className="fa6-brands--square-x-twitter w-6 h-6 dark:bg-white"
                      ></span>
                    </a>
                    <a
                      target="_blank"
                      className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                      href="https://drive.google.com/file/d/1fY9heohNnm1e8ddBIPOdLmcZKfyI9-Jm/view?usp=sharing"
                      aria-label="resume link"
                    >
                      <span
                        data-aos="fade-right"
                        data-aos-delay="800"
                        className="material-symbols-light--picture-as-pdf-rounded w-8 h-8 dark:bg-white"
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l dark:border-white border-neutral-600 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <HoverBorderGradient>
                  <p
                    data-aos="fade"
                    data-aos-delay="200"
                    className="sm:text-base font-normal tracking-wider text-xs mt-4 p-4 dark:text-white"
                  >
                    I'm a highly motivated IT professional with experience building
                    innovative web applications. Skilled in crafting
                    user-friendly interfaces with HTML5, CSS3, JavaScript
                    (ES6+), TypeScript, and React/Nextjs. Adept at building
                    robust backend logic and APIs using Node.js, Next.js(SSR,
                    SSG, API Routes), PostgreSQL, MySQL, MongoDB and RESTful
                    principles. A core focus of my practice is developing foundational PowerShell scripts to accelerate troubleshooting workflows, analyzing logs, automating user lifecycle management and routine administrative tasks with the goal of improving service delivery and operational consistency across IT environments.
                  </p>
                </HoverBorderGradient>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <h1
                data-aos="fade-down"
                data-aos-delay="200"
                className="dark:text-white font-bold text-2xl pt-10"
              >
                Skills
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="250"
                className="w-20 h-1 dark:bg-white bg-neutral-600 rounded mt-2 mb-4"
              ></div>
              <div className="flex flex-wrap flex-row items-center justify-center px-5 py-5">
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="skill-icons--javascript w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    JavaScript
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="350"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="skill-icons--typescript w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    TypeScript
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="400"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="devicon--tailwindcss w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Tailwindcss
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="450"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="devicon--react logo w-8 h-8"></span>
                  <span className="text-[10px] font-normal dark:text-white glow-effect-blue">
                    React
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="500"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="logos--nextjs-icon w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Next.js
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="550"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="logos--nodejs-icon w-7 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Node.js
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="850"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="dark:logos--payload simple-icons--payloadcms w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Payload CMS
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="700"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="logos--supabase-icon w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Supabase
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="800"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="devicon--mongodb w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    MongoDB
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="850"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="vscode-icons--file-type-playwright w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Playwright
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="850"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="devicon--git w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    git
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="850"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="vscode-icons--file-type-powershell w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    PowerShell
                  </span>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="850"
                  className="flex flex-col items-center pr-3 pt-2"
                >
                  <span className="material-icon-theme--azure w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Azure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
