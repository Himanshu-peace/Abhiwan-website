'use client';

import React, { useEffect, useState } from "react"
import { GAME_CATEGORIES, AI_CHATBOAT_DEVELOPMENT, webDevelopmentCategories, SERVICES_3D, AR_VR_CATEGORIES, METAVRSE_CATEGORIES, blockchainDevelopmentCategories, AppDevelopmentCategories, SERVICES, SHOWCASE_DATA, mvpDevelopmentServices, digitalTwinDevelopment } from "@/constants/gameData"
import Image from "next/image"
import Link from "next/link"
import { linkingCities } from "@/data/linking_cities"
import FloatingSidebarButtons from "@/components/FloatingSidebarButtons"
import { ChevronDown } from "lucide-react";

const services = SERVICES

// Function to generate service URLs
const getServiceUrl = (serviceName: string, location: string) => {
    const serviceMap: Record<string, string> = {
        "Game Development Services": "game-development",
        "Web Development Services": "web-development",
        "AR and VR Development Services": "ar-vr-development",
        "App Development Services": "app-development",
        "Metaverse Development Services": "metaverse-development",
        "AI Chatbot Development Services": "ai-chatbot-development",
        "Blockchain Development Services": "blockchain-development",
        "3D Art Services": "3d-art-development",
        "MVP Prototyping Services": "mvp-development",
        "Digital Twin Services": "digital-twin-development"
    }

    const slug = serviceMap[serviceName] || serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    return `/${slug}/${location}`
}

interface GameCategory {
    id: string
    title: string
    description: string
    image: string
}

interface CountryData {
    country: string
    slug: string
    cities: { slug: string; name: string }[]
}

interface GamesShowcaseProps {
    name: string
    title?: string
    slugItem: {
        country: string
        slug: string
        backgroundImage: string
    }
}


