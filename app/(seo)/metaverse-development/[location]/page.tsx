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
    params: Promise<{ location: string }>
}): Promise<Metadata> {
    const { location } = await params

    const slugItem = countriesData.find(
        (item: any) => item.slug === location
    )

    if (!slugItem) {
        return {
            title: "Page Not Found",
            description: "The requested page could not be found.",
            robots: "noindex, nofollow",
        }
    }

    const displayName = formatCountryName(slugItem.slug)

    const isDevelopment = process.env.NODE_ENV === "development"
    const baseUrl = isDevelopment
        ? "http://localhost:3000"
        : "https://yourdomain.com"

    const pageUrl = `${baseUrl}/metaverse-development/${location}`
    const ogImage = "/og/metaverse-development.jpg"

    return {
        title: `Best Metaverse Development Services in ${displayName} 2026`,

        description:
            `Explore the best Metaverse Development Services in ${displayName} and get your personalized development done at the best price with Abhiwan.`,

        keywords: [
            `Metaverse Development Services in ${displayName}`,
            `Metaverse Development Company in ${displayName}`,
            `Metaverse Developers in ${displayName}`,
            `Metaverse Development Cost in ${displayName}`,
            `Development of Metaverse in ${displayName}`,
            `Building Metaverse Apps in ${displayName}`,
            `Metaverse Real Estate Development Company in ${displayName}`,
            `Metaverse App Development Services in ${displayName}`,
            `Metaverse Application Development Services in ${displayName}`,
            `Metaverse Education Platform Development in ${displayName}`,
            `Metaverse Fashion Development in ${displayName}`,
            `Digital Twin Development in ${displayName}`,
        ],

        alternates: {
            canonical: pageUrl,
        },

        robots: {
            index: true,
            follow: true,
        },

        openGraph: {
            title: `Best Metaverse Development Services in ${displayName}`,
            description:
                `Explore the best Metaverse Development Services in ${displayName} and build immersive digital worlds with Abhiwan.`,
            url: pageUrl,
            siteName: "Abhiwan Technology",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `Metaverse Development Services in ${displayName}`,
                },
            ],
            locale: "en_US",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: `Metaverse Development Company in ${displayName}`,
            description:
                `Hire expert Metaverse developers in ${displayName} to build immersive virtual worlds and digital experiences.`,
            images: [ogImage],
        },
    }
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
                backgroundImage={slugItem.backgroundImage} country={slugItem.country}
                title="Best Metaverse Development"
            />

            <BrandsSection logos={logos} />

            <GamesShowcase
                name={displayName}
                slugItem={slugItem}
                title="Metaverse Development"
            />

            <IndustriesSection name={displayName} title="Metaverse Development" />

            <ChooseUsSection title="Best Metaverse Development" location={displayName} />

            <TestimonialsSection title="Best Metaverse Development" location={displayName} />

            {/* SEO-CRITICAL */}
            <FaqSection location={displayName} title="Best Metaverse Development" />
            <BuildingSection imageAlt="Building immersive digital experiences" />
        </main>
    );
}
