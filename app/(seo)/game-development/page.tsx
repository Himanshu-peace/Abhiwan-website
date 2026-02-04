import BrandsSection from "@/components/programatic_seo/brans_section";
import IndustriesSection from "@/components/programatic_seo/industries_section";
import HeroSection from "@/components/programatic_seo/HeroSection";
import { GamesShowcase } from "@/components/programatic_seo/game_showcase";
import ChooseUsSection from "@/components/programatic_seo/choose_us";

export default function Page() {
  const logo = [
    "/brand/BajajFinserv.png",
    "/brand/Ogilvy.png",
    "/brand/Jio.png",
    "/brand/Cloud.png",
    "/brand/CocaCola.png",
    "/brand/Phillips.png",
    "/brand/Studds.png",
    "/brand/Stripto.png",
    "/brand/Vaseline.png",
  ];

  return (
    <main>
      <HeroSection title="Game Development" name="Noida" backgroundImage="/usa.jpeg" country="India" />
      <BrandsSection logos={logo} />
      <GamesShowcase name="Noida" slugItem={{ country: "India", slug: "noida", backgroundImage: "/usa.jpeg" }} />
      <IndustriesSection name="Noida" />
      {/* <ChooseUsSection /> */}
    </main>
  );
}