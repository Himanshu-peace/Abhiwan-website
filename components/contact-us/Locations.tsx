"use client"

import React from "react"
import Image from "next/image"

const LOCATIONS = [
  {
    country: "INDIA",
    address: "301, Syadwad Business Park, H32, Sector 63, Noida.",
    icon: "/contact-us/india.png",
  },
  {
    country: "UNITED STATES",
    address: "711 S Glendora Ave, West Covina, CA",
    icon: "/contact-us/US.png",
  },
  {
    country: "UNITED KINGDOM",
    address: "86-90, Paul Street, London, EC2A 4NE, England",
    icon: "/contact-us/UK.png",
  },
  {
    country: "UAE",
    address: "Ontario Tower, Dubai, UAE",
    icon: "/contact-us/UAE.png",
  },
  {
    country: "CANADA",
    address: "7168 179 St, Surrey BC, V3S 8C5",
    icon: "/contact-us/CANADA.png",
  },
]

export default function Locations() {

  return (
    <section className="py-20 px-4 bg-gray-100 text-black ">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center justify-center mb-5">
          <h1 className="text-[#262626] uppercase text-4xl font-bold">
            where we operate
          </h1>
        </div>
        <div className="md:h-[213.4px] grid grid-cols-2 md:grid-cols-5 gap-y-10 justify-center">
          {LOCATIONS.map((item, index) => {
            const isIndia = index === 0
            const isLast = index === LOCATIONS.length
            const isLeftColMobile = index % 2 === 0

            return (
              <div
                key={index}
                className={`
                  relative text-center px-4
                  ${isIndia ? "col-span-2 md:col-span-1" : ""}
                `}
              >
                {/* ================= MOBILE DIVIDERS ================= */}

                {/* Mobile vertical divider (between 2 columns) */}
                {!isIndia && !isLeftColMobile && (
                  <span
                    aria-hidden
                    className="
                      absolute right-0 top-3 bottom-3 w-[0.5px]
                      bg-linear-to-b
                      from-[#9E9E9E] via-[#0D0D0D] to-[#9E9E9E]
                      md:hidden
                    "
                  />
                )}

                {/* Mobile horizontal divider */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="
                      absolute left-4 right-4 -bottom-1 h-[0.5px]
                      bg-linear-to-r
                      from-[#9E9E9E] via-[#0D0D0D] to-[#9E9E9E]
                      md:hidden
                    "
                  />
                )}

                {/* ================= DESKTOP DIVIDER ================= */}

                {/* Desktop vertical divider ONLY */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="
                      hidden md:block
                      absolute right-0 top-3 bottom-3 w-[0.85px]
                      bg-linear-to-b
                      from-[#9E9E9E] via-[#0D0D0D] to-[#9E9E9E]
                    "
                  />  
                )}

                {/* ICON */}
                <div className="relative flex justify-center mb-3 md:pt-6">
                  <Image
                    src={item.icon}
                    alt={item.country}
                    width={28}
                    height={28}
                    className=" w-7 h-7 md:w-15 md:h-15 object-contain text-[#191919]"
                    unoptimized
                  />
                </div>

                <div className={`${!isIndia ? "md:pt-4" : ""}`}>
                  <h4 className="text-xs sm:text-lg text-[#191919] font-extrabold tracking-wide">
                    {item.country}
                  </h4>

                  <p className="mt-1 text-[11px] md:text-xs text-[#191919] font-futura font-light leading-relaxed">
                    {item.address}
                  </p>

                  {item.country === "INDIA" && (
                    <span
                      className="
                        mt-0.5
                        text-lg
                        leading-3.75
                        font-extrabold
                        font-inter
                        text-[#191919]
                        text-center
                      "
                    >
                      (Head Office)
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}