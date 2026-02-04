`use client`
// import React from "react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:28px_28px] opacity-40"
      /> */}

      <div className="relative mx-10  px-2 py-16 md:py-5">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[40%_60%] md:gap-8">
          {/* LEFT CONTENT */}
          <div className="md:col-auto lg:mt-15 sm:-md-10">  

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-1.5 text-sm font-medium text-gray-500 shadow-sm">
              <img
                src="/thank-you/heart-icon.svg"
                alt="Heart" 
                className="h-3.5 w-3.5"
              />
              <span className=" font-sans">You’ve Made It Here!</span>
            </div>

            <h1 className=" font-futura text-[40px] font-medium leading-tight tracking-tight text-gray-900 sm:text-6xl">
              <span className="md:text-7xl">Thank You!</span>
              <br />
              <span>For Reaching Out!</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
              We truly appreciate your interest in our services. Our team will be
              in touch shortly to discuss your requirements in detail and develop
              a solution tailored to your business needs. At our core, we believe
              in building experiences that inspire, engage, and deliver real
              value. Your vision matters to us, and we’re excited to bring it to
              life through innovation and immersive technology.
            </p>

            <div className="mt-10">
              <p className="text-xl font-semibold text-gray-800">
                Want to Discuss Urgently?
              </p>
              <p className="mt-1 text-gray-600">
                You can contact{" "}
                <span className=" font-semibold text-gray-600">Mr. Bijender Singh</span> directly
                for immediate assistance
              </p>

              <div className="w-90 h-17.75 mt-5 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-gray-200">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-13 items-center justify-center"
                  > 
                    <img
                      src={`/thank-you/social${i + 1}.png`}
                      alt={`Social ${i + 1}`}
                      className=" object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          {/* Grid */}
          <div className="relative lg:mt-15">
            <div className="grid grid-cols-2 grid-rows-2 gap-12 sm:grid-cols-[25%_50%_25%] sm:grid-rows-2 sm:gap-4 justify-center">
              <div className="h-76.25 w-full overflow-hidden rounded-2xl">
                <img
                  src="/thank-you/frame1.png"
                  alt="Frame 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-76.25 w-full overflow-hidden rounded-2xl hidden sm:block ">
                <img
                  src="/thank-you/frame2.png"
                  alt="Frame 2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-76.25 w-full overflow-hidden rounded-2xl">
                <img
                  src="/thank-you/frame3.png"
                  alt="Frame 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-76.25 w-full overflow-hidden rounded-2xl">
                <img
                  src="/thank-you/frame4.png"
                  alt="Frame 4"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-76.25 w-full overflow-hidden rounded-2xl hidden sm:block ">
                <img
                  src="/thank-you/frame5.png"
                  alt="Frame 5"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-76.25 w-full overflow-hidden rounded-2xl">
                <img
                  src="/thank-you/frame6.png"
                  alt="Frame 6"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Center Rotating Logo */}
              <div 
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  z-20
                  h-20
                  w-20
                  sm:h-30
                  sm:w-30
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-md
                  "
              >
                  <img
                    src="/thank-you/rotating logo.png"
                    alt="Rotating Logo"
                    className="h-full w-full p-2 animate-spin-fast"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};  

export default HeroSection;
