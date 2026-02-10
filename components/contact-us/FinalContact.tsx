import React from 'react'
import { Send, Phone, Mail } from 'lucide-react'

export default function FinalContact() {
  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-[rgb(255,255,255)] text-4xl font-bold mb-2 opacity-90">Get in Touch</h2>
        <p className="text-[#FFFFFF]/300 text-xs mb-4">We&apos;d love to hear from you</p>
        <div className="w-90 h-17.75 mt-5 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-10 w-13 items-center justify-center "
            > 
              <img
                src={`/thank-you/social${i + 1}.png`}
                alt={`Social ${i + 1}`}
                className=" object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}