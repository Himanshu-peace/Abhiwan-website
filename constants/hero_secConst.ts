// export const CERTIFICATIONS = [
//     {
//         name: "Most Reviewed AR",
//         image: "r4fdc55dh4t3345/most_reviewed_ar_ng6cf1trux.webp",
//     },
//     {
//         name: "ISO",
//         image: "k2pu5g1v6kt29dp/iso_3ceh734tgt.webp",
//     },
//     {
//         name: "Kyoorius",
//         image: "n92j3jw4c0k6kgp/kyoorius_creative_awards_cm74uus1p0.webp",
//     },
//     {
//         name: "Top AR",
//         image: "ubymt4401t2x6uh/top_ar_nmctvbb6o4.webp",
//     },
//     {
//         name: "Top Custom Software",
//         image: "1nwc9040bmrcm5f/top_custom_software_dom8efqulp.webp",
//     },
//     {
//         name: "Top Metaverse Dev",
//         image: "vvi23axmyk484m8/top_metaverse_dev_company_hwd1pd63h7.webp",
//     },
//     {
//         name: "Top Mobile App Dev",
//         image: "is983y0keqda745/top_mobile_app_dev_company_jyh5lkwegg.webp",
//     },
// ];
export const CERTIFICATIONS = [

    {
        name: "Kyoorius Creative Awards",
        image: "n92j3jw4c0k6kgp/kyoorius_creative_awards_7m1jhrk5q7.webp",
    },
    {
        name: "Most Reviewed Award",
        image: "r4fdc55dh4t3345/most_reviewed_ar_f59bnwxdut.webp",
    },
    {
        name: "ISO",
        image: "k2pu5g1v6kt29dp/iso_3ceh734tgt.webp",
    },
    {
        name: "Top Custom Software",
        image: "1nwc9040bmrcm5f/top_custom_software_pxwsf1l7qx.webp",
    },

    {
        name: "Top Metaverse Dev",
        image: "vvi23axmyk484m8/top_metaverse_dev_company_d40slptbcq.webp",
    },

    {
        name: "Top Mobile App Dev",
        image: "is983y0keqda745/top_mpbile_app_dev_company_dznhnfmsn7.webp",
    },
    {
        name: "Top VR & AR Company",
        image: "ubymt4401t2x6uh/top_vr_ar_company_ext0jbwg84.webp",
    },
    {
        name: "Top Web & Software Dev",
        image: "e4yteui23ra1k3a/top_web_software_i3dj7nyswp.webp",
    },
    {
        name: "Most Reviewed User Experience",
        image: "7a7xhc3p1wk91i8/most_reviewed_user_experience_147tfe20ei.webp",
    },
];


