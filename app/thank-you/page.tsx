
// import React from "react";

// import Hero from "../../components/thank-you/hero";
// import Blogs from "../../components/thank-you/blogs";
// import PortfolioSection from "../../components/thank-you/portfolioSection1";

// export default function Thankyou() {
//     return (
//         <div id="thank-you" className="bg-[#ffffff]">
//             <Hero />
//             <PortfolioSection />
//             <Blogs />
//         </div>
//     );
// }


"use client"
import React, { useState, useRef, useCallback } from 'react';
// import Image from 'next/image';

interface IndustryCardProps {
  title: string;
  icon: React.ReactNode;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, icon }) => {
  return (
    <div className={`relative rounded-xl aspect-square  `}>
        {icon}
      <h3 className={`absolute bottom-1 sm:bottom-0 lg:-bottom-2 xl:bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center uppercase text-white text-2xl md:text-2xl xl:text-3xl font-extrabold leading-8 md:leading-9`}>{title}</h3>
    </div> 
  );
};

// sliding image section
function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true;
      updatePosition(e.clientX);

      const handleMouseMove = (e: MouseEvent) => {
        if (isDragging.current) updatePosition(e.clientX);
      };
      const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [updatePosition]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      isDragging.current = true;
      updatePosition(e.touches[0].clientX);

      const handleTouchMove = (e: TouchEvent) => {
        if (isDragging.current) updatePosition(e.touches[0].clientX);
      };
      const handleTouchEnd = () => {
        isDragging.current = false;
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    },
    [updatePosition]
  );

  return (
    <div
      ref={containerRef}
      className="relative aspect-video mx-3 md:mx-10 lg:mx-30 rounded-3xl overflow-hidden cursor-ew-resize select-none"
    //   style={{ aspectRatio: "16/9" }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Right side (pink slipper) */}
      <div className="relative  inset-0  flex items-center justify-center">
        <div className=" flex items-center justify-end ">
          <div className="relative">
            <img src="/3d-product/color-shoes.webp" alt="Wireframe" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Left side (clip-path based on slider) */}
      <div
        className="absolute inset-0  flex items-center justify-start "
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* 3d-product slipper */}
        <img src="/3d-product/mono-shoes.webp" alt="Wireframe" className="w-full h-full" />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.75 h-full bg-white/70" />
        <div className="absolute flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-lg">
          {/* <img src="/3d-product/left arrow.svg" alt="left arrow" className="w-6 h-3 text-gray-600" /> */}
          <img src="/3d-product/slider.svg" alt="slider" className="w-6 h-3 text-gray-600" />
          {/* <img src="/3d-product/right arrow.svg" alt="right arrow" className="w-6 h-3 text-gray-600" /> */}
        </div>
      </div>
    </div>
  );
}          

export default function ThreeDModelingSection() {
  return (
    <section className="w-full bg-[#161530] min-h-screen font-sans">
        {/* Top Dark Section */}
        <div className="w-full pt-30 pb-20 px-6 flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 flex flex-wrap justify-center gap-2 lg:gap-4 ">
            OUR 3D PRODUCT MODELING
            <span className="text-transparent tracking-wide " style={{ WebkitTextStroke: '1.5px white' }}>
                SERVICES
            </span>
            </h1>
            <p className="max-w-4xl text-base md:text-xl text-gray-200  font-light">
            At Abhiwan, we do immersive 3d Product modelling that makes your product look clear, real, and easy
            to see. Our team focuses on accuracy, smooth textures, and natural lighting. This way, you get high-
            quality, ready-to-use 3D visuals that improve your product presentation across websites, ads, and
            online stores.
            </p>
        </div>

        {/* center slider section */}
        <BeforeAfterSlider />

        {/* Industries cards section */}
        <div className="w-full bg-white pt-15 sm:pt-20 lg:pt-40 pb-16 px-6 -mt-30">
            {/* Industries Section */}
            <div className="w-full flex flex-col items-center pt-24 px-6 text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-black mb-18 ">
                    INDUSTRIES WE SERVE
                </h2>

                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl">
                    <IndustryCard
                    title="Jewellery"
                    icon={
                        <img src="/3d-product/jewellery.webp" alt="Jewellery" className="w-full h-full object-fill" />
                    }
                    />
                    <IndustryCard
                    title="Electronics"
                    icon={
                        <img src="/3d-product/headset.webp" alt="Jewellery" className="w-full h-full object-fill" />
                    }
                    />
                    <IndustryCard
                    title="Kitchenware"
                    icon={
                        <img src="/3d-product/kitchen.webp" alt="Jewellery" className="w-full h-full object-fill" />
                    }
                    />
                    <IndustryCard
                    title="Fashion"
                    icon={
                        <img src="/3d-product/fashion.webp" alt="Jewellery" className="w-full h-full object-fill" />
                    }
                    />
                </div>

                <p className="mt-16 max-w-4xl text-base md:text-xl text-cen text-gray-600">
                    Bring your industry products to life with our premium 3D product modelling services.
                    Get high-quality, accurate, and visually stunning renders that elevate your brand.
                </p>

                <button className="mt-8 bg-gradient-to-r from-[#7F15DC] to-[#3952FC] text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2  transition-colors group">
                    Start With Us Now
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-7 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
  );
}