


// "use client"
// import { Button } from "@/components/ui/Button"
// import { FEATURED } from "@/constants/headerData"
// import { useState, useRef } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// export function PortfolioSection() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
//   const scrollContainerRef = useRef<HTMLDivElement>(null)

//   // Utility to generate slugs
//   const generateSlug = (title: string) =>
//     title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)/g, "")

//   // Portfolio items
//   // const portfolioItems = FEATURED.map((item) => ({
//   const portfolioItems = [
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/acoh1yr8bkn3kxm/active_shooter_iphvqqb2vt.webp",
//       title: "Active Shooter",
//       description: "Training simulation for active shooter scenarios",
//       link: "#",
//       slug: "active-shooter"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/55htop0617i11xp/arsenal_ekpxyd5wd0.webp",
//       title: "Arsenal",
//       description: "Military training and simulation platform",
//       link: "#",
//       slug: "arsenal"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/871z3z3xax5808j/bajaj_mind_maze_55jc8c3w6f.webp",
//       title: "Bajaj Mind Maze",
//       description: "Interactive puzzle and mind training game",
//       link: "#",
//       slug: "bajaj-mind-maze"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/kf48285er45y5op/coca_cola_face_swap_pgb9imtxn2.webp",
//       title: "Coca Cola Face Swap",
//       description: "AR face swap experience for Coca Cola campaign",
//       link: "#",
//       slug: "coca-cola-face-swap"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/p7721xv7qrbi594/diamond_hooves_to5mjbriph.webp",
//       title: "Diamond Hooves",
//       description: "3D horse racing simulation game",
//       link: "#",
//       slug: "diamond-hooves"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/bne0z0o7q054uud/edu_vr_qz50futpn3.webp",
//       title: "Edu VR",
//       description: "Virtual reality educational platform",
//       link: "#",
//       slug: "edu-vr"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/44p8h2rz91o6a3t/iskcon_metaverse_e4ivkixy8a.webp",
//       title: "Iskcon Metaverse",
//       description: "Virtual spiritual and cultural experience platform",
//       link: "#",
//       slug: "iskcon-metaverse"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/daciuij8557d383/kitchen_simulator_hd6hhut2y2.webp",
//       title: "Kitchen Simulator",
//       description: "Interactive cooking and kitchen management simulation",
//       link: "#",
//       slug: "kitchen-simulator"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/d7xn4u10pm1rdgu/luxor_by_imtiaz_chb0lxrkt3.webp",
//       title: "Luxor by Imtiaz",
//       description: "Luxury real estate virtual tour experience",
//       link: "#",
//       slug: "luxor-by-imtiaz"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/8v0j01rf01oqi1q/mbr_metaverse_r6e4njz3f0.webp",
//       title: "MBR Metaverse",
//       description: "Business and retail metaverse platform",
//       link: "#",
//       slug: "mbr-metaverse"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/890jnqotj708397/thums_up_biryani_hunt_r5gtvbbjqf.webp",
//       title: "Thums Up Biryani Hunt",
//       description: "Interactive AR game for Thums Up campaign",
//       link: "#",
//       slug: "thums-up-biryani-hunt"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/5jpptgx5f652132/penguin_kart_g5ly7phvjx.webp",
//       title: "Penguin Kart",
//       description: "Racing game with penguin characters",
//       link: "#",
//       slug: "penguin-kart"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2v75u325ydgs013/vaseline_sun_coin_dy0r5rqt2j.webp",
//       title: "Vaseline Sun Coin",
//       description: "AR experience for Vaseline sun protection campaign",
//       link: "#",
//       slug: "vaseline-sun-coin"
//     },
//     {
//       image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/3q928hs70tt330b/vr_museum_mdlsskgn6r.webp",
//       title: "VR Museum",
//       description: "Virtual reality museum and cultural heritage experience",
//       link: "#",
//       slug: "vr-museum"
//     }
//   ]

//   const portfolioHoverImages = FEATURED.map((item) => ({
//     image: item.images || "placeholder.svg",
//     title: item.title,
//     slug: generateSlug(item.title),
//   }))

//   const shouldShiftLeft = hoveredIndex !== null && hoveredIndex >= 3

//   // Scroll functions
//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = window.innerWidth < 768 ? 220 : 400
//       scrollContainerRef.current.scrollBy({
//         left: -scrollAmount,
//         behavior: 'smooth'
//       })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = window.innerWidth < 768 ? 220 : 400
//       scrollContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       })
//     }
//   }

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="container mx-auto px-4 relative">
//         {/* Heading */}
//         <h2
//           className="uppercase mb-12 font-futura font-bold text-start
//           text-[32px] md:text-[56px] lg:text-[84px]"
//           style={{ lineHeight: "100%", color: "#373737" }}
//         >
//           WHAT WE&apos;VE{" "}
//           <span
//             className="text-transparent"
//             style={{ WebkitTextStroke: "2px #373737" }}
//           >
//             BUILT?
//           </span>
//         </h2>

