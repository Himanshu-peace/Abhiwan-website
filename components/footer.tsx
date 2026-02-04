"use client"

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

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-black to-[#0b0b0b] text-white">

      {/* LOGO */}
      <div className="pt-10 text-center">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="relative h-[80px] md:h-[120px]">
            <Image
              src="/footer_logo/abhiwan_footer_text.png"
              alt="Abhiwan Technology Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>


      {/* LOCATIONS */}
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

      {/* LINKS */}
      <div className="mt-12 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-sm">

          <FooterColumn title="OUR COMPANY">
            <FooterLink label="Home" />
            <FooterLink label="Services" />
            <FooterLink label="Portfolio" />
            <FooterLink label="Blogs" />
            <FooterLink label="About Us" />
            <FooterLink label="Contact Us" />
            <FooterLink label="Careers ↗" />
          </FooterColumn>

          <FooterColumn title="SERVICES">
            <FooterText label="Esports Games" />
            <FooterText label="Adver Gaming" />
            <FooterText label="3D Game Art" />
            <FooterText label="3D Product Modelling" />
            <FooterText label="Digital Twin" />
            <FooterText label="Augmented Reality" />
            <FooterText label="Virtual Reality" />
          </FooterColumn>

          <FooterColumn
            title="SERVICES"
            className="col-span-2 md:col-span-1"
          >
            <FooterText label="Blockchain Development" />
            <FooterText label="Interactive Kiosks" />
            <FooterText label="AI / ML" />
            <FooterText label="Digital Marketing" />
            <FooterText label="Website Development" />
            <FooterText label="App Development" />
            <FooterText label="Web3 Games Development" />
          </FooterColumn>

          <FooterColumn
            title="FOLLOW US ON"
            className="order-5 col-span-2 md:order-none md:col-span-1"
          >
            <div className="flex flex-col gap-2 justify-center align-center">
              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-2">
                <SocialButton icon={<Image src="https://cdn.abhiwandemos.com/api/files/pbc_193071544/fveh5cns3ac254n/facebook_l1t2393hwg.webp" alt="Facebook" width={16} height={16} className="object-contain" unoptimized />} label="Facebook" />
                <SocialButton icon={<Image src="https://cdn.abhiwandemos.com/api/files/pbc_193071544/ir934n9ivk5r1eh/instagram_ec4a0g76db.webp" alt="Instagram" width={16} height={16} className="object-contain" unoptimized />} label="Instagram" />
                <SocialButton icon={<Image src="https://cdn.abhiwandemos.com/api/files/pbc_193071544/79k9f2vd8ebkrxr/xhvad2k23ki_5y9493b1fg.webp" alt="X" width={16} height={16} className="object-contain" unoptimized />} label="X" />
                <SocialButton icon={<Image src="https://cdn.abhiwandemos.com/api/files/pbc_193071544/ece8b68g2l71c77/linkedin_4kd10nldg6.webp" alt="LinkedIn" width={16} height={16} className="object-contain" unoptimized />} label="LinkedIn" />
              </div>

              {/* MOBILE ONLY TERMS & PRIVACY LINKS */}
              <div className="flex mt-5 flex-row justify-between items-center gap-2 md:hidden text-gray-400 text-xs">
                <Link href="/privacy-policy" className="flex items-center gap-1 hover:text-white">
                  Privacy Policy <span>↗</span>
                </Link>
                <Link href="/terms-conditions" className="flex items-center gap-1 hover:text-white">
                  Terms & Conditions <span>↗</span>
                </Link>
              </div>
            </div>
          </FooterColumn>

          <FooterColumn
            title="CONTACT US"
            className="col-span-2 md:col-span-1"
          >
            <div className="flex gap-2 text-gray-300 text-xs">
              <Phone size={14} /> For Sales: +91 - 9599145805
            </div>
            <div className="flex gap-2 text-gray-300 text-xs">
              <Phone size={14} /> For HR: +91 - 9910655805
            </div>
            <div className="flex gap-2 text-gray-300 text-xs">
              <Mail size={14} /> sales@abhiwan.com
            </div>

          </FooterColumn>


        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 border-t border-white/10">
        <div
          className="
            max-w-[1280px]
            mx-auto
            px-6
            py-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
            text-[11px]
            text-gray-400
          "
        >
          {/* LEFT LINKS */}
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hidden md:flex hover:text-white items-center gap-1"
            >
              Privacy Policy <span>↗</span>
            </Link>

            {/* DESKTOP ONLY */}
            <Link
              href="/terms-conditions"
              className="hidden md:flex hover:text-white items-center gap-1"
            >
              Terms & Conditions <span>↗</span>
            </Link>
          </div>


          {/* RIGHT COPYRIGHT */}
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} All Rights Reserved by Abhiwan Technology
          </div>
        </div>
      </div>



    </footer>
  )
}

/* -------------------------------------------------------------------------- */

function FooterColumn({
  title,
  children,
  className = "",
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <h5 className="text-blue-500 mb-4 text-sm tracking-wide font-bold">
        {title}
      </h5>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function FooterLink({ label }: { label: string }) {
  // Map labels to actual routes
  const getRoute = (label: string) => {
    switch (label) {
      case "Home": return "/"
      case "Services": return "/services"
      case "Portfolio": return "/portfolio"
      case "About Us": return "/about-us"
      case "Contact Us": return "/contact-us"
      case "Blogs": return "/blogs"
      case "Careers ↗": return "/careers"
      default: return "#"
    }
  }

  return (
    <Link href={getRoute(label)} className="block text-gray-300 text-xs hover:text-white">
      {label}
    </Link>
  )
}

function FooterText({ label }: { label: string }) {
  return <div className="text-gray-300 text-xs">{label}</div>
}

function SocialButton({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href?: string
}) {
  const socialLinks: Record<string, string> = {
    "Facebook": "https://www.facebook.com/abhiwantechnology",
    "Instagram": "https://www.instagram.com/abhiwan.tech",
    "X": "https://twitter.com/abhiwantechnology",
    "LinkedIn": "https://www.linkedin.com/company/abhiwan-technology"
  }

  const socialHref = href || socialLinks[label] || "#"

  return (
    <Link
      href={socialHref}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-2 rounded-md w-full md:min-w-[140px] justify-center md:justify-start text-xs hover:bg-[#2a2a2a] transition-colors"
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}
