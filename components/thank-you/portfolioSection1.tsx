"use client"
import {motion, AnimatePresence } from "framer-motion"
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


  const variant1 = [
    {
      image: "/thank-you/port1.png",
      title: "Penguin Kart",
      description: "Racing game with penguin characters",
      link: "#",
      slug: "penguin-kart"
    },
        {
      image: "/thank-you/port2.png",
      title: "Vaseline Sun Coin",
      description: "AR experience for Vaseline sun protection campaign",
      link: "#",
      slug: "vaseline-sun-coin"
    },
    {
      image: "/thank-you/port3.png",
      title: "Hyper Racing",
      description: "An immersive racing game with hyper-realistic graphics and physics-based gameplay",
      link: "#",
      slug: "hyper-racing"
    },
    {
      image: "/thank-you/port4.png",
      title: "Thums Up Biryani Hunt",
      description: "Interactive AR game for Thums Up campaign",
      link: "#",
      slug: "thums-up-biryani-hunt"
    },
    {
      image: "/thank-you/port5.png",
      title: "Edu VR",
      description: "Virtual reality educational platform",
      link: "#",
      slug: "edu-vr"
    },
    {
      image: "/thank-you/port6.png",
      title: "Bajaj Mind Maze",
      description: "Interactive puzzle and mind training game",
      link: "#",
      slug: "bajaj-mind-maze"
    },
        {
      image: "/thank-you/port7.png",
      title: "Luxor by Imtiaz",
      description: "Luxury real estate virtual tour experience",
      link: "#",
      slug: "luxor-by-imtiaz"
    },
    {
      image: "/thank-you/port8.png",
      title: "Active Shooter",
      description: "Training simulation for active shooter scenarios",
      link: "#",
      slug: "active-shooter"
    },
    {
      image: "/thank-you/port9.png",
      title: "Iskcon Metaverse",
      description: "Virtual spiritual and cultural experience platform",
      link: "#",
      slug: "iskcon-metaverse"
    },
    {
      image: "/thank-you/port10.png",
      title: "Diamond Hooves",
      description: "3D horse racing simulation game",
      link: "#",
      slug: "diamond-hooves"
    },
    {
      image: "/thank-you/port11.png",
      title: "Arsenal",
      description: "Military training and simulation platform",
      link: "#",
      slug: "arsenal"
    },
    {
      image: "/thank-you/port12.png",
      title: "MBR Metaverse",
      description: "Business and retail metaverse platform",
      link: "#",
      slug: "mbr-metaverse"
    },
    {
      image: "/thank-you/port13.png",
      title: "VR Museum",
      description: "Virtual reality museum and cultural heritage experience",
      link: "#",
      slug: "vr-museum"
    },
    {
      image: "/thank-you/port14.png",
      title: "Coca Cola Face Swap",
      description: "AR face swap experience for Coca Cola campaign",
      link: "#",
      slug: "coca-cola-face-swap"
    },
    {
      image: "/thank-you/port15.png",
      title: "Kitchen Simulator",
      description: "Interactive cooking and kitchen management simulation",
      link: "#",
      slug: "kitchen-simulator"
    },
  ]

    const variant2 = [
    {
      image: "/thank-you/port16.png",
      title: "Penguin Kart",
      description: "Racing game with penguin characters",
      link: "#",
      slug: "penguin-kart",
      package: "Game Development"
    },
        {
      image: "/thank-you/port17.png",
      title: "Vaseline Sun Coin",
      description: "AR experience for Vaseline sun protection campaign",
      link: "#",
      slug: "vaseline-sun-coin",
      package: "Web App"
    },
    {
      image: "/thank-you/port18.png",
      title: "Hyper Racing",
      description: "An immersive racing game with hyper-realistic graphics and physics-based gameplay",
      link: "#",
      slug: "hyper-racing",
      package: "Unreal Game"
    },
    {
      image: "/thank-you/port19.png",
      title: "Thums Up Biryani Hunt",
      description: "Interactive AR game for Thums Up campaign",
      link: "#",
      slug: "thums-up-biryani-hunt",
      package: "Game Development"
    },
    {
      image: "/thank-you/port20.png",
      title: "Edu VR",
      description: "Virtual reality educational platform",
      link: "#",
      slug: "edu-vr",
      package: "Metaverse"
    },
    {
      image: "/thank-you/port21.png",
      title: "Bajaj Mind Maze",
      description: "Interactive puzzle and mind training game",
      link: "#",
      slug: "bajaj-mind-maze",
      package: "Adver-Gaming"
    },
        {
      image: "/thank-you/port22.png",
      title: "Luxor by Imtiaz",
      description: "Luxury real estate virtual tour experience",
      link: "#",
      slug: "luxor-by-imtiaz",
      package: "Real Estate"
    },
    {
      image: "/thank-you/port23.png",
      title: "Active Shooter",
      description: "Training simulation for active shooter scenarios",
      link: "#",
      slug: "active-shooter",
      package: "Unreal Game"
    },
    {
      image: "/thank-you/port24.png",
      title: "Iskcon Metaverse",
      description: "Virtual spiritual and cultural experience platform",
      link: "#",
      slug: "iskcon-metaverse",
      package: "Metaverse"
    },
    {
      image: "/thank-you/port25.png",
      title: "Diamond Hooves",
      description: "3D horse racing simulation game",
      link: "#",
      slug: "diamond-hooves",
      package: "Game Development"
    },
    {
      image: "/thank-you/port26.png",
      title: "Arsenal",
      description: "Military training and simulation platform",
      link: "#",
      slug: "arsenal",
      package: "Action Game"
    },
    {
      image: "/thank-you/port27.png",
      title: "MBR Metaverse",
      description: "Business and retail metaverse platform",
      link: "#",
      slug: "mbr-metaverse",
      package: "Metaverse"
    },
    {
      image: "/thank-you/port28.png",
      title: "VR Museum",
      description: "Virtual reality museum and cultural heritage experience",
      link: "#",
      slug: "vr-museum",
      package: "Metaverse"
    },
    {
      image: "/thank-you/port29.png",
      title: "Coca Cola Face Swap",
      description: "AR face swap experience for Coca Cola campaign",
      link: "#",
      slug: "coca-cola-face-swap",
      package: "Interactive KIOSK"
    },
    {
      image: "/thank-you/port30.png",
      title: "Kitchen Simulator",
      description: "Interactive cooking and kitchen management simulation",
      link: "#",
      slug: "kitchen-simulator",
      package: "Real Estate"
    },
  ]

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
          <div className="mx-auto w-full md:max-w-300 lg:max-w-337.5">

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
              {variant1.map((item, index) => (
                <motion.div
                  key={index}
                  className="
                    relative
                    shrink-0
                    cursor-pointer
                    rounded-2xl
                    overflow-hidden
                  "
                  initial={{ width: 265, height: 500 }}
                  animate={{
                    width: hoveredIndex === index ? 602 : 265,
                    height: 500,
                  }}
                  transition={{
                    type: "spring",
                    mass: 1,
                    stiffness: 100,
                    damping: 15,
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <AnimatePresence mode="wait">
                    {hoveredIndex === index ? (
                      <motion.img
                        key="variant2"
                        src={variant2[index].image}
                        alt={variant2[index].title}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      />
                    ) : (
                      <motion.img
                        key="variant1"
                        src={variant1[index].image}
                        alt={variant1[index].title}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
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
      </div>
    </section>
  )

}