//         {/* STRIP WRAPPER */}
//         <div className="relative">
//           {/* LEFT BUTTON */}
//           <button
//             onClick={scrollLeft}
//             className="
//               hidden md:flex
//               absolute left-[-70px] top-1/2 -translate-y-1/2
//               z-20
//               w-12 h-12
//               items-center justify-center
//               bg-black
//               border-2 border-black
//               rounded-full
//               shadow-lg
//               transition-all duration-300
//               hover:scale-110
//             "
//           >
//             <ChevronLeft className="w-6 h-6 text-white" />
//           </button>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={scrollRight}
//             className="
//               hidden md:flex
//               absolute right-[-70px] top-1/2 -translate-y-1/2
//               z-20
//               w-12 h-12
//               items-center justify-center
//               bg-black
//               border-2 border-black
//               rounded-full
//               shadow-lg
//               transition-all duration-300
//               hover:scale-110
//             "
//           >
//             <ChevronRight className="w-6 h-6 text-white" />
//           </button>

//           {/* STRIP */}
//           <div
//             ref={scrollContainerRef}
//             className="
//               flex gap-4
//               overflow-x-auto
//               scrollbar-hide no-scrollbar

//               w-full
//               md:w-[95%]
//               md:mx-auto

//               snap-x snap-mandatory
//               md:snap-none
//             "
//           >
//             {portfolioItems.map((item, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="
//     relative group
//     overflow-hidden
//     rounded-2xl
//     flex-shrink-0
//     cursor-pointer

//     /* MOBILE */
//     w-[300px] h-[300px]

//     /* DESKTOP DEFAULT (⬅️ increased) */
//     md:flex-[0_0_240px]
//     md:h-[360px]

//     /* LARGE */
//     xl:h-[480px]

//     md:transition-all md:duration-500
//     md:hover:flex-[0_0_520px]
//   "
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </div>

//             ))}
//           </div>

//           {/* MOBILE BUTTONS */}
//           <div className="flex md:hidden justify-center gap-6 mt-6">
//             <button
//               onClick={scrollLeft}
//               className="w-12 h-12 flex items-center justify-center bg-black rounded-full"
//             >
//               <ChevronLeft className="w-6 h-6 text-white" />
//             </button>

//             <button
//               onClick={scrollRight}
//               className="w-12 h-12 flex items-center justify-center bg-black rounded-full"
//             >
//               <ChevronRight className="w-6 h-6 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )

// }







