
"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            Get in <span className="bg-[linear-gradient(89.29deg,#FFFFFF_10%,#763AF5_76.63%,#A604F2_104.63%)] bg-clip-text text-transparent">touch</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl">
            Reach out, and let&apos;s create a universe of possibilities
            together!
          </p>
        </div>

        <div className="bg-[#2a2f4a]/30 backdrop-blur-sm rounded-3xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-[40%_60%] lg:gap-12 items-center">
            <div className="max-lg:p-8 lg:mr-5 lg:ml-15 ">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Let&apos;s connect !
                </h3>
                <p className="text-gray-400 mb-2 ">
                  Let&apos;s discuss how we can help you create <br />immersive
                  digital experiences.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#3a3f5a]/50 border border-gray-400/30 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-[#3a3f5a]/70 transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#3a3f5a]/50 border border-gray-400/30 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-[#3a3f5a]/70 transition-all"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#3a3f5a]/50 border border-gray-400/30 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-[#3a3f5a]/70 transition-all"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#3a3f5a]/50 border border-gray-400/30 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-[#3a3f5a]/70 transition-all"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#3a3f5a]/50 border border-gray-400/30 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-[#3a3f5a]/70 transition-all resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-[linear-gradient(90deg,#763AF5_0%,#A604F2_117.18%)] hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="relative max-lg:p-8 lg:ml-5 lg:my-8 lg:mr-20">
              <div className="relative h-125 rounded-2xl overflow-hidden">
                <Image
                  src="/contact-us/get-in-touch.jpg"
                  alt="VR Experience"
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-purple-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}