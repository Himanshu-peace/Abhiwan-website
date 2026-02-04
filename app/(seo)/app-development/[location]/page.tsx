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

  const pageUrl = `${baseUrl}/app-development/${location}`;
  const ogImage = "/og/app-development.jpg";

  return {
    title: `Best App Development Services in ${displayName} 2026`,

    description:
      `Get top-notch App Development Services in ${displayName}. Build scalable, secure, and user-friendly mobile apps for every industry.`,

    keywords: [
      `Grocery Delivery App Development Company in ${displayName}`,
      `On Demand App Development Company in ${displayName}`,
      `Telemedicine App Development Company in ${displayName}`,
      `Restaurant App Development Company in ${displayName}`,
      `Custom Mobile App Developers in ${displayName}`,
      `Cloud Based App Development in ${displayName}`,
      `Software and App Development Company in ${displayName}`,
      `OTT App Development Company in ${displayName}`,
      `Astrology App Development Company in ${displayName}`,
      `Cross Platform App Development Company in ${displayName}`,
      `Courier Delivery App Development Company in ${displayName}`,
      `Android and IOS App Development Company in ${displayName}`,
      `Real Estate App Development Company in ${displayName}`,
      `Healthcare App Development Company in ${displayName}`,
      `Logistics App Development Company in ${displayName}`,
      `SaaS Application Development in ${displayName}`,
      `Mobile Application Development Companies in ${displayName}`,
      `IOS App Development Services in ${displayName}`,
      `Top Mobile App Development Companies in ${displayName}`,
      `Educational App Development Services in ${displayName}`,
      `Medical App Development in ${displayName}`,
      `Best App Developers in ${displayName}`,
      `iPhone App Development in ${displayName}`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `Best App Development Services in ${displayName}`,
      description:
        `Hire expert mobile app developers in ${displayName} to build scalable, secure, and high-performance applications.`,
      url: pageUrl,
      siteName: "Abhiwan Technology",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `App Development Services in ${displayName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `App Development Company in ${displayName}`,
      description:
        `Top App Development Company in ${displayName} offering Android, iOS & Cross-Platform solutions.`,
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
        title="Best App Development Services"
      />

      <BrandsSection logos={logos} />

      <GamesShowcase
        name={displayName}
        slugItem={slugItem}
        title="App Development"
      />

      <IndustriesSection
        name={displayName}
        title="App Development"
      />

      <ChooseUsSection
        title="Best App Development"
        location={displayName}
      />

      <TestimonialsSection
        title="Best App Development"
        location={displayName}
      />

      {/* SEO-CRITICAL */}
      <FaqSection
        location={displayName}
        title="Best App Development"
      />

      <BuildingSection imageAlt="Building scalable mobile applications" />
    </main>
  );
}
