

"use client"

import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; // Or your preferred icon library
import { AboutTopCurve } from "../common/headerCurve";
import ExperienceBadge from "../ui/experincebadge";
import { motion } from "framer-motion";

// export default function AboutSection() {
//     return (
//         <section className="relative bg-white pt-0 overflow-visible">
//             {/* Top Curve Component */}
//             <AboutTopCurve />

//             <div className="relative z-10">
//                 {/* Responsive Padding:
//                   - Mobile: pt-12
//                   - Tablet/Desktop: pt-20
//                 */}
//                 <div className="px-6 md:px-10 lg:px-16 pt-12 md:pt-20 pb-24 md:pb-32">

//                     {/* Grid Configuration:
//                       - Mobile: Stacked (flex-col-reverse)
//                       - 768px to 1200px: Equal split (md:grid-cols-2) to prevent text squashing
//                       - 1200px+: Custom split (lg:grid-cols-[1.1fr_0.9fr])
//                     */}
//                     <div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-8 lg:gap-16 items-start max-w-[1400px] mx-auto">

//                         {/* LEFT SIDE: Image and Badge */}
//                         <div className="relative w-full">
//                             <div className="relative w-full max-w-[700px] mx-auto md:mx-0">

//                                 {/* Experience Badge:
//                                   - Fixed positioning logic for the middle-range screens
//                                 */}
//                                 <div className="absolute -top-8 left-4 md:top-auto md:-bottom-6 md:-left-6 z-20 bg-gradient-to-br from-[#6D28D9] to-[#4F46E5] rounded-2xl p-4 md:p-6 text-white shadow-2xl min-w-[130px] md:min-w-[160px] text-center">
//                                     <div className="text-3xl md:text-5xl font-bold leading-none">7+</div>
//                                     <div className="text-[10px] md:text-[13px] font-medium uppercase tracking-wider mt-1 md:mt-2 opacity-90">
//                                         Years of <br /> Experience
//                                     </div>
//                                 </div>

//                                 {/* Main Image Wrapper */}
//                                 <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] md:aspect-square lg:aspect-[16/10]">
//                                     <Image
//                                         src="/team-photo.png"
//                                         alt="Team at Abhiwan"
//                                         fill
//                                         className="object-cover"
//                                         priority
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* RIGHT SIDE: Content */}
//                         <div className="w-full space-y-6 md:pt-2">
//                             {/* Heading with responsive font sizing for the 768px-1296px range */}
//                             <h2 className="font-futura font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[60px] leading-[1.1] tracking-[-0.02em] uppercase text-[var(--about-heading)]">
//                                 <span className="xl:whitespace-nowrap">
//                                     IF YOU CAN DREAM IT,
//                                 </span>
//                                 <br />
//                                 WE CAN BUILD IT.
//                             </h2>

//                             {/* Body Text */}
//                             <div className="space-y-5 font-inter text-base md:text-[17px] lg:text-[18px] text-gray-700 leading-relaxed max-w-[600px]">
//                                 <p>
//                                     <span className="font-bold text-black">ABHIWAN</span>, the Best Software
//                                     Development Company in India, was established with a deep commitment to
//                                     technology and a strong passion for innovation. Since 2018, Abhiwan
//                                     Technology has been delivering cutting-edge digital solutions.
//                                 </p>

//                                 <p className="hidden sm:block">
//                                     Our evaluations align with the Industry’s Top IT Software Development
//                                     Companies, positioning Abhiwan Technology at the forefront of innovation and engineering excellence.
//                                 </p>

//                                 <p className="font-inter font-bold text-[18px] leading-snug text-black">
//                                     Let’s collaborate and bring the future of tech to your fingertips!
//                                 </p>
//                             </div>

//                             {/* CTA Link */}
//                             <div className="pt-4">
//                                 <a
//                                     href="#"
//                                     className="group inline-flex items-center gap-2 text-lg md:text-xl font-bold text-black hover:opacity-70 transition-all"
//                                 >
//                                     Know More About Us
//                                     <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//                                 </a>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


export default function AboutSection() {
  return (
    <section className="relative bg-white pt-0 overflow-visible -mt-22">
      <AboutTopCurve />

      <div className="relative z-10 bg-white">
        <div className="px-6 md:px-12 lg:px-16 pt-12 md:pt-20">

          {/* Layout container */}
          <div
            className="
              flex flex-col-reverse
              lg:grid lg:grid-cols-[1.05fr_0.95fr]
              gap-12 lg:gap-10
              items-start
              max-w-[1400px]
              mx-auto
            "
          >
            {/* ================= IMAGE SIDE ================= */}
            <div className="relative w-full">
              <div className="relative w-full">

                {/* Experience Badge */}
                <ExperienceBadge />

                {/* Image Wrapper */}
                <div className="relative w-full">
                  <div
                    className="
                      relative
                      rounded-2xl
                      overflow-hidden
                      shadow-xl
                      border-4 border-white
                      aspect-[4/3]
                      lg:aspect-[16/10]
                    "
                  >
                    <Image
                      src="https://cdn.abhiwandemos.com/api/files/pbc_193071544/8nfp5837i3207m7/abhiwan_team_krwwsys4g3.webp"
                      alt="Team"
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CONTENT SIDE ================= */}
            <div className="space-y-6 md:pt-2">
              <h2
                className="
    font-futura
    font-bold
    text-[36px]
    md:text-[48px]
    lg:text-[60px]
    leading-[1.1]
    lg:leading-[60px]
    tracking-[-0.02em]
    uppercase
    text-[var(--about-heading)]
  "
              >

                <span className="lg:whitespace-nowrap">
                  IF YOU CAN DREAM IT,
                </span>
                <br />
                WE CAN BUILD IT.
              </h2>


              <div className="space-y-5 font-inter text-base md:text-[18px] text-gray-700 leading-relaxed">
                <p>
                  <span style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'Bold', fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }} className="text-black">ABHIWAN</span>, <span style={{ fontFamily: 'Inter', fontWeight: 400, fontStyle: 'Regular', fontSize: '18px', lineHeight: '100%', letterSpacing: '0%' }}>the Best Software Development Company in India, was established with a deep commitment to technology and a strong passion for innovation. Since 2018, Abhiwan Technology, a Leading Immersive Tech Solution Provider, has been delivering the Best Custom Software Development Services to clients across the USA, UK, UAE, India, and beyond.</span>
                </p>

                <p className="text-[18px] leading-[1.2]">
                  Our evaluations align with the Industry’s Top IT Software
                  Development Companies, positioning Abhiwan Technology at the
                  forefront of engineering excellence.
                </p>

                <p className=" text-[18px] leading-[1.2]">
                  Let’s collaborate and bring the future of tech to your
                  fingertips!
                </p>
              </div>

              <div className="pt-2 md:pt-4 my-10">
                <motion.a
                  href="#"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-lg md:text-xl
                    font-bold
                    text-black
                    transition-colors
                    duration-300
                  "
                  whileHover={{ color: "#3952FC" }}
                >
                  Know More About Us
                  <motion.span
                    className="inline-block"
                    initial={{ rotate: 70 }}
                    whileInView={{ rotate: 0 }}
                    whileHover={{
                      rotate: 0,
                      x: 6
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                  >
                    <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
                  </motion.span>
                </motion.a>
              </div>


            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
