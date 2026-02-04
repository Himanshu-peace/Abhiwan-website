"use client"

import React from "react"
import Image from "next/image"


interface LogoLoopProps {
  logos: string[]
  speed?: number
  direction?: "left" | "right"
  logoHeight?: number
  gap?: number
  fadeOut?: boolean
  fadeOutColor?: string
  className?: string
}

const LogoLoop = ({
  logos,
  speed = 20,
  direction = "left",
  logoHeight = 48,
  gap = 32,
  fadeOut = false,
  fadeOutColor = "#1D2135",
  className = "",
}: LogoLoopProps) => {
  // Calculate animation duration based on speed
  const animationDuration = Math.max(20, 400 / speed) // Reduced speed (was 100/speed)
  console.log(animationDuration)
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <div className="flex items-center p-4">
        <div
          className="flex items-center animate-infinite-scroll"
          style={{
            gap: `${gap}px`,
            animationDuration: `${animationDuration}s`,
            animationDirection: direction === "left" ? "normal" : "reverse",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: logoHeight }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN_URL}${logo}`}
                alt={`Brand ${index % logos.length}`}
                width={logoHeight * 2} // width proportional to height
                height={logoHeight} // use the same height
                unoptimized
                className="h-full w-auto object-contain max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[250px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>


      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </div>
  )
}

/* ===================== BRANDS SECTION ===================== */

interface BrandsSectionProps {
  logos: string[]
  title?: string
}

export default function BrandsSection({
  logos,
  title = "BRANDS THAT",
}: BrandsSectionProps) {
  return (
    <section className="w-full py-10 bg-[#171635]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
            {title}
          </h2>
          <Image
            src="/trust_us.png"
            alt="trust us"
            width={140}
            height={50}
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      <div className="bg-[#1D2135] py-4 overflow-hidden mx-6">
        <LogoLoop
          logos={logos}
          speed={65}
          logoHeight={60}
          gap={32}
          fadeOut
          fadeOutColor="#1D2135"
        />
      </div>
    </section>
  )
}