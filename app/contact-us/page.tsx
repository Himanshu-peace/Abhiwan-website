"use client"
import React from 'react'
import ContactHero from '@/components/contact-us/ContactHero'
import ContactForm from '@/components/contact-us/ContactForm'
import Brands from '@/components/contact-us/brans_section'
import Locations from '@/components/contact-us/Locations'
import MadeThisFar from '@/components/contact-us/MadeThisFar'
import FinalContact from '@/components/contact-us/FinalContact'
import { BRAND_LOGOS } from "@/constants/brandLogos";



function page() {
  const logos = BRAND_LOGOS;
  return (
    <main className="bg-linear-to-t from-[#0A0D17] to-[#171635] min-h-screen text-white">
      <ContactHero />
      <ContactForm />
      <Brands logos={logos} />
      <Locations />
      <MadeThisFar />
      <FinalContact />
    </main>
  )
}

export default page;
