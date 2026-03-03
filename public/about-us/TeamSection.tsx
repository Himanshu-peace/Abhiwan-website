`use client`;
import Image from "next/image";

const TheTeamSection = () => (
  <section className="relative bg-white overflow-hidden">
    {/* Team Photo with Overlay Title */}
    <div className="relative ">
      <div className="h-10 sm:h-13 md:h-25 lg:h-30 xl:h-40 w-full bg-white">  </div>
      <div className="relative w-full aspect-16/10 md:aspect-16/8 z-20">
        <Image
          src="/about-us/team.webp"
          alt="Abhiwan team photo"
          fill
          className="object-cover object-top grayscale"
        />
      </div>

      {/* "THE TEAM" overlaid text */}
      <div
        className="absolute inset-0 flex items-start justify-center pt-4 md:pt-6"
        style={{ pointerEvents: "none" }}
      >
        <img src="/about-us/the team.png" alt="The Team"  className="w-1/2 md:w-3/4" />
        {/* <h2
          className="text-[clamp(4rem,15vw,12rem)] font-black tracking-tight leading-none text-[#1d4ed8] mix-blend-multiply select-none opacity-90"
          style={{ letterSpacing: "-0.02em" }}
        >
          THE TEAM
        </h2> */}
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-[#171635] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-8 md:px-16 lg:px-24 py-10 ">
      <div>
        <p className="text-[#A604F2] font-inter font-semibold text-sm mb-1">
          Together,
          <span className="text-white">{" "}we bring worlds to life.</span>
          
        </p>
        <h3 className="text-white text-2xl md:text-3xl font-black tracking-wide">MEET OUR TEAM</h3>
      </div>

      <p className="text-[#F9F9F9] font-inter text-sm leading-relaxed max-w-md">
        From game designers and 3D artists to developers and strategists, our team thrives on imagination and
        innovation. We collaborate closely with every client, diving into the vision, shaping ideas, and building
        experiences that feel alive.
      </p>
    </div>
  </section>
);

export default TheTeamSection;