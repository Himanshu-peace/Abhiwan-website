
import Image from "next/image"
/* ===================== DATA ===================== */
import { whyChooseUsGame, whyChooseUsVr, whyChooseUsAppDevelopment, whyChooseUsMetaverse, whyChooseUsBlockchain, portfolioImages, whyChooseUsAiChatbotDevelopment, whyChooseUsWebDevelopment, whyChooseUs3DArtServices, whyChooseUsMvpService, whyChooseUsDigitalTwinService, getPortfolioImages } from "@/constants/choose_us/choose_us"
import PortfolioSlider from "./PortfolioSlider"

export default function WhyChooseSection({ title = "", location = "" }: { title?: string, location?: string }) {
  const lowerTitle = title.toLowerCase();

  const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5)
  }




  let data: any[] = whyChooseUsGame;
  let serviceName = "GAME DEVELOPMENT";

  if (lowerTitle.includes("metaverse")) {
    data = whyChooseUsMetaverse;
    serviceName = "METAVERSE DEVELOPMENT";
  } 
  else if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
    data = whyChooseUs3DArtServices;
    serviceName = "3D ART SERVICES";
  } 
  else if (lowerTitle.includes("vr") || lowerTitle.includes("ar")) {
    data = whyChooseUsVr;
    serviceName = "AR VR DEVELOPMENT";
  } else if (lowerTitle.includes("blockchain")) {
    data = whyChooseUsBlockchain;
    serviceName = "BLOCKCHAIN DEVELOPMENT";
  } else if (lowerTitle.includes("app")) {
    data = whyChooseUsAppDevelopment;
    serviceName = "APP DEVELOPMENT";
  }
  else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
    data = whyChooseUsAiChatbotDevelopment;
    serviceName = "AI CHATBOT DEVELOPMENT";
  }
  else if (lowerTitle.includes("web")) {
    data = whyChooseUsWebDevelopment;
    serviceName = "WEB DEVELOPMENT";
  }else if (lowerTitle.includes("mvp")) {
    data = whyChooseUsMvpService;
    serviceName = "MVP DEVELOPMENT";
  }else if (lowerTitle.includes("digital twin")) {
    data = whyChooseUsDigitalTwinService;
    serviceName = "DIGITAL TWIN DEVELOPMENT";
  }

  const replaceCity = (text: string) => text.replace(/{{city}}/g, location);
  // console.log(process.env.NEXT_PUBLIC_CDN_URL || "")
  const shuffledData = shuffleArray(data)

  return (
    <section className="bg-[#0E0F2A] text-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===================== WHY CHOOSE (SCREENSHOT CLONE) ===================== */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-16 uppercase">
          WHY CHOOSE ABHIWAN FOR <br />
          <span className="">
            {serviceName} SERVICES
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-20 md:gap-y-10 mb-32">
          {shuffledData.map((item: any, i: number) => (
            <div
              key={i}
              className="
        flex flex-col md:flex-row
        items-center md:items-start
        gap-4 md:gap-5
        text-center md:text-left
      "
            >
              {/* ICON */}
              <div className="
        w-12 h-12
        rounded-full
        bg-purple-600/20
        border border-purple-500/30
        flex items-center justify-center
        text-purple-400
        shrink-0
      ">
                {typeof item.icon === "string" ? (
                  <img
                    src={(process.env.NEXT_PUBLIC_CDN_URL || "") + item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  item.icon
                )}
              </div>

              {/* TEXT */}
              <div>
                <h4 className="font-semibold text-base md:text-lg mb-1">
                  {replaceCity(item.title)}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto md:mx-0">
                  {replaceCity(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* ===================== PORTFOLIO (UNCHANGED) ===================== */}
        <div className="mb-10">
          {/* ===================== PORTFOLIO HEADING ===================== */}
          <div className="text-center mb-12">

            <h1 className="relative inline-block text-4xl md:text-4xl font-extrabold tracking-widest uppercase">

              {/* OUTLINE TEXT */}
              <span
                className="absolute inset-0 text-transparent"
                style={{
                  WebkitTextStroke: "3px #E5E7EB",
                  textShadow: `
          0 0 6px rgba(255,255,255,0.4),
          0 0 12px rgba(180,180,255,0.35)
        `,
                }}
              >
                PORTFOLIO
              </span>

              {/* FILL TEXT */}
              <span className="relative text-[#0E0F2A]">
                PORTFOLIO
              </span>

            </h1>

            <h2 className="mt-4 text-2xl tracking-widest uppercase text-gray-300 font-bold">
              Glimpse of our Recent Work
            </h2>
          </div>

          <PortfolioSlider portfolioImages={getPortfolioImages(
            title.toLowerCase().includes('blockchain') ? 'blockchain' :
            title.toLowerCase().includes('web') ? 'web' :
            title.toLowerCase().includes('app') ? 'app' :
            title.toLowerCase().includes('ai') || title.toLowerCase().includes('chatbot') ? 'ai' :
            title.toLowerCase().includes('metaverse') ? 'metaverse' :
            title.toLowerCase().includes('3d') || title.toLowerCase().includes('art') ? '3d' :
            'game'
          )} />

        </div>

      </div>
    </section>
  )
}
