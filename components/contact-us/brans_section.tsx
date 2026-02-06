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
  className = "",
}: LogoLoopProps) => {
  // Calculate animation duration based on speed
  const animationDuration = Math.max(20, 400 / speed) // Reduced speed (was 100/speed)
  console.log(animationDuration)
  return (
    <div className={`relative overflow-hidden ${className}`}>

      <div className="flex items-center p-4">
        <div
          className="flex items-center animate-infinite-scroll"
          style={{
            gap: `${gap}px`,
            animationDuration: `${animationDuration}s`,
            animationDirection: direction === "left" ? "normal" : "reverse",
          }}
        >
          {/* First set */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: logoHeight }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN_URL}${logo}`}
                alt={`Brand ${index % logos.length}`}
                width={140}
                height={logoHeight}
                unoptimized
                className="h-full w-auto object-contain max-w-[90px] sm:max-w-[110px] md:max-w-[140px]"
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
    <section className="w-full py-10 ">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-[2px] bg-gradient-to-l from-gray-200 to-transparent max-w-xs"></div>
          <h3
            className="px-8 text-2xl font-bold text-center"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "30px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Trusted By Global Innovators
          </h3>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-200 to-transparent max-w-xs"></div>
        </div>

      <div className=" py-4 overflow-hidden  ">
        <LogoLoop
          logos={logos}
          speed={65}
          logoHeight={120}
          gap={32}
          fadeOutColor="#1D2135"
        />
      </div>
    </section>
  )
}