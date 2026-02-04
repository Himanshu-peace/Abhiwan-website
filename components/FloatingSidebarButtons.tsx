// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { ChevronUp, ChevronDown } from 'lucide-react';
// import { linkingCities } from '@/data/linking_cities';
// import { SERVICES } from '@/constants/gameData';

// const services = SERVICES;

// // SCROLL CONFIGURATION
// const SCROLL_CONFIG = {
//     // Minimum scroll distance in pixels before buttons appear
//     SHOW_THRESHOLD: 1200, // Increased from 600 to 1200 pixels

//     // Scroll distance for "hasScrolled" state (affects top position)
//     TOP_POSITION_THRESHOLD: 200, // Increased from 100 to 200 pixels

//     // Alternative: Use percentage-based scrolling
//     // Set to true to use percentage instead of pixels
//     USE_PERCENTAGE: false,

//     // If USE_PERCENTAGE is true, show buttons after scrolling this % of page
//     PERCENTAGE_THRESHOLD: 25, // Show after scrolling 25% of the page
// };

// // Function to generate service URLs
// const getServiceUrl = (serviceName: string, location: string) => {
//     const serviceMap: Record<string, string> = {
//         "Game Development Services": "game-development",
//         "Web Development Services": "web-development",
//         "AR and VR Development Services": "ar-vr-development",
//         "App Development Services": "app-development",
//         "Metaverse Development Services": "metaverse-development",
//         "AI Chatbot Development Services": "ai-chatbot-development",
//         "Blockchain Development Services": "blockchain-development",
//         "3D Art Services": "3d-art-development",
//         "MVP Prototyping Services": "mvp-development",
//         "Digital Twin Services": "digital-twin-development"
//     };

//     const slug = serviceMap[serviceName] || serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
//     return `/${slug}/${location}`;
// };

// // Function to format country name
// const formatCountryName = (slug: string) => {
//     if (!slug) return "";
//     const formatted = slug.replace(/-/g, ' ');
//     return formatted.charAt(0).toUpperCase() + formatted.slice(1);
// };

// interface FloatingSidebarButtonProps {
//     children: React.ReactNode;
//     className?: string;
//     onClick: () => void;
//     isActive?: boolean;
// }

// const FloatingSidebarButton = ({
//     children,
//     className = "",
//     onClick,
//     isActive = false,
// }: FloatingSidebarButtonProps) => {
//     return (
//        <button
//   onClick={onClick}
//   className={`
//     w-full sm:w-auto
//     min-h-[56px]
//     inline-flex
//     items-center
//     gap-3
//     px-3 sm:px-4
//     bg-white
//     border border-[#C0C6CF]
//     rounded-[10px]
//     font-inter font-semibold
//     text-gray-900
//     text-sm sm:text-base
//     leading-snug
//     shadow-[0_0_57.9px_rgba(0,0,0,0.12)]
//     transition-all
//     ${isActive ? "border-b-transparent rounded-b-none shadow-none" : ""}
//     ${className}
//   `}
// >

//             {/* ICON — perfectly centered */}
//             <span className="shrink-0 flex items-center justify-center">
//                 {isActive ? (
//                     <ChevronUp size={20} className="stroke-[2.5px]" />
//                 ) : (
//                     <ChevronDown size={20} className="stroke-[2.5px]" />
//                 )}
//             </span>

//             {/* TEXT — clean wrapping */}
//             <span className="flex-1 text-left whitespace-normal break-words">
//                 {children}
//             </span>
//         </button>
//     );
// };




// interface FloatingSidebarButtonsProps {
//     slugItem?: {
//         country: string;
//         slug: string;
//         backgroundImage: string;
//     };
//     title?: string;
//     category?: string;
// }

// export default function FloatingSidebarButtons({
//     slugItem = { country: "India", slug: "noida", backgroundImage: "/usa.jpeg" },
//     title = "Game Development",
//     category = "Game"
// }: FloatingSidebarButtonsProps) {
//     const [activeFloatingButton, setActiveFloatingButton] = useState<'services' | 'cities' | null>(null);
//     const [isVisible, setIsVisible] = useState(false);
//     const [hasScrolled, setHasScrolled] = useState(false);
//     const scrollableElementRef = useRef<HTMLElement | null>(null);

