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

    const pageUrl = `${baseUrl}/web-development/${location}`;
    const ogImage = "/og/web-development.jpg";

    return {
        title: `Best Web Development Services in ${displayName} 2026`,

        description:
            `Web Development Services in ${displayName} deliver custom, responsive, and SEO-friendly websites to boost business growth and online presence.`,

        keywords: [
            `Website Development Services in ${displayName}`,
            `Dental Website Development in ${displayName}`,
            `eCommerce Portal Development in ${displayName}`,
            `Custom Web Development Company in ${displayName}`,
            `Web Development and SEO Services in ${displayName}`,
            `Dot Net Development Services in ${displayName}`,
            `Top Web App Development Companies in ${displayName}`,
            `Professional Web Development Services in ${displayName}`,
            `eCommerce Website Development Company in ${displayName}`,
            `Laravel Website Development Services in ${displayName}`,
            `Custom Website Development Services in ${displayName}`,
            `Affordable Website Development Services in ${displayName}`,
            `Best Website Development Agency in ${displayName}`,
            `Top Web Development Companies in ${displayName}`,
            `PHP Web Development Services in ${displayName}`,
            `Web Design and Development Services in ${displayName}`,
            `Angular Website Development in ${displayName}`,
            `Static Web Development in ${displayName}`,
        ],

        alternates: {
            canonical: pageUrl,
        },

        robots: {
            index: true,
            follow: true,
        },

        openGraph: {
            title: `Best Web Development Services in ${displayName}`,
            description:
                `Professional Web Development Services in ${displayName} for scalable, secure, and high-performing websites.`,
            url: pageUrl,
            siteName: "Abhiwan Technology",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `Web Development Services in ${displayName}`,
                },
            ],
            locale: "en_US",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: `Web Development Company in ${displayName}`,
            description:
                `Hire expert web developers in ${displayName} for custom and SEO-optimized websites.`,
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
                title="Best Web Development Services"
            />

            <BrandsSection logos={logos} />

            <GamesShowcase
                name={displayName}
                slugItem={slugItem}
                title="Web Development"
            />

            <IndustriesSection
                name={displayName}
                title="Web Development"
            />

            <ChooseUsSection
                title="Best Web Development Services"
                location={displayName}
            />

            <TestimonialsSection
                title="Best Web Development Services"
                location={displayName}
            />

            {/* SEO-CRITICAL */}
            <FaqSection
                location={displayName}
                title="Best Web Development Services"
            />

            <BuildingSection imageAlt="Building high-performance web solutions" />
        </main>
    );
}
