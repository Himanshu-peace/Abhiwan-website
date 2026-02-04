import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import "react-phone-input-2/lib/style.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Abhiwan Technology - Where Imagination Becomes Innovation",
  description:
    "Leading game development, metaverse, and interactive technology company. Creating immersive digital experiences with cutting-edge technology.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/9h56tar626u9486/abhiwan_technoloy_logo_500fmzlish.webp",
        type: "image/webp",
      },
    ],
    apple: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/9h56tar626u9486/abhiwan_technoloy_logo_500fmzlish.webp",
  },
}

import { ModalProvider } from "@/components/ModalContext"
import { ServiceModalProvider } from "@/components/ServiceModalContext"
import LeadModal from "@/components/programatic_seo/formModal"
import { ServicesModal } from "@/components/programatic_seo/serivic_modal"
import Header from "@/components/Header"
import FloatingButtons from "@/components/common/FloatingButtons"
import { FreeQuoteButton } from "@/components/programatic_seo/HeroActionButtons"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ModalProvider>
          <ServiceModalProvider>
            <Header />
            {children}
            <Footer />
            <LeadModal />
            <ServicesModal />
            <FloatingButtons />
            <FreeQuoteButton />
          </ServiceModalProvider>
        </ModalProvider>
      </body>
    </html>
  )
}

