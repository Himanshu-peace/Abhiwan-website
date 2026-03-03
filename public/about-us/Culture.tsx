"use client"
import {motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"

const variant1 = [
    {
        image: "/about-us/culture1.webp",
        title: "culture1",
    },
    {
        image: "/about-us/culture3.webp",
        title: "culture2",
    },
    {
        image: "/about-us/culture4.webp",
        title: "culture3",
    },
    {
        image: "/about-us/culture5.webp",
        title: "culture4",
    },
    {
        image: "/about-us/culture6.webp",
        title: "culture5",
    },
    {
        image: "/about-us/culture7.webp",
        title: "culture6",
    },
        {
        image: "/about-us/culture7.webp",
        title: "culture7",
    },
    {
        image: "/about-us/culture8.webp",
        title: "culture8",
    },
]

const variant2 = [
    {
        image: "/about-us/culture11.webp",
        title: "culture1",
    },
    {
        image: "/about-us/culture22.webp",
        title: "culture2",
    },
    {
        image: "/about-us/culture33.webp",
        title: "culture3",
    },
    {
        image: "/about-us/culture44.webp",
        title: "culture4",
    },
    {
        image: "/about-us/culture55.webp",
        title: "culture5",
    },
    {
        image: "/about-us/culture66.webp",
        title: "culture6",
    },
    {
        image: "/about-us/culture76.webp",
        title: "culture7",
    },
    {
        image: "/about-us/culture88.webp",
        title: "culture8",
    },
];

export default function Culture() {
    const [variant, setVariant] = useState(1);
    const ref = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#171635] px-8 md:px-16 lg:px-24 space-y-24">
            <div className="relative left-1/2 -translate-x-1/2 w-screen mb-5">
                <h1 className="w-full text-center text-[#FFFFFF] text-[clamp(2rem,6vw,6rem)] font-futura font-black leading-none tracking-tight select-none whitespace-nowrap">
                    ABHIWA
                    <span className="bg-linear-to-r from-[#FFFFFF] via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent">
                        N CULTURE
                    </span>
                </h1>
            </div>
            <div>
               <p className="text-[#F9F9F9] font-inter text-center text-xs sm:text-sm md:text-base mb-8">
                    A culture built on collaboration, curiosity, and creativity. 
                    <br/>
                    See what it's like to be part of a team creating tomorrow's digital experiences.
                </p>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                {variant1.map((item, index) => {
                const currentItem = hoveredIndex === index ? variant2[index] : variant1[index];
                
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 1, y: 0 }}  
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex flex-col items-center text-center mb-20"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative ">
                            <div className="rounded-2xl xl:w-155 xl:h-85 overflow-hidden">
                                <img
                                src={currentItem.image}
                                alt={currentItem.title}
                                className="w-full h-full lg:object-contain  xl:object-fill  "
                                />
                            </div>
                        </div>
                    </motion.div>
                )
                })}
            
            </div>

        </section>
    )

}