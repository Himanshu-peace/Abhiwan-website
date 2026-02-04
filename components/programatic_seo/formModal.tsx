

"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useModal } from "@/components/ModalContext"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"
import { useEffect, useState, useRef } from "react"
import { CERTIFICATIONS } from "@/constants/hero_secConst"
import Image from "next/image"
import CountryFlag from "react-country-flag"
import { testimonialsGame } from "@/constants/testimonial"

const countries = [
    { code: 'IN', name: 'India', isd: '+91' },
    { code: 'US', name: 'United States', isd: '+1' },
    { code: 'GB', name: 'United Kingdom', isd: '+44' },
    { code: 'CA', name: 'Canada', isd: '+1' },
    { code: 'AU', name: 'Australia', isd: '+61' },
    { code: 'DE', name: 'Germany', isd: '+49' },
    { code: 'FR', name: 'France', isd: '+33' },
    { code: 'JP', name: 'Japan', isd: '+81' },
    { code: 'CN', name: 'China', isd: '+86' },
    { code: 'AE', name: 'United Arab Emirates', isd: '+971' },
]

export default function LeadModal() {
    const { isModalOpen, closeModal, openModal } = useModal()
    const [mounted, setMounted] = useState(false)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        requirement: '',
    })
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        requirement: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const [isClosing, setIsClosing] = useState(false)
    const [isSelectOpen, setIsSelectOpen] = useState(false)

    // Start auto-sliding testimonials
    useEffect(() => {
        if (isModalOpen && !isClosing) {
            autoSlideRef.current = setInterval(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonialsGame.length)
            }, 5000)
        }

        return () => {
            if (autoSlideRef.current) {
                clearInterval(autoSlideRef.current)
            }
        }
    }, [isModalOpen, isClosing])

    useEffect(() => {
        setMounted(true)

        if (isModalOpen) {
            const scrollY = window.scrollY

            document.body.style.position = "fixed"
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = "100%"

            setIsClosing(false)
        } else {
            const scrollY = document.body.style.top
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.width = ""

            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || "0") * -1)
            }
        }

        return () => {
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.width = ""
        }
    }, [isModalOpen])


    // Auto-open form modal after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            openModal()
        }, 10000) // 5 seconds

        return () => clearTimeout(timer)
    }, [])

    const validateForm = () => {
        const newErrors = {
            fullName: '',
            email: '',
            phone: '',
            requirement: '',
        }

        if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Name must be at least 2 characters long'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        const phoneRegex = /^[\d\s\-\(\)]{7,15}$/
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number (7-15 digits)'
        }

        if (!formData.requirement) {
            newErrors.requirement = 'Please select a service requirement'
        }

        setErrors(newErrors)
        return !Object.values(newErrors).some(error => error !== '')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))

        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    phone: `${selectedCountry.isd} ${formData.phone}`,
                    service: formData.requirement,
                    description: 'Lead from free quotes form'
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitMessage(`Thank you ${formData.fullName}! Form submitted successfully!`)
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    requirement: '',
                })

                setTimeout(() => {
                    setSubmitMessage('')
                    closeModal()
                }, 3000)
            } else {
                setSubmitMessage(data.message || 'Failed to submit form. Please try again.')
            }
        } catch {
            setSubmitMessage('Failed to submit form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsGame.length)
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current)
            autoSlideRef.current = setInterval(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonialsGame.length)
            }, 5000)
        }
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => prev === 0 ? testimonialsGame.length - 1 : prev - 1)
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current)
            autoSlideRef.current = setInterval(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonialsGame.length)
            }, 5000)
        }
    }

    const handleCloseModal = () => {
        setIsClosing(true)
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current)
        }
        closeModal()
    }

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-start md:items-center justify-center bg-black/60 backdrop-blur-md pt-16 md:pt-0 px-4 pb-4 md:p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleCloseModal}
                >
                    {/* MODAL - Slides from right */}
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                        className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl max-h-[calc(100vh-5rem)] md:max-h-[90vh] overflow-y-auto mx-auto"
                        onClick={(e) => e.stopPropagation()}
                        style={{ marginTop: "env(safe-area-inset-top, 0)" }}
                    >
                        {/* CLOSE */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute right-4 top-4 z-50 bg-white/80 backdrop-blur hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        {/* LEFT FORM */}
                        {/* LEFT FORM */}
                        <div className="p-6 sm:p-8 md:p-10 pt-10 md:pt-10 overflow-y-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b0b3b] leading-snug">
                                Have an idea buzzing in your head?
                                Let's make it happen!
                            </h2>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                {/* FULL NAME */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Full name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`mt-1 w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Exp. John Carter"
                                        required
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Email<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`mt-1 w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Enter your email"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* REQUIREMENT */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Requirement<span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="requirement"
                                            value={formData.requirement}
                                            onChange={(e) => {
                                                handleChange(e);
                                                setIsSelectOpen(false);
                                            }}
                                            onFocus={() => setIsSelectOpen(true)}
                                            onBlur={() => {
                                                setTimeout(() => setIsSelectOpen(false), 200);
                                            }}
                                            className={`
                                                mt-1 w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none pr-10
                                                ${!formData.requirement ? 'text-gray-400' : 'text-black'}
                                                ${errors.requirement ? 'border-red-500' : 'border-gray-300'}
                                            `}
                                            required
                                        >



                                            <option value="" className="text-gray-400" disabled>
                                                Choose a service required
                                            </option>
                                            <option value="game-dev" className="text-black">Game Development</option>
                                            <option value="3d-art" className="text-black">3D Art Services</option>
                                            <option value="metaverse" className="text-black">Metaverse Solutions</option>
                                            <option value="vr" className="text-black">Virtual Real Estate</option>
                                            <option value="xr" className="text-black">Extended Reality (XR)</option>
                                            <option value="marketing" className="text-black">Interactive Marketing</option>
                                            <option value="ai" className="text-black">AI Development</option>
                                            <option value="blockchain" className="text-black">Blockchain & Web3 Development</option>
                                            <option value="marketing " className="text-black">Digital Marketing</option>
                                            <option value="website-development" className="text-black">Website Development</option>
                                            <option value="app-development" className="text-black">App Development</option>

                                        </select>

                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg
                                                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isSelectOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.requirement && (
                                        <p className="text-red-500 text-xs mt-1">{errors.requirement}</p>
                                    )}
                                </div>

                                {/* PHONE WITH COUNTRY - Matching HeroForm style */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Phone number<span className="text-red-500">*</span>
                                    </label>

                                    <div className="flex gap-2 w-full">
                                        {/* COUNTRY DROPDOWN - Same as HeroForm */}
                                        <div className="relative w-[80px] flex-shrink-0">
                                            <select
                                                value={selectedCountry.code}
                                                onChange={(e) => {
                                                    const countryMatch = countries.find(c => c.code === e.target.value)
                                                    if (countryMatch) setSelectedCountry(countryMatch)
                                                }}
                                                className="
                                                    w-full bg-white border border-gray-300 rounded-md
                                                    pl-2 pr-10 py-3 text-black text-xs
                                                    focus:ring-2 focus:ring-blue-500 focus:outline-none
                                                    appearance-none cursor-pointer z-40
                                                "
                                            >
                                                {countries.map((c) => (
                                                    <option key={c.code} value={c.code}>
                                                        {c.isd}
                                                    </option>
                                                ))}
                                            </select>

                                            <div className="absolute right-0 top-0 bottom-2 flex items-center pr-2 pointer-events-none">
                                                <div className="mr-2">
                                                    <CountryFlag
                                                        countryCode={selectedCountry.code}
                                                        svg
                                                        style={{ width: '18px', height: '14px' }}
                                                    />
                                                </div>

                                                <div>
                                                    <svg
                                                        className="w-3 h-3 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* PHONE INPUT */}
                                        <input
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`
                                                flex-1 rounded-md border border-gray-300 px-4 py-3 text-sm
                                                focus:ring-2 focus:ring-blue-500 focus:outline-none
                                                ${errors.phone ? 'border-red-500' : ''}
                                            `}
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                    )}
                                </div>

                                {/* INFO */}
                                <ul className="pt-2 text-sm text-gray-600 space-y-1">
                                    <li>✓ Get a response in few minutes.</li>
                                    <li>✓ Your idea stays 100% protected under NDA.</li>
                                </ul>

                                {/* NDA */}
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                                    Receive a copy of the NDA for full security
                                </label>

                                {/* SUBMIT MESSAGE */}
                                {submitMessage && (
                                    <div className={`p-3 rounded-lg text-sm ${submitMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {submitMessage}
                                    </div>
                                )}

                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-4 w-full rounded-lg bg-[#2f5bff] py-3 text-white font-semibold hover:bg-[#2448d8] transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>

                            {/* CERTIFICATIONS — MOBILE ONLY */}
                            {/* <div
                                className="mt-6 flex md:hidden items-center justify-between gap-2 bg-[#1D2135] px-3 py-4"
                                style={{
                                    border: "1px solid",
                                    borderImageSource: "linear-gradient(90deg,#181632 0%,#cccccc 50%,#181632 100%)",
                                    borderImageSlice: 1,
                                }}
                            >
                                {CERTIFICATIONS.map((cert) => (
                                    <div key={cert.name} className="flex-1 flex justify-center">
                                        <img
                                            src={process.env.NEXT_PUBLIC_CDN_URL + cert.image}
                                            alt={cert.name}
                                            width={42}
                                            height={30}
                                            className="object-contain"
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                ))}
                            </div> */}
                        </div>

                        {/* RIGHT PANEL */}
                        <div className="hidden md:flex flex-col p-12 bg-gradient-to-br from-[#050816] to-[#0b1025] text-white relative overflow-hidden">
                            <Image src="/modal.jpg" alt="" fill className="object-cover" />
                            <div className="absolute top-0 right-0 w-64 h-54 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-54 bg-blue-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-black uppercase text-[#268BFF] text-center">
                                        Still deciding?
                                    </h3>
                                    <p className="text-gray-300 mt-3 leading-relaxed">
                                        Discover why client choose abhiwan for innovative and digital Solutions.
                                    </p>

                                    {/* TESTIMONIALS SLIDER */}
                                    <div className="relative mt-8">
                                        {/* LEFT ARROW */}
                                        <button
                                            onClick={prevTestimonial}
                                            className="absolute -left-11 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>

                                        {/* TESTIMONIAL CARD - Matching TestimonialSlider design */}
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentTestimonial}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                                className="
                                                    bg-white/5
                                                    backdrop-blur-xl
                                                    border border-white/10
                                                    shadow-xl
                                                    flex flex-col
                                                    p-6
                                                    w-[408.98px]
                                                    h-[282.14px]
                                                    rounded-[11.6px]
                                                "
                                            >
                                                <p
                                                    className="
                                                        text-gray-200
                                                        mb-6
                                                        flex-1
                                                        font-[Helvetica]
                                                        font-normal
                                                        text-[13.06px]
                                                        leading-[1.3]
                                                        tracking-[0.02em]
                                                    "
                                                >
                                                    "{testimonialsGame[currentTestimonial].quote}"
                                                </p>

                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20">
                                                        <Image
                                                            src={
                                                                testimonialsGame[currentTestimonial].image === "/photo.jpg"
                                                                    ? "/photo.jpg"
                                                                    : testimonialsGame[currentTestimonial].image.startsWith("http")
                                                                        ? testimonialsGame[currentTestimonial].image
                                                                        : `${process.env.NEXT_PUBLIC_CDN_URL || ""}${testimonialsGame[currentTestimonial].image}`
                                                            }
                                                            alt={testimonialsGame[currentTestimonial].name}
                                                            width={56}
                                                            height={56}
                                                            unoptimized
                                                            className="w-full h-full object-cover"
                                                            onError={(e) => {
                                                                // Fallback to default image if CDN fails
                                                                const target = e.target as HTMLImageElement;
                                                                target.src = "/photo.jpg";
                                                            }}
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="font-semibold text-lg text-white space-y-6">
                                                            {testimonialsGame[currentTestimonial].name}
                                                        </p>
                                                        <p className="text-sm text-gray-400">
                                                            {testimonialsGame[currentTestimonial].role}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* INDICATORS inside card */}
                                                <div className="flex gap-2 mt-6">
                                                    {testimonialsGame.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => setCurrentTestimonial(index)}
                                                            className={`w-3 h-3 rounded-full transition ${index === currentTestimonial ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
                                                            aria-label={`Go to testimonial ${index + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* RIGHT ARROW */}
                                        <button
                                            onClick={nextTestimonial}
                                            className="absolute -right-11 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* CERTIFICATIONS — DESKTOP */}
                                <div
                                    className="mt-2 grid grid-flow-col auto-cols-max items-center justify-start gap-4 bg-[#1D2135] px-4 py-5 rounded-xl overflow-hidden"
                                    style={{
                                        border: "1px solid",
                                        borderImageSource: "linear-gradient(90deg,#181632 0%,#cccccc 50%,#181632 100%)",
                                        borderImageSlice: 1,
                                    }}
                                >
                                    {CERTIFICATIONS.slice(0, 6).map((cert: any) => (
                                        <img
                                            key={cert.name}
                                            src={process.env.NEXT_PUBLIC_CDN_URL + cert.image}
                                            alt={cert.name}
                                            className="h-12 sm:h-14 md:h-16 object-contain" // responsive height
                                            style={{ width: "auto" }} // maintain aspect ratio
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}