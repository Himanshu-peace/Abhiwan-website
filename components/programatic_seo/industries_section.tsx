import Image from "next/image"
import IndustriesShowMoreButton from "./industries-show-more-button"
import { getIndustriesData, IndustryCard } from "@/constants/industries"

// Function to format country name
const formatCountryName = (slug: string) => {
  const formatted = slug.replace(/-/g, ' ')
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

export default function IndustriesSection({ name, title = "Game Development" }: { name: string, title?: string }) {
  // Ensure name is not empty, undefined, or null before formatting
  const rawCityName = name && typeof name === 'string' && name.trim() !== '' ? name : 'Noida';
  const cityName = formatCountryName(rawCityName);
  const { industries, subheading } = getIndustriesData(cityName, title)
  const visibleCards = (industries || []).slice(0, 4)

  const lowerTitle = title.toLowerCase();
  let displayServiceTitle = "GAME DEVELOPMENT";

  if (lowerTitle.includes("metaverse")) {
    displayServiceTitle = "METAVERSE DEVELOPMENT";
  } else if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
    displayServiceTitle = "3D ART DEVELOPMENT";
  }
  else if (lowerTitle.includes("digital twin")) {
    displayServiceTitle = "DIGITAL TWIN DEVELOPMENT";
  }
  else if (lowerTitle.includes("ar") || lowerTitle.includes("vr")) {
    displayServiceTitle = "AR & VR DEVELOPMENT";
  } else if (lowerTitle.includes("blockchain")) {
    displayServiceTitle = "BLOCKCHAIN DEVELOPMENT";
  } else if (lowerTitle.includes("app")) {
    displayServiceTitle = "APP DEVELOPMENT";
  }
  else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
    displayServiceTitle = "AI CHATBOT DEVELOPMENT";
  } else if (lowerTitle.includes("web")) {
    displayServiceTitle = "WEB DEVELOPMENT";
  }

  return (
    <section className="w-full bg-slate-900 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            INDUSTRIES BENEFITING FROM
          </h1>

          <div className="flex justify-center mt-4">
            <h1 className="relative text-4xl sm:text-4xl md:text-4xl font-extrabold tracking-widest uppercase">

              {/* OUTLINE TEXT */}
              <span
                className="absolute inset-0 text-transparent"
                style={{
                  WebkitTextStroke: "3px #E5E7EB", // outline color
                  textShadow: `
          0 0 6px rgba(255,255,255,0.4),
          0 0 12px rgba(180,180,255,0.35)
        `,
                }}
              >
                {displayServiceTitle} IN  {cityName}
              </span>

              {/* MAIN FILL TEXT */}
              <span className="relative text-[#0E0F2A]">
                {displayServiceTitle} IN {cityName}
              </span>

            </h1>
          </div>


          <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            {subheading.replace(/\{\{city\}\}/g, cityName)}
          </p>


        </div>

        {/* CARDS */}
        <div className="space-y-8 flex flex-col items-center">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className={`w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden
              ${card.imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* TEXT */}
              <div
                className={`${card.backgroundColor} p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-center`}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h2>

                <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                  {card.description.replace(/\{\{city\}\}/g, cityName)}
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-[35%] h-44 sm:h-56 md:h-auto">
                <img
                  src={card.imageUrl.startsWith("http") || card.imageUrl.startsWith("/") ? card.imageUrl : (process.env.NEXT_PUBLIC_CDN_URL || "") + card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* HIDDEN CARDS FOR SEO - Render but hide with CSS */}
        <div className="space-y-8 flex flex-col items-center hidden my-10" id="hidden-industries">
          {industries.slice(4).map((card) => (
            <div
              key={`hidden-${card.id}`}
              className={`w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden
              ${card.imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* TEXT */}
              <div
                className={`${card.backgroundColor} p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-center`}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h2>

                <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                  {card.description.replace(/\{\{city\}\}/g, cityName)}
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-[35%] h-44 sm:h-56 md:h-auto">
                <img
                  src={card.imageUrl.startsWith("http") || card.imageUrl.startsWith("/") ? card.imageUrl : (process.env.NEXT_PUBLIC_CDN_URL || "") + card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        {industries.length > 4 && (
          <div className="flex justify-center mt-12">
            <IndustriesShowMoreButton />
          </div>
        )}
      </div>
    </section>
  )
}

