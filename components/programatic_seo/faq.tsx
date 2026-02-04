import {
  gameDevelopmentFaqs,
  arVrDevelopmentFaqs,
  metaverseDevelopmentFaqs,
  faqDescriptions,
  blockchainDevelopmentFaqs,
  aiChatbotDevelopmentFaqs,
  webDevelopmentFaqs,
  appdevelopmentFaqs,
  faqs3DArtServices,
  mvpFaqs,
  digitalTwinFaqs
} from "@/constants/faq"
import FAQList from "./FAQList"
import { webDevelopmentCategories } from "@/constants/gameData"

export default function FaqSection({
  location = "",
  title = "",
}: {
  location?: string
  title?: string
}) {
  console.log("DEBUG: FaqSection title =", title);
  console.log("DEBUG: FaqSection location =", location);

  const lowerTitle = title.toLowerCase()

  let faqs = gameDevelopmentFaqs
  let serviceName = "Game Development"
  let descriptionKey = "game"

  if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
    faqs = faqs3DArtServices
    serviceName = "3D Art Services"
    descriptionKey = "3d-art"

  }
  else if (lowerTitle.includes("vr") || lowerTitle.includes("ar")) {
    faqs = arVrDevelopmentFaqs
    serviceName = "AR & VR Development"
    descriptionKey = "vr"
  }
  else if (lowerTitle.includes("metaverse")) {
    faqs = metaverseDevelopmentFaqs
    serviceName = "Metaverse Development"
    descriptionKey = "metaverse"
  }
  else if (lowerTitle.includes("blockchain")) {
    faqs = blockchainDevelopmentFaqs
    serviceName = "Blockchain Development"
    descriptionKey = "blockchain"
  }
  else if (lowerTitle.includes("app")) {
    faqs = appdevelopmentFaqs
    serviceName = "App Development"
    descriptionKey = "app"
  } else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
    faqs = aiChatbotDevelopmentFaqs
    serviceName = "AI Chatbot Development"
    descriptionKey = "aiChatbot"
  }
  else if (lowerTitle.includes("web")) {
    faqs = webDevelopmentFaqs
    serviceName = "Web Development"
    descriptionKey = "web"
  }
  else if (lowerTitle.includes("mvp")) {
    faqs = mvpFaqs
    serviceName = "MVP Development"
    descriptionKey = "mvp"
  }
  else if (lowerTitle.includes("digital twin")) {
    faqs = digitalTwinFaqs
    serviceName = "Digital Twin Development"
    descriptionKey = "digitalTwin"
  }

  const rawDescription =
    (faqDescriptions as Record<string, string>)[descriptionKey] ||
    faqDescriptions.default

  const renderDescription = (text: string) => {
    const parts = text.split(/({{city}}|{{serviceName}})/g)
    return parts.map((part, index) => {
      if (part === "{{city}}") {
        return (
          <span key={index} className="text-red-300 font-medium">
            {location}
          </span>
        )
      }
      if (part === "{{serviceName}}") {
        return <span key={index}>{serviceName}</span>
      }
      return part
    })
  }

  return (
    <section className="w-full bg-white pb-16">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 pt-8 pb-8 px-4">
        <h2 className="text-center text-white text-4xl font-bold mb-2">
          Frequently Asked Questions

        </h2>

        <h3 className="text-center text-white/80 text-sm max-w-3xl mx-auto">
          {renderDescription(rawDescription)}
        </h3>
      </div>

      {/* ALL FAQs TOGETHER */}
      <FAQList faqs={faqs} location={location} />
    </section>
  )
}
