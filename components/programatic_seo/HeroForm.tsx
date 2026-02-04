"use client"

import React, { useState } from 'react'
import Input from '@/components/ui/input'
import CountryFlag from 'react-country-flag'

interface HeroFormProps {
    country: string;
}

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

export default function HeroForm({ country }: HeroFormProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        requirement: '',
        message: '',
        agreeNda: false,
        agreeTerms: false,
    })
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        requirement: '',
        message: '',
    })
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [ndaConsent, setNdaConsent] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(() => {
        const defaultCountry = countries.find(c =>
            c.name.toLowerCase() === country?.toLowerCase() ||
            c.code.toLowerCase() === country?.toLowerCase()
        )
        return defaultCountry || countries[0]
    })

    const validateForm = () => {
        const newErrors = {
            fullName: '',
            email: '',
            phone: '',
            requirement: '',
            message: '',
        }

        if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Name must be at least 2 characters long'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        const phoneRegex = /^\+?[\d\s\-\(\)]{7,15}$/
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number (7-15 digits)'
        }

        if (!formData.requirement) {
            newErrors.requirement = 'Please select a service requirement'
        }

        if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long'
        }

        setErrors(newErrors)
        return !Object.values(newErrors).some(error => error !== '')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
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
                    description: formData.message,
                    service: formData.requirement
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
                    message: '',
                    agreeNda: false,
                    agreeTerms: false,
                })

                setTimeout(() => {
                    setSubmitMessage('')
                }, 3000)
            } else {
                setSubmitMessage(data.message || 'Failed to submit form. Please try again.')
            }
        } catch (error) {
            setSubmitMessage('Failed to submit form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-[#1D2135] rounded-sm p-4 sm:p-6 shadow-xl">
            <h2 className="text-lg sm:text-lg font-bold mb-4 sm:mb-6">Have an idea buzzing in your head? Let's make it happen!</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                            Full Name<span className="text-white">*</span>
                        </label>
                        <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`bg-white border-slate-700 text-black placeholder-slate-500 focus:border-purple-500 ${errors.fullName ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                            Email<span className="text-white">*</span>
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`bg-white border-slate-700 text-black placeholder-slate-500 focus:border-purple-500 ${errors.email ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                            Phone<span className="text-white">*</span>
                        </label>
                        <div className="flex gap-2 w-full">
                            <div className="relative w-[80px] flex-shrink-0">
                                <select
                                    value={selectedCountry.code}
                                    onChange={(e) => {
                                        const countryMatch = countries.find(c => c.code === e.target.value)
                                        if (countryMatch) setSelectedCountry(countryMatch)
                                    }}
                                    className="
                                        w-full bg-white border border-slate-700 rounded-md
                                        pl-2 pr-10 py-3 text-black text-xs
                                        focus:border-purple-500 focus:outline-none
                                        appearance-none cursor-pointer z-40
                                    "
                                >
                                    {countries.map((c) => (
                                        <option key={c.code} value={c.code}>
                                            {c.isd}
                                        </option>
                                    ))}
                                </select>

                                <div className="absolute right-0 top-0 bottom-1 flex items-center pr-2 pointer-events-none">
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

                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`
        bg-white border-slate-700 text-black 
        placeholder:text-sm placeholder:text-slate-500
        focus:border-purple-500 w-full
        ${errors.phone ? 'border-red-500' : ''}
    `}
                                required
                            />
                        </div>

                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="requirement" className="block text-sm font-medium text-white mb-2">
                            Requirement<span className="text-white">*</span>
                        </label>

                        <div className="relative">
                            <select
                                id="requirement"
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
            w-full 
            bg-white 
            border border-slate-700 
            rounded-md 
            px-3 py-2 
            focus:border-purple-500 
            focus:outline-none
            appearance-none
            pr-10
            ${!formData.requirement ? 'text-gray-400' : 'text-black'}
            ${errors.requirement ? 'border-red-500' : ''}
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
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Write a message*
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write a message..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full bg-white border border-slate-700 text-black rounded-md px-3 py-2 focus:border-purple-500 focus:outline-none resize-none ${errors.message ? 'border-red-500' : ''}`}
                        rows={2}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                </div>

                <div className="text-xs text-gray-300 space-y-2 pt-3 sm:pt-4 border-t border-gray-600">

                    <p className="flex items-center gap-2 text-xs sm:text-sm">
                        <img
                            src="/doublecheck.png"
                            alt="check"
                            className="w-4 h-4 object-contain"
                        />
                        Get a response in few minutes.
                    </p>

                    <p className="flex items-center gap-2 text-xs sm:text-sm">
                        <img
                            src="/doublecheck.png"
                            alt="check"
                            className="w-4 h-4 object-contain"
                        />
                        Your idea stays 100% protected under NDA                    </p>

                    <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm">
                        <input
                            type="checkbox"
                            name="ndaConsent"
                            checked={ndaConsent}
                            onChange={(e) => setNdaConsent(e.target.checked)}
                            required
                            className="w-3 h-3 sm:w-4 sm:h-4 accent-blue-600"
                        />
                        Receive a copy of the NDA for full security
                    </label>

                </div>


                {submitMessage && (
                    <div className={`p-3 rounded-md text-sm ${submitMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {submitMessage}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 sm:py-3 bg-[#2f5bff] text-white rounded-md font-semibold hover:bg-[#2450dd] transition-colors text-sm sm:text-base mt-2 sm:mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Submitting...' : 'Schedule a Free Consultation'}
                </button>
            </form>
        </div>
    )
}
