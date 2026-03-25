"use client"
import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';

export function Internship() {
  return (
    <section className="max-w-7xl mx-auto 2xl:max-w-full 2xl:mx-20 px-6 py-16">
      <div className="bg-gray-200 text-black rounded-xl p-6 md:p-10 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[542px]">
          <Image
            src="/career/02start.webp"
            alt="internship"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="mx-6">
          <h3 className="text-3xl lg:text-5xl font-bold mb-4">Start Your Career with Us</h3>

          <p className="text-[#4B4B4B] font-inter mb-6">
            We believe great careers start with the right opportunities. Abhiwan
            offers internships and hands-on training programs for college
            students who want real-world experience in game development, AI,
            metaverse, design, and software engineering. Work alongside our
            experts, build practical skills, and take your first step into the
            industry with confidence.
          </p>

          <button className="bg-gradient-to-r from-[#7F15DC] to-[#3952FC] text-white px-6 py-3 rounded-xl text-sm">
            Apply for Internship →
          </button>
        </div>
      </div>
    </section>
  );
}


export function Talent() {
  return (
    <section className="max-w-full mt-20 mb-30 px-20 py-16 grid lg:grid-cols-2 gap-10 items-center bg-[linear-gradient(90deg,#060613_0%,#060613_23.5%,#211443_50%,#060613_73.5%,#060613_100%)]">
      <div>
        <h3 className="text-3xl md:text-4xl  font-futura font-bold mb-4">
          We’re always looking for talent
        </h3>

        <p className="text-[#FFFFFF] font-inter mb-6">
          We are always looking for enthusiastic, proactive, and talented people
          who are aligned to our ethos and ways of working. If you are
          interested in working with us, please send a CV to careers@abhiwan.com
          or alternatively fill out our form.
        </p>

        <button className="bg-[radial-gradient(50.91%_97.54%_at_50%_2.46%,#525AFF_0%,#0900FF_100%)] px-6 py-3 rounded-full text-sm">
          Get in Touch 
          <ArrowUpRight className="inline-block h-5 w-5" />
        </button>
      </div>

      <div className="relative w-full h-[300px] md:h-[390px] 2xl:h-[450px]">
        <Image
          src="/career/03talent.webp"
          alt="talent"
          fill
          className="object-cover xl:object-contain rounded-xl"
        />
      </div>
    </section>
  );
}