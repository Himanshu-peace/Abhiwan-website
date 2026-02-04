// "use client"
// import React from 'react'
// import CountUp from '../common/countup'

// const stats = [
//     { label: "YEARS OF EXPERIENCE", value: "7+" },
//     { label: "TEAM MEMBERS", value: "100+" },
//     { label: "REPEATED CLIENTS", value: "70%" },
//     { label: "SUCCESSFUL PROJECTS", value: "600+" },
// ]

// const features = [
//     {
//         number: "01.",
//         title: "TRUSTED BY",
//         highlight: "GLOBAL BRANDS",
//         description: (
//             <>
//                 Institutions like <span className="text-orange-500 font-bold">The Indian Army</span> and{" "}
//                 <span className="text-red-600 font-bold">Abu Dhabi Police</span> have chosen us for important digital projects.
//             </>
//         ),
//     },
//     {
//         number: "02.",
//         title: "CREATIVE THINKING",
//         highlight: "THAT WORKS",
//         description: (
//             <>
//                 Brands such as <span className="text-red-600 font-bold">Coca-Cola</span> and{" "}
//                 <span className="text-blue-700 font-bold">Vaseline</span> have leveraged our creativity and gamification expertise to bring ideas to life.
//             </>
//         ),
//     },
//     {
//         number: "03.",
//         title: "STRONG",
//         highlight: "ON SECURITY",
//         description: (
//             <>
//                 Your data and IPs are safe with us. Clients like{" "}
//                 <span className="text-blue-600 font-bold">Bajaj FinServ</span> and{" "}
//                 <span className="text-blue-900 font-bold">AIIMS</span> are the testament to our security practices.
//             </>
//         ),
//     },
//     {
//         number: "04.",
//         title: "EXPERIENCE",
//         highlight: "ACROSS INDUSTRIES",
//         description: (
//             <>
//                 Working with brands like <span className="text-red-500 font-bold">Ogilvy</span> and{" "}
//                 <span className="text-blue-800 font-bold">DP World</span> giving us a broader perspective of business needs and user expectations.
//             </>
//         ),
//     },
// ]

// export default function SuccessSection() {
//     return (
//         <section className="bg-white py-16 px-4 md:py-24">
//             <div className="max-w-[1400px] mx-auto">

//                 {/* --- DESKTOP SCOREBOARD OF SUCCESS --- */}
//                 <div className="hidden lg:block text-center mb-16">
//                     <h2
//                         className="uppercase tracking-tight text-[#373737]"
//                         style={{
//                             fontFamily: "'Futura PT', sans-serif",
//                             fontWeight: 700,
//                             fontStyle: "normal", // Bold handled by fontWeight 700
//                             fontSize: "80px",
//                             lineHeight: "100%",
//                             letterSpacing: "0%",
//                             textTransform: "uppercase",
//                         }}
//                     >
//                         SCOREBOARD OF <span className="text-transparent" style={{ WebkitTextStroke: "1px #111" }}>SUCCESS</span>
//                     </h2>
//                     <p
//                         className="mt-6 leading-[1.5] text-[#242424] max-w-5xl mx-auto font-inter text-center"
//                         style={{
//                             fontWeight: 400,
//                             fontSize: '22px',
//                             letterSpacing: '0%',
//                         }}
//                     >
//                         Building future-ready software through immersive tech and intelligent software development. With global reach,
//                         hundreds of successful projects, and a reputation for innovation, our Software Application Development Services
//                         has come a long way. We're a team that loves pushing boundaries.
//                     </p>

//                     {/* STATS GRID */}
//                     <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-gray-100">
//                         {stats.map((stat, idx) => (
//                             <div
//                                 key={idx}
//                                 className="relative p-6 md:p-12 flex flex-col items-center"
//                             >
//                                 {/* VERTICAL DIVIDER — only between middle items */}
//                                 {idx !== 0 && idx !== stats.length - 1 && (
//                                     <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px bg-black/20" />
//                                 )}

