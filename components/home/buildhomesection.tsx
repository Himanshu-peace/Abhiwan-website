"use client"
import React from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';


// export default function AiEraHero() {
//     return (
//         <section className="relative w-full  min-h-[400px]  bg-[#151325]   overflow-hidden rounded-t-2xl   sm:rounded-t-3xl       lg:rounded-none      lg:rounded-tr-[250px] 
// ">
//             <div className="relative mx-auto max-w-[1400px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

//                 {/* Left Column - Text */}
//                 <div className="z-10 max-w-2xl text-center lg:text-left w-full">

//                     {/* Heading */}
//                     <h1
//                         className="
//     font-futura
//     font-bold
//     uppercase
//     text-white

//     text-[42px]
//     sm:text-[60px]
//     lg:text-[84px]

//     leading-[1]
//     tracking-normal
//     whitespace-nowrap
//     max-w-none

//     mb-8
//   "
//                     >
//                         BUILT FOR THE{" "}
//                         <span
//                             className="inline-block bg-clip-text text-transparent"
//                             style={{
//                                 backgroundImage:
//                                     "linear-gradient(90.37deg, #FFFFFF 45.64%, #763AF5 71.75%, #A604F2 99.05%)",
//                             }}
//                         >
//                             AI ERA
//                         </span>
//                     </h1>


//                     {/* 🔹 VIDEO (MOBILE ONLY) */}
//                     <div className="relative mx-auto lg:hidden w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] overflow-hidden bg-[#151325]">

//                         <div className="absolute inset-0 bg-purple-600/30 blur-[450px] rounded-full pointer-events-none" />

//                         <div className="absolute inset-0 bg-[#151325] mix-blend-color" />

//                         <video
//                             src="/Main_Comp_2.mp4"
//                             className="absolute inset-0 w-full h-full object-cover mix-blend-lighten"
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                         />
//                     </div>




//                     {/* Paragraphs */}
//                     <div className="space-y-6 font-inter text-white text-[18px] font-normal leading-[1.2] tracking-normal">
//                         <p className='font-inter'>
//                             Built for the AI-driven future, Abhiwan Technology
//                             excels in delivering intelligent, immersive digital solutions.
//                             As a trusted Software Development Company, we integrate AI with Gaming, Immersive Tech, and Web3 to create intelligent, scalable product experiences.
//                         </p>

//                         <p className='font-inter'>
//                             From custom platforms to next-gen experiences, our skilled teams design secure, high-performance systems.
//                         </p>

//                         <p className='font-inter'>
//                             As the Best Software Development Company in India, we design Immersive Solutions across Gaming, XR, AI, and enterprise platforms that are built to scale, adapt, and lead.
//                         </p>
//                     </div>


