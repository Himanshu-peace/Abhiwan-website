"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ChevronDown, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useServiceModal } from "@/components/ServiceModalContext"
import { IMAGES_SLIDER } from "@/constants/hero_secConst"
import { FEATURED } from "@/constants/headerData"
import ImageSlider from "./ImageSlider"
import { Button } from "@/components/ui/Button"
import { ChevronRight } from "lucide-react"
import { useEffect } from "react"
import ServiceCategoriesModal from "./ServiceCategoriesModal"

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [featuredOpen, setFeaturedOpen] = useState(false)
    const [serviceCategoriesOpen, setServiceCategoriesOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const { openServiceModal } = useServiceModal()

    // Filter only items with valid images
    const validFeatured = FEATURED.filter(item => item.images && item.images.trim() !== "");

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % validFeatured.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isMobileMenuOpen, validFeatured.length]);

    return (
        <header className="w-full bg-[#12132C] relative z-40">
            <div className="w-full px-6 md:px-12 h-14 flex items-center justify-between">

                {/* LOGO */}
                <div className="shrink-0 z-10">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/abhiwan.svg" alt="Logo" className="h-8 w-auto md:h-10" />
                    </Link>
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex relative items-center gap-4 lg:gap-8 text-sm font-medium text-white xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">

                    <Link href="/" className="hover:text-purple-400 transition whitespace-nowrap">HOME</Link>

                    <button
                        onClick={openServiceModal}
                        className="flex items-center gap-1 hover:text-purple-400 transition whitespace-nowrap"
                    >
                        SERVICES <ChevronDown className="w-4 h-4" />
                    </button>

                    <Link href="/portfolio" className="hover:text-purple-400 transition whitespace-nowrap">PORTFOLIO</Link>
                    <Link href="/about-us" className="hover:text-purple-400 transition whitespace-nowrap">ABOUT US</Link>
                    <Link href="/contact-us" className="hover:text-purple-400 transition whitespace-nowrap">CONTACT US</Link>
                </nav>

                {/* RIGHT ICONS */}
                <div className="flex items-center gap-4 z-10">
                    <div className="hidden md:flex">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#171635]">
                            <Search className="w-5 h-5" strokeWidth={2.5} />
                        </button>
                    </div>

                    <div className="flex md:hidden">
                        <button onClick={() => setMobileMenuOpen(true)} className="flex flex-col w-7 h-5 justify-between">
                            <span className="block h-0.5 bg-white" />
                            <span className="block h-0.5 bg-white" />
                            <span className="block h-0.5 bg-white" />
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-50 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="fixed top-0 right-0 w-full max-w-sm h-dvh bg-[#171635] text-white flex flex-col"
                        >

                            {/* HEADER */}
                            <div className="flex justify-between items-center p-4 border-b border-gray-800">
                                <img src="/abhiwan.svg" className="h-8" />
                                <button onClick={() => setMobileMenuOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            {/* 🔥 SINGLE SCROLL AREA (IMPORTANT FIX) */}
                            <div className="flex-1 overflow-y-auto overscroll-contain touch-pan-y">

                                <nav className="flex flex-col px-2">
                                    <Link href="/" className="px-4 py-3">HOME</Link>

                                    <button
                                        onClick={() => setServiceCategoriesOpen(!serviceCategoriesOpen)}
                                        className="px-4 py-3 flex justify-between items-center text-white"
                                    >
                                        SERVICES
                                        <ChevronDown className={`w-5 h-5 transition-transform ${serviceCategoriesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {serviceCategoriesOpen && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                exit={{ height: 0 }}
                                                className="overflow-hidden px-4"
                                            >
                                                <ServiceCategoriesModal />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <Link href="/portfolio" className="px-4 py-3">PORTFOLIO</Link>
                                    <Link href="/about-us" className="px-4 py-3">ABOUT US</Link>
                                    <Link href="/contact-us" className="px-4 py-3">CONTACT US</Link>
                                </nav>

                                {/* FEATURED */}
                                <div className="mt-4 px-4 pb-24">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                                        <h3 className="text-base font-semibold">FEATURED</h3>
                                    </div>

                                    <div className="h-56 relative rounded-lg overflow-hidden">
                                        <ImageSlider
                                            images={validFeatured.map(item => item.images)}
                                            activeIndex={activeIndex}
                                        />
                                    </div>

                                    <div className="mt-4 relative h-40">
                                        <h4 className="font-bold mb-1 line-clamp-2">
                                            {validFeatured[activeIndex]?.title}
                                        </h4>

                                        <p className="text-sm text-gray-300 line-clamp-3 mb-12">
                                            {validFeatured[activeIndex]?.description}
                                        </p>

                                        {/* BUTTON FIXED (VISIBLE ON iOS) */}
                                        <div className="absolute bottom-0 left-0 z-20">
                                            <div className="p-px rounded-md bg-linear-to-r from-[#3952FC] to-[#7F15DC]">
                                                <Button
                                                    className="bg-[#171635] px-3 py-1 text-white hover:bg-white hover:text-black"
                                                    size="sm"
                                                >
                                                    View More <ChevronRight className="ml-1 w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>

    )
}