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

  const pageUrl = `${baseUrl}/mvp-development-services/${location}`;
  const ogImage = "/og/mvp-development-services.jpg";

  return {
    title: `Best MVP Development Services in ${displayName} 2026`,

    description:
      `Build and launch scalable products with expert MVP Development Services in ${displayName}, helping startups validate ideas quickly.`,

    keywords: [
      `MVP Development Services in ${displayName}`,
      `MVP Development for Startups in ${displayName}`,
      `Startup MVP Development in ${displayName}`,
      `MVP Development Companies in ${displayName}`,
      `MVP Development in ${displayName}`,
      `MVP Product Development in ${displayName}`,
      `SaaS MVP Development in ${displayName}`,
      `MVP App Development in ${displayName}`,
      `MVP Application Development in ${displayName}`,
      `MVP Software Development in ${displayName}`,
      `MVP Development Agency in ${displayName}`,
      `Minimum Viable Product Software in ${displayName}`,
      `MVP Development Agencies in ${displayName}`,
      `MVP Development Team in ${displayName}`,
      `Minimum Viable Product Cost in ${displayName}`,
      `MVP Development for Tech Startup in ${displayName}`,
      `MVP Development Startups in ${displayName}`,
      `MVP Product Development Agency in ${displayName}`,
      `MVP Software Development Agency in ${displayName}`,
      `MVP Prototyping in ${displayName}`,
      `Minimum Viable Product Prototype in ${displayName}`,
      `POC Prototype MVP in ${displayName}`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `Best MVP Development Services in ${displayName}`,
      description:
        `Launch your startup faster with scalable MVP Development Services in ${displayName}.`,
      url: pageUrl,
      siteName: "Abhiwan Technology",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `MVP Development Services in ${displayName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `MVP Development Company in ${displayName}`,
      description:
        `Hire expert MVP developers in ${displayName} to validate your startup idea faster.`,
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
        title="Best MVP Development "
      />

      <BrandsSection logos={logos} />

      <GamesShowcase
        name={displayName}
        slugItem={slugItem}
        title="MVP Development "
      />

      <IndustriesSection
        name={displayName}
        title="MVP Development "
      />

      <ChooseUsSection
        title="Best MVP Development "
        location={displayName}
      />

      <TestimonialsSection
        title="MVP Development "
        location={displayName}
      />

      {/* SEO-CRITICAL */}
      <FaqSection
        location={displayName}
        title="MVP Development "
      />

      <BuildingSection imageAlt="Building scalable MVP development solutions" />
    </main>
  );
}
