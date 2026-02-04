// "use client"

// import React from "react"
// import Image from "next/image"

// interface ImmersiveBannerProps {
//   imageAlt: string
// }

// const ImmersiveBanner: React.FC<ImmersiveBannerProps> = ({ imageAlt }) => {
//   return (
//     <section className="w-full bg-black py-10 px-4 md:px-20">
//       <div
//         className="relative flex flex-col md:flex-row items-center overflow-hidden w-full h-[400px] md:h-[340px] rounded-md"
//         style={{
//           background:
//             "linear-gradient(135deg, #000000 0%, #0b1220 40%, #0f1b3d 100%)",
//         }}
//       >
//         {/* LEFT: TEXT */}
//         <div className="relative z-10 w-full md:w-1/2 px-4 md:px-12 py-6 md:py-0 space-y-4 text-center md:text-left">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//             Building immersive digital experiences for the world.
//           </h2>
//         </div>

//         {/* RIGHT: IMAGE */}
//         <div className="relative w-full md:w-1/2 h-64 md:h-full flex items-center justify-center md:justify-end">
//           <Image
//             src="/building.png"
//             alt={imageAlt}
//             fill
//             className="object-contain object-center md:object-right"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ImmersiveBanner


"use client"

import React from "react"
import Image from "next/image"

interface ImmersiveBannerProps {
  imageAlt: string
}

const ImmersiveBanner: React.FC<ImmersiveBannerProps> = ({ imageAlt }) => {
  return (
    <section className="w-full bg-[#121219] py-8 px-4 md:py-12 md:px-10 lg:px-20">
      <div
        className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden w-full rounded-2xl border border-white/10 shadow-2xl"
        style={{
          background:
            "linear-gradient(135deg, #050505 0%, #0b1220 40%, #0f1b3d 100%)",
        }}
      >
        {/* LEFT: TEXT CONTENT */}
        {/* Changed logic: Uses 'flex-1' to take available space and adjusted vertical padding */}
        <div className="relative z-10 w-full md:w-[55%] lg:w-[50%] px-6 py-10 md:pl-12 md:py-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Building immersive <br className="hidden lg:block" />
            digital experiences <br className="hidden lg:block" />
            for the world.
          </h2>
        </div>

        {/* RIGHT: IMAGE CONTAINER */}
        {/* Changed logic: 
            1. 'min-h' ensures image doesn't collapse.
            2. 'absolute' on desktop ensures it sits correctly without pushing layout.
        */}
        <div className="relative w-full h-64 md:w-[45%] lg:w-[50%] md:absolute md:right-0 md:top-0 md:h-full flex items-end justify-center md:justify-end">
          <div className="relative w-full h-full max-w-[500px]">
            <Image
              src="/building.png"
              alt={imageAlt}
              fill
              className="object-contain object-bottom md:object-right-bottom"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Optional: Add a subtle overlay to ensure text readability if image overlaps on smaller laptops */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none md:hidden" />
      </div>
    </section>
  )
}

export default ImmersiveBanner