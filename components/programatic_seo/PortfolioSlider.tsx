"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function PortfolioSlider({
    portfolioImages,
}: {
    portfolioImages: string[]
}) {
    const [activeIndex, setActiveIndex] = useState(0)

    const prevImage = () =>
        setActiveIndex((prev) =>
            prev === 0 ? portfolioImages.length - 1 : prev - 1
        )

    const nextImage = () =>
        setActiveIndex((prev) =>
            prev === portfolioImages.length - 1 ? 0 : prev + 1
        )

    return (
        <div className="mb-10">
            {/* MAIN IMAGE (UNCHANGED) */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}${portfolioImages[activeIndex]}`}
                    alt="Portfolio Preview"
                    fill
                    sizes="100vw"
                    unoptimized
                />


                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black p-2 rounded-full"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black p-2 rounded-full"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* THUMBNAILS → SWIPER */}
            <div className="mt-4">
                <Swiper
                    spaceBetween={12}
                    slidesPerView={6}
                    breakpoints={{
                        0: { slidesPerView: 3 },
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 },
                    }}
                >
                    {portfolioImages.map((src, i) => (
                        <SwiperSlide key={i}>
                            <button
                                onClick={() => setActiveIndex(i)}
                                className={`relative aspect-[4/3] w-full rounded-md overflow-hidden border-2 ${activeIndex === i
                                    ? "border-purple-500"
                                    : "border-transparent"
                                    }`}
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_CDN_URL}${src}`}
                                    alt="Thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}