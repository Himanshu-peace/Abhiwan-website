"use client"
import {motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
  
const variant1 = [
{
    image: "/about-us/F1.webp",
    title: "Mr. Abhishek Jain",
    description: "CEO & Founder",
},
{
    image: "/about-us/F2.webp",
    title: "Mr. Rishabh Jain",
    description: "Co-Founder & CTO",
},
]

const variant2 = [
{
    image: "/about-us/F12.webp",
    title: "Mr. Abhishek Jain",
    description: "CEO & Founder",
},
{
    image: "/about-us/F22.webp",
    title: "Mr. Rishabh Jain",
    description: "Co-Founder & CTO",
}
];

export default function Founders() {
  const [variant, setVariant] = useState(variant1);
  const ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


  return (
    <section className="bg-[#171635] px-8 md:px-16 lg:px-24 space-y-24">
        <div>
            <h2 className="text-[clamp(3rem,7vw,6rem)] font-black leading-none tracking-tight mb-6">
            <span className="text-white">OUR</span>
            <span className="bg-linear-to-r from-[#ffffff] via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent">
                FOUNDERS
            </span>
            </h2>
            <p className="text-[#F9F9F9] text-sm md:text-base xl:text-lg leading-relaxed">
                The Two Pillars of our Company, always up to support and guide {" "}
                <br className="hidden sm:block" />
                Abhiwan’s team in every possible way
            </p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 ">
            {variant1.map((item, index) => {
            const currentItem = hoveredIndex === index ? variant2[index] : variant1[index];
            
            return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center mb-20"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="relative">
                    <div className="rounded-2xl sm:w-70 md:w-75 lg:w-100 xl:w-147  sm:h-90 lg:h-125 xl:h-157 overflow-hidden">
                        <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    </div>
                </motion.div>
            )
            })}
        
        </div>

    </section>
  );
}