//                                 {/* CONTENT WRAPPER */}
//                                 <div className="w-full max-w-[420px] md:max-w-none text-left">
//                                     {/* Value */}
//                                     <div
//                                         className="mb-4 whitespace-nowrap overflow-visible"
//                                         style={{
//                                             fontFamily: '"Futura PT", sans-serif',
//                                             fontWeight: 700,
//                                             fontSize: 'clamp(56px, 7vw, 110px)',
//                                             lineHeight: '1',
//                                             textTransform: 'uppercase',
//                                             background: 'linear-gradient(270deg, #3952FC 0%, #7F15DC 100%)',
//                                             WebkitBackgroundClip: 'text',
//                                             WebkitTextFillColor: 'transparent',
//                                         }}
//                                     >
//                                         <CountUp value={stat.value} />
//                                     </div>


//                                     {/* Label */}
//                                     <div
//                                         className="break-words mb-4"
//                                         style={{
//                                             fontFamily: '"Futura PT", sans-serif',
//                                             fontWeight: 700,
//                                             fontSize: 'clamp(18px, 2.5vw, 32px)',
//                                             lineHeight: '1.2',
//                                             textTransform: 'uppercase',
//                                             color: '#2C2C2C',
//                                             letterSpacing: '0.02em',
//                                             display: '-webkit-box',
//                                             WebkitBoxOrient: 'vertical',
//                                             WebkitLineClamp: 2, // ✅ Yehi kaafi hai - max 2 lines
//                                             overflow: 'hidden',
//                                         }}
//                                     >
//                                         {stat.label === "YEARS OF EXPERIENCE"
//                                             ? "YEARS OF\nEXPERIENCE"
//                                             : stat.label}
//                                     </div>


//                                 </div>
//                             </div>
//                         ))}
//                     </div>




//                     {/* SEPARATOR LINE */}
//                     <div className="w-full h-[6px] bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 my-20" />
//                 </div>

//                 {/* --- MOBILE SCOREBOARD OF SUCCESS --- */}
//                 <div className="lg:hidden px-4">
//                     <div className="text-center mb-4">
//                         <h2
//                             className="uppercase font-futura tracking-tight text-[#373737] whitespace-nowrap overflow-hidden"
//                             style={{
//                                 fontWeight: 700,
//                                 fontStyle: "normal",
//                                 fontSize: "6vw", // font size adjusts to screen width
//                                 lineHeight: "100%",
//                                 letterSpacing: "0%",
//                                 textTransform: "uppercase",
//                             }}
//                         >
//                             SCOREBOARD OF{" "}
//                             <span
//                                 className="text-transparent"
//                                 style={{ WebkitTextStroke: "1px #111" }}
//                             >
//                                 SUCCESS
//                             </span>
//                         </h2>



//                         <p
//                             className="mt-4 font-inter space-y-2 leading-[1.8] text-[#242424] max-w-xs mx-auto text-center"
//                             style={{
//                                 fontWeight: 400,           // Number or string without quotes also works: "400"
//                                 fontStyle: "normal",       // Use "normal" instead of "Regular" (CSS accepts normal/italic/oblique)
//                                 fontSize: "16px",
//                                 lineHeight: "100%",
//                                 letterSpacing: "0%",
//                                 verticalAlign: "middle",
//                                 textAlign: "center",       // Already handled by className "text-center" but no harm repeating
//                             }}
//                         >
//                             Building future-ready software through immersive tech and intelligent software
//                             development. With global reach, hundreds of successful projects, and a reputation for innovation, our Software Application Development Services has come a long way. We're a team that loves pushing boundaries
//                             and never stops working hard to continue to be the best immersive tech experts.
//                         </p>

//                     </div>

//                     {/* STATS GRID - 2 columns for mobile */}
//                     {/* STATS GRID - 2 columns for mobile with separators */}
//                     <div className="relative max-w-[800px] mx-auto">

