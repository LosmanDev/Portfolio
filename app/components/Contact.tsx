import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface FormData {
  email: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    emailjs
      .send(
        'service_dbwpp2s',
        'template_ok5qdxf',
        { ...data },
        'Pu9T4ZADTt9dCVd-2',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    reset();
    console.log(data);
    setSubmitted(true);
    setShowVideo(true);
    setTimeout(() => {
      window.location.reload();
      window.scrollTo(0, 0);
    }, 2100);
  };

  return (
    <section
      id="contact"
      className="container px-5 lg:w-4/6 mx-auto pb-20 pt-32"
    >
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

      {showVideo ? (
        <video
          src="/assets/projects/email.webm"
          autoPlay
          className="w-1/2 h-auto max-w-xs mx-auto"
        />
      ) : (
        <form
          className="flex flex-col justify-center items-center w-full max-w-md mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            data-aos="fade-right"
            data-aos-delay="250"
            className="relative w-full mb-4"
          >
            <a href="mailto:Losmandev@gmail.com">
              <h1 className="text-center font-medium italic pl-1  text-neutral-600 dark:text-white flex items-center">
                <span className="ic--baseline-mail mb-1 w-4 h-4 dark:bg-white bg-neutral-600"></span>
                Email: Losmandev@gmail.com
              </h1>
            </a>
            <label
              htmlFor="email"
              className="leading-7 text-sm dark:text-white text-neutral-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full px-2 py-1 border rounded dark:bg-black bg-zinc-50 border-neutral-600 dark:border-white dark:text-white text-neutral-600 hover:border-[#3B82F6] hover:border-2 transition-colors duration-300 ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
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
              id="message"
              {...register('message', {
                required: 'Message is required',
                pattern: {
                  value: /^(\S+\s+){2}\S+.*$/,
                  message: 'Message too short',
                },
              })}
              className={`w-full px-2 py-1 border rounded dark:bg-black bg-zinc-50 border-neutral-600 dark:border-white dark:text-white text-neutral-600 hover:border-[#3B82F6] hover:border-2 transition-colors duration-300 ${
                errors.message ? 'border-red-500' : ''
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            data-aos="fade-right"
            data-aos-delay="650"
            aria-label="submit"
            className="px-4 py-4 w-full rounded-lg border border-neutral-600 dark:border-white dark:text-white text-neutral-600 text-xs font-bold hover:bg-neutral-600 hover:text-white transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
