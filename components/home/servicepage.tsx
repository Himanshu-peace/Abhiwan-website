'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import build from 'next/dist/build';
import { image, s } from 'framer-motion/client';
import { connect } from 'http2';






const services = [
    {
        id: 1,
        title: 'Metaverse Solutions',
        tags: ['Virtual Worlds', 'Virtual Stores', 'Digital Humans', 'Digital Twins'],
        heading: "Step Into Your Digital Universe!",
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/5bymmmcv5a2142l/metaverse_solutions_0dj6q94dpl.webp',
        description: "Specializing in immersive Metaverse Development, Abhiwan creates interactive virtual experiences that meet diverse needs. An Industry-Trusted Metaverse Development Studio, we blend technical know-how with a client-centric approach in developing engaging metaverse games and applications that bring your vision to life."
    },
    {
        id: 2,
        title: 'Game Development',
        heading: "Fun-Packed Game Development",
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/x4g8263l74l78m6/game_development_vm8cmr25ou.webp',
        tags: ['Fighting / Combat Games', 'RPG/MMORPG', 'Simulation Game', 'Puzzle & Arcade Games', 'Educational Game', 'Adver Gaming', 'Casino Game', '2D/3D Games', 'Racing Games', "Card Games"],
        description: 'Fun-Packed Game Development We bring games to life with passion and innovation! From 2D, 3D, MMORPGs, and Racing Games to Blockchain and P2E, we craft Immersive Experiences. As Unreal and Unity experts, we build premium, high-quality games that engage and inspire! ',
    },
    {
        id: 3,
        title: 'Virtual Real Estate',
        tags: ['Interior VR Tours', 'Interactive Sales Tools', 'Digital Humans'],
        description: "We're transforming real estate with our Virtual Real Estate Solutions. With 3D ArchViz, Interactive Floor Plans, and Virtual Walkthroughs, we design Immersive Experiences. Step inside and explore properties in depth with 360° Virtual Tours, stage spaces with digital staging, and have secure, seamless transactions fueled by blockchain.",
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/im3ct11256p79e2/virtual_real_estate_b8ig5p1dps.webp',
        heading: "Create Immersive Property Experiences!"
    },
    {
        id: 4,
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/8au08b94h7x6087/interactive_marketing_cc3xk6kn61.webp',
        title: 'Interactive Marketing',
        heading: "Solutions that Truly Connect",
        tags: ['AR 3D Configurator', 'Hologram / Holobox', 'Interactive Kiosks', 'Gamified Marketing', 'User Engagement'],
        description: "We create Interactive Experiences that engage and inspire. From Smart Retail Solutions and Self-Service Kiosks to Digital Walls and Holograms, we make spaces more dynamic. Whether it's product configurators or immersive marketing campaigns, we help businesses connect with their audience in a whole new way."
    },
    {
        id: 5,
        title: '3D Art Services',
        heading: "Visuals That Make Your Games Unforgettable",
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/c9uru9ql0maieco/3_d_art_services_yjbgqqsx8n.webp',
        tags: ["3D Animation", 'Character Design', 'UI/UX Designing', 'Game Concept Art', 'Meta Human', '3D Modeling'],
        description: "Bring your game to life with Abhiwan Technology's Game Art Services. From concept design and UI/UX to 3D modeling, animation, and Metahumans, we create stunning visuals. Whether it's 2D design or immersive worlds, we craft every detail to make your game truly stand out."
    },
    {
        id: 6,
        title: 'AI Development',
        heading: "Smarter Solutions for Smart World",
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/33276g1t1z62o9m/ai_development_ni2flg3apg.webp',
        tags: ['AI / ML ', ' Chatbot', 'IoT', 'Automation Tools',],
        description: "We use AI to build smart solutions like Chatbots, Image Processing, and Computer Vision. With machine learning and deep learning, we help businesses automate tasks, improve communication, and create personalized experiences—making work easier and more efficient across different industries."
    },
    {
        id: 7,
        title: "Extended Reality Services",
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/45as32qlfr2883j/extended_reality_services_dftnny0u25.webp',
        tags: ['Augmented Reality',
            'Virtual Reality',
            'Industrial Training XR',
            'Mixed Reality (MR) Simulations',
            'Learning & Educational XR'],
        heading: "Dive into Another Dimension",
        description: "Abhiwan Technology excels in crafting interactive applications such as Augmented Reality, Virtual Reality, MR simulations tailored to diverse needs. With a client-centric approach and a proven process, we also deliver high-quality Learning & Educational and Industrial Training XR solutions customized to your requirements."

    }
    , {
        id: 8,
        title: "Blockchain & Web3 Development",
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/84g9o92k4xjlmsp/blockchain_web3_development_dd9mb698mt.webp',
        tags: ['Blockchain Token Development',
            'NFT / Marketplace',
            'Web3 Game Development',
            'Smart Contracts',],
        heading: "Transparent, Trusted and Tailored",
        description: "We bring the power of Blockchain and Web3 to finance, making transactions secure & transparent, and quick settlements. From NFTs and digital assets to marketplaces and DApps, we help you navigate the future. With smart contracts, DeFi, and tokenomics, we create seamless, trust-based financial ecosystems."
    },
    {
        id: 9,
        title: "IT and Other Services",
        image: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/2o3b3we8hl8jto3/it_and_other_services_vfjs8m8ro6.webp',
        tags: ['Digital Marketing', 'Website Development', 'App Development'],
        heading: "Transparent, Trusted and Tailored",
        description: "We bring the power of Blockchain and Web3 to finance, making transactions secure & transparent, and quick settlements. From NFTs and digital assets to marketplaces and DApps, we help you navigate the future. With smart contracts, DeFi, and tokenomics, we create seamless, trust-based financial ecosystems."
    }
];