//                         {/* STATS GRID */}
//                         <div className="grid grid-cols-2 grid-rows-2 relative z-10">
//                             {stats.map((stat, idx) => (
//                                 <div
//                                     key={idx}
//                                     className="flex flex-col items-center justify-center px-4 py-8 text-center"
//                                 >
//                                     {/* VALUE */}
//                                     <div
//                                         className="font-futura font-bold text-[clamp(36px,6vw,64px)] leading-none"
//                                         style={{
//                                             background: "linear-gradient(270deg, #3952FC 0%, #7F15DC 100%)",
//                                             WebkitBackgroundClip: "text",
//                                             WebkitTextFillColor: "transparent",
//                                         }}
//                                     >
//                                         {stat.value}
//                                     </div>

//                                     {/* LABEL */}
//                                     <div
//                                         className="mt-3 font-futura font-bold uppercase text-[#2C2C2C] leading-tight text-[clamp(14px,2.5vw,20px)]"
//                                     >
//                                         {stat.label.split(" ").map((word, i) => (
//                                             <div key={i}>{word}</div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* 🔥 CENTER DIVIDERS — EXACT SAME STYLE */}
//                         <div className="pointer-events-none absolute inset-0 z-0">

//                             {/* Vertical Divider */}
//                             <div
//                                 className="absolute top-0 bottom-0 left-1/2 w-[2px]"
//                                 style={{
//                                     background:
//                                         "linear-gradient(180deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
//                                     opacity: 0.9,
//                                 }}
//                             />

//                             {/* Horizontal Divider */}
//                             <div
//                                 className="absolute left-0 right-0 top-1/2 h-[2px]"
//                                 style={{
//                                     background:
//                                         "linear-gradient(90deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
//                                     opacity: 0.9,
//                                 }}
//                             />
//                         </div>
//                     </div>






//                     {/* SEPARATOR LINE */}
//                     <div className="w-full h-[4px] bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 my-6 rounded" />
//                 </div>



//                 {/* --- WHY CHOOSE US --- */}
//                 {/* ================= WHY CHOOSE US ================= */}

//                 <div className="w-full">

//                     {/* ---------- HEADING ---------- */}
//                     <div className="mb-12 my-6">
//                         <h2
//                             className="uppercase font-futura text-center whitespace-nowrap leading-none"
//                             style={{
//                                 // fontFamily: '"Futura PT", sans-serif',
//                                 fontWeight: 700,
//                                 fontSize: 'clamp(28px, 6vw, 84px)', // 👈 mobile me aur chhota
//                                 lineHeight: '1',
//                                 color: '#373737',
//                             }}
//                         >
//                             WHY CHOOSE{" "}
//                             <span
//                                 style={{
//                                     WebkitTextStroke: '1px #111',
//                                     WebkitTextFillColor: 'transparent',
//                                 }}
//                             >
//                                 US?
//                             </span>
//                         </h2>


//                         <p
//                             className="mt-4 font-inter text-center mx-auto"
//                             style={{
//                                 fontWeight: 400,
//                                 fontSize: 'clamp(13px, 3.5vw, 22px)',
//                                 lineHeight: '1',
//                                 letterSpacing: '0%',
//                                 color: '#4B5563',
//                                 maxWidth: '42ch',
//                             }}
//                         >
//                             Setting the pace in Immersive Tech — empowering software development for
//                             startups and brands to build smarter, scalable futures with meaningful
//                             technology.
//                         </p>

//                     </div>

//                     {/* ---------- MOBILE IMAGE (comes after heading) ---------- */}
//                     <div className="relative w-full max-w-[320px] mx-auto mb-12 lg:hidden">
//                         <img
//                             src="/scoreboard.png"
//                             alt="Developer illustration"
//                             className="w-full object-contain"
//                         />
//                     </div>

//                     {/* ---------- CONTENT WRAPPER ---------- */}
//                     <div className="flex flex-col lg:flex-row items-start gap-12">

//                         {/* ---------- FEATURES LIST ---------- */}
//                         <div className="relative flex-1">

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative z-10">
//                                 {features.map((item, idx) => (
//                                     <div key={idx} className="flex flex-col items-center text-center">