"use client"
// import { Button } from "../../components/ui/button"
import { FEATURED } from "@/constants/headerData"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Utility to generate slugs
  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  // Portfolio items
  // const portfolioItems = FEATURED.map((item) => ({
  const portfolioItems = [
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/acoh1yr8bkn3kxm/active_shooter_iphvqqb2vt.webp",
      title: "Active Shooter",
      description: "Training simulation for active shooter scenarios",
      link: "#",
      slug: "active-shooter"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/55htop0617i11xp/arsenal_ekpxyd5wd0.webp",
      title: "Arsenal",
      description: "Military training and simulation platform",
      link: "#",
      slug: "arsenal"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/871z3z3xax5808j/bajaj_mind_maze_55jc8c3w6f.webp",
      title: "Bajaj Mind Maze",
      description: "Interactive puzzle and mind training game",
      link: "#",
      slug: "bajaj-mind-maze"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/kf48285er45y5op/coca_cola_face_swap_pgb9imtxn2.webp",
      title: "Coca Cola Face Swap",
      description: "AR face swap experience for Coca Cola campaign",
      link: "#",
      slug: "coca-cola-face-swap"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/p7721xv7qrbi594/diamond_hooves_to5mjbriph.webp",
      title: "Diamond Hooves",
      description: "3D horse racing simulation game",
      link: "#",
      slug: "diamond-hooves"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/bne0z0o7q054uud/edu_vr_qz50futpn3.webp",
      title: "Edu VR",
      description: "Virtual reality educational platform",
      link: "#",
      slug: "edu-vr"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/44p8h2rz91o6a3t/iskcon_metaverse_e4ivkixy8a.webp",
      title: "Iskcon Metaverse",
      description: "Virtual spiritual and cultural experience platform",
      link: "#",
      slug: "iskcon-metaverse"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/daciuij8557d383/kitchen_simulator_hd6hhut2y2.webp",
      title: "Kitchen Simulator",
      description: "Interactive cooking and kitchen management simulation",
      link: "#",
      slug: "kitchen-simulator"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/d7xn4u10pm1rdgu/luxor_by_imtiaz_chb0lxrkt3.webp",
      title: "Luxor by Imtiaz",
      description: "Luxury real estate virtual tour experience",
      link: "#",
      slug: "luxor-by-imtiaz"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/8v0j01rf01oqi1q/mbr_metaverse_r6e4njz3f0.webp",
      title: "MBR Metaverse",
      description: "Business and retail metaverse platform",
      link: "#",
      slug: "mbr-metaverse"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/890jnqotj708397/thums_up_biryani_hunt_r5gtvbbjqf.webp",
      title: "Thums Up Biryani Hunt",
      description: "Interactive AR game for Thums Up campaign",
      link: "#",
      slug: "thums-up-biryani-hunt"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/5jpptgx5f652132/penguin_kart_g5ly7phvjx.webp",
      title: "Penguin Kart",
      description: "Racing game with penguin characters",
      link: "#",
      slug: "penguin-kart"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2v75u325ydgs013/vaseline_sun_coin_dy0r5rqt2j.webp",
      title: "Vaseline Sun Coin",
      description: "AR experience for Vaseline sun protection campaign",
      link: "#",
      slug: "vaseline-sun-coin"
    },
    {
      image: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/3q928hs70tt330b/vr_museum_mdlsskgn6r.webp",
      title: "VR Museum",
      description: "Virtual reality museum and cultural heritage experience",
      link: "#",
      slug: "vr-museum"
    }
  ]

  const portfolioHoverImages = FEATURED.map((item) => ({
    image: item.images || "placeholder.svg",
    title: item.title,
    slug: generateSlug(item.title),
  }))

  const shouldShiftLeft = hoveredIndex !== null && hoveredIndex >= 3

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 220 : 400
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 220 : 400
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="portfolio" className=" py-10 bg-white">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <h2
          className="
            uppercase mb-3 font-futura font-bold
            text-[#373737]
            lg:ml-4 xl:ml-18
            text-[32px] md:text-[50px]
          "
        >
          Explore More From Abhiwan While You Wait
        </h2>
        <h2 className="font-sans mb-5 lg:ml-4 xl:ml-18 text-[25px] font-bold text-[#373737]">
          #Latest Projects
        </h2>

        {/* STRIP WRAPPER */}
        <div className="relative overflow-visible lg:mx-3 md:mx-4">
          {/* WIDTH CONTROLLER */}
          <div className="mx-auto w-full md:max-w-[1200px] lg:max-w-[1350px]">

            {/* LEFT BUTTON */}
            <button
              onClick={scrollLeft}
              className="
                hidden md:flex
                absolute -left-6 top-1/2 -translate-y-1/2
                z-20
                w-12 h-12
                items-center justify-center
                bg-black
                border-2 border-black
                rounded-full
                shadow-lg
                transition-all duration-300
                hover:scale-110
              "
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={scrollRight}
              className="
                hidden md:flex
                absolute -right-6 top-1/2 -translate-y-1/2
                z-20
                w-12 h-12
                items-center justify-center
                bg-black
                border-2 border-black
                rounded-full
                shadow-lg
                transition-all duration-300
                hover:scale-110
              "
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* STRIP */}
            <div
              ref={scrollContainerRef}
              className="
                flex gap-8
                overflow-x-auto
                scrollbar-hide no-scrollbar
                w-full
                snap-x snap-mandatory
                md:snap-none
              "
            >
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="
                    relative group
                    flex-shrink-0 cursor-pointer

                    w-[300px] h-[300px]
                    md:flex-[0_0_240px] md:h-[360px]
                    xl:h-[480px]
                    md:transition-all md:duration-500
                    md:hover:flex-[0_0_520px]
                  "
                >
                  {/* IMAGE WRAPPER */}
                  <div className="relative w-full h-full overflow-hidden rounded-3xl bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex md:hidden justify-center gap-6 mt-6">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center bg-black rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center bg-black rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* <button
          className="
    mt-12
    mx-auto
    w-[181px] h-[48px]
    border-[3px] border-[#4E4E4E]
    rounded-[36.38px]

    flex items-center justify-center
    font-futura font-semibold
    text-[#4E4E4E]

    transition-all duration-300
    hover:bg-[#4E4E4E]
    hover:text-white
  "
        >
          View Portfolio
        </button> */}

      </div>
    </section>
  )

}