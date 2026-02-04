
// "use client"

// import React, { useState, useEffect } from "react"
// import Image from "next/image"

// interface LogoLoopProps {
//     logos: string[]
//     speed?: number
//     logoHeight?: number
//     gap?: number
//     className?: string
// }

// export default function LogoLoop({
//     logos,
//     speed = 10,
//     logoHeight = 80,
//     gap = 50,
//     className = "",
// }: LogoLoopProps) {
//     const [loadedImages, setLoadedImages] = useState<number[]>([])
//     // Use quadruple for smoother loop
//     const quadLogos = [...logos, ...logos, ...logos, ...logos]

//     const handleImageLoad = (index: number) => {
//         if (!loadedImages.includes(index)) {
//             setLoadedImages(prev => [...prev, index])
//         }
//     }

//     useEffect(() => {
//         setLoadedImages([])
//     }, [logos])

//     return (
//         <div className={`relative w-full overflow-hidden py-8 ${className}`}>
//             {/* Side Fades */}
//             <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0B0D17] to-transparent pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0B0D17] to-transparent pointer-events-none" />

//             {/* SCROLLING CONTAINER */}
//             <div className="flex">
//                 <div
//                     className="flex items-center animate-smooth-scroll"
//                     style={{
//                         animationDuration: `${50 / speed}s`, // Better speed calculation
//                     }}
//                 >
//                     {quadLogos.map((logo, index) => (
//                         <div
//                             key={index}
//                             className="flex-shrink-0"
//                             style={{
//                                 height: logoHeight,
//                                 marginRight: `${gap}px`,
//                             }}
//                         >
//                             {/* Loading skeleton */}
//                             {!loadedImages.includes(index) && (
//                                 <div className="absolute inset-0 bg-gray-800/10 animate-pulse rounded" />
//                             )}

//                             {/* Image Container */}
//                             <div className="relative h-full w-auto flex items-center justify-center">
//                                 <Image
//                                     src={`${process.env.NEXT_PUBLIC_CDN_URL}${logo}`}
//                                     alt={`Award ${index % logos.length}`}
//                                     width={logoHeight * 2}
//                                     height={logoHeight}
//                                     className={`
//                                         object-contain h-full w-auto
//                                         transition-opacity duration-200
//                                         ${loadedImages.includes(index) ? 'opacity-100' : 'opacity-0'}
//                                     `}
//                                     quality={90}
//                                     onLoad={() => handleImageLoad(index)}
//                                     unoptimized={logo.toLowerCase().endsWith('.svg')}
//                                     priority={index < 4}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Inline Styles */}
//             <style jsx global>{`
//                 @keyframes smooth-scroll {
//                     0% {
//                         transform: translateX(0);
//                     }
//                     100% {
//                         transform: translateX(-25%);
//                     }
//                 }

//                 .animate-smooth-scroll {
//                     animation: smooth-scroll linear infinite;
//                     will-change: transform;
//                     transform: translateZ(0);
//                     -webkit-transform: translateZ(0);
//                 }

//                 /* Optional: Pause on hover */
//                 .animate-smooth-scroll:hover {
//                     animation-play-state: paused;
//                 }
//             `}</style>
//         </div>
//     )
// }



// "use client"

// import React, { useState, useEffect, useRef } from "react"
// import Image from "next/image"

// interface LogoLoopProps {
//     logos: string[]
//     speed?: number // pixels per second
//     logoHeight?: number
//     gap?: number
//     className?: string
// }

// export default function LogoLoop({
//     logos,
//     speed = 50, // pixels per second
//     logoHeight = 100,
//     gap = 80,
//     className = "",
// }: LogoLoopProps) {
//     const [loadedImages, setLoadedImages] = useState<number[]>([])
//     const containerRef = useRef<HTMLDivElement>(null)
//     const [contentWidth, setContentWidth] = useState(0)
//     const quadLogos = [...logos, ...logos, ...logos, ...logos]

//     const handleImageLoad = (index: number) => {
//         if (!loadedImages.includes(index)) {
//             setLoadedImages(prev => [...prev, index])
//         }
//     }

//     useEffect(() => {
//         setLoadedImages([])
//     }, [logos])

//     // Calculate the width of the scrolling content
//     useEffect(() => {
//         if (containerRef.current) {
//             setContentWidth(containerRef.current.scrollWidth / 4) // only one set width
//         }
//     }, [logos, loadedImages])