//                                         {/* NUMBER + TITLE */}
//                                         <div className="flex flex-col items-center gap-1 mb-3">
//                                             <h3
//                                                 className="uppercase font-bold text-gray-900"
//                                                 style={{
//                                                     fontFamily: "'Futura PT', sans-serif",
//                                                     fontWeight: 600,
//                                                     fontStyle: "Heavy",
//                                                     fontSize: "24px",
//                                                     lineHeight: "100%",
//                                                     letterSpacing: "0%",
//                                                     textTransform: "uppercase",
//                                                 }}
//                                             >
//                                                 {item.number} {item.title}{" "}
//                                                 <span
//                                                     style={{
//                                                         fontFamily: "'Futura PT', sans-serif",
//                                                         fontWeight: 600,
//                                                         fontStyle: "Heavy",
//                                                         fontSize: "24px",
//                                                         lineHeight: "100%",
//                                                         letterSpacing: "0%",
//                                                         textTransform: "uppercase",
//                                                         background: `linear-gradient(0deg, #74118C, #74118C),
//                      linear-gradient(90.4deg, #1C1C1C 31.08%, #763AF5 64.2%, #A604F2 98.85%)`,
//                                                         WebkitBackgroundClip: "text",
//                                                         WebkitTextFillColor: "transparent",
//                                                     }}
//                                                 >
//                                                     {item.highlight}
//                                                 </span>
//                                             </h3>
//                                         </div>



//                                         {/* DESCRIPTION */}
//                                         <p className="text-gray-500 leading-relaxed max-w-[40ch]">
//                                             {item.description}
//                                         </p>

//                                         {/* HORIZONTAL DIVIDER */}
//                                         <div
//                                             className="mt-6 h-[1px] w-full max-w-[280px]"
//                                             style={{
//                                                 background:
//                                                     "linear-gradient(90deg, transparent, #CECECE, transparent)",
//                                                 opacity: 0.9,
//                                             }}
//                                         />

//                                     </div>
//                                 ))}
//                             </div>



//                             {/* ---------- CENTER “+” DIVIDER (DESKTOP ONLY) ---------- */}
//                             <div className="pointer-events-none absolute inset-0 hidden md:block z-0">
//                                 {/* Vertical */}
//                                 <div
//                                     className="absolute top-0 bottom-0 left-1/2 w-[2px]"
//                                     style={{
//                                         background:
//                                             "linear-gradient(180deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
//                                         opacity: 0.9,
//                                     }}
//                                 />

//                                 {/* Horizontal */}
//                                 <div
//                                     className="absolute left-0 right-0 top-1/2 h-[2px]"
//                                     style={{
//                                         background:
//                                             "linear-gradient(90deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
//                                         opacity: 0.9,
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* ---------- DESKTOP IMAGE (RIGHT SIDE ONLY) ---------- */}
//                         <div className="relative w-full max-w-[400px] aspect-square hidden lg:flex items-center justify-center">
//                             <div className="absolute inset-0 border border-dashed border-gray-200 rounded-full animate-[spin_20s_linear_infinite]" />
//                             <div className="absolute inset-8 border border-dashed border-gray-200 rounded-full" />

//                             <div className="absolute top-1/4 -left-2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
//                             <div className="absolute bottom-1/4 -right-2 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
//                             <div className="absolute bottom-1/4 left-4 w-2 h-2 bg-green-300 rounded-full" />

//                             <img
//                                 src="/scoreboard.png"
//                                 alt="Developer illustration"
//                                 className="relative z-10 w-[85%] object-contain"
//                             />
//                         </div>

//                     </div>
//                 </div>


//             </div>
//         </section>
//     )
// }







"use client"
import React from 'react'
import CountUp from '../common/countup'

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

