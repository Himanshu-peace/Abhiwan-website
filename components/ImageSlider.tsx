"use client"

import Image from "next/image"

interface ImageSliderProps {
  images: string[]
  activeIndex: number
}

export default function ImageSlider({
  images,
  activeIndex,
}: ImageSliderProps) {
  const CDN = process.env.NEXT_PUBLIC_CDN_URL || ""
  const validImages = images.filter(Boolean)

  if (!validImages.length) return null

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {validImages.map((src, index) => (
          <div key={index} className="min-w-full h-full relative rounded-lg">
            <Image
              src={`${CDN}${src}`}
              alt={`Slide ${index + 1}`}
              fill
              unoptimized
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