//     // Handle floating button clicks
//     const handleFloatingButtonClick = (buttonType: 'services' | 'cities') => {
//         setActiveFloatingButton(activeFloatingButton === buttonType ? null : buttonType);
//     };

//     // Effect to find the scrollable element and handle scroll
//     useEffect(() => {
//         let mounted = true;

//         const getScrollPosition = () => {
//             // Try multiple methods to get scroll position
//             const positions = [
//                 window.scrollY,
//                 window.pageYOffset,
//                 document.documentElement.scrollTop,
//                 document.body.scrollTop
//             ];

//             // Also check if there's a main scrollable container
//             const mainElement = document.querySelector('main');
//             const bodyElement = document.body;
//             const htmlElement = document.documentElement;

//             if (mainElement && mainElement.scrollTop > 0) {
//                 positions.push(mainElement.scrollTop);
//             }
//             if (bodyElement && bodyElement.scrollTop > 0) {
//                 positions.push(bodyElement.scrollTop);
//             }
//             if (htmlElement && htmlElement.scrollTop > 0) {
//                 positions.push(htmlElement.scrollTop);
//             }

//             // Find the maximum scroll position (the one that's actually scrolling)
//             const maxScroll = Math.max(...positions.filter(p => !isNaN(p)));

//             return maxScroll;
//         };

//         const calculateScrollThreshold = () => {
//             if (SCROLL_CONFIG.USE_PERCENTAGE) {
//                 // Calculate threshold based on percentage of total scrollable height
//                 const scrollHeight = document.documentElement.scrollHeight;
//                 const clientHeight = document.documentElement.clientHeight;
//                 const scrollableHeight = scrollHeight - clientHeight;
//                 const threshold = (scrollableHeight * SCROLL_CONFIG.PERCENTAGE_THRESHOLD) / 100;

//                 // console.log('📊 PERCENTAGE MODE:');
//                 // console.log(`  Total height: ${scrollHeight}px`);
//                 // console.log(`  Viewport height: ${clientHeight}px`);
//                 // console.log(`  Scrollable height: ${scrollableHeight}px`);
//                 // console.log(`  Threshold (${SCROLL_CONFIG.PERCENTAGE_THRESHOLD}%): ${threshold}px`);

//                 return threshold;
//             } else {
//                 // Use fixed pixel value
//                 console.log(`📏 PIXEL MODE: Threshold = ${SCROLL_CONFIG.SHOW_THRESHOLD}px`);
//                 return SCROLL_CONFIG.SHOW_THRESHOLD;
//             }
//         };

//         const handleScroll = () => {
//             if (!mounted) return;

//             const scrollY = getScrollPosition();
//             const threshold = calculateScrollThreshold();
//             const shouldBeVisible = scrollY >= threshold;

//             // Calculate scroll percentage for informational purposes
//             const scrollHeight = document.documentElement.scrollHeight;
//             const clientHeight = document.documentElement.clientHeight;
//             const scrollableHeight = scrollHeight - clientHeight;
//             const scrollPercentage = scrollableHeight > 0
//                 ? Math.round((scrollY / scrollableHeight) * 100)
//                 : 0;

//             // console.log('┌─────────────────────────────────────┐');
//             // console.log('│       SCROLL EVENT DETECTED         │');
//             // console.log('├─────────────────────────────────────┤');
//             // console.log(`│ Current Scroll:    ${scrollY.toFixed(0).padStart(6)}px (${scrollPercentage}%) │`);
//             // console.log(`│ Show Threshold:    ${threshold.toFixed(0).padStart(6)}px       │`);
//             // console.log(`│ Buttons Visible:   ${shouldBeVisible ? '   YES' : '    NO'}           │`);
//             // console.log(`│ Top Position:      ${scrollY > SCROLL_CONFIG.TOP_POSITION_THRESHOLD ? 'top-24' : 'top-60'}          │`);
//             // console.log('└─────────────────────────────────────┘');

//             setIsVisible(shouldBeVisible);
//             setHasScrolled(scrollY > SCROLL_CONFIG.TOP_POSITION_THRESHOLD);
//         };

//         // Find the scrollable element
//         const findScrollableElement = () => {
//             const elements = [
//                 window,
//                 document,
//                 document.documentElement,
//                 document.body,
//                 document.querySelector('main'),
//                 document.querySelector('#__next'),
//                 document.querySelector('[data-scroll-container]')
//             ].filter(Boolean);

