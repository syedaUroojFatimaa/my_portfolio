/* eslint-disable @next/next/no-img-element, react/no-unescaped-entities */
import Typewriter from "typewriter-effect";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <title>Syeda Urooj Fatima Naqvi</title>
      <header className="text-purple-600 body-font bg-slate-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-purple-600 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-mono ">
              Syeda Urooj Fatima Naqvi
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-purple-400 font-mono">Home</a>
            <a className="mr-5 hover:text-purple-400 font-mono">About Us</a>
            <a className="mr-5 hover:text-purple-400 font-mono">Contact Us</a>
          </nav>
        </div>
      </header>

      <section className="text-pink-300 body-font">
        <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/logo.jpg"
            width={500} // set appropriate width
            height={500} // set appropriate height
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-400">
              <Typewriter
                options={{
                  strings: ["hello Everyone", "I am Urooj Fatima", "a beginner"],
                  autoStart: true,
                  loop: true,
                }}
              ></Typewriter>
            </h1>

            <p className="mb-8 leading-relaxed">
              As a beginner coder with a solid foundation in HTML, CSS,
              JavaScript, and TypeScript,I&apos;m excited to delve deeper into web
              development and enhance my skills. My experience has allowed me to
              create dynamic and interactive web applications, and I take pride
              in writing clean, maintainable code. I enjoy experimenting with
              new technologies and frameworks, and I&apos;m particularly interested
              in how to optimize user experiences and improve performance. My
              goal is to continuously learn and grow as a developer, taking on
              new challenges and collaborating with others in the coding
              community
            </p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-purple-400"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full  bg-opacity-50 rounded focus:ring-2 focus:ring-pink-300 focus:bg-transparent border border-purple-400 focus:border-pink-300 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-black bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">
                Enter
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Nice To Meet You.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-black text-center title-font text-purple-400 mb-4">
              Project Features & Commands
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Explore the essential features of TypeScript projects and easily
              run them by using npx commands giiven below :
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  npx run start : syeda-urooj-fatima-simple-calculator
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  npx run start : code-with-urooj-cli-number-guessing-game
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  npx run start : code-with-urooj-todo-list
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  npx run start : code-with-urooj-words-counter
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  npx run start : code-with-urooj-countdown-timer
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  npx run start : code-with-urooj-oop-mybank
                </span>
              </div>
            </div>
          </div>

          <button className="bg-gray-100 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <img src="/images/logogit.jpg" alt="" className="w-15 h-10" />
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">GITHUB</span>
              <span className="title-font font-medium">@syedaUroojFatimaa</span>
            </span>
          </button>
        </div>
      </section>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-400">
              Contact Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-purple-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded border text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-purple-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded border text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-purple-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-opacity-50 rounded border h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-black bg-purple-400 border-0 py-2 px-8 focus:outline-none hover:bg-purple-500 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-200 text-purple-600 font-bold text-center p-3">
        <p> My Portfolio.</p>
      </footer>
    </main>
  );
}
