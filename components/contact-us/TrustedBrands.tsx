import React from 'react'
import Image from 'next/image'
import { BRAND_LOGOS } from '../../constants/brandLogos'

export default function Brands() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gradient-to-l from-gray-400 to-transparent max-w-xs"></div>
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
          <div className="flex-1 h-px bg-gradient-to-r from-gray-400 to-transparent max-w-xs"></div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:pause-animation gap-16 items-center">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={`https://cdn.abhiwandemos.com/api/files/pbc_193071544/${logo}`}
                  alt={`Brand logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}