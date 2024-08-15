export default function Contact() {
  return (
    <section id="contact" className="container px-5 lg:w-4/6 mx-auto pb-20">
      <h1
        data-aos="fade-down"
        data-aos-delay="200"
        className="text-neutral-600 dark:text-white font-bold text-2xl pt-10"
      >
        Contact
      </h1>
      <div
        data-aos="fade-right"
        data-aos-delay="250"
        className="w-20 h-1 dark:bg-white bg-neutral-600 rounded mt-2 mb-4"
      ></div>

      <form className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
        <div
          data-aos="fade-right"
          data-aos-delay="250"
          className="relative w-full mb-4"
        >
          <label
            htmlFor="email"
            className="leading-7 text-sm dark:text-white text-neutral-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            disabled
            className="w-full px-2 py-1 border rounded dark:bg-black bg-zinc-50 border-neutral-600 dark:border-white dark:text-white text-neutral-600 hover:border-[#3B82F6] hover:border-2 transition-colors duration-300"
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="450"
          className="relative w-full mb-4"
        >
          <label
            htmlFor="message"
            className="leading-7 text-sm dark:text-white text-neutral-600"
          >
            Message
          </label>
          <textarea
            disabled
            id="message"
            name="message"
            className="w-full px-2 py-1 border rounded dark:bg-black bg-zinc-50 border-neutral-600 dark:border-white dark:text-white text-neutral-600 hover:border-[#3B82F6] hover:border-2 transition-colors duration-300"
          ></textarea>
        </div>
        <button
          data-aos="fade-right"
          data-aos-delay="650"
          aria-label="submit"
          className="px-4 py-4 w-full rounded-lg border border-neutral-600 dark:border-white dark:text-white text-neutral-600 text-xs font-bold hover:bg-neutral-600 hover:text-white transition-all duration-300"
          disabled
        >
          Submit
        </button>
      </form>
    </section>
  );
}
