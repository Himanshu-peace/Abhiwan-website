
`use client`;




interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  styles?: string;
}

const ValueCard = ({ icon, styles, title, description }: ValueCardProps) => (
  <div className={`bg-[#30304D] ${styles} h-95 rounded-xl p-8 flex flex-col gap-6 justify-around    border border-[#2a2a50] hover:border-[#7c3aed]/40 transition-colors duration-200`}>
    <div className="">{icon}</div>
    <div className="">
      <h3 className="text-white font-bold text-base md:text-lg mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const LightbulbIcon = () => (
  <img src="/about-us/values1.png" alt="Lightbulb" className="w-8 h-10" />
);

const AwardIcon = () => (
  <img src="/about-us/values2.png" alt="Lightbulb" className="w-8 h-10" />
);

const HandshakeIcon = () => (
  <img src="/about-us/values3.png" alt="Lightbulb" className="w-12 h-10" />
);

const CollaborationIcon = () => (
  <img src="/about-us/values4.png" alt="Lightbulb" className="w-12 h-10" />
);

const GearIcon = () => (
  <img src="/about-us/values5.png" alt="Lightbulb" className="w-10 h-10" />
);

const EvolveIcon = () => (
  <img src="/about-us/values6.png" alt="Lightbulb" className="w-10 h-10" />
);

const values: ValueCardProps[] = [
  {
    icon: <LightbulbIcon />,
    styles:"lg:col-span-3",
    title: "Creators, Not Imitators",
    description:
      "Abhiwan Technology's obsession with fresh ideas and detail ensures every project exceeds expectations.",
  },
  {
    icon: <AwardIcon />,
    styles:"lg:col-span-4 ",
    title: "Excellence over Anything",
    description:
      "Mediocrity isn't our standard. From design to execution, we aim for nothing less than perfection.",
  },
  {
    icon: <HandshakeIcon />,
    styles:"lg:col-span-5 ",
    title: "Integrity is Non-Negotiable",
    description:
      "Integrity is the foundation of every decision and action we take. We build relationships based on trust and transparency.",
  },
  {
    icon: <CollaborationIcon />,
    styles:"lg:col-span-5 ",
    title: "Collaboration is Key",
    description:
      "We believe that the best ideas are born when minds come together. We grow stronger and smarter together.",
  },
  {
    icon: <GearIcon />,
    styles:"lg:col-span-4",
    title: "Adapt and Conquer",
    description:
      "We pivot when needed to keep you ahead. We harness the power of diverse perspectives to create unified solutions.",
  },
  {
    icon: <EvolveIcon />,
    styles:"lg:col-span-3",
    title: "Always Keep Evolving",
    description:
      "We support creativity at every step and stay relevant in a fast-paced world. Our work is our craft, and we take pride in doing it right.",
  },
];

const OurValuesSection = () => (
  <section className="bg-[#171635] px-8 md:px-16 lg:px-20 py-20">
    <h2 className="text-white text-[clamp(2.5rem,6vw,4rem)] font-black mb-14">
      Our{" "}v
      <span className="bg-linear-to-r from-[#ffffff] via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent">
        alues
      </span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
      {values.map((v) => (
        <ValueCard key={v.title} {...v} />
      ))}
    </div>
  </section>
);

export default OurValuesSection;