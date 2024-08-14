export default function Footer() {
  return (
    <footer className="body-font rounded">
      <div className="dark:text-white container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center items-center ">
        <p className="text-sm text-center sm:text-left">
          LosmanDev © {new Date().getFullYear()}
        </p>
        <div className="flex flex-row items-center gap-1 mt-1">
          <a
            target="_blank"
            className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
            href="https://www.linkedin.com/in/liban-osman-losmandev/"
            aria-label="linkedin link"
          >
            <span className="akar-icons--linkedinv1-fill w-5 h-5 dark:bg-white"></span>
          </a>
          <a
            className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
            href="https://github.com/LosmanDev"
            target="_blank"
            aria-label="github link"
          >
            <span className="fa-brands--github-square w-5 h-5 dark:bg-white"></span>
          </a>
          <a
            target="_blank"
            className="transition duration-300 ease-in-out transform hover:scale-150 active:scale-90"
            href="https://x.com/LosmanDev"
            aria-label="X/Twitter link"
          >
            <span className="fa6-brands--square-x-twitter w-5 h-5 dark:bg-white"></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
