import HeroWrapper from "@/components/programatic_seo/HeroWrapper";
import IndustriesSection from "@/components/programatic_seo/industries_section";
import { GamesShowcase } from "@/components/programatic_seo/game_showcase";
import ChooseUsSection from "@/components/programatic_seo/choose_us";
import { notFound } from "next/navigation";
import { BRAND_LOGOS } from '@/constants/brandLogos'
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
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment ? 'http://localhost:3000' : 'https://yourdomain.com';
  const pageUrl = `${baseUrl}/game-development/${location}`;
  const ogImage = "/og/game-development-default.jpg";
  const favicon = "https://cdn.abhiwandemos.com/api/files/pbc_193071544/9h56tar626u9486/abhiwan_technoloy_logo_500fmzlish.webp";

  return {
    title: `Best Game Development Services in ${displayName} (2026)`,
    description: `Looking for the best game development company in ${displayName}? We deliver high-performance mobile, PC, AR/VR, and Unity-based games with expert teams.`,

    keywords: [
      `game development companies in ${displayName}`,
      `mobile game development in ${displayName}`,
      `android game development in ${displayName}`,
      `game app development in ${displayName}`,
      `unity game development in ${displayName}`,
      `top gaming companies in ${displayName}`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `Best Game Development Services in ${displayName}`,
      description: `Hire top-rated game developers in ${displayName} for mobile, PC, Unity, and AR/VR games.`,
      url: pageUrl,
      siteName: "Your Brand Name",
      images: [
        {
          url: favicon,
          width: 1200,
          height: 630,
          alt: `Game Development Services in ${displayName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Game Development Company in ${displayName}`,
      description: `Build next-gen games with expert developers in ${displayName}.`,
      images: [favicon],
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
  console.log(slugItem, "slug")
  if (!slugItem) {
    notFound();
  }

  const displayName = formatCountryName(slugItem.slug);

  const logos = BRAND_LOGOS;

  return (
    <main>
      <HeroWrapper name={displayName}
        backgroundImage={slugItem.backgroundImage} country={slugItem.country} title="Best Game Development" />


      <BrandsSection logos={logos} />

      <GamesShowcase
        name={displayName}
        slugItem={slugItem}
      />

      <IndustriesSection name={displayName} title="Best Game Development" />

      <ChooseUsSection title="Best Game Development" location={displayName} />

      <TestimonialsSection title="Best Game Development" location={displayName} />

      {/* SEO-CRITICAL */}
      <FaqSection location={displayName} title="Best Game Development" />
      <BuildingSection imageAlt="Building immersive digital experiences" />
    </main>
  );
}