export default function ServicesSection() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
    return (
        <section className="w-full bg-[var(--service-background)] px-4 py-12 md:px-8 md:py-20 lg:px-16">
            <div className="mx-auto max-w-[1400px]">

                {/* Header */}
                <div className="mb-10 text-center md:mb-16">
                    {/* Responsive font size: text-4xl on mobile, scaling up to 84px */}
                    <h1 className="text-white font-[var(--font-futura)] font-bold text-4xl sm:text-6xl md:text-[84px] leading-tight md:leading-[100%] tracking-normal text-center uppercase">
                        OUR SERVICES
                    </h1>

                    <p
                        className="
    mt-4 mx-auto
    max-w-full
    text-center
    whitespace-nowrap
    overflow-hidden
    text-white
    font-[var(--font-inter)]
  "
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '22px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            verticalAlign: 'middle',
                        }}
                    >
                        We Are A Leading Software Development Agency That Provides Development Services On Various Platforms
                    </p>

                </div>

                {/* Services List */}
                <div className="">
                    {services.map((service, index) => {
                        const isOpen = hoveredId === service.id;

                        return (
                            <div
                                key={service.id}
                                onMouseEnter={() => {
                                    hoverTimeout.current = setTimeout(() => {
                                        setHoveredId(service.id);
                                    }, 300); // 👈 delay (ms)
                                }}
                                onMouseLeave={() => {
                                    if (hoverTimeout.current) {
                                        clearTimeout(hoverTimeout.current);
                                        hoverTimeout.current = null;
                                    }
                                }}
                                onClick={() => setHoveredId(hoveredId === service.id ? null : service.id)}
                                className="border-b border-gray-500 transition-all duration-300"
                            >

                                {/* Row Header */}
                                <div className="flex items-center justify-between py-2 md:py-2 cursor-pointer group">
                                    {/* Responsive Title */}
                                    <h2
                                        className={`my-6 transition-all duration-500 ${isOpen ? 'text-white' : 'text-white'}`}
                                        style={{
                                            // fontFamily: 'Futura PT',
                                            fontWeight: 500,
                                            fontStyle: 'Demi',
                                            fontSize: 'clamp(28px, 5vw, 70.17px)',
                                            lineHeight: '100%',
                                            letterSpacing: '0%',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {service.title}
                                    </h2>
                                    <span className={`text-xl sm:text-3xl md:text-5xl font-[var(--font-futura)] transition-colors ${isOpen ? 'text-white' : 'text-white'}`}>
                                        {String(service.id).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Expandable Content Area */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1200px] opacity-100 pb-10 md:pb-8" : "max-h-0 opacity-0"}`}
                                >
                                    {/* Grid Layout: Stacked on mobile, side-by-side on desktop */}
                                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-start">

                                        {/* LEFT SIDE: Tags and Description */}
                                        <div className="space-y-6 md:space-y-8">
                                            {/* Tags container */}
                                            <div className="flex flex-wrap gap-2 md:gap-3">
                                                {service.tags.map((tag) => (
                                                    <div key={tag} className="relative rounded-full p-[1px] bg-[linear-gradient(92.57deg,#D126FB_3.7%,#2C72FF_93.21%)]">
                                                        <div className="rounded-full bg-slate-950 px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm text-white font-medium">
                                                            {tag}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-3 md:space-y-4 max-w-xl">
                                                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                                                    {service.heading}
                                                </h3>
                                                <p
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontWeight: 400,
                                                        fontStyle: 'Regular',
                                                        fontSize: '14px',
                                                        lineHeight: '100%',
                                                        letterSpacing: '0%',
                                                        verticalAlign: 'middle'
                                                    }}
                                                    className="text-white"
                                                >
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* RIGHT SIDE: Image */}
                                        <div className="flex justify-center lg:justify-end items-start pt-4">
                                            <div className="relative group w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] overflow-visible">

                                                {/* Blurred border effect */}
                                                <div className="absolute -inset-[5px] md:-inset-[9px] rounded-[24px] md:rounded-[32px] bg-[#161526] blur-[6px] md:blur-[9px] opacity-70 pointer-events-none" />

                                                {/* Image container */}
                                                <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border-[4px] md:border-[6px] border-[#161526] bg-white">
                                                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] md:rounded-[24px]">
                                                        <Image
                                                            src={service.image || "/placeholder.png"}
                                                            alt={service.title}
                                                            fill
                                                            unoptimized
                                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                            priority={isOpen}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}