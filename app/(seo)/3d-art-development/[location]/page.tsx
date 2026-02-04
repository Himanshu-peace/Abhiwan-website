import HeroWrapper from "@/components/programatic_seo/HeroWrapper";
import IndustriesSection from "@/components/programatic_seo/industries_section";
import { GamesShowcase } from "@/components/programatic_seo/game_showcase";
import ChooseUsSection from "@/components/programatic_seo/choose_us";
import { notFound } from "next/navigation";
import { BRAND_LOGOS } from "@/constants/brandLogos";
import { countriesData } from "@/data/countriesData";
import { Metadata } from "next";
import TestimonialsSection from "@/components/programatic_seo/testimonial";
import FaqSection from "@/components/programatic_seo/faq";
import BuildingSection from "@/components/programatic_seo/building_section";
import BrandsSection from "@/components/programatic_seo/brans_section";

/* ---------------- HELPERS ---------------- */
const formatCountryName = (slug: string) => {
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

  const slugItem = countriesData.find(
    (item: any) => item.slug === location
  );

  if (!slugItem) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
      robots: "noindex, nofollow",
    };
  }

  const displayName = formatCountryName(slugItem.slug);
  const isDevelopment = process.env.NODE_ENV === "development";

  const baseUrl = isDevelopment
    ? "http://localhost:3000"
    : "https://yourdomain.com";

  const pageUrl = `${baseUrl}/3d-art-services/${location}`;
  const ogImage = "/og/3d-art-services.jpg";

  return {
    title: `Best 3D Art Services in ${displayName} 2026`,
    description:
      `Enhance your projects with expert 3D Art Services in ${displayName}, delivering stunning visuals, game art, and realistic 3D assets.`,

    keywords: [
      `3D Art Services in ${displayName}`,
      `3D Rendering Artist in ${displayName}`,
      `3D Outsourcing Studio in ${displayName}`,
      `2D Game Art Outsourcing in ${displayName}`,
      `3D Rendering Art in ${displayName}`,
      `3D Sculpting Services in ${displayName}`,
      `3D Game Art Outsourcing in ${displayName}`,
      `3D Art Outsourcing in ${displayName}`,
      `3D Game Art Outsourcing Studio in ${displayName}`,
      `3D Art Outsourcing Services in ${displayName}`,
      `Artist Rendering Services in ${displayName}`,
      `3D Art Outsourcing Studio in ${displayName}`,
      `2D 3D Game Art in ${displayName}`,
      `2D Game Art Design in ${displayName}`,
      `2D Game Graphic Design in ${displayName}`,
      `3D Art Outsourcing Company in ${displayName}`,
      `3D Visualisation Artist in ${displayName}`,
      `Game Artist in ${displayName}`,
      `Game Art And Design in ${displayName}`,
      `Unreal Engine Environment Artist in ${displayName}`,
      `3D Game Art Studio in ${displayName}`,
      `Game Environment Artist in ${displayName}`,
      `Video Game Environment Artist in ${displayName}`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `Best 3D Art Services in ${displayName}`,
      description:
        `Hire professional 3D artists in ${displayName} for game art, environment design, and high-quality 3D assets.`,
      url: pageUrl,
      siteName: "Abhiwan Technology",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `3D Art Services in ${displayName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `3D Art Outsourcing Company in ${displayName}`,
      description:
        `Get premium 2D & 3D game art services in ${displayName} from experienced artists and designers.`,
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

  const slugItem = countriesData.find(
    (item: any) => item.slug === location
  );

  if (!slugItem) {
    notFound();
  }

  const displayName = formatCountryName(slugItem.slug);
  const logos = BRAND_LOGOS;

  return (
    <main>
      <HeroWrapper
        name={displayName}
        backgroundImage={slugItem.backgroundImage}
        country={slugItem.country}
        title="Best 3D Art Services"
      />

      <BrandsSection logos={logos} />

      <GamesShowcase
        name={displayName}
        slugItem={slugItem}
        title="3D Game Art & Visual Design"
      />

      <IndustriesSection
        name={displayName}
        title="3D Art & Game Development"
      />

      <ChooseUsSection
        title="Best 3D Art Services"
        location={displayName}
      />

      <TestimonialsSection
        title="3D Art & Game Design Services"
        location={displayName}
      />

      {/* SEO-CRITICAL */}
      <FaqSection
        location={displayName}
        title="3D Art Services"
      />

      <BuildingSection imageAlt="Building immersive 3D art and game assets" />
    </main>
  );
}
