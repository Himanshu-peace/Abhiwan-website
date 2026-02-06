import React from 'react'
import Image from 'next/image'

export default function MadeThisFar() {
  const reasons = [
    "You have an idea to create an",
    "You want to get your app developed with latest",
    "You are looking for a price proposal for your project.",
    "You have any query related to Mobile/Web design and development.",
    "You want a website/app that would increase your business",
    "You are impressed by our portfolio and want our",
    "You want your website based on unmatched technical know-how."
  ]

  return (
    <section className="py-20 px-4 bg-[#1a1f3a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              You have made <span className="text-purple-500">this far!</span>
            </h2>
            <p className="text-gray-400 mb-8">
              If you are looking for redesigning an existing App/website or
              building one from the scratch, we have the expertise to convert
              your dream into reality.
            </p>
            <p className="text-white font-semibold mb-6">
              Feel Free To Contact Us if:
            </p>

            <ul className="space-y-3 text-gray-300">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white mt-1">✱</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative h-[400px]">
              <Image
                src="/contact-us/made_this_far.svg"
                alt="Development illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}