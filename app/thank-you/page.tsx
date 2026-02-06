`use client`
import React from "react";

import Hero from "../../components/thank-you/hero";
import Blogs from "../../components/thank-you/blogs";
import PortfolioSection from "../../components/thank-you/portfolioSection1";

export default function Thankyou() {
    return (
        <div id="thank-you" className="bg-[#ffffff]">
            <Hero />
            <PortfolioSection />
            <Blogs />
        </div>
    );
}