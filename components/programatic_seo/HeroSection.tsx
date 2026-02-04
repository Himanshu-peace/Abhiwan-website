// import React from 'react'
// import Image from 'next/image'
// import { getBenefits } from '@/constants/hero_secConst'
// import { CERTIFICATIONS } from "@/constants/hero_secConst"
// import HeroForm from './HeroForm'
// import { FreeQuoteButton, ScheduleCallButton } from './HeroActionButtons'

// export default function HeroSection({ name, backgroundImage, country, title }: { name: string, backgroundImage: string, country: string, title: string }) {

//     const formatCountryName = (slug: string) => {
//         if (!slug) return "";
//         const formatted = slug.replace(/-/g, ' ')
//         return formatted.charAt(0).toUpperCase() + formatted.slice(1)
//     }

//     const BENEFITS: string[] = getBenefits(name, title)

//     return (
//         <section className="relative min-h-screen bg-gradient-to-br from-[#171635] via-[#15193d] to-[#171635] text-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//                 <Image src="https://cdn.abhiwandemos.com/api/files/pbc_193071544/o3n7488rj4d5nw4/penguin_kart_sp2u6sojd3.webp" alt="" fill className="object-cover opacity-5" unoptimized />
//             </div>

//             <FreeQuoteButton />

//             <div className="relative  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-10 md:pt-10 pb-10 md:pb-10">
//                 <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:items-start">
//                     {/* Left Section - Hero Content */}
//                     <div className="flex flex-col items-center lg:items-start md:items-center w-full gap-6">
//                         {/* Main Heading */}
//                         <div className="w-full max-w-[520px] mx-auto md:mx-0 text-center lg:text-left md:text-center">
//                             <h1 className="text-[22px] sm:text-[24px] md:text-4xl font-bold text-white leading-[28px] md:leading-tight mb-1">
//                                 <span className="block whitespace-nowrap">
//                                     {title.toUpperCase()}
//                                 </span>

//                                 <span className="block whitespace-nowrap">
//                                     SERVICES IN{" "}
//                                     <span className="text-red-500">
//                                         {formatCountryName(name).toUpperCase() || "NOIDA"}
//                                     </span>
//                                 </span>
//                             </h1>


//                         </div>

//                         {/* Features List */}
//                         <ul
//                             className=" space-y-2 w-full max-w-[620px] mx-auto px-4 md:px-0 font-inter text-[14px] md:text-[15px] leading-[20px] font-normal text-left"
//                         >
//                             {BENEFITS.map((benefit: string, index: number) => (
//                                 <li key={index} className="flex items-start gap-3 text-white">
//                                     <span className="flex-shrink-0 w-3">•</span>
//                                     <span className="block">{benefit}</span>
//                                 </li>
//                             ))}
//                         </ul>


//                         <ScheduleCallButton />

//                         {/* Character Image */}
//                         <div className="w-full flex justify-center md:justify-center">
//                             <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[450px]">
//                                 <Image
//                                     src={"/herosection-angrybird.png"}
//                                     alt="Game Development Character"
//                                     fill
//                                     className="object-cover filter drop-shadow-2xl lg:-mt-15 -ml-12 md:-ml-20 lg:-ml-32"
//                                     priority
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Section - Contact Form */}
//                     <div
//                         id="hero-form-anchor"
//                         className="w-full max-w-[550px] space-y-4 sm:space-y-6 
//              mx-auto flex flex-col items-center justify-center
//              md:mx-auto" // ensure centering at md+ screens
//                     >
//                         {/* FORM */}
//                         <HeroForm country={country} />

//                         {/* Certifications */}
//                         <div
//                             className="flex items-center justify-between gap-4 bg-[#1D2135] px-2 py-4 sm:py-6 rounded-lg overflow-hidden text-white"
//                             style={{
//                                 border: "1px solid",
//                                 borderImageSource:
//                                     "linear-gradient(90deg, #181632 0%, #CCCCCC 50%, #181632 100%)",
//                                 borderImageSlice: 1,
//                             }}
//                         >
//                             {CERTIFICATES.map((cert: any) => (
//                                 <div key={cert.name} className="flex-1 flex justify-center">
//                                     <img
//                                         src={`${process.env.NEXT_PUBLIC_CDN_URL}${cert.image}`}
//                                         alt={cert.name}
//                                         width={60}
//                                         height={40}
//                                         loading="lazy"
//                                         className="object-contain"
//                                     />
//                                 </div>
import React from 'react'
import Image from 'next/image'
import { getBenefits } from '@/constants/hero_secConst'
import { CERTIFICATIONS } from "@/constants/hero_secConst"
import HeroForm from './HeroForm'
import { ScheduleCallButton } from './HeroActionButtons'

