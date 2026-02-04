import HeroWrapper from "@/components/programatic_seo/HeroWrapper";
import IndustriesSection from "@/components/programatic_seo/industries_section";
import ChooseUsSection from "@/components/programatic_seo/choose_us";
import TestimonialsSection from "@/components/programatic_seo/testimonial";
import FaqSection from "@/components/programatic_seo/faq";
import BuildingSection from "@/components/programatic_seo/building_section";
import BrandsSection from "@/components/programatic_seo/brans_section";
import { GamesShowcase } from "@/components/programatic_seo/game_showcase";
import { BRAND_LOGOS } from "@/constants/brandLogos";
import { Metadata } from "next";
import { notFound } from "next/navigation";

/* ---------------- HELPERS ---------------- */
const formatCountryName = (slug: string) => {
  if (!slug) return "";
  const formatted = slug.replace(/-/g, " ");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

/* ---------------- METADATA ---------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  console.log("Metadata function - location:", location);

  if (!location) {
    console.log("Metadata: Location is undefined, returning default metadata");
    return {
      title: "Digital Twin Development",
      description: "Digital Twin Development Services",
    };
  }

  const locationName = formatCountryName(location);
  const isDevelopment = process.env.NODE_ENV === "development";

  const baseUrl = isDevelopment
    ? "http://localhost:3000"
    : "https://yourdomain.com";

  const pageUrl = `${baseUrl}/digital-twin-development-services/${location}`;
  const ogImage = "/og/digital-twin-development.jpg";

  return {
    title: `Best Digital Twin Development Services in ${locationName} 2026`,
    description: `Transform your business with expert Digital Twin Development in ${locationName} for predictive maintenance, 3D models, and smart industrial solutions.`,

    keywords: [
      `Digital Twin Development in ${locationName}`,
      `Human Digital Twin Development in ${locationName}`,
      `Infrastructure Digital Twin Development in ${locationName}`,
      `Product Digital Twin Development in ${locationName}`,
      `Industrial Digital Twin Development in ${locationName}`,
      `Digital Twin for Manufacturing in ${locationName}`,
      `Digital Twin in Automotive in ${locationName}`,
      `Digital Twin in Logistics in ${locationName}`,
      `Digital Twin For Predictive Maintenance in ${locationName}`,
      `3D Digital Twin Development in ${locationName}`,
      `Digital Twin Companies in ${locationName}`,
      `Create Digital Twin in ${locationName}`,
      `Digital Twin Metaverse Development in ${locationName}`,
      `IoT and Digital Twin Development in ${locationName}`,
      `Digital Twin Technology Development in ${locationName}`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `Best Digital Twin Development Services in ${locationName}`,
      description: `Advanced Digital Twin solutions in ${locationName} using IoT, AI, and real-time simulations.`,
      url: pageUrl,
      siteName: "Your Brand Name",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Digital Twin Development Services in ${locationName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Digital Twin Development Company in ${locationName}`,
      description: `Build intelligent Digital Twin solutions in ${locationName} with real-time data and predictive insights.`,
      images: [ogImage],
    },
  };
}

/* ---------------- PAGE ---------------- */
export default async function Page({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  console.log("Digital twin page - location from params:", location);
  
  if (!location) {
    console.log("Location is undefined, but continuing for debug");
  }

  const formattedCity = formatCountryName(location);
  const logos = BRAND_LOGOS;

  return (
    <main>
      <HeroWrapper
        name={formattedCity}
        title="Best Digital Twin Development"
        country="India"
        backgroundImage="/images/digital-twin-hero.jpg"
      />

      <BrandsSection logos={logos} />

      <GamesShowcase
        name={formattedCity}
        slugItem={{
          country: "India",
          slug: location,
          backgroundImage: "/images/digital-twin-hero.jpg",
        }}
        title="Digital Twin Development"
      />

      <IndustriesSection
        name={formattedCity}
        title="Digital Twin Development"
      />

      <ChooseUsSection
        title="Digital Twin Development"
        location={formattedCity}
      />

      <TestimonialsSection
        title="Digital Twin Development"
        location={formattedCity}
      />

      {/* SEO-CRITICAL */}
      <FaqSection
        title="Digital Twin Development"
        location={formattedCity}
      />

      <BuildingSection
        imageAlt={`Building intelligent digital twin ecosystems in ${formattedCity}`}
      />
    </main>
  );
}