export default function SuccessSection() {
    return (
        <section className="bg-white py-16 px-4 md:py-24">
            <div className="max-w-[1400px] mx-auto">

                {/* --- DESKTOP SCOREBOARD OF SUCCESS --- */}
                <div className="hidden lg:block text-center mb-16">
                    <h2
                        className="uppercase tracking-tight text-[#373737]"
                        style={{
                            fontFamily: "'Futura PT', sans-serif",
                            fontWeight: 700,
                            fontStyle: "normal", // Bold handled by fontWeight 700
                            fontSize: "80px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            textTransform: "uppercase",
                        }}
                    >
                        SCOREBOARD OF <span className="text-transparent" style={{ WebkitTextStroke: "1px #111" }}>SUCCESS</span>
                    </h2>
                    <p
                        className="mt-6 leading-[1.5] text-[#242424] max-w-5xl mx-auto font-inter text-center"
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
                                {/* VERTICAL DIVIDER — only between middle items */}
                                {idx !== 0 && idx !== stats.length - 1 && (
                                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-px bg-black/20" />
                                )}

                                {/* CONTENT WRAPPER */}
                                <div className="w-full max-w-[420px] md:max-w-none text-left">
                                    {/* Value */}
                                    <div
                                        className="mb-4 whitespace-nowrap overflow-visible"
                                        style={{
                                            fontFamily: '"Futura PT", sans-serif',
                                            fontWeight: 700,
                                            fontSize: 'clamp(56px, 7vw, 110px)',
                                            lineHeight: '1',
                                            textTransform: 'uppercase',
                                            background: 'linear-gradient(270deg, #3952FC 0%, #7F15DC 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        <CountUp value={stat.value} />
                                    </div>


                                    {/* Label */}
                                    <div
                                        className="break-words mb-4"
                                        style={{
                                            fontFamily: '"Futura PT", sans-serif',
                                            fontWeight: 700,
                                            fontSize: 'clamp(18px, 2.5vw, 32px)',
                                            lineHeight: '1.2',
                                            textTransform: 'uppercase',
                                            color: '#2C2C2C',
                                            letterSpacing: '0.02em',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2, // ✅ Yehi kaafi hai - max 2 lines
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




                    {/* SEPARATOR LINE */}
                    <div className="w-full h-[6px] bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 my-20" />
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
                                fontWeight: 400,           // Number or string without quotes also works: "400"
                                fontStyle: "normal",       // Use "normal" instead of "Regular" (CSS accepts normal/italic/oblique)
                                fontSize: "16px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                verticalAlign: "middle",
                                textAlign: "center",       // Already handled by className "text-center" but no harm repeating
                            }}
                        >
                            Building future-ready software through immersive tech and intelligent software
                            development. With global reach, hundreds of successful projects, and a reputation for innovation, our Software Application Development Services has come a long way. We're a team that loves pushing boundaries
                            and never stops working hard to continue to be the best immersive tech experts.
                        </p>

                    </div>

                    {/* STATS GRID - 2 columns for mobile */}
                    {/* STATS GRID - 2 columns for mobile with separators */}
                    <div className="relative max-w-[800px] mx-auto">

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
                                className="absolute top-0 bottom-0 left-1/2 w-[2px]"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
                                    opacity: 0.9,
                                }}
                            />

                            {/* Horizontal Divider */}
                            <div
                                className="absolute left-0 right-0 top-1/2 h-[2px]"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
                                    opacity: 0.9,
                                }}
                            />
                        </div>
                    </div>






                    {/* SEPARATOR LINE */}
                    <div className="w-full h-[4px] bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 my-6 rounded" />
                </div>



                {/* --- WHY CHOOSE US --- */}
                {/* ================= WHY CHOOSE US ================= */}

                <div className="w-full">

                    {/* ---------- HEADING ---------- */}
                    <div className="mb-12 my-6">
                        <h2
                            className="uppercase font-futura text-start whitespace-nowrap leading-none"
                            style={{
                                // fontFamily: '"Futura PT", sans-serif',
                                fontWeight: 700,
                                fontSize: 'clamp(28px, 6vw, 84px)', // 👈 mobile me aur chhota
                                lineHeight: '1',
                                color: '#373737',
                            }}
                        >
                            WHY CHOOSE{" "}
                            <span
                                style={{
                                    WebkitTextStroke: '1px #111',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                US?
                            </span>
                        </h2>


                        <p
                            className="mt-4 font-inter text-start md:mb-16"
                            style={{
                                fontWeight: 400,
                                fontSize: 'clamp(13px, 3.5vw, 22px)',
                                lineHeight: '1',
                                letterSpacing: '0%',
                                color: '#4B5563',
                                maxWidth: '48ch',
                            }}
                        >
                            Setting the pace in Immersive Tech — empowering software development for
                            startups and brands to build smarter, scalable futures with meaningful
                            technology.
                        </p>

                    </div>

                    {/* ---------- MOBILE IMAGE (comes after heading) ---------- */}
                    <div className="relative w-full max-w-[320px] mx-auto mb-12 lg:hidden">
                        <img
                            src="/scoreboard.png"
                            alt="Developer illustration"
                            className="w-full object-contain"
                        />
                    </div>

                    {/* ---------- CONTENT WRAPPER ---------- */}
                    <div className="flex flex-col lg:flex-row items-start gap-12">

                        {/* ---------- FEATURES LIST ---------- */}
                        <div className="relative flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
                                {features.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center text-center px-4 md:px-0"
                                    >
                                        {/* NUMBER + TITLE */}
                                        <h3
                                            className="uppercase font-bold text-gray-900 mb-3"
                                            style={{
                                                fontFamily: "'Futura PT', sans-serif",
                                                fontWeight: 600,
                                                fontSize: "24px",
                                                lineHeight: "32px", // Make sure line-height gives some breathing room
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            {item.number} {item.title}{" "}
                                            <span
                                                style={{
                                                    fontFamily: "'Futura PT', sans-serif",
                                                    fontWeight: 600,
                                                    fontSize: "24px",
                                                    lineHeight: "32px",
                                                    background: `linear-gradient(0deg, #74118C, #74118C),
                          linear-gradient(90.4deg, #1C1C1C 31.08%, #763AF5 64.2%, #A604F2 98.85%)`,
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                }}
                                            >
                                                {item.highlight}
                                            </span>
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p
                                            className="font-inter font-normal text-gray-500 text-[19.51px] leading-[28px] tracking-normal max-w-[400px]"
                                            style={{
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.description}
                                        </p>

                                        {/* HORIZONTAL DIVIDER */}
                                        <div
                                            className="mt-6 h-[1px] w-full max-w-[280px]"
                                            style={{
                                                background:
                                                    "linear-gradient(90deg, transparent, #CECECE, transparent)",
                                                opacity: 0.9,
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* ---------- CENTER "+" DIVIDER (DESKTOP ONLY) ---------- */}
                            <div className="pointer-events-none absolute inset-0 hidden md:block z-0">
                                {/* Vertical */}
                                <div
                                    className="absolute top-0 bottom-0 left-1/2 w-[2px]"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
                                        opacity: 0.9,
                                    }}
                                />

                                {/* Horizontal */}
                                <div
                                    className="absolute left-0 right-0 top-1/2 h-[2px]"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #FFFFFF 0%, #CECECE 50.51%, #FFFFFF 100%)",
                                        opacity: 0.9,
                                    }}
                                />
                            </div>
                        </div>


                        {/* ---------- DESKTOP IMAGE (RIGHT SIDE ONLY) ---------- */}
                        <div className="relative w-full max-w-[400px] aspect-square hidden lg:flex items-center justify-center">
                            <div className="absolute inset-0 border border-dashed border-gray-200 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-8 border border-dashed border-gray-200 rounded-full" />

                            <div className="absolute top-1/4 -left-2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                            <div className="absolute bottom-1/4 -right-2 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                            <div className="absolute bottom-1/4 left-4 w-2 h-2 bg-green-300 rounded-full" />

                            <img
                                src="/scoreboard.png"
                                alt="Developer illustration"
                                className="relative z-10 w-[85%] object-contain"
                            />
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}