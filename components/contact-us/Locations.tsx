import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
} from "lucide-react"

const LOCATIONS = [
  {
    country: "INDIA",
    address: "301, Syadwad Business Park, H32, Sector 63, Noida.",
    icon: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/tsha8ol47ra059v/india_gate_z2bcojlnzb.webp",
  },
  {
    country: "UNITED STATES",
    address: "711 S Glendora Ave, West Covina, CA",
    icon: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/36880ddmkzt99p3/statue_of_liberty_line_deu5jb0zmn.webp",
  },
  {
    country: "UNITED KINGDOM",
    address: "86-90, Paul Street, London, EC2A 4NE, England",
    icon: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/341hkslss6wsr0w/london_eye_ee3jrilpfq.webp",
  },
  {
    country: "UAE",
    address: "Ontario Tower, Dubai, UAE",
    icon: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/zupe3p5io9530h4/burj_al_arab_549thzjjky.webp",
  },
  {
    country: "CANADA",
    address: "7168 179 St, Surrey BC, V3S 8C5",
    icon: "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1t7msa4f0gruu86/cn_tower_qis2spo639.webp",
  },
]

export default function Locations() {

  return (
    <section className="py-20 px-4 bg-gray-100 text-black ">
      <div className="max-w-7xl mx-auto">
        <div className="mt-12 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10">

            {LOCATIONS.map((item, index) => {
              const isIndia = index === 0
              const isLast = index === LOCATIONS.length - 1
              const isLeftColMobile = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`
              relative text-center px-4
              ${isIndia ? "col-span-2 md:col-span-1" : ""}
            `}
                >
                  {/* ================= MOBILE DIVIDERS ================= */}

                  {/* Mobile vertical divider (between 2 columns) */}
                  {!isIndia && !isLeftColMobile && (
                    <span
                      aria-hidden
                      className="
                  absolute right-0 top-3 bottom-3 w-[0.5px]
                  bg-gradient-to-b
                  from-[#0D0D0D] via-[#9E9E9E] to-[#0D0D0D]
                  md:hidden
                "
                    />
                  )}

                  {/* Mobile horizontal divider */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="
                  absolute left-4 right-4 bottom-0 h-[0.5px]
                  bg-gradient-to-r
                  from-[#0D0D0D] via-[#9E9E9E] to-[#0D0D0D]
                  md:hidden
                "
                    />
                  )}

                  {/* ================= DESKTOP DIVIDER ================= */}

                  {/* Desktop vertical divider ONLY */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="
                  hidden md:block
                  absolute right-0 top-3 bottom-3 w-[0.85px]
                  bg-gradient-to-b
                  from-[#0D0D0D] via-[#9E9E9E] to-[#0D0D0D]
                "
                    />
                  )}

                  {/* ICON */}
                  <div className="flex justify-center mb-3">
                    <Image
                      src={item.icon}
                      alt={item.country}
                      width={28}
                      height={28}
                      className="w-7 h-7 md:w-10 md:h-10 object-contain"
                      unoptimized
                    />
                  </div>

                  <h4 className="text-xs md:text-sm font-semibold tracking-wide">
                    {item.country}
                  </h4>

                  <p className="mt-1 text-[11px] md:text-xs text-gray-400 leading-relaxed">
                    {item.address}
                  </p>

                  {item.country === "INDIA" && (
                    <span
                      className="
                        block
                        mt-0.5
                        text-[13px]
                        leading-[15px]
                        font-semibold
                        font-inter
                        text-white
                        text-center
                      "
                    >
                      (Head Office)
                    </span>

                  )}

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}