export function GamesShowcase({ name, slugItem, title = "Game Development" }: GamesShowcaseProps) {
    // Function to format country name
    const formatCountryName = (slug: string) => {
        const formatted = slug.replace(/-/g, ' ')
        return formatted.charAt(0).toUpperCase() + formatted.slice(1)
    }

    let otherCitiesServices: string[] = []

    if (slugItem) {
        const countryData = linkingCities.find(
            (c: CountryData) => c.country === slugItem.country
        )
        if (countryData) {
            otherCitiesServices = countryData.cities
                .filter((city: { slug: string; name: string }) => city.slug !== slugItem.slug)
                .map((city: { slug: string; name: string }) => `Game Development Services in ${city.name}`)
        }
    }

    // Initial visible cards set to 12
    const [visibleCards, setVisibleCards] = React.useState(12)

    // Determine showcase content
    const lowerTitle = title.toLowerCase();

    // Determine content key based on title
    let contentKey = "games";
    if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
        contentKey = "3d-art";
    } else if (lowerTitle.includes("metaverse")) {
        contentKey = "meta-verse";
    }
    else if (lowerTitle.includes("blockchain")) {
        contentKey = "blockchain";
    }
    else if (lowerTitle.includes("app")) {
        contentKey = "app";
    } else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
        contentKey = "ai-chatbot";
    }
    else if (lowerTitle.includes("web")) {
        contentKey = "web";
    } else if (lowerTitle.includes("vr") || lowerTitle.includes("ar")) {
        contentKey = "ar-vr";

    }
    else if (lowerTitle.includes("mvp")) {
        contentKey = "mvp";
    }
    else if (lowerTitle.includes("digital twin")) {
        contentKey = "digital-twin";
    }

    // Determine category name for display
    let category = "Game";
    if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
        category = "3d-art";

    } else if (lowerTitle.includes("digital twin")) {
        category = "Digital Twin";
    }
    else if (lowerTitle.includes("metaverse")) {
        category = "Metaverse";
    } else if (lowerTitle.includes("blockchain")) {
        category = "Blockchain";
    }
    else if (lowerTitle.includes("app")) {
        category = "App";
    }
    else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
        category = "AI Chatbot";
    }
    else if (lowerTitle.includes("web")) {
        category = "Web";
    }
    else if (lowerTitle.includes("vr") || lowerTitle.includes("ar")) {
        category = "AR VR";
    }
    else if (lowerTitle.includes("mvp")) {
        category = "MVP";
    }

    const content = (SHOWCASE_DATA as any)[contentKey] || SHOWCASE_DATA.games;
    // Split heading for special styling on the last word
    const processedHeading = content.heading.replace(/{{city}}/g, (formatCountryName(slugItem?.slug || '')) || "Noida");
    const words = processedHeading.split(" ");
    const lastWord = words.pop() || "";
    const remainingHeading = words.join(" ");

    return (
        /* OUTER BLACK BACKGROUND */
        <div className="relative bg-[#171635]">
            {/* INNER WHITE CONTAINER WITH CONSISTENT RADIUS */}
            <section className="w-full bg-white py-12 sm:py-16 lg:py-12 px-4 sm:px-6 lg:px-8 rounded-t-4xl mx-2 sm:mx-4 lg:mx-0">
                {/* HEADER */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <Image
                        src="/game.png"
                        alt="game controller"
                        width={123}
                        height={123}
                        priority
                    />
                </div>

                <div className="mb-10">
                    <div className="flex justify-center px-4">
                        <h2
                            className="
                font-bold
                uppercase
                text-center
                leading-[1.1]
                mx-auto
                w-full
                text-[22px]
                sm:text-[32px]
                lg:text-[42px]
                xl:text-[52.75px]
            "
                            style={{
                                fontFamily: "'Futura PT', sans-serif",
                                fontWeight: 600,
                                lineHeight: 1.1,
                            }}
                        >
                            <span className="text-[#0E0F2A]">
                                {remainingHeading}&nbsp;
                            </span>

                            <span
                                className="
                    text-transparent
                    sm:tracking-[0.02em]
                    lg:tracking-[0.01em]
                    inline-block
                "
                                style={{
                                    WebkitTextStroke: "1.5px #2B2B2B",
                                }}
                            >
                                {lastWord}
                            </span>
                        </h2>
                    </div>

                    <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-center">
                        {content.subHeading.replace(/{{city}}/g, (formatCountryName(slugItem?.slug || '')) || "Noida")}
                    </p>
                </div>

                {/* Main content container */}
                <div className="relative max-w-[95rem] mx-auto px-4">
                    {/* Cards Grid - Takes full width */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 justify-center">
                            {(() => {
                                let categories = GAME_CATEGORIES;
                                if (title.toLowerCase().includes("metaverse")) categories = METAVRSE_CATEGORIES;
                                else if (title.toLowerCase().includes("3d") || title.toLowerCase().includes("art")) categories = SERVICES_3D;
                                else if (title.toLowerCase().includes("ar") || title.toLowerCase().includes("vr")) categories = AR_VR_CATEGORIES;
                                else if (title.toLowerCase().includes("blockchain")) categories = blockchainDevelopmentCategories;
                                else if (title.toLowerCase().includes("app")) categories = AppDevelopmentCategories;
                                else if (title.toLowerCase().includes("ai") || title.toLowerCase().includes("chatbot")) categories = AI_CHATBOAT_DEVELOPMENT;
                                else if (title.toLowerCase().includes("web")) categories = webDevelopmentCategories;
                                else if (title.toLowerCase().includes("mvp")) categories = mvpDevelopmentServices;
                                else if (title.toLowerCase().includes("digital twin")) categories = digitalTwinDevelopment;

                                return categories.slice(0, visibleCards).map((game) => {
                                    const cityName = formatCountryName(slugItem?.slug || '') || "Noida";
                                    const displayDescription = game.description.replace(/{{city}}|Noida|Delhi/g, cityName);

                                    return (
                                        <div
                                            key={game.id}
                                            className="group rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl bg-[#1f1f1f] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-black/20"
                                            style={{ minHeight: '400px' }}
                                        >
                                            {/* Image */}
                                            <div className="w-full h-60 overflow-hidden relative">
                                                <img
                                                    src={process.env.NEXT_PUBLIC_CDN_URL + game.image || "/placeholder.svg"}
                                                    alt={game.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Text */}
                                            <div className="p-5 sm:p-6 text-white flex flex-col flex-1 min-h-0">
                                                <h3 className="font-bold text-lg sm:text-xl mb-3 group-hover:text-white/90 leading-snug">
                                                    {game.title}
                                                </h3>
                                                <p className="text-sm text-gray-300 leading-relaxed flex-1 overflow-auto">
                                                    {displayDescription}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                });
                            })()}
                        </div>

                        {/* Show More Button */}
                        {visibleCards < (() => {
                            if (title.toLowerCase().includes("metaverse")) return METAVRSE_CATEGORIES.length;
                            else if (title.toLowerCase().includes("3d") || title.toLowerCase().includes("art")) return SERVICES_3D.length;
                            else if (title.toLowerCase().includes("ar") || title.toLowerCase().includes("vr")) return AR_VR_CATEGORIES.length;
                            else if (title.toLowerCase().includes("blockchain")) return blockchainDevelopmentCategories.length;
                            else if (title.toLowerCase().includes("app")) return AppDevelopmentCategories.length;
                            else if (title.toLowerCase().includes("ai") || title.toLowerCase().includes("chatbot")) return AI_CHATBOAT_DEVELOPMENT.length;
                            else if (title.toLowerCase().includes("web")) return webDevelopmentCategories.length;
                            else if (title.toLowerCase().includes("mvp")) return mvpDevelopmentServices.length;
                            else if (title.toLowerCase().includes("digital twin")) return digitalTwinDevelopment.length;
                            else return GAME_CATEGORIES.length;
                        })() && (
                                <div className="flex justify-center mt-8 sm:mt-10">
                                    <button
                                        onClick={() => setVisibleCards(prev => prev + 6)}
                                        className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        Show More
                                    </button>
                                </div>
                            )}
                    </div>
                </div>

                <FloatingSidebarButtons slugItem={slugItem} title={title} category={category} />
            </section>
        </div>
    );
}