//     return (
//         <div className={`relative w-full overflow-hidden py-10 ${className}`}>
//             {/* Side Fades */}
//             <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0B0D17] to-transparent pointer-events-none" />
//             <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0B0D17] to-transparent pointer-events-none" />

//             {/* SCROLLING CONTAINER */}
//             <div className="flex" ref={containerRef}>
//                 <div
//                     className="flex items-center"
//                     style={{
//                         animation: `scroll ${contentWidth / speed}s linear infinite`,
//                     }}
//                 >
//                     {quadLogos.map((logo, index) => (
//                         <div
//                             key={index}
//                             className="flex-shrink-0 relative"
//                             style={{
//                                 height: logoHeight,
//                                 marginRight: `${gap}px`,
//                             }}
//                         >
//                             {!loadedImages.includes(index) && (
//                                 <div className="absolute inset-0 bg-gray-800/10 animate-pulse rounded" />
//                             )}

//                             <div className="relative h-full w-auto flex items-center justify-center">
//                                 <Image
//                                     src={`${process.env.NEXT_PUBLIC_CDN_URL}${logo}`}
//                                     alt={`Award ${index % logos.length}`}
//                                     width={logoHeight * 2}
//                                     height={logoHeight}
//                                     className={`object-contain h-full w-auto transition-opacity duration-200 ${
//                                         loadedImages.includes(index)
//                                             ? "opacity-100"
//                                             : "opacity-0"
//                                     }`}
//                                     quality={90}
//                                     onLoad={() => handleImageLoad(index)}
//                                     unoptimized={logo.toLowerCase().endsWith(".svg")}
//                                     priority={index < 4}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <style jsx>{`
//                 @keyframes scroll {
//                     0% {
//                         transform: translateX(0);
//                     }
//                     100% {
//                         transform: translateX(-${contentWidth}px);
//                     }
//                 }

//                 div > .flex:hover {
//                     animation-play-state: paused;
//                 }
//             `}</style>
//         </div>
//     )
// }


"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface LogoLoopProps {
    logos: string[]
    speed?: number // pixels per second
    logoHeight?: number
    gap?: number
    className?: string
}

export default function LogoLoop({
    logos,
    speed = 80,
    logoHeight = 100,
    gap = 80,
    className = "",
}: LogoLoopProps) {
    const [loadedImages, setLoadedImages] = useState<number[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const requestRef = useRef<number | null>(null)
    const position = useRef(0)

    // Quadruple logos for seamless scroll
    const quadLogos = [...logos, ...logos, ...logos, ...logos]

    const handleImageLoad = (index: number) => {
        if (!loadedImages.includes(index)) {
            setLoadedImages(prev => [...prev, index])
        }
    }

    useEffect(() => {
        setLoadedImages([])
    }, [logos])

    // Infinite scroll using requestAnimationFrame
    const animate = (time: number) => {
        if (scrollRef.current) {
            position.current -= speed / 60 // move speed pixels per frame at 60fps
            const width = scrollRef.current.scrollWidth / 4 // one set width
            if (-position.current >= width) {
                position.current += width // reset position seamlessly
            }
            scrollRef.current.style.transform = `translateX(${position.current}px)`
        }
        requestRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate)
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [speed, loadedImages])

    return (
        <div className={`relative w-full overflow-hidden py-10 ${className}`} ref={containerRef}>
            {/* Side fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#0B0D17] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#0B0D17] to-transparent pointer-events-none" />

            {/* Scrolling container */}
            <div className="flex">
                <div ref={scrollRef} className="flex items-center will-change-transform">
                    {quadLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 relative"
                            style={{ height: logoHeight, marginRight: `${gap}px` }}
                        >
                            {!loadedImages.includes(index) && (
                                <div className="absolute inset-0 bg-gray-800/10 animate-pulse rounded" />
                            )}
                            <div className="relative h-full w-auto flex items-center justify-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_CDN_URL}${logo}`}
                                    alt={`Award ${index % logos.length}`}
                                    width={logoHeight * 2}
                                    height={logoHeight}
                                    className={`object-contain h-full w-auto transition-opacity duration-200 ${loadedImages.includes(index) ? "opacity-100" : "opacity-0"
                                        }`}
                                    quality={90}
                                    onLoad={() => handleImageLoad(index)}
                                    unoptimized
                                    priority={index < 4}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
