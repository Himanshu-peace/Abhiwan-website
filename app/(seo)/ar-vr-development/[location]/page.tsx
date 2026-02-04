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

    const pageUrl = `${baseUrl}/ar-vr-development/${location}`;
    const ogImage = "/og/ar-vr-development.jpg";

    return {
        title: `Best AR and VR Development Services in ${displayName} 2026`,

        description:
            `AR and VR Development Services in ${displayName} deliver immersive, interactive solutions that help businesses enhance engagement, training, and digital experiences.`,

        keywords: [
            `VR Software Development Companies in ${displayName}`,
            `AR VR App Development Services in ${displayName}`,
            `VR Development Service in ${displayName}`,
            `AR VR Development Services in ${displayName}`,
            `Virtual Reality Development Services in ${displayName}`,
            `Augmented Reality Developer in ${displayName}`,
            `AR VR App Development in ${displayName}`,
            `VR Software Development in ${displayName}`,
            `Augmented Reality Development Services in ${displayName}`,
            `VR App Development in ${displayName}`,
            `Virtual Reality App Development in ${displayName}`,
            `Mixed Reality Development Companies in ${displayName}`,
            `AR VR Development in ${displayName}`,
            `VR and AR Development in ${displayName}`,
        ],

        alternates: {
            canonical: pageUrl,
        },

        robots: {
            index: true,
            follow: true,
        },

        openGraph: {
            title: `Best AR and VR Development Services in ${displayName}`,
            description:
                `AR and VR Development Services in ${displayName} deliver immersive, interactive solutions for business growth.`,
            url: pageUrl,
            siteName: "Abhiwan Technology",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `AR & VR Development Services in ${displayName}`,
                },
            ],
            locale: "en_US",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: `AR & VR Development Company in ${displayName}`,
            description:
                `Hire expert AR & VR developers in ${displayName} for immersive and interactive digital solutions.`,
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
                title="Best AR and VR Development"
            />

            <BrandsSection logos={logos} />

            <GamesShowcase
                name={displayName}
                slugItem={slugItem}
                title="AR VR Development"
            />

            <IndustriesSection name={displayName} title="AR VR Development" />

            <ChooseUsSection title="Best AR and VR Development" location={displayName} />

            <TestimonialsSection title="Best AR and VR Development" location={displayName} />

            {/* SEO-CRITICAL */}
            <FaqSection location={displayName} title="Best AR and VR Development" />
            <BuildingSection imageAlt="Building immersive digital experiences" />
        </main>
    );
}