//             scrollableElementRef.current = document.documentElement;
//             return elements;
//         };

//         // Initial check with delay
//         setTimeout(() => {
//             if (mounted) {
//                 // console.log('🚀 FloatingSidebarButtons initialized with config:');
//                 // console.log(`   Mode: ${SCROLL_CONFIG.USE_PERCENTAGE ? 'PERCENTAGE' : 'PIXEL'}`);
//                 // console.log(`   Show threshold: ${SCROLL_CONFIG.USE_PERCENTAGE ? SCROLL_CONFIG.PERCENTAGE_THRESHOLD + '%' : SCROLL_CONFIG.SHOW_THRESHOLD + 'px'}`);
//                 // console.log(`   Top position threshold: ${SCROLL_CONFIG.TOP_POSITION_THRESHOLD}px`);
//                 handleScroll();
//             }
//         }, 100);

//         // Attach listeners to all possible scroll containers
//         const elements = findScrollableElement();
//         elements.forEach(element => {
//             if (element) {
//                 element.addEventListener('scroll', handleScroll, { passive: true });
//             }
//         });

//         // Fallback polling (checks every 500ms)
//         const intervalId = setInterval(() => {
//             if (mounted) {
//                 handleScroll();
//             }
//         }, 500);

//         return () => {
//             mounted = false;
//             elements.forEach(element => {
//                 if (element) {
//                     element.removeEventListener('scroll', handleScroll);
//                 }
//             });
//             clearInterval(intervalId);
//         };
//     }, []);

//     // Close when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (activeFloatingButton) {
//                 const buttonsContainer = document.getElementById('floating-sidebar-buttons');
//                 if (buttonsContainer && !buttonsContainer.contains(event.target as Node)) {
//                     setActiveFloatingButton(null);
//                 }
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, [activeFloatingButton]);

//     // --- Dynamic Category Logic ---
//     const lowerTitle = title.toLowerCase();
//     let displayCategory = category || "Game";

//     if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
//         displayCategory = "3D Art";
//     } else if (lowerTitle.includes("digital twin")) {
//         displayCategory = "Digital Twin";
//     } else if (lowerTitle.includes("metaverse")) {
//         displayCategory = "Metaverse";
//     } else if (lowerTitle.includes("blockchain")) {
//         displayCategory = "Blockchain";
//     } else if (lowerTitle.includes("app")) {
//         displayCategory = "App";
//     } else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
//         displayCategory = "AI Chatbot";
//     } else if (lowerTitle.includes("web")) {
//         displayCategory = "Web";
//     } else if (lowerTitle.includes("vr") || lowerTitle.includes("ar")) {
//         displayCategory = "AR VR";
//     } else if (lowerTitle.includes("mvp")) {
//         displayCategory = "MVP";
//     }

//     const currentCity = formatCountryName(slugItem?.slug || "") || "Noida";

//     // Safety fallback for cities
//     const countryData = linkingCities.find(c =>
//         c.country && slugItem?.country && c.country.toLowerCase() === slugItem.country.toLowerCase()
//     ) || linkingCities.find(c => c.country === "India");

//     const citiesList = countryData?.cities || [];

//     return (
//         <div
//             id="floating-sidebar-buttons"
//             className={`
//                 fixed right-1 z-[1000] flex flex-col space-y-4 items-end
//                 transition-opacity duration-300 ease-in-out
//                 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
//                 ${hasScrolled ? 'top-24' : 'top-60'}
//             `}
//         >
//             {/* SERVICE SELECTOR */}
//             <div className="relative w-[180px] sm:w-[300px] md:w-[280px]">
//                 <FloatingSidebarButton
//                     onClick={() => handleFloatingButtonClick('services')}
//                     isActive={activeFloatingButton === 'services'}
//                     className="w-full h-[56px] rounded-[10px] border border-gray-300 bg-[#C0C6CF]"
//                 >
//                     Our Other Top Services in <span className="text-[#FF5C5C] ml-1">{currentCity}</span>
//                 </FloatingSidebarButton>

