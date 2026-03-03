"use client";

import Image from "next/image";

// ─── OUR STORY ───────────────────────────────────────────────────────────────

const OurStorySection = () => (
  <section className="bg-[#171635] min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-16 mb-10">
    {/* Hero Title */}
    <div className="relative left-1/2 -translate-x-1/2 w-screen mb-5">
        <h1 className="w-full text-center text-white text-[clamp(6rem,14vw,14rem)] font-futura font-black leading-none tracking-tight select-none whitespace-nowrap">
            OUR{" "}
            <span className="bg-linear-to-r from-[#ffffff] via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent">
            STORY
            </span>
        </h1>
    </div>
    <h2 className="text-white font-inter text-xl md:text-2xl xl:text-3xl font-semibold mb-8">
        This Isn&apos;t Just Our Story, It&apos;s the Start of Yours.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
      
      {/* Left: Text Content */}
      <div className=" max-w-xl">
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6">
          In 2018, two dreamers, <strong className="text-white font-bold">Abhishek Verma</strong>, and{" "}
          <strong className="text-white font-bold">Pawan Agnihotri</strong>, combined their passion for tech and
          innovation to create ABHIWAN, a name born from their own. Since our inception, we have grown into a team of
          creators, strategists, and tech enthusiasts who love turning ideas into reality. That&apos;s how we develop
          Abhiwan Technology as a team.
        </p>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          With years of expertise, a global clientele, and talent to create the extraordinary, Abhiwan is known as the
          best immersive solutions provider.
        </p>

        <button className="inline-flex items-center gap-2 border border-white bg-[radial-gradient(circle,#525AFF_0%,#0900FF_100%)] text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200">
          Curious? Get In Touch!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </button>
      </div>

      {/* Right: Illustration */}
      <div className=" flex items-center justify-center md:items-start">
        <div className="relative  w-md h-80 md:w-122 md:h-90 xl:w-142 xl:h-90 sm:-top-12 lg:-top-24 aspect-square">
          <Image
            src="/about-us/story.webp"
            alt="Team collaboration puzzle illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection;