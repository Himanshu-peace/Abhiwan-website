export interface IndustryCard {
    id: number
    title: string
    description: string
    backgroundColor: string
    imagePosition: "left" | "right"
    imageUrl: string
}

const COLORS = ["bg-pink-200", "bg-green-100", "bg-purple-100", "bg-yellow-100", "bg-blue-100", "bg-cyan-100"];

export const GAME_INDUSTRIES = (cityName: string): IndustryCard[] => {
    const rawData = [
        {
            description:
                `The FMCG sector in ${cityName} is thriving due to its strong manufacturing base, fast distribution networks, and access to a large urban consumer market. As competition rises, brands increasingly rely on interactive digital tools to engage customers. Game development in ${cityName} plays a key role here, helping FMCG companies create advergames, loyalty games, and interactive campaigns that boost user engagement, brand recall, and customer retention in a highly competitive market.`,
            title: "FMCG",
            role: "Fast-Moving Consumer Goods",
            image: "45o84t34xi4892s/game_developement_fmcg_jlp0ccbfnc.webp",
        },
        {
            description:
                `The healthcare sector in ${cityName} is expanding rapidly with advanced hospitals, diagnostics, and a growing focus on digital health services. As patient education and engagement become more important, game development offers powerful solutions. Healthcare games in ${cityName} help simplify complex medical information, support therapy, improve awareness, and make learning interactive.`,
            title: "Healthcare",
            role: "Healthcare Industry",
            image: "9k2q6977o0ucap3/game_developement_healthcare_14ps1wkj7k.webp",
        },
        {
            description:
                `The finance sector in ${cityName} is booming with major banks, fintech companies, and digital payment startups operating in the city. As financial services become more tech-driven, game development adds value through gamified learning, reward-based saving apps, and interactive financial education tools.`,
            title: "Finance",
            role: "Banking & Fintech",
            image: "o3d6k2wmvpi5h96/game_developement_finance_5pydrrmv0n.webp",
        },
        {
            description:
                `The insurance sector in ${cityName} is growing quickly with major companies, digital insurers, and support services operating in the city. As customers look for better understanding of policies and benefits, game development helps bridge the gap through gamified learning and risk-simulation experiences.`,
            title: "Insurance",
            role: "Insurance Industry",
            image: "2d3yx2rpu25167k/game_developement_insurance_2zjcpupuvz.webp",
        },
        {
            description:
                `The education sector in ${cityName} is expanding strongly with schools, universities, and edtech companies shaping a modern learning environment. Game development plays a major role by creating interactive educational games, virtual classrooms, and skill-building simulations that improve engagement and retention.`,
            title: "Education",
            role: "Education & EdTech",
            image: "lju4hhlt706k7gj/game_developement_info_technology_cvpk8hon7q.webp",
        },
        {
            description:
                `The Information Technology sector in ${cityName} is one of the city’s strongest pillars, with top tech companies, startups, and innovation hubs driving rapid digital growth. Game development supports IT firms through simulations, training games, AR/VR solutions, and interactive applications.`,
            title: "Information Technology",
            role: "IT & Software Services",
            image: "lju4hhlt706k7gj/game_developement_info_technology_cvpk8hon7q.webp",
        },
        {
            description:
                "The real estate sector in Noida is booming with rapid infrastructure growth, new commercial hubs, and modern residential projects shaping the city’s skyline. As buyers seek more immersive ways to explore properties, game development becomes a powerful tool. With AR/VR walkthroughs, 3D simulations, and interactive visualizations, developers can showcase projects more effectively, enhancing customer experience and decision-making in Noida’s fast-growing real estate market.",
            title: "Real Estate",
            role: "Real Estate",
            image: "/421o9b9mc73pq1h/realstate_07lqveeaof.webp",
        },
        {
            description:
                "The hospitality sector in Noida is growing steadily with new hotels, restaurants, and service brands catering to both business and leisure visitors. As guest expectations rise, game development adds value through interactive training modules, gamified loyalty programs, and immersive AR/VR experiences. These digital tools enhance staff efficiency, boost customer engagement, and elevate overall service quality across Noida’s expanding hospitality industry.",
            title: "Hospitality",
            role: "Hospitality",
            image: "/sta5ncb69txe02b/hospitality_c82e9uwclv.webp",
        },
        {
            description:
                "The automobile sector in Noida is thriving with manufacturing units, R&D centres, and a strong ecosystem of auto-tech companies. As brands push for innovation and better customer engagement, game development offers powerful support. From driving simulators to AR/VR vehicle demos and gamified training tools, it helps enhance learning, safety, and customer experience across Noida’s expanding automobile industry.",
            title: "Automobile",
            role: "Automobile",
            image: "/y842or2vc354145/automobile_gq9mekv3g6.webp",
        },
        {
            description:
                "The aviation sector in Noida is gaining momentum with aviation training institutes, tech support companies, and proximity to major airports driving its growth. As safety, training, and passenger engagement become more digital, game development plays a vital role. Flight simulators, VR training modules, and interactive learning tools help enhance skills, improve efficiency, and support advanced training across Noida’s evolving aviation ecosystem.",
            title: "Aviation",
            role: "Aviation",
            image: "/y5i0nbh12da32i3/aviation_i1wr9259vh.webp",
        },
        {
            description:
                "The media and entertainment sector in Noida is thriving with film studios, digital content creators, and broadcasting companies shaping the city’s creative landscape. As audiences demand interactive and immersive experiences, game development becomes crucial. From gamified content, AR/VR experiences, to mobile games, it helps engage viewers, boost brand presence, and create innovative storytelling opportunities across Noida’s dynamic media and entertainment industry.",
            title: "Media and Entertainment",
            role: "Media and Entertainment",
            image: "/v52rc65e73753w2/medai_and_entertainment_it222lbx9s.webp",
        },
        {
            description:
                "The fashion and lifestyle sector in Noida is growing rapidly with emerging brands, retail hubs, and e-commerce platforms shaping consumer trends. Game development plays a key role by offering virtual try-ons, fashion simulation games, and interactive marketing campaigns. These tools enhance customer engagement, drive brand awareness, and provide immersive experiences that connect fashion and lifestyle brands with audiences across Noida.",
            title: "Fashion and Lifestyle",
            role: "Fashion and Lifestyle",
            image: "/6fbez0lxevk920u/fashion_and_lifestyle_79gxp764b2.webp",
        },
    ];

    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image,
    }));
};

const VR_AR_INDUSTRIES = (cityName: string): IndustryCard[] => {
    const rawData = [
        {
            title: "Augmented Reality (AR) Development",
            description: `Augmented Reality (AR) Development is important in ${cityName} as it helps businesses deliver interactive and real-world digital experiences in a fast-moving urban environment. For people living in ${cityName}, AR improves daily life through virtual product trials, interactive education, medical visualizations, and real estate previews without physical visits. With high smartphone usage and strong digital adoption across retail, healthcare, education, and real estate, AR solutions offer convenience, better engagement, and smarter decision-making for both businesses and users.`,
        },
        {
            title: "Virtual Reality (VR) Development",
            description: `Virtual Reality (VR) Development is important in ${cityName} as it enables fully immersive digital experiences that help businesses and individuals overcome space, time, and infrastructure limitations. For people living in ${cityName}, VR offers realistic training, virtual property tours, skill-based learning, and entertainment without the need for physical presence, saving time and reducing travel. With growing demand across education, real estate, healthcare, and enterprise training, VR solutions support smarter learning, better visualization, and efficient decision-making in a busy urban lifestyle.`,
        },
        {
            title: "Mixed Reality (MR) Development",
            description: `Mixed Reality (MR) Development is important in ${cityName} as it combines the benefits of both augmented and virtual reality to create highly interactive and intelligent digital environments. For people living in ${cityName}, MR enables advanced training, real-time data visualization, collaborative workspaces, and better product interaction without physical limitations. With increasing adoption in industries like healthcare, manufacturing, education, and enterprise solutions, MR helps improve accuracy, productivity, and learning outcomes, making it highly valuable for ${cityName}’s fast-evolving and technology-driven ecosystem.`,
        },
        {
            title: "Extended Reality (XR) Solutions",
            description: `Extended Reality (XR) Solutions are important in ${cityName} as they bring together AR, VR, and MR technologies to deliver unified and immersive digital experiences. For people living in ${cityName}, XR enables smarter learning, realistic training, virtual collaboration, and enhanced visualization across industries without physical constraints. With rapid digital adoption, a growing tech workforce, and strong demand from education, healthcare, real estate, and enterprises, XR solutions help improve efficiency, accessibility, and engagement in ${cityName}’s dynamic urban environment.`,
        },
        {
            title: "AR VR App Development",
            description: `AR VR App Development is important in ${cityName} as it allows businesses to deliver immersive experiences directly through mobile devices and headsets, making advanced technology easily accessible. For people living in ${cityName}, AR VR apps support interactive learning, virtual shopping, remote training, and real estate exploration without the need for physical presence. With high smartphone usage and a digitally active population, AR VR app solutions help improve convenience, engagement, and decision-making across multiple industries in the city.`,
        },
        {
            title: "WebAR & WebVR Development",
            description: `WebAR & WebVR Development is important in ${cityName} as it enables immersive AR and VR experiences directly through web browsers without the need for app downloads. For people living in ${cityName}, this means quick access to virtual product demos, interactive marketing, online learning, and virtual tours using any device. With high internet usage and a mobile-first audience, WebAR and WebVR solutions offer convenience, faster engagement, and wider reach for businesses targeting users across ${cityName}.`,
        },
        {
            title: "AR Filters & Interactive Camera Effects",
            description: `AR Filters & Interactive Camera Effects are important in ${cityName} as they help brands and creators engage users through fun, shareable, and visually rich experiences on social media platforms. For people living in ${cityName}, these features enhance self-expression, entertainment, and online interaction while enabling businesses to connect with audiences in a more personal way. With high social media usage and a youth-driven digital culture, AR filters increase engagement, brand visibility, and audience participation across the city.`,
        },
        {
            title: "AR-Based Mobile Applications",
            description: `AR-Based Mobile Applications are important in ${cityName} as they bring immersive digital experiences directly to smartphones, making advanced technology easily accessible to a wide audience. For people living in ${cityName}, these apps enhance shopping, education, navigation, and real estate exploration by providing real-time visual information. With high mobile usage and a tech-savvy population, AR-based mobile solutions improve convenience, engagement, and informed decision-making across everyday activities in the city.`,
        },
        {
            title: "VR Training & Simulation",
            description: `VR Training & Simulation is important in ${cityName} as it provides realistic, risk-free learning environments for skill development and professional training. For people living in ${cityName}, VR-based simulations help improve learning outcomes in sectors like healthcare, aviation, education, and corporate training without the need for physical setups. In a city with growing industries and high competition, VR training enables faster learning, better retention, and safer practice, making it a valuable tool for workforce development.`,
        },
        {
            title: "360° Virtual Tours",
            description: `360° Virtual Tours are important in ${cityName} as they allow users to explore locations, properties, and venues remotely with a realistic and immersive view. For people living in ${cityName}, virtual tours save time and reduce travel by enabling property viewing, hotel exploration, and campus visits from anywhere. In a busy city with heavy traffic and limited time, 360° virtual tours improve convenience, decision-making, and accessibility across real estate, hospitality, education, and retail sectors.`,
        },
        {
            title: "AR VR Game Development",
            description: `AR VR Game Development is important in ${cityName} as it supports the growing demand for immersive entertainment and interactive digital experiences. For people living in ${cityName}, AR and VR games offer engaging, social, and innovative ways to experience gaming beyond traditional screens. With a large youth population, increasing access to gaming devices, and rising interest in immersive content, AR VR game development creates new opportunities for entertainment, creativity, and digital engagement in the city.`,
        },
        {
            title: "Enterprise AR VR Solutions",
            description: `Enterprise AR VR Solutions are important in ${cityName} as they help organizations improve training, collaboration, and operational efficiency through immersive technologies. For people living in ${cityName}, these solutions enable better workplace learning, remote collaboration, and real-time problem solving across industries. With many corporate offices, IT firms, and large enterprises in the city, AR VR solutions support productivity, reduce costs, and help businesses adapt to modern digital workflows.`,
        },
        {
            title: "Industrial AR Solutions",
            description: `Industrial AR Solutions are important in ${cityName} as they help industries enhance productivity, safety, and accuracy through real-time digital guidance. For people working in ${cityName}’s industrial and manufacturing sectors, AR solutions assist with equipment maintenance, training, quality checks, and remote support, reducing errors and downtime. With growing industrial activity around ${cityName} NCR, industrial AR applications improve operational efficiency, workforce skill development, and safety standards across factories and infrastructure projects.`,
        },
        {
            title: "Healthcare AR VR Solutions",
            description: `Healthcare AR VR Solutions are important in ${cityName} as they transform patient care, medical training, and surgical planning through immersive technologies. For people living in ${cityName}, AR and VR enable better diagnosis, interactive medical education, virtual consultations, and realistic surgical simulations, improving treatment outcomes. With a growing healthcare sector and tech-savvy patients, these solutions enhance efficiency, accuracy, and accessibility, making advanced medical care more effective and convenient for both practitioners and patients in the city.`,
        },
        {
            title: "Education & eLearning AR VR",
            description: `Education & eLearning AR VR Solutions are important in ${cityName} as they make learning more interactive, engaging, and effective through immersive technologies. For students and educators in ${cityName}, AR and VR enable virtual classrooms, interactive lessons, 3D simulations, and skill-based training, enhancing understanding and retention. With a growing demand for digital education and tech-driven learning, these solutions improve accessibility, engagement, and practical learning outcomes, helping learners in ${cityName} gain a modern, hands-on educational experience.`,
        },
        {
            title: "Retail & E-commerce AR Solutions",
            description: `Retail & E-commerce AR Solutions are important in ${cityName} as they enhance shopping experiences by allowing customers to visualize products virtually before purchase. For people living in ${cityName}, AR enables virtual try-ons, 3D product views, and interactive store experiences from home or on-the-go, reducing uncertainty and improving satisfaction. With a booming e-commerce market and tech-savvy shoppers, these solutions increase engagement, boost sales, and help businesses in ${cityName} offer innovative, customer-friendly shopping experiences.`,
        },
        {
            title: "Real Estate AR VR Experiences",
            description: `Real Estate AR VR Experiences are important in ${cityName} as they allow potential buyers and investors to explore properties virtually, saving time and effort in a busy city. For people living in ${cityName}, AR and VR enable interactive 3D property tours, interior visualization, and neighborhood previews without physical visits. With high demand in the real estate sector and limited time for site visits, these solutions improve decision-making, enhance engagement, and make property buying and renting more convenient and efficient.`,
        },
        {
            title: "Product Visualization & Prototyping",
            description: `Product Visualization & Prototyping is important in ${cityName} as it allows businesses to showcase and test products digitally before manufacturing or launch. For people and companies in ${cityName}, AR and VR enable interactive 3D models, virtual prototypes, and realistic simulations, reducing costs, errors, and development time. With growing startups, manufacturing units, and tech-driven businesses in the city, these solutions enhance design accuracy, improve collaboration, and speed up product development cycles effectively.`,
        },
        {
            title: "Location-Based AR Experience",
            description: `Location-Based AR Experiences are important in ${cityName} as they deliver interactive, context-aware digital content tied to real-world locations. For people living in ${cityName}, these experiences enhance navigation, tourism, retail promotions, and cultural exploration by overlaying useful or entertaining information on physical surroundings. With the city’s busy streets, historical sites, and growing tech adoption, location-based AR solutions make daily life, travel, and shopping more engaging, informative, and convenient for residents and visitors alike.`,
        },
        {
            title: "AR Property Viewing",
            description: `AR Property Viewing is important in ${cityName} as it allows potential buyers and renters to explore properties virtually, saving time in a busy city. For people living in ${cityName}, AR property viewing offers interactive 3D tours, interior visualization, and real-time modifications without visiting multiple sites physically. With high real estate demand and limited time for property visits, this technology improves decision-making, enhances user engagement, and provides a convenient, immersive, and efficient property search experience.`,
        },
        {
            title: "Interior VR Tours",
            description: `Interior VR Tours are important in ${cityName} as they allow users to experience and explore home or office interiors virtually before making decisions. For people living in ${cityName}, these tours provide realistic 3D walkthroughs, design previews, and layout customization without visiting multiple locations physically. With a busy lifestyle and high demand in real estate and interior design, Interior VR Tours enhance convenience, improve decision-making, and offer an immersive, interactive, and time-saving experience for residents and businesses.`,
        },
    ];

    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};

