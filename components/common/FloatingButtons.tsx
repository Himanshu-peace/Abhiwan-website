"use client"

import Image from 'next/image'

export default function FloatingButtons() {
  return (
    <>
      {/* Floating Social Icons */}
      <div className="fixed right-4 bottom-20 md:bottom-32 flex flex-col gap-4 z-40">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
          aria-label="Chatbot"
        >
          <Image
            src="/chatboat.svg"
            alt="chatbot"
            fill
            className="object-contain"
            priority
          />
        </a>

        <a
          href="https://wa.me/919599145805"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp Chat"
            fill
            className="object-contain p-2"
            priority
          />
        </a>
      </div>
    </>
  )
}
