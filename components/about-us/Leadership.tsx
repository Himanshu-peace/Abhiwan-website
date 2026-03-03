"use client"
import {motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"

const variant1 = [
    {
        image: "/about-us/team1.webp",
        title: "Nikki Tyagi",
    },
    {
        image: "/about-us/team2.webp",
        title: "Leadership Team",
    },
    {
        image: "/about-us/team3.webp",
        title: "Leadership Team",
    },
    {
        image: "/about-us/team4.webp",
        title: "Leadership Team",
    },
    {
        image: "/about-us/team5.webp",
        title: "Leadership Team",
    },
    {
        image: "/about-us/team6.webp",
        title: "Leadership Team",
    },
    {
        image: "/about-us/team6.webp",
        title: "Leadership Team",
    },
    {
        image: "/about-us/team8.webp",
        title: "Leadership Team",
    },
    {
        image: "/about-us/team2.webp",
        title: "Leadership Team",
    }
]

const variant2 = [
    {
        image: "/about-us/team1.webp",
        title: "Nikki Tyagi",
        role:"Tech Lead",
        description: "Technically adept and visionary, Nikki leads the Unity team with strategic insight and innovative problem-solving.",
        quote:"Turning coffee into code."
    },
    {
        image: "/about-us/team2.webp",
        title: "Rahul Yadav",
        role:"Full Stack Team Lead",
        description: "Steady and analytical, Rahul ensures strong Full-Stack  architecture with clean code and thoughtful system design.",
        quote:"Stacked. Stuck. Still Smiling"
    },
    {
        image: "/about-us/team3.webp",
        title: "Muskan Dubey",
        role:"Sr. HR Manager",
        description: "Muskan fosters a culture of empathy and structure, driving employee welfare and operational excellence across the organization.",
        quote:"Hire. Fire. Smile. Repeat."
    },
    {
        image: "/about-us/team4.webp",
        title: "Mithlesh Mahour",
        role:"HR Executive",
        description: "Energetic and dependable, Mithlesh drives HR operations with discipline, approachability, and attention to detail.",
        quote:"More HR, less drama."
    },
    {
        image: "/about-us/team5.webp",
        title: "Akash Verma",
        role:"Account Head",
        description: "Strategic financial leader managing accounting operations, compliance, budgeting, audits, and reporting to ensure financial efficiency and drive company growth.",
        quote:"Figures First, Stress Later"
    },
    {
        image: "/about-us/team6.webp",
        title: "Bijender Singh",
        role:"Sales Head",
        description: "Results-driven and strategic, Bijender leads with market insight and sharp business acumen to drive scalable growth",
        quote:"Market. Motivate. Monetize. Manage."
    },
    {
        image: "/about-us/team6.webp",
        title: "Bijender Singh",
        role:"Sales Head",
        description: "Results-driven and strategic, Bijender leads with market insight and sharp business acumen to drive scalable growth",
        quote:"Market. Motivate. Monetize. Manage."
    },
    {
        image: "/about-us/team8.webp",
        title: "Siddhant Saraswat",
        role:"Legal Counsel",
        description: "He ensures legal compliance and safeguards the company through expert guidance in corporate law and regulations.",
        quote:"Sue-proof, Sharp, Always Ready"
    },
    {
        image: "/about-us/team2.webp",
        title: "Rahul Yadav",
        role:"Full Stack Team Lead",
        description: "Steady and analytical, Rahul ensures strong Full-Stack  architecture with clean code and thoughtful system design.",
        quote:"Stacked. Stuck. Still Smiling"
    },
];

export default function Leadership() {
    const [variant, setVariant] = useState(1);
    const ref = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#171635] px-8 md:px-16 lg:px-24 space-y-24">
            <div className="relative left-1/2 -translate-x-1/2 w-screen mb-5">
                <h1 className="w-full text-center text-white text-[clamp(6rem,14vw,14rem)] font-futura font-black leading-none tracking-tight select-none whitespace-nowrap">
                    CORE LEADE
                    <span className="bg-linear-to-r from-[#ffffff] via-[#763AF5] to-[#A604F2] bg-clip-text text-transparent">
                        RSHIP TEAM
                    </span>
                </h1>
            </div>
            <p className="text-[#F9F9F9] font-inter text-center mb-8">
                We are a bunch of seasoned professionals, adept coders, meticulous analysts, creative designers & above all, your trusted partners in success.
            </p>
        </section>
    )
}