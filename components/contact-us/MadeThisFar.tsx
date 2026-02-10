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
    <section className="px-6 bg-[#2D2D48]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center p-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              You have <span className="bg-[linear-gradient(89.29deg,#FFFFFF_10%,#763AF5_76.63%,#A604F2_104.63%)] bg-clip-text text-transparent">made this far!</span>
            </h2>
            <p className="text-[#FFFFFF] text-xs sm:text-sm ">
              If you are looking for redesigning an existing App/website or
              building one from the scratch, we have the expertise to convert
              your dream into reality.
              <br />
              Feel Free To Contact Us if:
            </p>
            {/* <p className="text-white font-semibold mb-6">
              Feel Free To Contact Us if:
            </p> */}

            <ul className=" text-[#FFFFFF] mt-10 text-xs sm:text-sm">
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
                className="h-full w-full object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}