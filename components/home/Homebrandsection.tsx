
// "use client"

// import { Button } from "@/components/ui/Button"
// import { FEATURED } from "@/constants/headerData"
// import { useRef, useState } from "react"

// export  function BrandsSection() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
//   const scrollRef = useRef<HTMLDivElement>(null)

//   // Utility to generate slugs
//   const generateSlug = (title: string) =>
//     title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)/g, "")

//   const portfolioItems = FEATURED.map((item) => ({
//     image: item.images || "placeholder.svg",
//     title: item.title,
//     description: item.description,
//     link: item.link,
//     slug: generateSlug(item.title),
//   }))

//   const portfolioHoverImages = FEATURED.map((item) => ({
//     image: item.images || "placeholder.svg",
//     title: item.title,
//     slug: generateSlug(item.title),
//   }))

//   const shouldShiftLeft = hoveredIndex !== null && hoveredIndex >= 3

//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({
//       left: -260,
//       behavior: "smooth",
//     })
//   }

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({
//       left: 260,
//       behavior: "smooth",
//     })
//   }

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
//           WHAT WE&apos;VE{" "}
//           <span
//             className="text-transparent"
//             style={{ WebkitTextStroke: "2px black" }}
//           >
//             BUILT?
//           </span>
//         </h2>

//         {/* STRIP */}
//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="
//               flex gap-4
//               overflow-x-auto
//               snap-x snap-mandatory
//               scrollbar-hide
//               px-1

//               md:overflow-visible
//               md:snap-none
//               md:transition-transform md:duration-500 md:ease-in-out
//             "
//             style={{
//               transform:
//                 shouldShiftLeft ? "translateX(-300px)" : "translateX(0)",
//             }}
//           >
//             {portfolioItems.map((item, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="
//                   relative group
//                   cursor-pointer
//                   overflow-hidden
//                   rounded-2xl
//                   flex-shrink-0
//                   snap-center

//                   /* MOBILE */
//                   w-[220px]
//                   h-[300px]

//                   /* DESKTOP */
//                   md:w-auto
//                   md:h-[360px]
//                   xl:h-[480px]

//                   md:flex-[0_0_135px]
//                   lg:flex-[0_0_180px]
//                   xl:flex-[0_0_230px]
//                   2xl:flex-[0_0_280px]

//                   md:transition-all md:duration-500 md:ease-in-out
//                   md:hover:flex-[0_0_384px]
//                   lg:hover:flex-[0_0_582px]
//                 "
//               >
//                 {/* Base image */}
//                 <img
//                   src={`${process.env.NEXT_PUBLIC_CDN_URL}${item.image}`}
//                   alt={item.title}
//                   className="
//                     absolute inset-0
//                     w-full h-full
//                     object-cover
//                     transition-opacity duration-300
//                     group-hover:opacity-0
//                     pointer-events-none
//                   "
//                 />

//                 {/* Hover image */}
//                 <img
//                   src={`${process.env.NEXT_PUBLIC_CDN_URL}${portfolioHoverImages[index].image}`}
//                   alt={item.title}
//                   className="
//                     absolute inset-0
//                     w-full h-full
//                     object-cover
//                     opacity-0
//                     transition-opacity duration-300 delay-100
//                     group-hover:opacity-100
//                     pointer-events-none
//                   "
//                 />
//               </div>
//             ))}
//           </div>

//           {/* ARROWS */}
//           <div className="flex justify-center gap-4 mt-6">
//             <button
//               onClick={scrollLeft}
//               className="
//                 w-10 h-10
//                 rounded-full
//                 border border-black
//                 flex items-center justify-center
//                 hover:bg-black hover:text-white
//                 transition
//               "
//               aria-label="Scroll left"
//             >
//               ←
//             </button>

//             <button
//               onClick={scrollRight}
//               className="
//                 w-10 h-10
//                 rounded-full
//                 border border-black
//                 flex items-center justify-center
//                 hover:bg-black hover:text-white
//                 transition
//               "
//               aria-label="Scroll right"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Button */}
//         <div className="text-center mt-10">
//           <Button
//             variant="outline"
//             className="border-2 rounded-2xl border-black text-black hover:bg-black hover:text-white bg-transparent"
//           >
//             View Portfolio
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"
import { useEffect, useState } from "react"
import { BRAND_LOGOS } from "@/constants/brandLogos"

export default function BrandsSection() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768

  const LOGOS_PER_PAGE = isMobile ? 6 : 9
  const totalPages = Math.ceil(BRAND_LOGOS.length / LOGOS_PER_PAGE)

  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % totalPages)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalPages])

  const pages = Array.from({ length: totalPages }, (_, pageIndex) =>
    BRAND_LOGOS.slice(
      pageIndex * LOGOS_PER_PAGE,
      (pageIndex + 1) * LOGOS_PER_PAGE
    )
  )

  return (
    <section className="py-20 bg-[#171635] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-futura md:text-5xl font-bold text-center mb-4 whitespace-nowrap md:whitespace-normal">
          OUR HALL{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px white" }}
          >
            OF FAME
          </span>
        </h2>

        <p className="text-center font-inter text-white/80 max-w-2xl mx-auto mb-16">
          “Innovation delivered. Trust earned” Meet our amazing clients and the brands
          that trusted us and partnered with us for their dream projects.
        </p>

        {/* GRID WRAPPER */}
        <div className="relative h-[280px] md:h-[420px]">
          {pages.map((logos, pageIndex) => (
            <div
              key={pageIndex}
              className={`
                absolute inset-0
                grid grid-cols-3
                grid-rows-2 md:grid-rows-3
                transition-all duration-1000 ease-in-out
                ${
                  activePage === pageIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-[1.02] pointer-events-none"
                }
              `}
            >
              {logos.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 md:p-8"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}${brand}`}
                    alt="Brand logo"
                    className="max-h-12 md:max-h-14 object-contain opacity-80"
                  />
                </div>
              ))}
            </div>
          ))}

          {/* GRID LINES (STATIC) */}
          <div className="pointer-events-none absolute inset-0">
            {/* Vertical */}
            <div className="absolute inset-y-0 left-1/3 w-px bg-white/30" />
            <div className="absolute inset-y-0 left-2/3 w-px bg-white/30" />

            {/* Horizontal */}
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/30 md:hidden" />
            <div className="absolute inset-x-0 top-1/3 h-px bg-white/30 hidden md:block" />
            <div className="absolute inset-x-0 top-2/3 h-px bg-white/30 hidden md:block" />
          </div>
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePage(i)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${activePage === i ? "bg-white" : "bg-white/40"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
