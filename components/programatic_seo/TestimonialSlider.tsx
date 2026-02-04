"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
    quote: string;
    image: string;
    name: string;
    role: string;
}

export default function TestimonialSlider({ testimonials, location }: { testimonials: Testimonial[], location: string }) {
    const [active, setActive] = useState(0)

    const replaceCity = (text: string) => text.replace(/{{city}}/g, location)

    const next = () =>
        setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1))

    const prev = () =>
        setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1))
        }, 5000)
        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 md:p-8 shadow-xl flex flex-col min-h-[320px] md:min-h-[360px]">
                <p className="text-gray-200 leading-relaxed mb-6 flex-1">
                    “{replaceCity(testimonials[active].quote)}”
                </p>

                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20">
                        <Image
                            src={process.env.NEXT_PUBLIC_CDN_URL + testimonials[active].image}
                            // src="/photo.jpg"
                            alt={testimonials[active].name}
                            width={56}
                            height={56}
                            unoptimized
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <p className="font-semibold text-lg">
                            {testimonials[active].name}
                        </p>
                        <p className="text-sm text-gray-400">
                            {testimonials[active].role}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 mt-6">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-3 h-3 rounded-full transition ${active === i ? "bg-white" : "bg-white/30"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="relative mt-10 flex justify-center gap-6 lg:hidden">
                <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
                >
                    <ChevronLeft />
                </button>

                <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
                >
                    <ChevronRight />
                </button>
            </div>
        </>
    )
}
