import Image from "next/image"
import { testimonialsGame, testimonialsMetaverse, testimonialsVR, testimonialsBlockchain, testimonialsAppDevelopment, testimonialsAiChatbot, testimonialsWeb, testimonials3DArtServices, mvpTestimonials, digitalTwinTestimonials } from "@/constants/testimonial"
import TestimonialSlider from "./TestimonialSlider"

export default function TestimonialsSection({ title = "", location = "" }: { title?: string, location?: string }) {
    const lowerTitle = title.toLowerCase();
    let testimonials = testimonialsGame;
    let description = "Real stories from brands who partnered with our IT development company and experienced excellence through custom software development services.";

    if (lowerTitle.includes("metaverse")) {
        testimonials = testimonialsMetaverse;
        description = `Working with Abhiwan for Metaverse Development Services in ${location} was an excellent experience. Their team delivered a scalable and immersive virtual platform that exceeded our expectations. From planning to execution, the expertise of their Metaverse Developers in ${location} was evident in every stage of development.`;
    } else if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
        testimonials = testimonials3DArtServices;
        description = `Abhiwan’s 3D Art Services in ${location} transformed our gaming project completely. Their team created stunning characters and environments that exceeded our expectations. The collaboration was seamless, and their expertise helped us launch a visually engaging game on time.`;
    } else if (lowerTitle.includes("vr") || lowerTitle.includes("ar")) {
        testimonials = testimonialsVR;
        description = `Abhiwan’s AR VR Development Services in ${location} completely transformed our business. Their team created an immersive VR App Development experience that impressed our clients and boosted engagement. Highly recommend their expertise!`;
    } else if (lowerTitle.includes("blockchain")) {
        testimonials = testimonialsBlockchain;
        description = `Partnering with Abhiwan for Blockchain Development Services in ${location} was a game-changer for our business. Their team delivered secure, scalable blockchain solutions that transformed our operations and enhanced trust. From smart contracts to decentralized applications, their expertise in ${location} proved invaluable for our digital transformation journey.`;
    } else if (lowerTitle.includes("app")) {
        testimonials = testimonialsAppDevelopment;
        description = `Working with Abhiwan for App Development Services in ${location} was an exceptional experience. Their team delivered high-quality mobile applications that perfectly matched our requirements. From initial concept to final deployment, the expertise of their mobile app developers in ${location} was evident throughout the development process.`;
    }
    else if (lowerTitle.includes("web")) {
        testimonials = testimonialsWeb;
        description = `Abhiwan’s Web Development Services in ${location} transformed our online presence. Their team created a user-friendly, responsive website that boosted engagement and conversions. Highly recommend their expertise in web development!`;
    }

    else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
        testimonials = testimonialsAiChatbot;
        description = `Abhiwan’s AI Chatbot Development Services in ${location} transformed our customer support completely. Their team built a smart, interactive chatbot that works 24/7 and improved engagement significantly. We highly recommend their services for any business looking to enhance digital interactions.
`;
    }
    else if(lowerTitle.includes("mvp")){
        testimonials = mvpTestimonials;
        description = `Abhiwan’s MVP Development Services in ${location} helped us bring our startup idea to life. Their team delivered a functional MVP quickly, allowing us to gather user feedback and refine the product. Working with Abhiwan was seamless, and the results exceeded our expectations.`;
    }
    else if(lowerTitle.includes("digital twin")){
        testimonials = digitalTwinTestimonials;
        description = `Abhiwan’s Digital Twin Development Services in ${location} transformed our operations with Industrial Digital Twin Development, enabling real-time machinery monitoring, predictive maintenance, and optimized workflows. Businesses in ${location} looking for advanced digital twin solutions will find Abhiwan’s expertise unmatched.`;
    }

    return (
        <section className="relative overflow-hidden bg-[#070B2B] text-white py-20">

            {/* BACKGROUND */}
            <div className="absolute inset-0 opacity-30">
                <Image src="/client.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
                        WHAT OUR CLIENTS SAY?
                    </h2>
                    <p className="text-gray-300 max-w-xl">
                        {description}
                    </p>
                </div>

                {/* TESTIMONIAL CARD SLIDER */}
                <TestimonialSlider testimonials={testimonials} location={location} />
            </div>
        </section>
    )
}
