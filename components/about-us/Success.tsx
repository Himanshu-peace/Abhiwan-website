"use client"
import React from 'react'
import CountUp from '../common/countup'
import {motion } from "framer-motion"

const stats = [
    { label: "YEARS OF EXPERIENCE", value: "7+" },
    { label: "TEAM MEMBERS", value: "100+" },
    { label: "REPEATED CLIENTS", value: "70%" },
    { label: "SUCCESSFUL PROJECTS", value: "600+" },
]

const features = [
    {
        number: "01.",
        title: "TRUSTED BY",
        highlight: "GLOBAL BRANDS",
        description: (
            <>
                Institutions like <span className="text-orange-500 font-inter font-bold text-[19.51px] leading-[100%] tracking-normal">The Indian Army</span> and{" "}
                <span className="text-red-600 font-bold">Abu Dhabi Police</span> have chosen us for important digital projects.
            </>
        ),
    },
    {
        number: "02.",
        title: "CREATIVE THINKING",
        highlight: "THAT WORKS",
        description: (
            <>
                Brands such as <span className="text-red-600 font-bold">Coca-Cola</span> and{" "}
                <span className="text-blue-700 font-bold">Vaseline</span> have leveraged our creativity and gamification expertise to bring ideas to life.
            </>
        ),
    },
    {
        number: "03.",
        title: "STRONG",
        highlight: "ON SECURITY",
        description: (
            <>
                Your data and IPs are safe with us. Clients like{" "}
                <span className="text-blue-600 font-bold">Bajaj FinServ</span> and{" "}
                <span className="text-blue-900 font-bold">AIIMS</span> are the testament to our security practices.
            </>
        ),
    },
    {
        number: "04.",
        title: "EXPERIENCE",
        highlight: "ACROSS INDUSTRIES",
        description: (
            <>
                Working with brands like <span className="text-red-500 font-bold">Ogilvy</span> and{" "}
                <span className="text-blue-800 font-bold">DP World</span> giving us a broader perspective of business needs and user expectations.
            </>
        ),
    },
]

export default function Success() {
    return (
        <section className="bg-[#171635] px-8 md:px-16 lg:px-24 space-y-24">
            <div className="max-w-350 mx-auto">
                {/* --- DESKTOP SCOREBOARD OF SUCCESS --- */}
                <div className="hidden lg:block text-center mb-16">
                    <h2
                        className="uppercase tracking-tight text-[#99A3BA]"
                        style={{
                            fontFamily: "'Futura PT', sans-serif",
                            fontWeight: 700,
                            fontStyle: "normal",
                            fontSize: "80px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            textTransform: "uppercase",
                        }}
                    >
                        SCOREBOARD OF <span className="text-transparent" style={{ WebkitTextStroke: "1px #111" }}>SUCCESS</span>
                    </h2>
                    <p
                        className="mt-6 leading-normal text-[#FFFFFF] max-w-5xl mx-auto font-inter text-center"
                        style={{
                            fontWeight: 400,
                            fontSize: '22px',
                            letterSpacing: '0%',
                        }}
                    >
                        Building future-ready software through immersive tech and intelligent software development. With global reach,
                        hundreds of successful projects, and a reputation for innovation, our Software Application Development Services
                        has come a long way. We're a team that loves pushing boundaries.
                    </p>

                    {/* STATS GRID */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-gray-100">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="relative p-6 md:p-12 flex flex-col items-center"
                            >
                                {/* VERTICAL DIVIDER */}
                                {idx !== 0 && idx !== stats.length  && (
                                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px  bg-linear-to-b from-[#171635] via-[#9E9E9E] to-[#171635]" />
                                )}

                                {/* CONTENT WRAPPER */}
                                <div className="w-full max-w-105 md:max-w-none text-left">
                                    
                                    <div
                                        className="mb-4  whitespace-nowrap overflow-visible"
                                        style={{
                                            fontFamily: '"Futura PT", sans-serif',
                                            fontWeight: 700,
                                            fontSize: 'clamp(56px, 7vw, 110px)',
                                            lineHeight: '1',
                                            textTransform: 'uppercase',
                                            background: '#2C72FF',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        <CountUp value={stat.value} />
                                    </div>

                                    <div
                                        className="wrap-break-word mb-4"
                                        style={{
                                            fontFamily: '"Futura PT", sans-serif',
                                            fontWeight: 700,
                                            fontSize: 'clamp(18px, 2.5vw, 32px)',
                                            lineHeight: '1.2',
                                            textTransform: 'uppercase',
                                            color: '#FFFFFF',
                                            letterSpacing: '0.02em',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2, 
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {stat.label === "YEARS OF EXPERIENCE"
                                            ? "YEARS OF\nEXPERIENCE"
                                            : stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- MOBILE SCOREBOARD OF SUCCESS --- */}
                <div className="lg:hidden px-4">
                    <div className="text-center mb-4">
                        <h2
                            className="uppercase font-futura tracking-tight text-[#373737] whitespace-nowrap overflow-hidden"
                            style={{
                                fontWeight: 700,
                                fontStyle: "normal",
                                fontSize: "6vw", // font size adjusts to screen width
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                textTransform: "uppercase",
                            }}
                        >
                            SCOREBOARD OF{" "}
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: "1px #111" }}
                            >
                                SUCCESS
                            </span>
                        </h2>



                        <p
                            className="mt-4 font-inter space-y-2 leading-[1.8] text-[#242424] max-w-xs mx-auto text-center"
                            style={{
                                fontWeight: 400,          
                                fontStyle: "normal",     
                                fontSize: "16px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                verticalAlign: "middle",
                                textAlign: "center",   
                            }}
                        >
                            Building future-ready software through immersive tech and intelligent software
                            development. With global reach, hundreds of successful projects, and a reputation for innovation, our Software Application Development Services has come a long way. We're a team that loves pushing boundaries
                            and never stops working hard to continue to be the best immersive tech experts.
                        </p>

                    </div>

                    {/* STATS GRID - 2 columns for mobile */}
                    {/* STATS GRID - 2 columns for mobile with separators */}
                    <div className="relative max-w-200 mx-auto">

                        {/* STATS GRID */}
                        <div className="grid grid-cols-2 grid-rows-2 relative z-10">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-center px-4 py-8 text-center"
                                >
                                    {/* VALUE */}
                                    <div
                                        className="font-futura font-bold text-[clamp(36px,6vw,64px)] leading-none"
                                        style={{
                                            background: "linear-gradient(270deg, #3952FC 0%, #7F15DC 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {stat.value}
                                    </div>

                                    {/* LABEL */}
                                    <div
                                        className="mt-3 font-futura font-bold uppercase text-[#2C2C2C] leading-tight text-[clamp(14px,2.5vw,20px)]"
                                    >
                                        {stat.label.split(" ").map((word, i) => (
                                            <div key={i}>{word}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 🔥 CENTER DIVIDERS — EXACT SAME STYLE */}
                        <div className="pointer-events-none absolute inset-0 z-0">
                            {/* Vertical Divider */}
                            <div
                                className="absolute top-0 bottom-0 left-1/2 w-0.5"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
                                    opacity: 0.9,
                                }}
                            />
                            {/* Horizontal Divider */}
                            <div
                                className="absolute left-0 right-0 top-1/2 h-0.5"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
                                    opacity: 0.9,
                                }}
                            />
                        </div>
                    </div>
                    {/* SEPARATOR LINE */}
                    {/* <div className="w-full h-[4px] bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 my-6 rounded" /> */}
                </div>
            </div>
        </section>
    )
}