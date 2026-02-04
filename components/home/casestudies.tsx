



"use client";



import { useState } from "react";

import Image from "next/image";

import { motion, AnimatePresence, color } from "framer-motion";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { image } from "framer-motion/client";

import { stat } from "fs";







// https://cdn.abhiwandemos.com/api/files/pbc_193071544/2yu3j181xbj46qs/active_shooter_m6tdsgzgrr.webp

// https://cdn.abhiwandemos.com/api/files/pbc_193071544/qe5e15g3a3q8xmj/bajaj_mind_maze_jkne9cp2xl.webp

// https://cdn.abhiwandemos.com/api/files/pbc_193071544/40sfa2894ir2cw3/coca_cola_face_swap_aonpetcryr.webp

// https://cdn.abhiwandemos.com/api/files/pbc_193071544/r07cp5y8yfgg256/dp_world_6n0qxlu77s.webp

// https://cdn.abhiwandemos.com/api/files/pbc_193071544/f3nwwaofczwlt7m/imns_pnd912px2v.webp

// https://cdn.abhiwandemos.com/api/files/pbc_193071544/l4ho5qwz2796d3b/thums_up_s_biryani_hunt_ft4q1i31h8.webp

// https://cdn.abhiwandemos.com/api/files/pbc_193071544/0818z44aaljd2k9/vaseline_suncoins_3fskz8x77c.webp













