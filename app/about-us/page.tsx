import OurStory from "@/components/about-us/OurStory";
import MissionVision from "@/components/about-us/MissionVision";
import OurValues from "@/components/about-us/OurValues";
import TeamSection from "@/components/about-us/TeamSection";
import Founders from "@/components/about-us/Founders";
// import Leadership from "@/components/about-us/Leadership";
import Success from "@/components/about-us/Success";
import Culture from "@/components/about-us/Culture";

export default function AboutUsPage() {
  return (
    <main className="w-full bg-[#171635] text-white overflow-hidden">
      <OurStory />
      <MissionVision />
      <OurValues />
      <TeamSection />
      <Founders />
      {/* <Leadership /> */}
      <Success />
      <Culture />

    </main>
  );
}