//                 {activeFloatingButton === 'services' && (
//                     <div
//                         style={{ width: '100%', borderRadius: '0 0 10px 10px' }}
//                         className="absolute top-full right-0 bg-white border-x border-b border-gray-300 shadow-xl z-50"
//                     >
//                         <div className="p-5 flex flex-col space-y-4 max-h-[450px] overflow-y-auto no-scrollbar">
//                             {(services || []).map((item, i) => (
//                                 <Link
//                                     key={i}
//                                     href={getServiceUrl(item, slugItem?.slug || 'noida')}
//                                     onClick={() => setActiveFloatingButton(null)}
//                                     className="
//     font-inter
//     font-normal
//     text-[15px]
//     leading-snug
//     text-[#2D2D2D]
//     !underline
//     decoration-solid
//     decoration-[#2D2D2D]
//     underline-offset-0
//     border-b border-gray-50 pb-1 last:border-0
//     hover:text-[#FF5C5C]
//     transition-colors
//   "
//                                 >
//                                     Top {item} in {currentCity}
//                                 </Link>

//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* CITY SELECTOR */}
//             <div className="relative w-[180px] sm:w-[300px] md:w-[280px]">
//                 <FloatingSidebarButton
//                     onClick={() => handleFloatingButtonClick('cities')}
//                     isActive={activeFloatingButton === 'cities'}
//                     className="w-full rounded-[10px] border border-gray-300 bg-[#C0C6CF]"
//                 >
//                     Top <span className="text-[#FF5C5C] mx-1">{displayCategory} Development Services</span> in other cities
//                 </FloatingSidebarButton>


//                 {activeFloatingButton === 'cities' && (
//                     <div
//                         style={{ width: '100%', borderRadius: '0 0 10px 10px' }}
//                         className="absolute top-full right-0 bg-white border-x border-b border-gray-300 shadow-xl z-50"
//                     >
//                         <div className="p-5 flex flex-col space-y-4 max-h-[450px] overflow-y-auto no-scrollbar">
//                             {citiesList
//                                 .filter(city => city.slug !== (slugItem?.slug || "noida"))
//                                 .slice(0, 8)
//                                 .map((city, i) => (
//                                     <Link
//                                         key={i}
//                                         href={`/${displayCategory.toLowerCase().replace(' ', '-')}-development/${city.slug}`}
//                                         onClick={() => setActiveFloatingButton(null)}
//                                         className="
//     font-inter
//     font-normal
//     text-[16px]
//     leading-[1]
//     text-black
//     !underline
//     decoration-solid
//     decoration-black
//     underline-offset-0
//     border-b border-gray-50 pb-2 last:border-0
//     hover:text-[#FF5C5C]
//     transition-colors
//   "
//                                     >
//                                         Top {displayCategory} Development Services in {city.name}
//                                     </Link>

//                                 ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }





















'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { linkingCities } from '@/data/linking_cities';
import { SERVICES } from '@/constants/gameData';

const services = SERVICES;

// SCROLL CONFIGURATION
const SCROLL_CONFIG = {
    // Minimum scroll distance in pixels before buttons appear
    SHOW_THRESHOLD: 1200, // Increased from 600 to 1200 pixels

    // Scroll distance for "hasScrolled" state (affects top position)
    TOP_POSITION_THRESHOLD: 200, // Increased from 100 to 200 pixels

    // Alternative: Use percentage-based scrolling
    // Set to true to use percentage instead of pixels
    USE_PERCENTAGE: false,

    // If USE_PERCENTAGE is true, show buttons after scrolling this % of page
    PERCENTAGE_THRESHOLD: 25, // Show after scrolling 25% of the page
};

// Function to generate service URLs
const getServiceUrl = (serviceName: string, location: string) => {
    const serviceMap: Record<string, string> = {
        "Game Development Services": "game-development",
        "Web Development Services": "web-development",
        "AR and VR Development Services": "ar-vr-development",
        "App Development Services": "app-development",
        "Metaverse Development Services": "metaverse-development",
        "AI Chatbot Development Services": "ai-chatbot-development",
        "Blockchain Development Services": "blockchain-development",
        "3D Art Services": "3d-art-development",
        "MVP Prototyping Services": "mvp-development",
        "Digital Twin Services": "digital-twin-development"
    };

    const slug = serviceMap[serviceName] || serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `/${slug}/${location}`;
};

