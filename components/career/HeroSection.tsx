'use client';
import React from "react"

import Image from "next/image"
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="max-w-8xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
      <div className="">
        <p className="text-[#DC50FF] 2xl:text-4xl mb-3 font-futura">● Careers at Abhiwan</p>

        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6">
          Build Worlds. Shape Innovation. Grow <br/>With Us.
        </h1>

        <p className="text-gray-300 mb-6 mr-10 text-sm sm:text-base md:text-lg ">
          At Abhiwan, we combine creativity, technology, and <br className="md:hidden"/> passion to craft cutting-edge games, experiences, <br className="md:hidden"/> and digital solutions. 
          If you're driven by innovation <br className="md:hidden"/> and love solving complex challenges, <br className="md:hidden"/> you'll fit right in.
        </p>

        <div className="inline-block rounded-full p-[0.8px] bg-[linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)),radial-gradient(50.91%_97.54%_at_50%_2.46%,#C3C6FF_0%,#BEBCFF_100%)]">
          <button className="flex items-center gap-1 bg-linear-to-r from-purple-500 to-blue-500 px-3 py-3 rounded-full text-sm  font-medium">
              View Current Openings
              <ArrowUpRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]  xl:w-[739px] xl:h-[539px] 2xl:w-[900px] 2xl:h-[700px] 2xl:ml-10 ">
        <Image
          src="/career/01Hero.webp"
          alt="hero"
          fill
          className="object-contain rounded-tl-xl rounded-bl-xl 2xl:rounded-tl-3xl 2xl:rounded-bl-3xl"
        />
      </div>
    </section>
  )
}