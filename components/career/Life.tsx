"use client"
import {motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"

const variant1 = [
    {
        image: "/career/culture1.webp",
        title: "culture1",
    },
    {
        image: "/career/culture2.webp",
        title: "culture2",
    },
    {
        image: "/career/culture3.webp",
        title: "culture3",
    },
    {
        image: "/career/culture4.webp",
        title: "culture4",
    },
    {
        image: "/career/culture5.webp",
        title: "culture5",
    },
    {
        image: "/career/culture6.webp",
        title: "culture6",
    }
]

const variant2 = [
    {
        image: "/career/culture01.webp",
        title: "culture1",
    },
    {
        image: "/career/culture02.webp",
        title: "culture2",
    },
    {
        image: "/career/culture03.webp",
        title: "culture3",
    },
    {
        image: "/career/culture04.webp",
        title: "culture4",
    },
    {
        image: "/career/culture05.webp",
        title: "culture5",
    },
    {
        image: "/career/culture06.webp",
        title: "culture6",
    }
];

export default function Life() {
    const [variant, setVariant] = useState(1);
    const ref = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#171635] px-8 md:px-16 lg:px-24 space-y-24">
            <div className="relative left-1/2 -translate-x-1/2 w-screen mb-5">
                <h1 className="w-full text-center 2xl:text-9xl text-[#FFFFFF] text-[clamp(2rem,6vw,6rem)] font-futura font-black leading-none tracking-tight select-none whitespace-nowrap">
                    LIFE A
                    <span className="bg-linear-to-r from-[#FFFFFF] via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent">
                        T ABHIWAN
                    </span>
                </h1>
            </div>
            <div>
               <p className="text-[#F9F9F9] font-inter text-center text-xs sm:text-sm md:text-base 2xl:text-2xl mb-8">
                    A culture built on collaboration, curiosity, and creativity. 
                    <br/>
                    See what it's like to be part of a team creating tomorrow's digital experiences.
                </p>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {variant1.map((item, index) => {
                const currentItem = hoveredIndex === index ? variant2[index] : variant1[index];
                
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 1, y: 0 }}  
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="flex flex-col items-center text-center "
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative">
                            <div className="rounded-2xl  overflow-hidden">
                                <img
                                src={currentItem.image}
                                alt={currentItem.title}
                                className="w-full h-full lg:object-contain xl:object-fill  "
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