const formatCountryName = (slug: string) => {
    if (!slug) return "";
    const formatted = slug.replace(/-/g, ' ');
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const BENEFITS_CONFIG: Record<string, (city: string) => string[]> = {
    game: (city) => [
        `Access Trusted Game Development Services in ${city} for high-quality results.`,
        "Get full support from concept to launch.",
        "Use advanced tools like Unity and Unreal for smooth performance.",
        `Choose flexible pricing that fits your Budget in ${city}.`,
        "Enjoy Fast Delivery and Clear Communication throughout the project.",
    ],
    vr: (city) => [
        `Create immersive, high-engagement experiences with AR VR Development Services in ${city}.`,
        "End-to-end AR, VR, and MR solutions customized to your business goals.",
        "Custom AR & VR apps built for performance, scale, and ROI across industries.",
        "Powered by advanced tech like Unity, Unreal, ARCore, and ARKit.",
        `${city}-based experts delivering global-quality immersive solutions.`,
        `Experienced AR & VR specialists in ${city} ensuring quality & speedy execution.`,
    ],
    web: (city) => [
        `Scalable, high-performance web development services in ${city} built for long-term business growth.`,
        `Custom website solutions designed to meet diverse business needs across ${city}.`,
        `SEO-friendly web development to improve online visibility and search rankings in ${city}.`,
        "Secure, responsive, and conversion-focused websites for businesses in Kolkata.",
        "Cost-effective web development services in Kolkata with reliable maintenance and support.",

    ],
    app: (city) => [
        `Delivering scalable and user-focused App Development Services in ${city} tailored for startups, enterprises, and growing businesses.`,
        `Experienced Custom Mobile App Developers in ${city} building secure Android, iOS, and cross-platform applications.`,
        `End-to-end solutions from ideation to deployment by a trusted Software and App Development Company in ${city}.`,
        `Industry-specific apps including healthcare, grocery, restaurant, logistics, and on-demand platforms.`,
        `Future-ready apps powered by cloud, AI integrations, and modern frameworks for long-term performance and growth.`,

    ],
    metaverse: (city) => [
        `Design and develop scalable virtual environments with professional Metaverse Development Services in ${city}.`,
        "Complete metaverse solutions covering strategy, design, development, and deployment.",
        "Customized metaverse applications aligned with measurable business objectives.",
        "Next-gen immersive frameworks for seamless and scalable virtual worlds.",
        `Skilled metaverse specialists in ${city} delivering high performance and maximum ROI.`,
    ],
    blockchain: (city) => [
        `End-to-end Blockchain Development Services in ${city} for secure, scalable solutions.`,
        "Expert blockchain developers delivering high-performance decentralized applications.",
        "Custom blockchain apps designed to solve real business challenges.",
        "Advanced blockchain software built for speed, security, and transparency.",
        `Trusted blockchain development agency in ${city} focused on ROI and innovation.`,
    ],
    "ai-chatbot": (city) => [
        "24/7 intelligent customer support with AI-powered chatbots development.",
        `Custom Chatbot Development in ${city} for eCommerce, banking, HR, and enterprises.`,
        "Seamless multi-platform integration across web, mobile apps, and voice bots.",
        `Cost-efficient automation to reduce operational expenses and streamline workflows in ${city}.`,
        "Advanced AI and analytics to boost engagement, lead generation, and customer insights.",

    ],
    "3d-art": (city) => [
        `Expert 3D Art Development in ${city}, delivering high-quality visuals for games, films, and digital projects.`,
        `Skilled 3D Rendering Artists in ${city} are creating detailed and realistic 3D rendering art.`,
        `Cost-effective solutions from a trusted 3D Art Outsourcing Studio in ${city} without compromising quality.`,
        `Scalable 3D Game Art Outsourcing in ${city} tailored for startups, studios, and enterprises.`,
        `Reliable project delivery by an experienced 3D Art Outsourcing Company in ${city} with consistent creative standards.`,

    ],
    mvp: (city) => [
        `Build and launch MVP Development Services in ${city} to validate ideas quickly and efficiently.`,
        `Expert Startup MVP Development in ${city} tailored for scalable and robust products.`,
        `Cost-effective MVP Product Development in ${city} provides solutions to optimise development budgets.`,
        `Skilled MVP Development Team in ${city} delivering end-to-end software and app solutions.`,
        `Full support from prototyping to launch, ensuring your MVP aligns with business objectives in ${city}.`,
    ],

    "digital-twin": (city) => [
        `Enable smarter decision-making with Digital Twin Technology Development in ${city} by simulating real-world systems for accurate insights and performance optimization.`,
        `Reduce operational risks and downtime through Digital Twin for Predictive Maintenance in ${city}, helping businesses anticipate issues before they occur.`,
        `Improve product lifecycle management using Product Digital Twin Development in ${city}, from design validation to real-time performance tracking.`,
        `Accelerate industrial efficiency with Industrial Digital Twin Development in ${city}, ensuring better monitoring, optimization, and scalability of operations.`,
        `Drive innovation and digital transformation by leveraging advanced 3D Digital Twin Development in ${city}, tailored to industry-specific needs.`,
    ]
    // Add more categories here as needed (8+ categories)
};

export const getBenefits = (name: string, title: string = ""): string[] => {
    const cityName = formatCountryName(name) || "Noida";
    const lowerTitle = title.toLowerCase();

    // Determine the category key based on title
    let category = "game"; // Default
    if (
        lowerTitle.includes("3d art") ||
        lowerTitle.includes("3d-art") ||
        lowerTitle.includes("3d-art-services")
    ) {
        category = "3d-art";
    }
    else if (lowerTitle.includes("vr") || lowerTitle.includes("ar")) category = "vr";
    else if (lowerTitle.includes("web")) category = "web";
    else if (lowerTitle.includes("app")) category = "app";
    else if (lowerTitle.includes("metaverse")) category = "metaverse";
    else if (lowerTitle.includes("blockchain")) category = "blockchain";
    else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) category = "ai-chatbot";
    else if (lowerTitle.includes("mvp")) category = "mvp";
    else if (lowerTitle.includes("digital twin")) category = "digital-twin";
    const benefitsFn = BENEFITS_CONFIG[category] || BENEFITS_CONFIG.game;
    return benefitsFn(cityName);
};



export const IMAGES_SLIDER = [
    "7v7m0f8e7c8294l/coca_cola_face_swap_68mfzmvzvv.webp",
    "ox111n81nvzs83d/dp_world_pu8idschtg.webp",
    // "p447rh3f69x777i/form_bg_qypvtf69bl.webp",
    "8u3j9188u0q38c7/imns_w82ch9bgzi.webp",
    "m50wqw8h6jb9xdy/thumsup_ywk2lv0f27.webp",
    "0vm0bz09gkloir7/thumsup_biryani_hunt_x9f5t49r32.webp",
    "6l14gm84e19a130/vaseline_amz94ca3bv.webp",
    "31w20479dntt0i9/ani_pr_n4la18isi6.webp"
]