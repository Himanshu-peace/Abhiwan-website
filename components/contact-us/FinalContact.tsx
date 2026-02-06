import React from 'react'
import { Send, Phone, Mail } from 'lucide-react'

export default function FinalContact() {
  return (
    <section className="py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-12">We&apos;d love to hear from you</p>

        <div className="flex justify-center gap-8">
          <a
            href="#"
            className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Send className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}