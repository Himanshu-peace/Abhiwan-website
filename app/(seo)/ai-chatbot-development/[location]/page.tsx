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
  const isDevelopment = process.env.NODE_ENV === "development";

  const baseUrl = isDevelopment
    ? "http://localhost:3000"
    : "https://yourdomain.com";

  const pageUrl = `${baseUrl}/ai-chatbot-development/${location}`;
  const ogImage = "/og/ai-chatbot-development.jpg";

  return {
    title: `Best AI Chatbot Development Services in ${displayName} 2026`,

    description:
      `Enhance customer support and business efficiency with professional AI Chatbot Development Services in ${displayName}.`,

    keywords: [
      `Chatbot Development Services Company in ${displayName}`,
      `Top Chatbot Companies in ${displayName}`,
      `Chatbot Development Services in ${displayName}`,
      `AI Chatbot Development Company in ${displayName}`,
      `AI Chatbot Development Services in ${displayName}`,
      `Chatbot Development Company in ${displayName}`,
      `Custom Chatbot Development in ${displayName}`,
      `Chatbot Development Agency in ${displayName}`,
      `AI Chatbot App Development Services in ${displayName}`,
      `Chatbot Web Development in ${displayName}`,
      `Banking Chatbot Development in ${displayName}`,
      `Best Chatbot Development Company in ${displayName}`,
      `Chatbot App Development in ${displayName}`,
      `Chatbot Application Development Services in ${displayName}`,
      `Ecommerce Chatbot Development in ${displayName}`,
      `Chatbot Software Development in ${displayName}`,
      `Customer Care Bot Development Services in ${displayName}`,
      `Enterprise Chatbot Development Service in ${displayName}`,
      `HR Chatbot Development Services in ${displayName}`,
      `Insurance Chatbot Development in ${displayName}`,
      `Voice Bot Development in ${displayName}`,
    ],

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `Best AI Chatbot Development Services in ${displayName}`,
      description:
        `Build intelligent AI chatbots in ${displayName} to automate customer support, sales, and operations.`,
      url: pageUrl,
      siteName: "Abhiwan Technology",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `AI Chatbot Development Services in ${displayName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `AI Chatbot Development Company in ${displayName}`,
      description:
        `Hire expert AI chatbot developers in ${displayName} for smart, scalable, and secure chatbot solutions.`,
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
        title="Best AI Chatbot Development"
      />

      <BrandsSection logos={logos} />

      <GamesShowcase
        name={displayName}
        slugItem={slugItem}
        title="AI Chatbot Development"
      />

      <IndustriesSection
        name={displayName}
        title="AI Chatbot Development"
      />

      <ChooseUsSection
        title="Best AI Chatbot Development"
        location={displayName}
      />

      <TestimonialsSection
        title="Best AI Chatbot Development"
        location={displayName}
      />

      {/* SEO-CRITICAL */}
      <FaqSection
        location={displayName}
        title="Best AI Chatbot Development"
      />

      <BuildingSection imageAlt="Building intelligent AI chatbot solutions" />
    </main>
  );
}