// Function to format country name
const formatCountryName = (slug: string) => {
    if (!slug) return "";
    const formatted = slug.replace(/-/g, ' ');
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

interface FloatingSidebarButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
    isActive?: boolean;
}

const FloatingSidebarButton = ({
    children,
    className = "",
    onClick,
    isActive = false,
}: FloatingSidebarButtonProps) => {
    return (
       <button
  onClick={onClick}
  className={`
    w-full
    min-h-[56px]
    inline-flex
    items-center
    gap-2 sm:gap-3
    px-3 sm:px-4
    py-2 sm:py-0
    bg-white
    border border-[#C0C6CF]
    rounded-[10px]
    font-inter font-semibold
    text-gray-900
    text-sm sm:text-base
    leading-snug
    shadow-[0_0_57.9px_rgba(0,0,0,0.12)]
    transition-all
    ${isActive ? "border-b-transparent rounded-b-none shadow-none" : ""}
    ${className}
  `}
>

            {/* ICON — perfectly centered */}
            <span className="shrink-0 flex items-center justify-center">
                {isActive ? (
                    <ChevronUp size={20} className="stroke-[2.5px]" />
                ) : (
                    <ChevronDown size={20} className="stroke-[2.5px]" />
                )}
            </span>

            {/* TEXT — clean wrapping */}
            <span className="flex-1 text-left whitespace-normal break-words">
                {children}
            </span>
        </button>
    );
};




interface FloatingSidebarButtonsProps {
    slugItem?: {
        country: string;
        slug: string;
        backgroundImage: string;
    };
    title?: string;
    category?: string;
}

