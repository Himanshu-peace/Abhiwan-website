import React from 'react'
import Image from 'next/image'

export default function ContactHero() {
  return (
    <section className="relative h-[40vh]  flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 mt-10 sm:mt-15">
        <Image
          src="/contact-us/contact_page_hero_section.jpg"
          alt="Gaming background"
          fill
          className="w-full object-cover"
          priority
        />
        <div className="absolute  inset-0 bg-linear-to-b from-black/50 to-[#1a1f3a]/10" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="mb-4 text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px]" 
          style={{
            fontFamily: 'Inter',
            fontWeight: 800,
            // fontSize: '50px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          Let&apos;s Build Something Extraordinary!
        </h1>
        <p className="text-xs sm:text-lg  text-gray-300 max-w-2xl mx-auto" 
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            // fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          Whether it&apos;s a game, metaverse project, or digital solution —
          let&apos;s talk.
        </p>
      </div>
    </section>
  )
}