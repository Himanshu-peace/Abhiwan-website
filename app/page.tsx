import HeaderCurve from "@/components/common/headerCurve";
import AboutSection from "@/components/home/about";
import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import Image from "next/image";
import ServicePage from "@/components/home/servicepage";
import { TrustedSection } from "@/components/home/truestedsection";
import CaseStudies from "@/components/home/casestudies";
import BuildHomeSection from "@/components/home/buildhomesection";
import { PortfolioSection } from "@/components/home/portfoliosection";
import BrandsSection from "@/components/home/Homebrandsection";
import SuccessSection from "@/components/home/sucesssection";
import TestimonialsSection from "@/components/programatic_seo/testimonial";
import BuildingSection from "@/components/programatic_seo/building_section";

export default function Home() {
  return (
    <div>
      <HeaderCurve />

      <HomeHeroSection />

      <AboutSection />

      <ServicePage />
      <TrustedSection />

      <CaseStudies />
      <BuildHomeSection />
      <PortfolioSection />
      <BrandsSection />
      <SuccessSection />
      <TestimonialsSection />
      <BuildingSection imageAlt="Building Section" />
    </div>
  );
}