//                     {/* Button */}
//                     <div className="mt-10 flex justify-center lg:justify-start">
//                         <button className="group px-8 py-3 bg-gradient-to-r from-[#7F15DC] to-[#3952FC] text-white rounded-full font-bold flex items-center gap-2">
//                             Let's Build Smarter
//                             <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* 🔹 VIDEO (DESKTOP ONLY – UNCHANGED DESIGN) */}
//                 <div className="relative hidden lg:block left-20 top-10 w-full max-w-[500px] aspect-square bg-transparent">
//                     <div className="absolute inset-0 bg-purple-600/20 blur-[400px] rounded-full" />
//                     <video
//                         src="/Main_Comp_2.mp4"
//                         className="object-cover w-full h-full relative z-10 mix-blend-screen"
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                     />
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default function AiEraHero() {
//     return (
//         <section className="relative w-full min-h-[400px] bg-[#151325] overflow-hidden rounded-t-2xl sm:rounded-t-3xl lg:rounded-none lg:rounded-tr-[250px]">
//             <div className="relative mx-auto max-w-[1400px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

//                 {/* Left Column - Text */}
//                 <div className="z-10 max-w-4xl lg:pr-8 text-center lg:text-left w-full">

//                     {/* Heading - Fixed for Mobile Wrap */}
//                     <h1 className="font-futura font-bold uppercase text-white text-[32px] sm:text-[60px] lg:text-[84px] leading-[1.1] lg:leading-[1] tracking-normal mb-8 lg:whitespace-nowrap">
//                         BUILT FOR THE{" "}
//                         <span
//                             className="inline-block bg-clip-text text-transparent"
//                             style={{
//                                 backgroundImage: "linear-gradient(90.37deg, #FFFFFF 45.64%, #763AF5 71.75%, #A604F2 99.05%)",
//                             }}
//                         >
//                             AI ERA
//                         </span>
//                     </h1>

//                     {/* VIDEO (MOBILE ONLY) - Fixed Background and Blend */}
//                     <div className="relative mx-auto lg:hidden w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] overflow-hidden bg-[#151325]">

//                         <div className="absolute inset-0 bg-purple-600/30 blur-[450px] rounded-full pointer-events-none" />

//                         <div className="absolute inset-0 bg-[#151325] mix-blend-color" />

//                         <video
//                             src="/Main_Comp_2.mp4"
//                             className="absolute inset-0 w-full h-full object-cover mix-blend-lighten"
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                         />
//                     </div>

//                     {/* Paragraphs - Responsive Alignment */}
//                     <div className="space-y-6 font-inter text-white text-[16px] lg:text-[18px] font-normal leading-relaxed text-center lg:text-left">
//                         <p>
//                             Built for the AI-driven future, Abhiwan Technology excels in delivering intelligent, immersive digital solutions.
//                             As a trusted Software Development Company, we integrate AI with Gaming, Immersive Tech, and Web3 to create intelligent, scalable product experiences.
//                         </p>
//                         <p>
//                             From custom platforms to next-gen experiences, our skilled teams design secure, high-performance systems.
//                         </p>
//                         <p>
//                             As the Best Software Development Company in India, we design Immersive Solutions across Gaming, XR, AI, and enterprise platforms that are built to scale, adapt, and lead.
//                         </p>
//                     </div>

//                     {/* Button */}
//                     <div className="mt-10 flex justify-center lg:justify-start">
//                         <button className="group px-8 py-3 bg-gradient-to-r from-[#7F15DC] to-[#3952FC] text-white rounded-full font-bold flex items-center gap-2 transition-transform active:scale-95">
//                             Let's Build Smarter
//                             <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* VIDEO (DESKTOP ONLY) */}
//                 <div className="relative hidden lg:block top-6 w-[520px] h-[420px] bg-transparent">
//                     {/* <div className="absolute inset-0 bg-purple-600/20 blur-[400px] rounded-full" /> */}
//                     <div className="absolute inset-0 bg-[#151325] mix-blend-color" />
//                     <video
//                         src="/Main_Comp_2.mp4"
//                         className="object-cover w-full h-full relative z-10 mix-blend-li"
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                     />
//                 </div>

//             </div>
//         </section>
//     );
// }



export default function AiEraHero() {
    return (
        <section className="relative w-full min-h-[400px] bg-[#151325] overflow-hidden rounded-t-2xl sm:rounded-t-3xl lg:rounded-none lg:rounded-tr-[250px]">
            <div className="relative mx-auto max-w-[1400px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left Column - Text */}
                <div className="z-10 lg:flex-1 max-w-full lg:max-w-[55%] lg:pr-8 text-center lg:text-left">

                    {/* Heading - Fixed for Mobile Wrap */}
                    <h1 className="font-futura font-bold uppercase text-white text-[32px] sm:text-[60px] lg:text-[84px] leading-[1.1] lg:leading-[1] tracking-normal mb-8 lg:whitespace-nowrap">
                        BUILT FOR THE{" "}
                        <span
                            className="inline-block bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(90.37deg, #FFFFFF 45.64%, #763AF5 71.75%, #A604F2 99.05%)",
                            }}
                        >
                            AI ERA
                        </span>
                    </h1>

                    {/* VIDEO (MOBILE ONLY) - Fixed Background and Blend */}
                    <div className="relative mx-auto lg:hidden w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] overflow-hidden bg-[#151325]">

                        <div className="absolute inset-0 bg-purple-600/30 blur-[450px] rounded-full pointer-events-none" />

                        <div className="absolute inset-0 bg-[#151325] mix-blend-color" />

                        <video
                            src="/Main_Comp_2.mp4"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-lighten"
                            autoPlay
                            loop
                            muted
                            playsInline
                        
                        />
                    </div>

                    {/* Paragraphs - Responsive Alignment */}
                    <div className="space-y-6 font-inter text-white text-[18px] font-normal leading-[100%] tracking-normal text-center lg:text-left">
                        <p>
                            Built for the AI-driven future, Abhiwan Technology excels in delivering intelligent, immersive digital solutions.
                            As a trusted Software Development Company, we integrate AI with Gaming, Immersive Tech, and Web3 to create intelligent, scalable product experiences.
                        </p>
                        <p>
                            From custom platforms to next-gen experiences, our skilled teams design secure, high-performance systems.
                        </p>
                        <p>
                            As the Best Software Development Company in India, we design Immersive Solutions across Gaming, XR, AI, and enterprise platforms that are built to scale, adapt, and lead.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="mt-10 flex justify-center lg:justify-start">
                        <button className="group px-8 py-3 bg-gradient-to-r from-[#7F15DC] to-[#3952FC] text-white rounded-full font-bold flex items-center gap-2 transition-transform active:scale-95">
                            Let's Build Smarter
                            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* VIDEO (DESKTOP ONLY) - Made responsive */}
                <div className="relative hidden lg:top-20 lg:block lg:flex-1 max-w-full lg:max-w-[45%]">
                    <div className="relative w-full h-[420px] lg:h-[450px] xl:h-[480px] bg-transparent">
                        <div className="absolute inset-0 bg-[#151325] mix-blend-color" />
                        <video
                            src="/Main_Comp_2.mp4"
                            className="object-cover w-full h-full relative z-10 mix-blend-lighten"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