const METAVERSE_INDUSTRIES = (cityName: string): IndustryCard[] => {
    const rawData = [
        {
            "title": "Metaverse Education Platform Development",
            "description": "Metaverse Education Platform Development in {{city}} can transform learning by offering immersive virtual classrooms, training simulations, and skill-building modules. Students and professionals in {{city}} can attend interactive lessons, collaborate remotely, and gain practical experience without physical limitations. Through Metaverse Development Services in {{city}}, institutions can create engaging, scalable, and future-ready platforms. Skilled Metaverse Developers in {{city}} ensure seamless, intuitive, and effective digital learning solutions for the city's tech-savvy learners.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            "title": "Metaverse Real Estate Development",
            "description": "Metaverse Real Estate Development in {{city}} allows developers and investors to showcase virtual properties, interactive layouts, and immersive property tours. Potential buyers can explore spaces virtually, improving decision-making and reducing time spent on physical visits. With Metaverse Development Services in {{city}}, real estate companies can create scalable, visually rich, and engaging virtual experiences. Expert Metaverse Real Estate Development Company in {{city}} ensures realistic environments tailored to the city's dynamic property market.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            "title": "Metaverse Gaming & Entertainment",
            "description": "Through Metaverse Development Services in {{city}}, the gaming and entertainment industry can deliver immersive experiences with interactive gameplay, virtual concerts, and social events. For people in {{city}}, metaverse gaming and entertainment provide new ways to socialize, learn, and engage digitally. Skilled Metaverse Developers in {{city}} create visually captivating, high-performance platforms that combine AR/VR and Web3 features, making the city's digital entertainment ecosystem more engaging and innovative.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            "title": "Metaverse Retail & E-commerce",
            "description": "Metaverse E-commerce Solutions in {{city}} enable businesses to build virtual stores, 3D product experiences, and immersive shopping platforms. Customers in {{city}} can explore products, try virtual items, and complete transactions seamlessly. Through Metaverse Development Services in {{city}}, retail brands can increase engagement, boost sales, and offer interactive experiences. Expert Metaverse Developers in {{city}} ensure secure, scalable, and customer-friendly solutions tailored to {{city}}'s growing online shopping market.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            "title": "Metaverse Fashion & Lifestyle",
            "description": "Metaverse Fashion Development in {{city}} allows brands to showcase virtual apparel, accessories, and avatars for social, gaming, and e-commerce platforms. Consumers in {{city}} can explore trends, try virtual wearables, and engage with immersive fashion experiences. Through Metaverse Development Services in {{city}}, fashion businesses can innovate and expand their digital presence. Skilled Metaverse Developers in {{city}} ensure visually stunning, interactive, and scalable fashion solutions aligned with {{city}}'s tech-savvy and trend-conscious audience.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            "title": "Metaverse Healthcare & Medical Training",
            "description": "Metaverse simulations and training platforms in {{city}} allow medical professionals and students to practice procedures, visualize anatomy, and attend interactive sessions safely. Through Metaverse Development Services in {{city}}, hospitals and institutions can create immersive training modules, reducing risk and improving outcomes. Skilled Metaverse Developers in {{city}} build accurate, scalable, and realistic healthcare simulations that enhance learning, patient engagement, and operational efficiency in the city's healthcare sector.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            "title": "Metaverse Corporate & Enterprise Solutions",
            "description": "Enterprise Metaverse Solutions in {{city}} help companies create immersive virtual offices, collaboration spaces, and training modules. Employees can collaborate remotely, attend virtual meetings, and complete interactive training. Through Metaverse Development Services in {{city}}, businesses improve productivity, engagement, and workflow efficiency. Skilled Metaverse Developers in {{city}} deliver secure, scalable, and customized enterprise metaverse platforms tailored to {{city}}'s growing corporate and tech-driven ecosystem.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            "title": "Metaverse Aviation & Travel",
            "description": "Through Metaverse Development Services in {{city}}, the aviation and travel sector can offer virtual tours, flight simulations, and interactive travel experiences. Customers and staff in {{city}} benefit from realistic previews, training, and engaging digital journeys. Skilled Metaverse Developers in {{city}} deliver immersive, scalable, and interactive solutions that enhance learning, customer engagement, and operational planning in the city's aviation and tourism industry.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            "title": "Metaverse Finance & Banking",
            "description": "Metaverse platforms for finance in {{city}} enable interactive digital banking, virtual consultations, and investment simulations. Through Metaverse Development Services in {{city}}, customers can explore portfolios, learn financial strategies, and engage in secure transactions. Skilled Metaverse Developers in {{city}} build scalable, secure, and user-friendly solutions, making financial services more interactive, accessible, and innovative for {{city}}'s tech-savvy population.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            "title": "Metaverse Media & Advertising",
            "description": "Metaverse Development Services in {{city}} allow media and advertising companies to deliver immersive campaigns, virtual events, and interactive content. Brands can engage audiences in new, memorable ways. For people living in {{city}}, these experiences offer rich storytelling and entertainment. Skilled Metaverse Developers in {{city}} create visually appealing, interactive, and scalable campaigns that transform the city's media and marketing landscape.",
            "image": "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        }
    ]

    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image || `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};

export const BLOCKCHAIN_INDUSTRIES = (cityName: string): IndustryCard[] => {
    const rawData = [
        {
            title: "Finance & Banking",
            role: "Financial Industry",
            description: `Finance & Banking in ${cityName} can greatly benefit from blockchain by enabling faster, secure, and transparent transactions. From cross-border payments to decentralized finance (DeFi) platforms, blockchain improves efficiency while reducing fraud and operational costs. Leading Blockchain Development Companies in ${cityName} help banks and fintech startups implement scalable blockchain solutions, smart contracts, and digital payment systems.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Insurance",
            role: "Insurance Industry",
            description: `Insurance companies in ${cityName} can leverage blockchain to streamline claims processing, prevent fraud, and ensure transparent policy management. Smart contracts automate claim approvals, reducing delays and operational costs. Through Blockchain App Development in ${cityName}, insurers can implement secure, tamper-proof systems for policy issuance, claims tracking, and premium management.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Healthcare",
            role: "Healthcare Industry",
            description: `Healthcare providers in ${cityName} can use blockchain to secure patient records, streamline medical supply chains, and ensure data integrity across hospitals and clinics. Blockchain enables safe sharing of sensitive health information while preventing tampering or unauthorized access. Hospitals and healthcare startups can implement scalable, compliant systems for patient management, telemedicine, and drug traceability.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Supply Chain & Logistics",
            role: "Logistics Industry",
            description: `Supply Chain & Logistics companies in ${cityName} can leverage blockchain to track goods, verify authenticity, and enhance transparency across the supply chain. Real-time visibility reduces errors, prevents fraud, and optimizes inventory management. Businesses can implement secure, scalable, and automated solutions for tracking shipments, managing vendors, and streamlining operations.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Real Estate",
            role: "Real Estate Industry",
            description: `Real Estate businesses in ${cityName} can benefit from blockchain by enabling secure property transactions, transparent ownership records, and digital property tokenization. Smart contracts simplify agreements, reduce paperwork, and prevent fraud. Blockchain Development Agencies can build scalable platforms for property listings, virtual tours, and digital payments, streamlining operations and boosting customer confidence.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "E-commerce & Retail",
            role: "Retail Industry",
            description: `E-commerce and retail businesses in ${cityName} can leverage blockchain to enhance payment security, prevent fraud, and improve supply chain transparency. Loyalty programs, digital receipts, and inventory tracking become more efficient and reliable. Companies can implement secure, scalable, and user-friendly applications that streamline operations and boost customer trust.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Gaming & Entertainment",
            role: "Gaming Industry",
            description: `Gaming and entertainment companies in ${cityName} can use blockchain to create decentralized, secure, and transparent platforms. Blockchain enables true ownership of in-game assets, NFT collectibles, and play-to-earn opportunities. Developers can build scalable, high-performance games with secure transactions and asset management, attracting global audiences and opening new revenue streams.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Education & eLearning",
            role: "Education Industry",
            description: `Education and eLearning platforms in ${cityName} can benefit from blockchain by ensuring secure credential verification, tamper-proof certificates, and transparent learning records. Students, institutions, and employers can trust verified academic achievements. Developers can build scalable platforms for online courses, certification tracking, and digital learning management, enhancing credibility and modernizing educational systems.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Government & Public Sector",
            role: "Public Sector",
            description: `Government and public sector agencies in ${cityName} can leverage blockchain to secure citizen data, streamline public records, and enable transparent digital services. Voting systems, identity management, and document verification become more reliable and tamper-proof. Authorities can implement scalable and secure blockchain solutions that enhance accountability, reduce bureaucracy, and improve service delivery.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Automobile",
            role: "Automobile Industry",
            description: `Automobile companies in ${cityName} can leverage blockchain to track vehicle history, verify authenticity, and streamline supply chains. Smart contracts automate transactions between manufacturers, dealers, and customers, reducing fraud and paperwork. Automotive businesses can implement secure and scalable blockchain solutions for fleet management, parts tracking, and digital payments.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Energy & Utilities",
            role: "Energy Industry",
            description: `Energy and utility companies in ${cityName} can use blockchain to enable transparent energy trading, monitor decentralized grids, and track carbon credits efficiently. Blockchain ensures secure, tamper-proof data sharing. Businesses can implement scalable blockchain solutions that optimize energy management, reduce operational costs, and enhance sustainability initiatives.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Media & Content Creation",
            role: "Media Industry",
            description: `Media and content creation companies in ${cityName} can leverage blockchain to protect intellectual property, manage royalties, and ensure transparent revenue distribution. Digital content becomes traceable, reducing piracy and unauthorized use. Creators and studios can implement secure platforms for publishing, licensing, and monetizing content, enhancing trust and operational efficiency.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
    ];


    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image || `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};

export const WEB_DEVELOPMENT_INDUSTRIES = (cityName: string): IndustryCard[] => {
    const rawData = [
        {
            description:
                `Web development services help e-commerce and retail businesses in ${cityName} build secure, responsive, and scalable online stores. Companies can offer smooth shopping experiences, integrate payment gateways, manage inventory efficiently, and optimize product catalogs. Custom web solutions improve conversions, attract more customers, and ensure online platforms remain competitive in a rapidly evolving digital marketplace.`,
            title: "E-commerce & Retail",
            role: "Retail & E-commerce Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Web development services empower banks and financial institutions in ${cityName} to provide secure, fast, and user-friendly digital platforms. Financial businesses can implement online banking portals, investment dashboards, and client management systems. Optimized web solutions ensure data security, regulatory compliance, and enhanced customer engagement, allowing seamless, efficient, and innovative financial services.`,
            title: "Finance & Banking",
            role: "Banking & Financial Services",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Healthcare organizations in ${cityName} benefit from web development by creating portals, telemedicine platforms, and appointment management systems. Hospitals and clinics can securely store patient data, streamline communication, and offer online consultations. Optimized, responsive websites improve patient engagement and enable providers to deliver efficient, technology-driven care.`,
            title: "Healthcare",
            role: "Healthcare Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Educational institutions in ${cityName} use web development services to build online learning platforms, course management systems, and interactive portals. Schools, universities, and eLearning providers can deliver scalable, responsive, and user-friendly educational experiences. Custom web solutions enhance student engagement, simplify administration, and support a modern, digital-first approach to learning.`,
            title: "Education & eLearning",
            role: "Education Sector",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Travel and hospitality businesses in ${cityName} leverage web development to build seamless booking portals, hotel websites, and travel platforms. Companies can provide responsive interfaces, secure payment integration, and real-time availability updates. Custom web solutions enhance user experience, boost online bookings, and streamline operations in a competitive market.`,
            title: "Travel & Hospitality",
            role: "Travel & Hospitality Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Media and entertainment companies in ${cityName} benefit from web development services by creating dynamic streaming platforms, news portals, and interactive content sites. Organizations can deliver high-performance websites optimized for multimedia, fast loading, and engaging user experiences. Well-built platforms enhance content distribution, improve audience engagement, and support monetization strategies.`,
            title: "Media & Entertainment",
            role: "Media & Entertainment Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Real estate businesses in ${cityName} leverage web development to showcase properties, offer virtual tours, and manage client inquiries efficiently. Realtors can develop responsive platforms with searchable listings, CRM integration, and interactive features. Optimized websites enhance visibility, attract potential buyers, and streamline property management.`,
            title: "Real Estate",
            role: "Real Estate Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Fashion and lifestyle brands in ${cityName} use web development services to build stylish, responsive, and user-friendly eCommerce websites and brand portals. Businesses can showcase collections, integrate online stores, and provide smooth shopping experiences. Custom solutions improve customer engagement, enhance brand visibility, and support conversions in a competitive digital market.`,
            title: "Fashion & Lifestyle",
            role: "Fashion & Lifestyle Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Automobile companies in ${cityName} use web development to build responsive websites for dealerships, booking systems, and vehicle configurators. Businesses can showcase car models, schedule test drives, and integrate secure customer portals. Optimized websites enhance user engagement, improve lead generation, and streamline operations.`,
            title: "Automobile",
            role: "Automobile Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Telecom and IT businesses in ${cityName} leverage web development services to create scalable platforms for customer management, service portals, and SaaS products. Companies can integrate APIs, automate workflows, and improve user experience. High-performance websites increase customer satisfaction, streamline operations, and support business growth.`,
            title: "Telecom & IT Services",
            role: "Telecom & IT Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Government and public sector organizations in ${cityName} use web development services to provide citizen services, information portals, and online applications. Departments can improve transparency, accessibility, and efficiency. Custom web solutions ensure secure data management, enhance user experience, and support digital governance initiatives.`,
            title: "Government & Public Sector",
            role: "Public Sector",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Food and beverage businesses in ${cityName} leverage web development to build online ordering platforms and responsive websites. Restaurants, cafes, and delivery services can showcase menus, accept online orders, and integrate payment gateways. Optimized websites improve customer convenience, increase orders, and strengthen digital presence.`,
            title: "Food & Beverages",
            role: "Food & Beverage Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Logistics and supply chain companies in ${cityName} use web development to implement tracking systems, inventory management portals, and client dashboards. Businesses can automate processes, improve operational efficiency, and provide real-time updates to clients. Optimized platforms enhance transparency, reduce errors, and support scalable logistics operations.`,
            title: "Logistics & Supply Chain",
            role: "Logistics Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            description:
                `Gaming and eSports companies in ${cityName} use web development to build platforms for online games, tournaments, and streaming. Organizations can create interactive, high-performance websites that handle real-time engagement. Custom web solutions improve user experience, attract larger audiences, and support monetization strategies in a growing digital gaming ecosystem.`,
            title: "Gaming & eSports",
            role: "Gaming Industry",
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
    ];
    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image || `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};

export const APP_DEVELOPMENT_INDUSTRIES = (cityName: string): IndustryCard[] => {
    const rawData = [
        {
            title: "E-commerce & Online Marketplaces",
            role: "E-commerce Industry",
            description: `Businesses in ${cityName} leverage mobile applications to enhance online shopping experiences, streamline transactions, and increase customer engagement. With features like secure payments, personalized recommendations, and easy product discovery, companies can boost conversions, customer loyalty, and long-term business growth in a competitive digital marketplace.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Food Delivery & On-Demand Services",
            role: "On-Demand Services Industry",
            description: `Restaurants, cafes, and service providers in ${cityName} use on-demand mobile apps to connect with customers quickly and efficiently. Real-time tracking, seamless payments, and automated order management help businesses improve delivery efficiency, customer satisfaction, and operational scalability.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "FinTech & Digital Payments",
            role: "Financial Technology Industry",
            description: `FinTech and digital payment apps empower businesses in ${cityName} to offer secure, instant, and user-friendly financial services. Features such as mobile payments, digital banking, and transaction management enhance trust, accessibility, and revenue growth for financial institutions.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Healthcare & Telemedicine",
            role: "Healthcare Industry",
            description: `Healthcare and telemedicine apps help providers in ${cityName} deliver remote consultations, appointment scheduling, and patient monitoring efficiently. These solutions improve accessibility, patient engagement, and operational efficiency while ensuring secure and compliant healthcare delivery.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Education & eLearning",
            role: "Education Industry",
            description: `Educational institutions and edtech businesses in ${cityName} use mobile apps to deliver interactive and remote learning experiences. Virtual classrooms, assessments, and progress tracking help improve student engagement, knowledge retention, and modern digital education delivery.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Logistics & Delivery Services",
            role: "Logistics & Supply Chain Industry",
            description: `Logistics and delivery companies in ${cityName} rely on mobile apps for real-time shipment tracking, route optimization, and efficient operations management. These apps help reduce costs, speed up deliveries, and improve overall customer satisfaction.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Travel & Hospitality",
            role: "Travel & Hospitality Industry",
            description: `Travel agencies, hotels, and tour operators in ${cityName} use mobile apps for seamless bookings, itinerary management, and personalized services. Real-time updates and smooth user experiences help improve guest satisfaction and drive revenue growth.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Media, OTT & Entertainment",
            role: "Media & Entertainment Industry",
            description: `Media and entertainment companies in ${cityName} deliver video streaming, live events, and on-demand content through mobile applications. Subscription management, content personalization, and high-quality streaming help retain users and generate recurring revenue.`,
            image: "images/media_ott_entertainment.webp",
        },
        {
            title: "Retail & Omnichannel Commerce",
            role: "Retail Industry",
            description: `Retail businesses in ${cityName} use mobile apps to create seamless omnichannel shopping experiences across online and offline platforms. Personalized offers, loyalty programs, and smooth checkout processes help drive sales and improve customer retention.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Social Media & Community Platforms",
            role: "Social Networking Industry",
            description: `Social media and community apps help organizations in ${cityName} build interactive platforms for content sharing, networking, and engagement. These apps strengthen brand visibility, user retention, and digital interaction through secure and scalable solutions.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Real Estate & Property Management",
            role: "Real Estate Industry",
            description: `Real estate businesses in ${cityName} leverage mobile apps to showcase properties, manage leads, and provide virtual tours. These applications improve client engagement, streamline property management, and accelerate sales cycles.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Gaming & Interactive Entertainment",
            role: "Gaming Industry",
            description: `Gaming and interactive entertainment apps in ${cityName} engage users through immersive gameplay and interactive features. These platforms help increase user retention, monetization opportunities, and brand visibility in the digital entertainment space.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Fitness, Wellness & Health Tech",
            role: "Health & Wellness Industry",
            description: `Fitness and wellness apps in ${cityName} offer personalized workouts, diet plans, and health tracking features. Businesses benefit from higher user engagement, data-driven insights, and strong digital presence in the growing health tech market.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Banking & Financial Services",
            role: "Banking & Financial Services",
            description: `Banking and financial service providers in ${cityName} use mobile apps to deliver secure account management, digital payments, and financial services. These apps enhance accessibility, improve customer trust, and streamline financial operations.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
    ];

    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image || `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};

export const AI_CHATBOT_INDUSTRIES = (cityName: string): IndustryCard[] => {
    const rawData = [
        {
            title: "E-commerce & Retail",
            role: "Retail & E-commerce Industry",
            description: `In ${cityName}, E-commerce and retail businesses can benefit immensely from AI chatbot solutions. Chatbots help customers search products, receive personalized recommendations, track orders, and get instant support. Businesses in ${cityName} can reduce cart abandonment, boost engagement, and offer 24/7 assistance, ensuring seamless shopping experiences and higher sales.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Banking & Finance",
            role: "Banking & Financial Services",
            description: `Banks and financial institutions in ${cityName} leverage AI chatbots to handle account inquiries, transactions, and loan assistance instantly. Customers can check balances, make payments, or schedule appointments without visiting branches. Businesses in ${cityName} benefit from faster service, reduced call-center workload, and improved customer satisfaction.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Insurance",
            role: "Insurance Industry",
            description: `Insurance providers in ${cityName} use AI chatbots to automate claims processing, policy details, and customer support. Chatbots guide clients through claims filing and coverage explanations instantly. This helps businesses in ${cityName} reduce operational costs, improve response times, and build stronger customer trust.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Healthcare & Hospitals",
            role: "Healthcare Industry",
            description: `Healthcare providers in ${cityName} benefit from AI chatbots that manage appointments, provide medical guidance, and answer patient queries. Chatbots can schedule consultations and send medication reminders, helping hospitals in ${cityName} reduce administrative workload and enhance patient engagement.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Travel & Tourism",
            role: "Travel Industry",
            description: `Travel and tourism businesses in ${cityName} use AI chatbots to provide itinerary details, booking assistance, and travel recommendations. Chatbots deliver real-time updates and round-the-clock support, helping companies in ${cityName} improve customer engagement and increase bookings.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Hospitality & Hotels",
            role: "Hospitality Industry",
            description: `Hotels and hospitality businesses in ${cityName} leverage chatbots to manage reservations, handle guest queries, and recommend services. Guests can book rooms, order room service, or explore amenities easily. Businesses in ${cityName} benefit from smoother operations and higher guest satisfaction.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Real Estate",
            role: "Real Estate Industry",
            description: `Real estate companies in ${cityName} implement AI chatbots to showcase properties, schedule site visits, and answer buyer inquiries instantly. This improves lead response time, enhances customer engagement, and streamlines sales processes for real estate businesses.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Education & E-learning",
            role: "Education Industry",
            description: `Educational institutions and e-learning platforms in ${cityName} use AI chatbots to manage admissions, course inquiries, and student support. Chatbots assist with registrations and syllabus information, helping institutions reduce administrative tasks and improve student engagement.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Food & Delivery Services",
            role: "Food & Beverage Industry",
            description: `Restaurants and food delivery services in ${cityName} use AI chatbots to manage orders, recommend menus, and track deliveries in real time. This reduces errors, speeds up service, and improves customer satisfaction in fast-paced food businesses.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Human Resources & Recruitment",
            role: "HR & Recruitment",
            description: `HR teams and recruitment agencies in ${cityName} rely on AI chatbots to screen candidates, schedule interviews, and answer employee queries. This streamlines hiring processes, reduces HR workload, and improves employee engagement.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "IT & Technology Services",
            role: "IT & Technology Industry",
            description: `IT and technology companies in ${cityName} use AI chatbots to provide instant technical support, automate workflows, and resolve issues efficiently. Chatbots help improve response times, optimize operations, and enhance customer satisfaction.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Telecom & Customer Service",
            role: "Telecommunications Industry",
            description: `Telecom companies in ${cityName} implement AI customer service bots to handle service queries, billing issues, and network support. Customers can check usage, pay bills, or report problems instantly, reducing call center load and improving service quality.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Automotive & Transportation",
            role: "Automotive Industry",
            description: `Automotive and transportation businesses in ${cityName} leverage AI chatbots for booking services, vehicle information, and tracking updates. Chatbots improve response speed, reduce operational effort, and enhance overall customer experience.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Entertainment & Media",
            role: "Media & Entertainment Industry",
            description: `Entertainment and media companies in ${cityName} use AI chatbots to engage audiences, provide event updates, and manage ticket bookings. Chatbots help boost interaction, deliver timely information, and increase audience participation.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
    ];

    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image || `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};

export const INDUSTRIES_3D = (cityName: string): IndustryCard[] => {
    const rawData = [

        {
            title: "Gaming & Entertainment",
            role: "Gaming & Entertainment Industry",
            description: `In ${cityName}, gaming and entertainment businesses can leverage 3D Game Art Services to create immersive characters, environments, and assets. Studios benefit from high-quality visuals that enhance player engagement, streamline development, and bring imaginative worlds to life, delivering captivating entertainment experiences.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Film & Animation",
            role: "Film & Animation Industry",
            description: `Film and animation studios in ${cityName} rely on 3D Animation Services to craft realistic characters, scenes, and visual effects. This helps production teams enhance visual storytelling, reduce manual workload, and create cinematic content for films, ads, and animated series.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Architecture & Interior Design",
            role: "Architecture & Interior Design Industry",
            description: `Architects and interior designers in ${cityName} use Architectural Visualization (ArchViz) to showcase spaces before construction. This enables realistic presentation of layouts, lighting, and materials, helping firms gain client trust, reduce errors, and make better design decisions.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Real Estate",
            role: "Real Estate Industry",
            description: `Real estate companies in ${cityName} benefit from 3D Rendering Art to showcase properties through realistic walkthroughs and visualizations. This improves client engagement, accelerates sales, and allows properties to be presented effectively without physical visits.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "E-commerce & Retail",
            role: "Retail & E-commerce Industry",
            description: `E-commerce and retail businesses in ${cityName} leverage 3D Product Visualization to showcase products with interactive views and realistic details. This boosts engagement, increases online sales, and reduces product returns by offering lifelike digital previews.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Product Design & Manufacturing",
            role: "Product Design & Manufacturing Industry",
            description: `Product design and manufacturing companies in ${cityName} use 3D Modeling Services to build accurate digital prototypes. This helps identify flaws early, reduce development costs, streamline production, and deliver innovative, high-quality products.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Advertising & Marketing",
            role: "Advertising & Marketing Industry",
            description: `Advertising and marketing agencies in ${cityName} rely on 3D Digital Art & Illustrations to create visually compelling campaigns. This helps brands enhance perception, attract customers, and stand out with creative, high-impact marketing content.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Automotive & Transportation",
            role: "Automotive & Transportation Industry",
            description: `Automotive and transportation companies in ${cityName} use 3D Rendering Art to showcase vehicles, parts, and concepts through interactive and detailed visuals. This reduces prototyping costs and improves engagement and decision-making.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Healthcare & Medical Visualization",
            role: "Healthcare & Medical Industry",
            description: `Healthcare providers in ${cityName} leverage 3D Visualization to create medical models, surgical simulations, and training visuals. This improves patient understanding, planning accuracy, and medical education through advanced visual tools.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Education & E-learning",
            role: "Education & E-learning Industry",
            description: `Educational institutions and e-learning platforms in ${cityName} use 3D Digital Game Art to create interactive lessons and simulations. This enhances engagement, improves knowledge retention, and delivers modern, immersive learning experiences.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "VR & AR Solutions",
            role: "VR & AR Industry",
            description: `Companies in ${cityName} adopting AR 3D Content Creation develop immersive VR and AR solutions for training, marketing, and simulations. These interactive experiences enhance engagement and drive digital innovation.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Tourism & Travel",
            role: "Tourism & Travel Industry",
            description: `Tourism and travel businesses in ${cityName} use 3D Visualization to create virtual tours and destination previews. This attracts travelers, improves bookings, and offers realistic experiences that simplify trip planning.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Hospitality & Hotels",
            role: "Hospitality & Hotel Industry",
            description: `Hotels and hospitality businesses in ${cityName} use 3D Visualization to showcase rooms, amenities, and event spaces virtually. This improves booking confidence, enhances marketing, and delivers immersive pre-arrival experiences.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        },
        {
            title: "Consumer Electronics",
            role: "Consumer Electronics Industry",
            description: `Consumer electronics companies in ${cityName} leverage 3D Product Visualization to present gadgets and devices with realistic, interactive visuals. This reduces prototyping costs, improves marketing impact, and enhances customer engagement.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp"
        }


    ];

    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image || `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};

export const MVP_INDUSTRIES = (cityName: string): IndustryCard[] => {

    const rawData = [
        {
            title: "Startup & Tech Companies",
            role: "Startup & Technology Industry",
            description: `Startups and tech companies in ${cityName} can turn ideas into working prototypes efficiently. By leveraging Startup MVP Development in ${cityName}, businesses can test features, gather feedback, reduce risks, and prepare scalable products for market launch.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "E-commerce & Retail",
            role: "Retail & E-commerce Industry",
            description: `E-commerce and retail businesses in ${cityName} can prototype platforms before full launch. Using MVP Product Development in ${cityName}, companies can test product listings, payment flows, and customer experience while optimizing development costs.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Fintech & Banking",
            role: "Financial Services Industry",
            description: `Fintech and banking startups in ${cityName} can validate financial applications early. With MVP Development for Tech Startups in ${cityName}, businesses can test security, transactions, and compliance while reducing development risks.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Healthcare & Medical Tech",
            role: "Healthcare Industry",
            description: `Healthcare startups and providers in ${cityName} can prototype digital health solutions safely. Using MVP Software Development in ${cityName}, organizations can validate workflows, test functionality, and deliver compliant, user-friendly healthcare apps.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "EdTech & E-learning",
            role: "Education & E-learning Industry",
            description: `Educational startups and institutions in ${cityName} can test digital learning platforms efficiently. By leveraging MVP Development for Startups in ${cityName}, businesses can evaluate features, gather feedback, and build scalable e-learning solutions.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Social Media & Networking",
            role: "Social Networking Industry",
            description: `Social media startups in ${cityName} can prototype interactive applications and engagement features. Using MVP Application Development in ${cityName}, companies can validate messaging, content flow, and user interactions before full-scale launch.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Marketplace Platforms",
            role: "Marketplace & Platform Industry",
            description: `Marketplace businesses in ${cityName} can validate platform functionality early. With an MVP Product Development Agency in ${cityName}, companies can test listings, bookings, and payment integrations to build scalable marketplace solutions.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "On-Demand Services",
            role: "On-Demand Service Industry",
            description: `On-demand startups in ${cityName} can prototype delivery, ride-sharing, or service platforms quickly. Using MVP in App Development in ${cityName}, businesses can test bookings, payments, and tracking features efficiently.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "AI & Machine Learning Startups",
            role: "AI & ML Industry",
            description: `AI and machine learning startups in ${cityName} can test intelligent applications efficiently. By leveraging AI-Powered MVP Development in ${cityName}, businesses can validate algorithms, refine models, and build scalable AI solutions.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Blockchain & Crypto Solutions",
            role: "Blockchain & Web3 Industry",
            description: `Blockchain and crypto startups in ${cityName} can validate decentralized applications and smart contracts. Using Blockchain MVP Development in ${cityName}, businesses can test security, transactions, and workflows before full deployment.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "IoT & Smart Device Startups",
            role: "IoT & Smart Technology Industry",
            description: `IoT and smart device companies in ${cityName} can prototype connected solutions effectively. With IoT MVP Development in ${cityName}, startups can test device integration, automation, and data flows efficiently.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Enterprise Solutions",
            role: "Enterprise Software Industry",
            description: `Enterprises in ${cityName} can prototype internal tools and client-facing software efficiently. By leveraging Enterprise MVP Development in ${cityName}, organizations can validate workflows, optimize usability, and reduce investment risks.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "SaaS Platforms",
            role: "SaaS Industry",
            description: `SaaS startups in ${cityName} can test subscription-based platforms efficiently. Using SaaS MVP Development in ${cityName}, businesses can validate features, gather feedback, and launch scalable SaaS products faster.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Gaming & Interactive Apps",
            role: "Gaming & Interactive Media Industry",
            description: `Gaming startups in ${cityName} can prototype gameplay mechanics and interactive experiences. With MVP Game Development in ${cityName}, companies can test engagement, refine features, and launch market-ready gaming applications.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
    ];

    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image || `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};

export const DIGITAL_TWIN_INDUSTRIES = (cityName: string): IndustryCard[] => {
    const rawData = [
        {
            title: "Manufacturing",
            role: "Manufacturing Industry",
            description: `Manufacturers in ${cityName} can optimize production processes and reduce downtime using Digital Twin in Manufacturing in ${cityName}. By simulating workflows, machinery, and product lifecycles, businesses can identify inefficiencies, predict maintenance needs, and improve operational efficiency for faster time-to-market.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Automotive",
            role: "Automotive Industry",
            description: `Automotive companies in ${cityName} can test designs, monitor performance, and streamline production using Digital Twin in Automotive in ${cityName}. Virtual replicas of vehicles and components help enhance quality control, reduce development costs, and accelerate innovation.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Energy & Utilities",
            role: "Energy and Utilities Industry",
            description: `Energy providers in ${cityName} can monitor grids, optimize power generation, and predict system failures using Digital Twin Technology Development in ${cityName}. These simulations improve reliability, reduce downtime, and support sustainable energy management.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Infrastructure & Construction",
            role: "Infrastructure and Construction Industry",
            description: `Construction and infrastructure firms in ${cityName} can plan, monitor, and manage projects efficiently using Infrastructure Digital Twin Development in ${cityName}. Virtual models help reduce risks, control costs, and deliver high-quality infrastructure projects.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Smart Cities & Urban Development",
            role: "Smart City and Urban Development",
            description: `Urban planners and municipalities in ${cityName} can design and manage smarter cities using Digital Twin Development in ${cityName}. Virtual models of infrastructure and public services help optimize traffic, energy usage, and urban sustainability.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Healthcare",
            role: "Healthcare Industry",
            description: `Healthcare providers and startups in ${cityName} can simulate patient workflows, devices, and treatments using Human Digital Twin Development in ${cityName}. These models improve diagnostics, personalized care, and operational efficiency.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Logistics & Supply Chain",
            role: "Logistics and Supply Chain Industry",
            description: `Logistics companies in ${cityName} can optimize inventory, monitor shipments, and reduce delays using Digital Twin in Logistics in ${cityName}. Supply chain simulations improve decision-making and operational resilience.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Aerospace & Aviation",
            role: "Aerospace and Aviation Industry",
            description: `Aerospace and aviation companies in ${cityName} can test components, simulate flight conditions, and predict maintenance needs using Industrial Digital Twin Development in ${cityName}, ensuring safer and more reliable operations.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Oil & Gas",
            role: "Oil and Gas Industry",
            description: `Oil and gas companies in ${cityName} can monitor equipment, optimize operations, and enhance safety using Industrial Digital Twin Development in ${cityName}. Virtual replicas help reduce downtime and improve efficiency across operations.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Real Estate",
            role: "Real Estate Industry",
            description: `Real estate developers in ${cityName} can plan, design, and manage properties using Infrastructure Digital Twin Development in ${cityName}. These simulations optimize construction, reduce costs, and improve long-term property management.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Industrial Equipment & Machinery",
            role: "Industrial Equipment Industry",
            description: `Industrial equipment manufacturers in ${cityName} can monitor machinery performance and predict failures using Digital Twin for Manufacturing in ${cityName}. These insights improve productivity and reduce operational risks.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Power & Renewable Energy",
            role: "Power and Renewable Energy Industry",
            description: `Energy companies in ${cityName} can simulate grids and renewable assets using Digital Twin Technology Development in ${cityName}. These models improve efficiency, reduce risks, and support reliable, sustainable energy systems.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Transportation & Mobility",
            role: "Transportation and Mobility Industry",
            description: `Transportation providers in ${cityName} can optimize routes, fleets, and traffic systems using Digital Twin in Logistics in ${cityName}. Simulated transport networks improve efficiency and deliver safer mobility solutions.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
        {
            title: "Smart Buildings & Facilities Management",
            role: "Facilities Management Industry",
            description: `Facility managers in ${cityName} can monitor building systems, optimize energy usage, and predict maintenance using Infrastructure Digital Twin Development in ${cityName}, ensuring efficient and sustainable building operations.`,
            image: "qhed2jpc8ipw7o4/images_ufv58nrbpl.webp",
        },
    ];

    return rawData.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        backgroundColor: COLORS[index % COLORS.length],
        imagePosition: index % 2 === 0 ? "right" : "left",
        imageUrl: item.image || `/indutries/indutries_${(index % 6) + 1}.png`,
    }));
};



const INDUSTRIES_CONFIG: Record<string, (cityName: string) => IndustryCard[]> = {
    "game": GAME_INDUSTRIES,
    "metaverse": METAVERSE_INDUSTRIES,
    "digital-twin": DIGITAL_TWIN_INDUSTRIES,
    "app": APP_DEVELOPMENT_INDUSTRIES,
    "blockchain": BLOCKCHAIN_INDUSTRIES,
    "vr": VR_AR_INDUSTRIES,
    "ar-vr": VR_AR_INDUSTRIES,
    "web": WEB_DEVELOPMENT_INDUSTRIES,
    "ai-chatbot": AI_CHATBOT_INDUSTRIES,
    "3d-art": INDUSTRIES_3D,
    "mvp": MVP_INDUSTRIES,
    "default": GAME_INDUSTRIES
}

export interface IndustriesData {
    industries: IndustryCard[]
    subheading: string
}

const SUBHEADINGS: Record<string, string> = {
    "game": "From education to healthcare, game technology is helping industries work smarter and innovate faster.",
    "3d-art": "Companies in {{city}} use 3D Art Services to create stunning visuals and interactive experiences. Businesses in {{city}} boost engagement, streamline work, and drive growth with professional 3D art solutions.",
    "ai-chatbot": "AI chatbot development services help businesses across sectors build intelligent, interactive, and scalable solutions that enhance customer engagement, improve response times, and drive business growth.",
    "web": "Web development services help businesses across sectors build strong digital platforms, enhance user experience, and drive online growth.",
    "vr": "We are transforming industries through immersive AR and VR powered digital innovation",
    "metaverse": "Revolutionizing operations, engagement, and growth through virtual solutions. We bring interactive, scalable, and future-ready experiences to every sector.",
    "app": "Industries across sectors leverage App Development Services in Chandigarh to build scalable mobile solutions that enhance user engagement, optimize operations, and support long-term digital growth.",
    "blockchain": "Transforming industries with secure, transparent, and decentralized solutions. We bring cutting-edge blockchain technology to revolutionize operations, trust, and efficiency across every sector.",
    "digital-twin": "Digital Twin Development is transforming how industries in {{city}} design, monitor, and optimize real-world systems using virtual models.",
    "mvp": "MVP Development Services help startups and enterprises across sectors validate ideas quickly, reduce risks, and launch scalable products with minimal investment.",
    "default": "From education to healthcare, game technology is helping industries work smarter and innovate faster."
}

export const getIndustriesData = (cityName: string, title: string = "game"): IndustriesData => {
    const lowerTitle = title.toLowerCase();
    let serviceKey = "game";

    if (lowerTitle.includes("blockchain")) {
        serviceKey = "blockchain";
    } else if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
        serviceKey = "3d-art";
    } else if (lowerTitle.includes("metaverse")) {
        serviceKey = "metaverse";
    } else if (lowerTitle.includes("ar") || lowerTitle.includes("vr")) {
        serviceKey = "vr";
    }
    else if (lowerTitle.includes("app")) {
        serviceKey = "app";
    } else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
        serviceKey = "ai-chatbot";
    } else if (lowerTitle.includes("web")) {
        serviceKey = "web";
    } else if (lowerTitle.includes("mvp")) {
        serviceKey = "mvp";
    }
    else if (lowerTitle.includes("digital twin")) {
        serviceKey = "digital-twin";
    }

    const configFn = INDUSTRIES_CONFIG[serviceKey] || INDUSTRIES_CONFIG["default"]
    const subheading = SUBHEADINGS[serviceKey] || SUBHEADINGS["default"]

    return {
        industries: configFn(cityName),
        subheading: subheading
    }
}



