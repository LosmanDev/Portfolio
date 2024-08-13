import Image from 'next/image';
import liban from '../../public/assets/liban.webp';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import TypingEffect from './ui/typing-effect';

export default function Landing() {
  return (
    <>
      <section className="text-neutral-600 mt-0 pt-20 pb-5">
        <div className="container px-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg overflow-hidden mb-5">
              <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
                Liban Osman
              </h1>
              <h2 className="font-medium italic text-base md:text-xl dark:text-neutral-200 py-4 text-center">
                Digitalizing{' '}
                <span className="bg-gradient-to-r from-[#f6b048] to-[#D3A433] text-transparent bg-clip-text">
                  Ideas
                </span>
                ✨ for the Web
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-28 h-28 lg:w-52 lg:h-52 rounded-full inline-flex items-center justify-center">
                  <Image
                    className="w-24 h-24 lg:w-48 lg:h-48 rounded-full transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                    src={liban}
                    alt="A Headshot of Liban Osman"
                  ></Image>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <TypingEffect />
                  <div className="w-12 h-1 dark:bg-white bg-neutral-600 rounded mt-2 mb-4"></div>
                  <div className="flex flex-row items-center gap-2">
                    <a
                      target="_blank"
                      className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                      href="https://www.linkedin.com/in/liban-osman-losmandev/"
                      aria-label="linkedin link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                      >
                        <path
                          className="dark:fill-white fill-neutral-600"
                          fill="neutral-600"
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        />
                      </svg>
                    </a>
                    <a
                      className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                      href="https://github.com/LosmanDev"
                      target="_blank"
                      aria-label="github link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 1536 1536"
                      >
                        <path
                          className="dark:fill-white fill-neutral-600"
                          fill="black"
                          d="M519 1072q4-6-3-13q-9-7-14-2q-4 6 3 13q9 7 14 2m-28-41q-5-7-12-4q-6 4 0 12q7 8 12 5q6-4 0-13m-41-40q2-4-5-8q-7-2-8 2q-3 5 4 8q8 2 9-2m21 23q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2m86 75q2-7-9-11q-9-3-13 4q-2 7 9 11q9 3 13-4m42 3q0-8-12-8q-10 0-10 8t11 8t11-8m39-7q-2-7-13-5t-9 9q2 8 12 6t10-10m642-317q0-212-150-362T768 256T406 406T256 768q0 167 98 300.5T606 1254q18 3 26.5-5t8.5-20q0-52-1-95q-6 1-15.5 2.5t-35.5 2t-48-4t-43.5-20T468 1073q-23-59-57-74q-2-1-4.5-3.5l-8-8l-7-9.5l4-7.5L415 967q6 0 15 2t30 15.5t33 35.5q16 28 37.5 42t43.5 14t38-3.5t30-9.5q7-47 33-69q-49-6-86-18.5t-73-39t-55.5-76T441 741q0-79 53-137q-24-62 5-136q19-6 54.5 7.5T614 505l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26t57-9q29 74 5 136q53 58 53 137q0 57-14 100.5t-35.5 70T992 956t-62.5 26t-68.5 12q35 31 35 95q0 40-.5 89t-.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5m256-480v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                      href="https://x.com/LosmanDev"
                      aria-label="X/Twitter link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.8em"
                        viewBox="0 0 448 512"
                      >
                        <path
                          className="dark:fill-white fill-neutral-600"
                          fill="black"
                          d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
                      href="https://drive.google.com/file/d/1fY9heohNnm1e8ddBIPOdLmcZKfyI9-Jm/view?usp=sharing"
                      aria-label="resume link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.8em"
                        height="1.8em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="dark:fill-white fill-neutral-600"
                          fill="black"
                          d="M10 10.5h1q.425 0 .713-.288T12 9.5v-1q0-.425-.288-.712T11 7.5H9.5q-.2 0-.35.15T9 8v4q0 .2.15.35t.35.15t.35-.15T10 12zm0-1v-1h1v1zm5 3q.425 0 .713-.288T16 11.5v-3q0-.425-.288-.712T15 7.5h-1.5q-.2 0-.35.15T13 8v4q0 .2.15.35t.35.15zm-1-1v-3h1v3zm4-1h.5q.2 0 .35-.15T19 10t-.15-.35t-.35-.15H18v-1h.5q.2 0 .35-.15T19 8t-.15-.35t-.35-.15h-1q-.2 0-.35.15T17 8v4q0 .2.15.35t.35.15t.35-.15T18 12zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l dark:border-white border-neutral-600 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <HoverBorderGradient>
                  <p className="leading-relaxed sm:text-base font-normal text-xs mt-4 p-4 dark:text-white">
                    I'm a highly motivated IT professional with experience
                    building innovative web applications. Skilled in crafting
                    user-friendly interfaces with HTML5, CSS3, JavaScript
                    (ES6+), TypeScript, and React/Nextjs. Adept at building
                    robust backend logic and APIs using Node.js, Next.js(SSR,
                    SSG, API Routes) PHP, PostgreSQL, MySQL, MongoDB and RESTful
                    principles. Proven ability to solve complex technical
                    challenges and delivering high-quality solutions.
                  </p>
                </HoverBorderGradient>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="dark:text-white font-bold text-2xl pt-10">
                Skills
              </h1>
              <div className="w-20 h-1 dark:bg-white bg-neutral-600 rounded mt-2 mb-4"></div>
              <div className="flex flex-wrap flex-row items-center justify-center px-5 py-5">
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="skill-icons--javascript w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    JavaScript
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="skill-icons--typescript w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    TypeScript
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="devicon--tailwindcss w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Tailwindcss
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="devicon--react logo w-8 h-8"></span>
                  <span className="text-[10px] font-normal dark:text-white glow-effect-blue">
                    React
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="logos--nextjs-icon w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Next.js
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="logos--nodejs-icon w-7 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Node.js
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="logos--strapi-icon w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Strapi.js
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="devicon--php w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    php
                  </span>
                </div>

                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="logos--supabase-icon w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Supabase
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="devicon--mysql w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    MySQL
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="devicon--mongodb w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    MongoDB
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="vscode-icons--file-type-playwright w-8 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Playwright
                  </span>
                </div>
                <div className="flex flex-col items-center pr-3 pt-2">
                  <span className="logos--bash-icon w-7 h-8"></span>
                  <span className="text-[10px] dark:text-white font-normal">
                    Bash
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