export default function HeroSection({ name, backgroundImage, country, title }: { name: string, backgroundImage: string, country: string, title: string }) {

    const formatCountryName = (slug: string) => {
        if (!slug) return "";
        const formatted = slug.replace(/-/g, ' ')
        return formatted.charAt(0).toUpperCase() + formatted.slice(1)
    }

    const BENEFITS: string[] = getBenefits(name, title)
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#171635] via-[#15193d] to-[#171635] text-white overflow-hidden ">
            <div className="absolute inset-0 z-0">
                <Image
                    src={
                        title.toLowerCase().includes("metaverse")
                            ? "/Metaverse_bg.webp"
                            : title.toLowerCase().includes("3d") || title.toLowerCase().includes("art")
                                ? process.env.NEXT_PUBLIC_CDN_URL + "7g10z5v9xn31319/hero_bg_2_oad3rl8kyw.webp"
                                : title.toLowerCase().includes("game")
                                    ? process.env.NEXT_PUBLIC_CDN_URL + "o3n7488rj4d5nw4/penguin_kart_sp2u6sojd3.webp"
                                    : title.toLowerCase().includes("blockchain")
                                        ? process.env.NEXT_PUBLIC_CDN_URL + "370nmz1y06ooto3/hero_bg_tn6shkncoi.webp"
                                        : title.toLowerCase().includes("ai") || title.toLowerCase().includes("chatbot")
                                            ? process.env.NEXT_PUBLIC_CDN_URL + "4z353fv0499fu98/hero_bg_jo5v3zyftc.webp"
                                            : process.env.NEXT_PUBLIC_CDN_URL + "o3n7488rj4d5nw4/penguin_kart_sp2u6sojd3.webp"
                    }
                    alt=""
                    fill
                    className="object-cover opacity-10"
                    unoptimized
                />
            </div>

            <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12 pt-10 md:pt-16 pb-10 md:pb-16">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    {/* Left Section - Hero Content */}
                    {/* Left Section - Hero Content */}
                    <div className="lg:w-[48%] xl:w-[50%] flex flex-col">
                        {/* Main Heading */}
                        <div className="w-full text-center lg:text-left">
                            <h1
                                className="
        text-[22px] sm:text-[36px] md:text-5xl lg:text-4xl
        font-bold text-white leading-tight mb-4
      "
                            >
                                <span className="block whitespace-nowrap tracking-tight">
                                    {title.toUpperCase()}
                                </span>

                                <span className="block mt-2">
                                    SERVICES IN{" "}
                                    <span className="text-red-500">
                                        {formatCountryName(name).toUpperCase() || "NOIDA"}
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Features List */}
                        <ul
                            className="
      mt-2
      ml-4 lg:ml-0   /* mobile left margin, remove on desktop */
      space-y-1
      font-inter font-normal
      text-[16px] sm:text-[13px] lg:text-[14px]
      leading-[1.5]
      text-white
    "
                        >
                            {BENEFITS.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="mt-[6px] text-[14px] flex-shrink-0">•</span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Schedule Button */}
                        <div className="mt-4 lg:mt-6">
                            <ScheduleCallButton />
                        </div>

                        {/* Character Image */}
                        <div className="w-full flex justify-center lg:justify-start mt-6 lg:mt-0">
                            <div
                                className="
        relative w-80 h-80
        md:w-96 md:h-96
        lg:w-[500px] lg:h-[450px]
        xl:w-[550px] xl:h-[500px]
        2xl:w-[600px] 2xl:h-[550px]
      "
                            >
                                <Image
                                    src={
                                        title.toLowerCase().includes("metaverse")
                                            ? "https://cdn.abhiwandemos.com/api/files/pbc_193071544/23968l3ky61995m/metaverse_xvhhbc2l38.webp"
                                            : title.toLowerCase().includes("3d") || title.toLowerCase().includes("art")
                                                ? "https://cdn.abhiwandemos.com/api/files/pbc_193071544/3e5b8u8wc0167k0/hero_element_2_yoikxf5hvk.webp"
                                                : title.toLowerCase().includes("blockchain")
                                                    ? "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z8t22811kz82w2i/hero_element_06bvln8rov.webp"
                                                    : title.toLowerCase().includes("ai") || title.toLowerCase().includes("chatbot")
                                                        ? "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0mp4wo1jwo97po4/hero_element_3ma34oz7o1.webp"
                                                        : "/herosection-angrybird.png"
                                    }
                                    alt={
                                        title.toLowerCase().includes("metaverse")
                                            ? "Metaverse Development Character"
                                            : title.toLowerCase().includes("3d") || title.toLowerCase().includes("art")
                                                ? "3D Art Development Character"
                                                : title.toLowerCase().includes("blockchain")
                                                    ? "Blockchain Development Character"
                                                    : title.toLowerCase().includes("ai") || title.toLowerCase().includes("chatbot")
                                                        ? "AI Chatbot Development Character"
                                                        : "Game Development Character"
                                    }
                                    fill
                                    priority
                                    unoptimized={title.toLowerCase().includes("metaverse") || title.toLowerCase().includes("3d") || title.toLowerCase().includes("art")}
                                    sizes="(max-width: 768px) 320px,
               (max-width: 1024px) 384px,
               (max-width: 1280px) 500px,
               (max-width: 1536px) 550px,
               600px"
                                    className="
          object-cover drop-shadow-2xl
          md:-ml-20 lg:-ml-12 xl:-ml-24 2xl:-ml-60
          lg:mt-4 xl:mt-8
        "
                                />
                            </div>
                        </div>
                    </div>


                    {/* Right Section - Contact Form */}
                    <div className="lg:w-[52%] xl:w-[50%] mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[600px] lg:max-w-[550px] xl:max-w-[600px]">
                            {/* FORM */}
                            <div className="w-full bg-[#1D2135] rounded-lg shadow-xl">
                                <HeroForm country={country} />
                            </div>

                            {/* Certifications */}
                            <div className="mt-6">
                                <div
                                    className="flex items-center justify-between gap-2 bg-[#1D2135] py-5 sm:py-6 rounded-lg overflow-hidden text-white w-full"
                                    style={{
                                        border: "1px solid",
                                        borderImageSource:
                                            "linear-gradient(90deg, #181632 0%, #CCCCCC 50%, #181632 100%)",
                                        borderImageSlice: 1,
                                    }}
                                >
                                    {CERTIFICATIONS.slice(0, 5).map((cert: any, index: number) => (
                                        <div
                                            key={cert.name}
                                            className={`
          flex justify-center items-center flex-shrink-0
          ${index === 4 ? "hidden sm:flex" : "flex"}
        `}
                                        >
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_CDN_URL}${cert.image}`}
                                                alt={cert.name}
                                                className="h-12 sm:h-14 md:h-16 object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}