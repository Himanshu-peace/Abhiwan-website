"use client"

import { h2 } from "framer-motion/client";
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

function FAQItem({ faq, location }: { faq: FAQ; location: string }) {
  const [isOpen, setIsOpen] = useState(false)
  
  // Ensure location is never empty
  const safeLocation = location || "Noida";

  const renderQuestion = (text: string) => {
    const parts = text.split(/({{city}})/g)
    return parts.map((part, i) =>
      part === "{{city}}" ? (
        <span key={i} className="text-red-500">
          {safeLocation}
        </span>
      ) : (
        part
      )
    )
  }

  const replaceCity = (text: string) =>
    text.replace(/{{city}}/g, safeLocation)

  return (
    <div className="bg-white rounded-md border mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium"
      >
        <h2>{renderQuestion(faq.question)}</h2>
        <span className="text-lg font-bold">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
          <h3 className="text-gray-600">{replaceCity(faq.answer)}</h3>
        </div>
      )}
    </div>
  )
}

export default function FAQList({
  faqs,
  location,
}: {
  faqs: FAQ[]
  location: string
}) {
  console.log("DEBUG: FAQList location =", location);
  console.log("DEBUG: FAQList faqs length =", faqs.length);
  
  const [visible, setVisible] = useState(4)

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-xl px-4 py-6 space-y-3 shadow-md">
        {faqs.slice(0, visible).map((faq, index) => (
          <FAQItem key={index} faq={faq} location={location} />
        ))}

        {visible < faqs.length && (
          <div className="flex justify-center pt-6">
            <button
              onClick={() => setVisible(v => v + 5)}
              className="px-6 py-2 rounded-full border border-black text-sm"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