export default function CaseStudiesClone() {

    const CASE_STUDIES = [

        {

            id: 1,

            tag: "FEATURED",

            brand: "THUMS UP'S BIRYANI HUNT",

            title: "Not Just A Game—A Flavorful Campaign Experience.",

            description:

                "Biryani Hunt for Thums Up is an engaging promotional game designed for food and beverage enthusiasts.",

            image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/l4ho5qwz2796d3b/thums_up_s_biryani_hunt_ft4q1i31h8.webp",

            stats: [

                { value: "3x", label: "Longer average play sessions" },

                { value: "80%", label: "Players returned for repeat gameplay" },

                { value: "95%", label: "Positive response to game visuals" },

                { value: "99.9%", label: "Stable gameplay performance" },

            ],

            color: "#8327d3"

        },





        {

            id: 3,

            tag: "FEATURED",

            brand: "vaseline suncoins",

            title: "From Steps to Skincare—Rewards That Shine.",

            description: "Vaseline is a wellness app that rewards users with coins for time spent outdoors, encouraging healthier habits while turning everyday outdoor activities into exciting, redeemable rewards and exclusive offers.",

            image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0818z44aaljd2k9/vaseline_suncoins_3fskz8x77c.webp",

            stats: [

                { value: "2.9x", label: "Increase in average outdoor activity time" },

                { value: "78%", label: "Users earned coins consistently within first week" },

                { value: "95%", label: "Habit retention after 30 days" },

                { value: "99.8★", label: "Average app experience rating" },

            ],

            color: "#19294F"

        },

        {

            id: 4,

            tag: "FEATURED",

            brand: "bajaj mind maze",

            title: "Gamifying Financial Literacy for Smarter Engagement",

            description: "Mind Maze for Bajaj Finserv is an interactive platform designed to help users take control of their personal finances through engaging quizzes.",

            image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/qe5e15g3a3q8xmj/bajaj_mind_maze_jkne9cp2xl.webp",

            stats: [

                { value: "3.1x", label: "Increase in average puzzle-solving time" },

                { value: "68%", label: "Users reached challenge stages" },

                { value: "95%", label: "Brand recall after interactive gameplay" },

                { value: "99.9%", label: "Smooth gameplay delivery rate" },

            ],

            color: "#32AFFC"

        },



        {

            id: 2,

            tag: "FEATURED",

            brand: "coca cola face swap",

            title: "Real-Time Face Recognition AI with Vintage Face Swap.",

            description:

                "Coca-Cola FaceSwap offers a fun and interactive platform where users can instantly transform their selfies into popular celebrity faces.",

            image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/40sfa2894ir2cw3/coca_cola_face_swap_aonpetcryr.webp",

            stats: [

                { value: "85%", label: "Players shared their face-swap results" },

                { value: "1M+", label: "Faces processed during campaign usage" },

                { value: "< 3 Sec", label: "Average end-to-end experience time" },

                { value: "24X7", label: "Availability for uninterrupted brand access" },

            ],

            color: "#7F15DC"

        },



        {

            id: 5,

            brand: "imns",

            tag: "FEATURED",

            title: "VR Centenary Museum - Indian Military Nursing Services",

            description: "The VR Centenary Museum – Military Nursing Service, developed by Abhiwan Technology, is an immersive virtual museum celebrating 100 years of IMNS legacy.",

            image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/f3nwwaofczwlt7m/imns_pnd912px2v.webp",

            stats: [

                { value: "15+", label: "Hours of curated VR narratives" },

                { value: "12", label: "Heritage zones recreated in VR" },

                { value: "800+", label: "Visitors explored the museum virtually" },

                { value: "98.5%", label: "Session success rate" },

            ],

            color: "#E5B414"

        },



        {

            id: 6,

            tag: "FEATURED",

            brand: "Active Shooter",

            title: "Active Shooter – VR Training for Abu Dhabi Police",

            description: "Active Shooter – VR Training for Abu Dhabi Police is an advanced program designed to equip officers for high-pressure emergencies.",

            stats: [

                { value: "4.2 Hrs", label: "Average immersive training time per session" },

                { value: "Real Time", label: "Decision-making under pressure" },

                { value: "360°", label: "Situational awareness through AR/VR" },

                { value: "99.4%", label: "System reliability during simulations" },

            ],

            color: "#E5B414",

            image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2yu3j181xbj46qs/active_shooter_m6tdsgzgrr.webp",

        },

        {

            id: 7,

            tag: "FEATURED",

            brand: "DP World",

            title: "Digital Twin - DP World",

            description: "Digital Twin DP World is an innovative virtual mall solution that replicates physical retail spaces within a hyper-realistic digital environment.",

            stats: [

                { value: "360°", label: "Immersive mall walkthrough experience" },

                { value: "28%", label: "Improvement in shopper spatial understanding" },

                { value: "15+", label: "Brands explored virtually" },

                { value: "98.7%", label: "Experience rendering consistency" },

            ],

            color: "#14059A",

            image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/r07cp5y8yfgg256/dp_world_6n0qxlu77s.webp",

        }



    ];



    const [index, setIndex] = useState(0);

    const total = CASE_STUDIES.length;

    const currentData = CASE_STUDIES[index];



    const next = () => setIndex((p) => (p + 1) % total);

    const prev = () => setIndex((p) => (p - 1 + total) % total);



    return (

        <section className="w-full bg-white font-sans text-black overflow-hidden">

            <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-8 lg:py-12">



                {/* ================= MOBILE & TABLET ================= */}

                <div className="lg:hidden">



                    {/* HEADER */}

                    <div className="flex items-center font-futura font-bold text-[#0E0E0E] justify-between mb-4">

                        <h2 className="font-futura font-bold text-lg md:text-2xl tracking-wide">

                            CASE STUDIES

                        </h2>

                        <span

                            className="font-inter font-semibold"

                            style={{

                                fontSize: "23.33px",

                                lineHeight: "15.56px",

                                letterSpacing: "0%",

                                verticalAlign: "middle"

                            }}

                        >

                            <span className="text-black">{String(index + 1).padStart(2, "0")}</span><span className="text-gray-400">/{String(total).padStart(2, "0")}</span>

                        </span>

                    </div>



                    <div className="h-px bg-gray-200 mb-4" />



                    {/* FEATURED + ARROWS */}

                    <div className="flex items-center justify-between mb-6">

                        <div className="flex items-center gap-2">

                            <span className="w-2.5 h-2.5 rounded-full bg-[#5D3FD3]" />

                            <span className="text-xs md:text-sm uppercase text-[#5D3FD3] font-medium">

                                Featured

                            </span>

                        </div>



                        <div className="flex gap-4">

                            <button onClick={prev} className="p-1 hover:bg-gray-100 rounded-full transition-colors">

                                <ArrowLeft className="w-5 h-5 md:w-7 md:h-7" />

                            </button>

                            <button onClick={next} className="p-1 hover:bg-gray-100 rounded-full transition-colors">

                                {/* <ArrowRight className="w-5 h-5 md:w-7 md:h-7" /> */}

                                <img src="/arrow1.png" alt="" />

                            </button>

                        </div>

                    </div>



                    {/* IMAGE - Taller for tablet */}

                    <div className="relative w-full overflow-hidden rounded-lg bg-black/5 mb-6">

                        <div className="relative h-[240px] md:h-[380px] w-full">

                            <AnimatePresence mode="wait">

                                <motion.div

                                    key={currentData.id}

                                    initial={{ opacity: 0, x: 60 }}

                                    animate={{ opacity: 1, x: 0 }}

                                    exit={{ opacity: 0, x: -60 }}

                                    transition={{

                                        duration: 0.7,

                                        ease: [0.22, 1, 0.36, 1],

                                    }}

                                    className="absolute inset-0"

                                >

                                    <Image

                                        src={currentData.image}

                                        alt={currentData.title}

                                        fill

                                        className="object-cover object-center"

                                        sizes="(max-width: 768px) 100vw, 80vw"

                                        priority

                                        unoptimized

                                    />

                                </motion.div>

                            </AnimatePresence>

                        </div>

                    </div>



                    {/* TEXT CONTENT WITH FIXED CONTAINERS */}

                    <div className="space-y-4 mb-2">

                        {/* BRAND */}

                        <div className="relative h-[14px] md:h-[28px] overflow-hidden">

                            <AnimatePresence mode="wait">

                                <motion.p

                                    key={`${currentData.id}-brand-mobile`}

                                    initial={{ y: 24, opacity: 0 }}

                                    animate={{ y: 0, opacity: 1 }}

                                    exit={{ y: -24, opacity: 0 }}

                                    transition={{ duration: 0.4 }}

                                    className="absolute uppercase text-xs md:text-sm text-gray-500 tracking-wide"

                                >

                                    {currentData.brand}

                                </motion.p>

                            </AnimatePresence>

                        </div>



                        {/* TITLE - Fixed height based on max lines */}

                        <div className="relative min-h-[42px] md:min-h-[64px] overflow-hidden">

                            <AnimatePresence mode="wait">

                                <motion.h3

                                    key={`${currentData.id}-title-mobile`}

                                    initial={{ y: 40, opacity: 0 }}

                                    animate={{ y: 0, opacity: 1 }}

                                    exit={{ y: -40, opacity: 0 }}

                                    transition={{ duration: 0.5 }}

                                    className="absolute text-lg md:text-2xl font-semibold leading-tight md:leading-tight"

                                >

                                    {currentData.title}

                                </motion.h3>

                            </AnimatePresence>

                        </div>



                        {/* DESCRIPTION - Fixed height for 3-4 lines */}

                        <div className="relative min-h-[80px] md:min-h-[96px] overflow-hidden">

                            <AnimatePresence mode="wait">

                                <motion.p

                                    key={`${currentData.id}-desc-mobile`}

                                    initial={{ y: 30, opacity: 0 }}

                                    animate={{ y: 0, opacity: 1 }}

                                    exit={{ y: -30, opacity: 0 }}

                                    transition={{ duration: 0.5 }}

                                    className="absolute text-sm md:text-base text-gray-600 leading-relaxed"

                                >

                                    {currentData.description}

                                </motion.p>

                            </AnimatePresence>

                        </div>

                    </div>



                    {/* STATS */}

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8 mb-8">

                        {currentData.stats.map((stat, i) => (

                            <motion.div

                                key={`${currentData.id}-stat-mobile-${i}`}

                                initial={{ opacity: 0, y: 15 }}

                                animate={{ opacity: 1, y: 0 }}

                                transition={{ delay: i * 0.1 }}

                                className="pl-3"

                            >

                                <p className="font-bold text-xl md:text-2xl" style={{ color: currentData.color }}>

                                    {stat.value}

                                </p>

                                <p className="text-xs md:text-sm mt-1 leading-tight" style={{ color: currentData.color }}>

                                    {stat.label}

                                </p>

                            </motion.div>

                        ))}

                    </div>



                    {/* BUTTON */}

                    <div className="pt-2">

                        <button

                            className="relative inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-xs md:text-sm font-bold transition-all group overflow-hidden w-fit"

                            style={{

                                background:

                                    "linear-gradient(white, white) padding-box, linear-gradient(270deg, #3952FC 0%, #7F15DC 100%) border-box",

                                border: "1.5px solid transparent",

                            }}

                        >

                            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#3952FC] to-[#7F15DC] group-hover:text-white transition-colors">

                                View Case Study

                            </span>

                            <ArrowUpRight className="relative z-10 w-4 h-4 md:w-5 md:h-5 text-[#5D3FD3] group-hover:text-white transition-colors" />

                            <div className="absolute inset-0 bg-gradient-to-r from-[#3952FC] to-[#7F15DC] opacity-0 group-hover:opacity-100 transition-opacity z-0" />

                        </button>

                    </div>

                </div>



                {/* ================= DESKTOP ================= */}

                <div className="hidden lg:block">

                    {/* HEADER */}

                    <h2 className="uppercase text-[#0E0E0E] font-futura font-bold text-[75px] leading-[100%] mb-4">

                        CASE STUDIES

                    </h2>



                    <div className="w-full h-[1px] bg-gray-400 mb-12" />



                    <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1px_1fr] border-b border-gray-100 pb-6">



                        {/* LEFT */}

                        <div className="lg:pr-16">



                            {/* IMAGE */}

                            <div className="relative h-[450px] w-full overflow-hidden mb-8 bg-black/5 flex items-center justify-center">

                                <AnimatePresence mode="wait">

                                    <motion.div

                                        key={currentData.id}

                                        initial={{ x: 40 }}

                                        animate={{ x: 0 }}

                                        exit={{ x: -40 }}

                                        transition={{

                                            duration: 0.6,

                                            ease: [0.22, 1, 0.36, 1],

                                        }}

                                        className="absolute inset-0"

                                    >

                                        <Image

                                            src={currentData.image}

                                            alt={currentData.title}

                                            fill

                                            className="object-cover object-top"

                                            sizes="100vw"

                                            priority

                                            unoptimized

                                        />

                                    </motion.div>

                                </AnimatePresence>

                            </div>





                            {/* CONTENT */}

                            <div className="grid grid-cols-[auto_1fr_auto] gap-x-10">



                                {/* FEATURED */}

                                <div className="flex items-start gap-2 pt-1">

                                    <span className="w-2.5 h-2.5 rounded-full bg-[#5D3FD3]" />

                                    <span className="uppercase text-[#5D3FD3] text-sm font-medium">

                                        Featured

                                    </span>

                                </div>



                                {/* CENTER */}

                                <div className="flex flex-col space-y-4 ml-10 max-w-xl">



                                    {/* BRAND */}

                                    <div className="relative h-[24px] overflow-hidden">

                                        <AnimatePresence mode="wait">

                                            <motion.p

                                                key={`${currentData.id}-brand`}

                                                initial={{ y: 30, opacity: 0 }}

                                                animate={{ y: 0, opacity: 1 }}

                                                exit={{ y: -30, opacity: 0 }}

                                                transition={{ duration: 0.4 }}

                                                className="absolute uppercase text-[#757676] text-sm"

                                            >

                                                {currentData.brand}

                                            </motion.p>

                                        </AnimatePresence>

                                    </div>



                                    {/* TITLE */}

                                    <div className="relative min-h-[80px] overflow-hidden">

                                        <AnimatePresence mode="wait">

                                            <motion.h3

                                                key={`${currentData.id}-title`}

                                                initial={{ y: 40, opacity: 0 }}

                                                animate={{ y: 0, opacity: 1 }}

                                                exit={{ y: -40, opacity: 0 }}

                                                transition={{ duration: 0.5 }}

                                                className="absolute text-[24px] font-medium text-[#0E0E0E]"

                                            >

                                                {currentData.title}

                                            </motion.h3>

                                        </AnimatePresence>

                                    </div>



                                    {/* DESC */}

                                    <div className="relative min-h-[60px] overflow-hidden">

                                        <AnimatePresence mode="wait">

                                            <motion.p

                                                key={`${currentData.id}-desc`}

                                                initial={{ y: 30, opacity: 0 }}

                                                animate={{ y: 0, opacity: 1 }}

                                                exit={{ y: -30, opacity: 0 }}

                                                transition={{ duration: 0.5 }}

                                                className="absolute text-gray-500 text-[16px] leading-[20px]"

                                            >

                                                {currentData.description}

                                            </motion.p>

                                        </AnimatePresence>

                                    </div>



                                    {/* BUTTON */}

                                    <div className="pt-2">

                                        <button

                                            className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold transition-all group overflow-hidden"

                                            style={{

                                                background:

                                                    "linear-gradient(white, white) padding-box, linear-gradient(270deg, #3952FC 0%, #7F15DC 100%) border-box",

                                                border: "1.5px solid transparent",

                                            }}

                                        >

                                            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#3952FC] to-[#7F15DC] group-hover:text-white transition-colors">

                                                View Case Study

                                            </span>

                                            <ArrowUpRight className="relative z-10 w-4 h-4 text-[#5D3FD3] group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                                            <div className="absolute inset-0 bg-gradient-to-r from-[#3952FC] to-[#7F15DC] opacity-0 group-hover:opacity-100 transition-opacity z-0" />

                                        </button>

                                    </div>

                                </div>



                                {/* DESKTOP ARROWS */}

                                <div className="hidden md:flex gap-4 h-fit">

                                    <button onClick={prev}><ArrowLeft className="w-10 h-10" /></button>

                                    <button onClick={next}><ArrowRight className="w-10 h-10" /></button>

                                </div>

                            </div>

                        </div>



                        <div className="hidden lg:block w-[1px] bg-gray-400" />



                        {/* RIGHT */}

                        <div className="lg:pl-24 pt-6 flex flex-col">



                            {/* STATS */}

                            <div className="grid grid-cols-2 gap-x-10 gap-y-14">

                                {currentData.stats.map((stat, i) => (

                                    <motion.div

                                        key={`${currentData.id}-stat-${i}`}

                                        initial={{ opacity: 0, y: 20 }}

                                        animate={{ opacity: 1, y: 0 }}

                                        transition={{ delay: i * 0.1 }}

                                    >

                                        <p className="text-4xl font-bold" style={{ color: currentData.color }}>

                                            {stat.value}

                                        </p>

                                        <p className="text-sm mt-2" style={{ color: currentData.color }}>

                                            {stat.label}

                                        </p>

                                    </motion.div>

                                ))}

                            </div>



                            {/* COUNTER */}

                            <div className="hidden lg:flex items-end mt-28 pr-8">

                                {/* NUMBER */}

                                <div className="relative h-[160px] min-w-[140px] overflow-hidden">

                                    <AnimatePresence mode="wait">

                                        <motion.span

                                            key={index}

                                            initial={{ y: 120, opacity: 0 }}

                                            animate={{ y: 0, opacity: 1 }}

                                            exit={{ y: -120, opacity: 0 }}

                                            transition={{

                                                type: "spring",

                                                stiffness: 120,

                                                damping: 18,

                                            }}

                                            className="absolute bottom-0 left-2 text-black font-inter font-semibold leading-none"

                                            style={{

                                                fontSize: "105px",

                                                whiteSpace: "nowrap",

                                            }}

                                        >

                                            {String(index + 1).padStart(2, "0")}

                                        </motion.span>

                                    </AnimatePresence>

                                </div>



                                {/* TOTAL */}

                                <span

                                    className="text-[#BBBCBD] font-inter font-semibold leading-none ml-1"

                                    style={{

                                        fontSize: "105px",

                                    }}

                                >

                                    /{String(total).padStart(2, "0")}

                                </span>

                            </div>



                        </div>

                    </div>



                    <div className="w-full h-[1px] bg-gray-400 " />



                </div>

            </div>

        </section>

    );

}

