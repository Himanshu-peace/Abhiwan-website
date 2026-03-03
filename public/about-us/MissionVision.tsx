
`use client`;
import Image from "next/image";


export default function MissionVisionSection() {
return (
  <section className="bg-[#171635] px-8 md:px-16 lg:px-24 space-y-24">
    {/* MISSION */}
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ">
      {/* Left: Text */}
      <div className="flex-1 max-w-xl ">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-black leading-none tracking-tight mb-6">
          <span className="text-white">MI</span>
          <span className="bg-linear-to-r from-[#ffffff] via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent">
            SSION
          </span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Being a Leading Game Development Company, Abhiwan Technology&apos;s mission is to deliver solutions that
          solve, empower, and drive your success, always on time, always top-tier, and to maximize the impact of every
          project we work on, aiming for results that not only meet client ideas but also beat their expectations. We
          are committed to constantly exploring new technologies and strategies to help our clients succeed.
        </p>
      </div>

      {/* Right: Rocket Illustration */}
      <div className="flex-1 flex justify-center lg:justify-start ">
        <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-80 xl:h-95">
          <Image
            src="/about-us/mission.webp"
            alt="Rocket launch illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>

    {/* VISION */}
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Left: Bulb Illustration */}
      <div className="flex-1 flex justify-center lg:justify-start order-1 lg:order-first">
        <div className="relative w-99 h-130 md:w-109 md:h-130 xl:w-159 xl:h-130">
          <Image
            src="/about-us/vision.webp"
            alt="Innovation lightbulb illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="flex-1 max-w-xl ">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-black leading-none tracking-tight mb-6">
          <span className="text-white">VIS</span>
          <span
            className="bg-linear-to-r from-[#ffffff] via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent"
          >
            ION
          </span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          To lead the global IT space and become the preferred partner for the Best immersive solutions provider. We
          believe that there is no end to innovation in information technology, game development, metaverse development,
          and marketing. We want to spark something that promotes innovative ideas at the forefront of the gaming and
          information technology industries. Establishing every new or innovative standard of excellence.
        </p>
      </div>
    </div>
  </section>
)};