export default function FloatingSidebarButtons({
    slugItem = { country: "India", slug: "noida", backgroundImage: "/usa.jpeg" },
    title = "Game Development",
    category = "Game"
}: FloatingSidebarButtonsProps) {
    const [activeFloatingButton, setActiveFloatingButton] = useState<'services' | 'cities' | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const scrollableElementRef = useRef<HTMLElement | null>(null);

    // Handle floating button clicks
    const handleFloatingButtonClick = (buttonType: 'services' | 'cities') => {
        setActiveFloatingButton(activeFloatingButton === buttonType ? null : buttonType);
    };

    // Effect to find the scrollable element and handle scroll
    useEffect(() => {
        let mounted = true;

        const getScrollPosition = () => {
            // Try multiple methods to get scroll position
            const positions = [
                window.scrollY,
                window.pageYOffset,
                document.documentElement.scrollTop,
                document.body.scrollTop
            ];

            // Also check if there's a main scrollable container
            const mainElement = document.querySelector('main');
            const bodyElement = document.body;
            const htmlElement = document.documentElement;

            if (mainElement && mainElement.scrollTop > 0) {
                positions.push(mainElement.scrollTop);
            }
            if (bodyElement && bodyElement.scrollTop > 0) {
                positions.push(bodyElement.scrollTop);
            }
            if (htmlElement && htmlElement.scrollTop > 0) {
                positions.push(htmlElement.scrollTop);
            }

            // Find the maximum scroll position (the one that's actually scrolling)
            const maxScroll = Math.max(...positions.filter(p => !isNaN(p)));

            return maxScroll;
        };

        const calculateScrollThreshold = () => {
            if (SCROLL_CONFIG.USE_PERCENTAGE) {
                // Calculate threshold based on percentage of total scrollable height
                const scrollHeight = document.documentElement.scrollHeight;
                const clientHeight = document.documentElement.clientHeight;
                const scrollableHeight = scrollHeight - clientHeight;
                const threshold = (scrollableHeight * SCROLL_CONFIG.PERCENTAGE_THRESHOLD) / 100;

                // console.log('📊 PERCENTAGE MODE:');
                // console.log(`  Total height: ${scrollHeight}px`);
                // console.log(`  Viewport height: ${clientHeight}px`);
                // console.log(`  Scrollable height: ${scrollableHeight}px`);
                // console.log(`  Threshold (${SCROLL_CONFIG.PERCENTAGE_THRESHOLD}%): ${threshold}px`);

                return threshold;
            } else {
                // Use fixed pixel value
                console.log(`📏 PIXEL MODE: Threshold = ${SCROLL_CONFIG.SHOW_THRESHOLD}px`);
                return SCROLL_CONFIG.SHOW_THRESHOLD;
            }
        };

        const handleScroll = () => {
            if (!mounted) return;

            const scrollY = getScrollPosition();
            const threshold = calculateScrollThreshold();
            const shouldBeVisible = scrollY >= threshold;

            // Calculate scroll percentage for informational purposes
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollableHeight = scrollHeight - clientHeight;
            const scrollPercentage = scrollableHeight > 0
                ? Math.round((scrollY / scrollableHeight) * 100)
                : 0;

            // console.log('┌─────────────────────────────────────┐');
            // console.log('│       SCROLL EVENT DETECTED         │');
            // console.log('├─────────────────────────────────────┤');
            // console.log(`│ Current Scroll:    ${scrollY.toFixed(0).padStart(6)}px (${scrollPercentage}%) │`);
            // console.log(`│ Show Threshold:    ${threshold.toFixed(0).padStart(6)}px       │`);
            // console.log(`│ Buttons Visible:   ${shouldBeVisible ? '   YES' : '    NO'}           │`);
            // console.log(`│ Top Position:      ${scrollY > SCROLL_CONFIG.TOP_POSITION_THRESHOLD ? 'top-24' : 'top-60'}          │`);
            // console.log('└─────────────────────────────────────┘');

            setIsVisible(shouldBeVisible);
            setHasScrolled(scrollY > SCROLL_CONFIG.TOP_POSITION_THRESHOLD);
        };

        // Find the scrollable element
        const findScrollableElement = () => {
            const elements = [
                window,
                document,
                document.documentElement,
                document.body,
                document.querySelector('main'),
                document.querySelector('#__next'),
                document.querySelector('[data-scroll-container]')
            ].filter(Boolean);

            scrollableElementRef.current = document.documentElement;
            return elements;
        };

        // Initial check with delay
        setTimeout(() => {
            if (mounted) {
                // console.log('🚀 FloatingSidebarButtons initialized with config:');
                // console.log(`   Mode: ${SCROLL_CONFIG.USE_PERCENTAGE ? 'PERCENTAGE' : 'PIXEL'}`);
                // console.log(`   Show threshold: ${SCROLL_CONFIG.USE_PERCENTAGE ? SCROLL_CONFIG.PERCENTAGE_THRESHOLD + '%' : SCROLL_CONFIG.SHOW_THRESHOLD + 'px'}`);
                // console.log(`   Top position threshold: ${SCROLL_CONFIG.TOP_POSITION_THRESHOLD}px`);
                handleScroll();
            }
        }, 100);

        // Attach listeners to all possible scroll containers
        const elements = findScrollableElement();
        elements.forEach(element => {
            if (element) {
                element.addEventListener('scroll', handleScroll, { passive: true });
            }
        });

        // Fallback polling (checks every 500ms)
        const intervalId = setInterval(() => {
            if (mounted) {
                handleScroll();
            }
        }, 500);

        return () => {
            mounted = false;
            elements.forEach(element => {
                if (element) {
                    element.removeEventListener('scroll', handleScroll);
                }
            });
            clearInterval(intervalId);
        };
    }, []);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeFloatingButton) {
                const buttonsContainer = document.getElementById('floating-sidebar-buttons');
                if (buttonsContainer && !buttonsContainer.contains(event.target as Node)) {
                    setActiveFloatingButton(null);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeFloatingButton]);

    // --- Dynamic Category Logic ---
    const lowerTitle = title.toLowerCase();
    let displayCategory = category || "Game";

    if (lowerTitle.includes("3d") || lowerTitle.includes("art")) {
        displayCategory = "3D Art";
    } else if (lowerTitle.includes("digital twin")) {
        displayCategory = "Digital Twin";
    } else if (lowerTitle.includes("metaverse")) {
        displayCategory = "Metaverse";
    } else if (lowerTitle.includes("blockchain")) {
        displayCategory = "Blockchain";
    } else if (lowerTitle.includes("app")) {
        displayCategory = "App";
    } else if (lowerTitle.includes("ai") || lowerTitle.includes("chatbot")) {
        displayCategory = "AI Chatbot";
    } else if (lowerTitle.includes("web")) {
        displayCategory = "Web";
    } else if (lowerTitle.includes("vr") || lowerTitle.includes("ar")) {
        displayCategory = "AR VR";
    } else if (lowerTitle.includes("mvp")) {
        displayCategory = "MVP";
    }

    const currentCity = formatCountryName(slugItem?.slug || "") || "Noida";

    // Safety fallback for cities
    const countryData = linkingCities.find(c =>
        c.country && slugItem?.country && c.country.toLowerCase() === slugItem.country.toLowerCase()
    ) || linkingCities.find(c => c.country === "India");

    const citiesList = countryData?.cities || [];

    return (
        <div
            id="floating-sidebar-buttons"
            className={`
                fixed right-2 sm:right-4 z-[1000] flex flex-col space-y-0 items-end
                transition-opacity duration-300 ease-in-out
                ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                ${hasScrolled ? 'top-24' : 'top-60'}
                max-w-[calc(100vw-1rem)] sm:max-w-none
            `}
        >
            {/* SERVICE SELECTOR */}
            <div className="w-[180px] sm:w-[300px] md:w-[280px]">
                <FloatingSidebarButton
                    onClick={() => handleFloatingButtonClick('services')}
                    isActive={activeFloatingButton === 'services'}
                    className="w-full h-auto min-h-[56px] rounded-[10px] border border-gray-300 bg-[#C0C6CF]"
                >
                    Our Other Top Services in <span className="text-[#FF5C5C] ml-1">{currentCity}</span>
                </FloatingSidebarButton>

                {activeFloatingButton === 'services' && (
                    <div
                        style={{ width: '100%', borderRadius: '0 0 10px 10px' }}
                        className="bg-white border-x border-b border-gray-300 shadow-xl z-50"
                    >
                        <div className="p-3 sm:p-5 flex flex-col space-y-3 sm:space-y-4 max-h-[350px] sm:max-h-[450px] overflow-y-auto no-scrollbar">
                            {(services || []).map((item, i) => (
                                <Link
                                    key={i}
                                    href={getServiceUrl(item, slugItem?.slug || 'noida')}
                                    onClick={() => setActiveFloatingButton(null)}
                                    className="
    font-inter
    font-normal
    text-[13px] sm:text-[15px]
    leading-snug
    text-[#2D2D2D]
    !underline
    decoration-solid
    decoration-[#2D2D2D]
    underline-offset-0
    border-b border-gray-50 pb-1 last:border-0
    hover:text-[#FF5C5C]
    transition-colors
  "
                                >
                                    Top {item} in {currentCity}
                                </Link>

                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* CITY SELECTOR */}
            <div className="w-[180px] sm:w-[300px] md:w-[280px] mt-4">
                <FloatingSidebarButton
                    onClick={() => handleFloatingButtonClick('cities')}
                    isActive={activeFloatingButton === 'cities'}
                    className="w-full h-auto min-h-[56px] rounded-[10px] border border-gray-300 bg-[#C0C6CF]"
                >
                    Top <span className="text-[#FF5C5C] mx-1">{displayCategory} Development Services</span> in other cities
                </FloatingSidebarButton>


                {activeFloatingButton === 'cities' && (
                    <div
                        style={{ width: '100%', borderRadius: '0 0 10px 10px' }}
                        className="bg-white border-x border-b border-gray-300 shadow-xl z-50"
                    >
                        <div className="p-3 sm:p-5 flex flex-col space-y-3 sm:space-y-4 max-h-[350px] sm:max-h-[450px] overflow-y-auto no-scrollbar">
                            {citiesList
                                .filter(city => city.slug !== (slugItem?.slug || "noida"))
                                .slice(0, 8)
                                .map((city, i) => (
                                    <Link
                                        key={i}
                                        href={`/${displayCategory.toLowerCase().replace(' ', '-')}-development/${city.slug}`}
                                        onClick={() => setActiveFloatingButton(null)}
                                        className="
    font-inter
    font-normal
    text-[14px] sm:text-[16px]
    leading-[1.2]
    text-black
    !underline
    decoration-solid
    decoration-black
    underline-offset-0
    border-b border-gray-50 pb-2 last:border-0
    hover:text-[#FF5C5C]
    transition-colors
  "
                                    >
                                        Top {displayCategory} Development Services in {city.name}
                                    </Link>

                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}