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

    const pageUrl = `${baseUrl}/blockchain-development/${location}`;
    const ogImage = "/og/blockchain-development.jpg";

    return {
        title: `Best Blockchain Development Services in ${displayName} 2026`,
        description: `Blockchain Development Services in ${displayName} deliver secure, scalable, and innovative solutions for businesses across industries.`,
        keywords: [
            `Blockchain Development Services in ${displayName}`,
            `Blockchain Development Companies in ${displayName}`,
            `Best Blockchain Development Companies in ${displayName}`,
            `Companies Developing Blockchain in ${displayName}`,
            `Blockchain App Development in ${displayName}`,
            `Blockchain Application Development in ${displayName}`,
            `Top Blockchain Development Companies in ${displayName}`,
            `Blockchain Apps Developer in ${displayName}`,
            `Blockchain and Development in ${displayName}`,
            `Blockchain Dev in ${displayName}`,
            `Dev Blockchain in ${displayName}`,
            `Developing a Blockchain in ${displayName}`,
            `Blockchain Developer in ${displayName}`,
            `Blockchain Development Agency in ${displayName}`,
            `Blockchain Software Development in ${displayName}`,
            `Blockchain Developer Agency in ${displayName}`,
            `Blockchain Development Firm in ${displayName}`,
            `Blockchain Game Developer in ${displayName}`,
            `Blockchain Developer Website in ${displayName}`,
            `Blockchain Game Development Services in ${displayName}`,
            `Fullstack Blockchain Developer in ${displayName}`,
        ],
        alternates: {
            canonical: pageUrl,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `Best Blockchain Development Services in ${displayName}`,
            description: `Blockchain Development Services in ${displayName} deliver secure, scalable, and innovative solutions for businesses across industries.`,
            url: pageUrl,
            siteName: "Abhiwan Technology",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `Blockchain Development Services in ${displayName}`,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `Blockchain Development Services in ${displayName}`,
            description: `Hire expert blockchain developers in ${displayName} for secure, scalable, and innovative solutions.`,
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
                title="Best Blockchain Development"
            />

            <BrandsSection logos={logos} />

            <GamesShowcase
                name={displayName}
                slugItem={slugItem}
                title="Blockchain Development"
            />

            <IndustriesSection name={displayName} title="Blockchain Development" />

            <ChooseUsSection title="Best Blockchain Development" location={displayName} />

            <TestimonialsSection title="Best Blockchain Development" location={displayName} />

            {/* SEO-CRITICAL */}
            <FaqSection location={displayName} title="Best Blockchain Development" />
            <BuildingSection imageAlt="Building secure and scalable blockchain solutions" />
        </main>
    );
}
