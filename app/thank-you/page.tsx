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


















































































// >>
// import React from 'react';
// import Link from 'next/link';
// import {
//   FiInstagram,
//   FiTwitter,
//   FiLinkedin,
//   FiGlobe,
// } from 'react-icons/fi';
// import { BiNetworkChart } from 'react-icons/bi';
// import { TbAugmentedReality, TbDevices } from 'react-icons/tb';
// import { IoCubeOutline } from 'react-icons/io5';

// const ThankYouPage = () => {
//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 font-sans text-slate-900">
//       <main className="max-w-3xl w-full space-y-12 text-center">
        
//         {/* --- Logo Section --- */}
//         <div className="flex flex-col items-center space-y-3">
//           {/* <FiHexagon className="w-12 h-12 text-blue-600/80" style={{ strokeWidth: '1.5' }} /> */}
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width={68} height={68} fill="none">
//             <defs>
//               <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
//                 <stop offset="0%" stopColor="#38bdf8" />
//                 <stop offset="100%" stopColor="#2563eb" />
//               </linearGradient>
//               <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="1">
//                 <stop offset="0%" stopColor="#60a5fa" />
//                 <stop offset="100%" stopColor="#1d4ed8" />
//               </linearGradient>
//             </defs>
//             <polygon points="45,5 80,25 80,65 45,85 10,65 10,25" stroke="url(#lg1)" strokeWidth="3" fill="none" />
//             <polygon points="45,20 63,33 45,46 27,33" fill="url(#lg1)" opacity={0.9} />
//             <polygon points="45,44 63,57 45,70 27,57" fill="url(#lg2)" opacity={0.75} />
//           </svg>
//           <h2 className="text-xl font-semibold tracking-[0.15em] text-slate-800 uppercase">
//             Abhiwan
//           </h2>
//         </div>

//         <div className="space-y-6">
//           <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 leading-tight">
//             Thank You for
//             <br />
//             Reaching Out!
//           </h1>

//           <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
//             <p>
//               Your message has been received and our team will connect with you
//               shortly.
//             </p>
//             <p>
//               We build immersive, AI-powered and interactive solutions for the
//               future.
//             </p>
//           </div>
//         </div>

//         {/* --- CTA Buttons Section --- */}
//         {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
//           <Button href="/">Back to Homepage</Button>
//           <Button href="/services">Explore Our Services</Button>
//         </div> */}
//         <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
//           <Link
//             href="/"
//             className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#123C88] to-[#00C2D3] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
//           >
//             Back to Homepage
//           </Link>

//           <Link
//             href="/services"
//             className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#123C88] to-[#00C2D3] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
//           >
//             Explore Our Services
//           </Link>
//         </div>

//         {/* --- Services Grid Section --- */}
//         {/* Bounded by light horizontal lines */}
//         <div className="border-t border-b border-slate-100 py-10 my-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
//             <ServiceItem icon={<BiNetworkChart />} title="AI Solutions" />
//             <ServiceItem icon={<TbAugmentedReality />} title="Metaverse Development" />
//             <ServiceItem icon={<IoCubeOutline />} title="AR/VR Experiences" />
//             <ServiceItem icon={<TbDevices />} title="Blockchain & Digital Twins" />
//           </div>
//         </div>

//         {/* --- Footer Section --- */}
//         <div className="space-y-8">
//           {/* Social Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-slate-800">
//               Follow Our Journey
//             </h3>
//             <div className="flex items-center justify-center gap-6 text-slate-700">
//               <Link href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
//                 <FiGlobe className="w-6 h-6" />
//                 <span className=" sm:inline">abhiwan.com</span>
//               </Link>
//               <SocialIcon icon={<FiLinkedin />} />
//               <SocialIcon icon={<FiInstagram />} />
//               <SocialIcon icon={<FiTwitter />} />
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="text-slate-600">
//             <p>Need immediate assistance?</p>
//             <p>
//               Call / WhatsApp:{' '}
//               <a
//                 href="tel:+919599145805"
//                 className="font-semibold text-blue-600 hover:underline"
//               >
//                 +91 95991 45805
//               </a>
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// // --- Reusable Sub-components ---

// // Button Component designed to match the image's blue gradient style
// interface ButtonProps {
//   children: React.ReactNode;
//   href: string;
// }

// const Button: React.FC<ButtonProps> = ({ children, href }) => {
//   return (
//     <Link
//       href={href}
//       className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-white 
//                  bg-gradient-to-b from-blue-800 to-cyan-600 
//                  shadow-[0_4px_10px_rgba(0,100,200,0.3)]
//                  hover:shadow-[0_6px_15px_rgba(0,100,200,0.4)]
//                  hover:brightness-105 active:scale-[0.98]
//                  transition-all duration-200 ease-in-out"
//     >
//       {children}
//     </Link>
//   );
// };

// // Service Item Component for the grid
// interface ServiceItemProps {
//   icon: React.ReactNode;
//   title: string;
// }

// const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title }) => {
//   return (
//     <div className="flex flex-col items-center gap-3 text-center group">
//       {/* Icon container with brand color style */}
//       <div className="text-4xl text-cyan-600 group-hover:text-blue-700 transition-colors duration-300">
//         {icon}
//       </div>
//       <h4 className="text-sm sm:text-base font-medium text-slate-700 max-w-[120px] leading-tight">
//         {title}
//       </h4>
//     </div>
//   );
// };

// // Simple Social Media Icon Link Component
// interface SocialIconProps {
//   icon: React.ReactNode;
//   href?: string;
// }

// const SocialIcon: React.FC<SocialIconProps> = ({ icon, href = '#' }) => {
//   return (
//     <Link
//       href={href}
//       className="p-1 hover:text-blue-600 transition-colors duration-200"
//     >
//       <div className="w-6 h-6">{icon} </div>
//     </Link>
//   );
// };

// export default ThankYouPage;


// >>
// "use client";

// import type { NextPage } from "next";
// import Head from "next/head";

// interface Service {
//   id: number;
//   label: string;
//   icon: React.ReactNode;
// }

// interface SocialLink {
//   id: number;
//   label: string;
//   href: string;
//   icon: React.ReactNode;
// }


// const AIIcon: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={56} height={56} fill="none">
//     <circle cx="32" cy="32" r="7" fill="#38bdf8" />
//     <line x1="32" y1="25" x2="32" y2="9"  stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
//     <line x1="32" y1="39" x2="32" y2="55" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
//     <line x1="25" y1="32" x2="9"  y2="32" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
//     <line x1="39" y1="32" x2="55" y2="32" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
//     <line x1="27" y1="27" x2="15" y2="15" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
//     <line x1="37" y1="37" x2="49" y2="49" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
//     <line x1="37" y1="27" x2="49" y2="15" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
//     <line x1="27" y1="37" x2="15" y2="49" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
//     <circle cx="32" cy="9"  r="3.5" fill="#1d4ed8" />
//     <circle cx="32" cy="55" r="3.5" fill="#1d4ed8" />
//     <circle cx="9"  cy="32" r="3.5" fill="#1d4ed8" />
//     <circle cx="55" cy="32" r="3.5" fill="#1d4ed8" />
//     <circle cx="15" cy="15" r="3.5" fill="#1d4ed8" />
//     <circle cx="49" cy="49" r="3.5" fill="#1d4ed8" />
//     <circle cx="49" cy="15" r="3.5" fill="#1d4ed8" />
//     <circle cx="15" cy="49" r="3.5" fill="#1d4ed8" />
//   </svg>
// );

// const MetaverseIcon: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={56} height={56} fill="none">
//     <defs>
//       <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0%" stopColor="#60a5fa" />
//         <stop offset="100%" stopColor="#1e3a8a" />
//       </linearGradient>
//     </defs>
//     <rect x="8"  y="21" width="48" height="23" rx="11" fill="url(#mg)" />
//     <rect x="13" y="27" width="14" height="11"  rx="5.5" fill="white" opacity={0.92} />
//     <rect x="37" y="27" width="14" height="11"  rx="5.5" fill="white" opacity={0.92} />
//     <rect x="27" y="30" width="10" height="5"   rx="2.5" fill="#bfdbfe" opacity={0.7} />
//     <path d="M8 32 Q3 32 3 37 Q3 42 8 42"   stroke="#93c5fd" strokeWidth="2" fill="none" strokeLinecap="round" />
//     <path d="M56 32 Q61 32 61 37 Q61 42 56 42" stroke="#93c5fd" strokeWidth="2" fill="none" strokeLinecap="round" />
//   </svg>
// );

// const ARVRIcon: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={56} height={56} fill="none">
//     <defs>
//       <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0%" stopColor="#38bdf8" />
//         <stop offset="100%" stopColor="#1d4ed8" />
//       </linearGradient>
//     </defs>
//     <polygon points="32,5 54,18 54,44 32,57 10,44 10,18" stroke="#38bdf8" strokeWidth="2" fill="none" opacity={0.55} />
//     <circle cx="32" cy="24" r="8" fill="url(#ag)" />
//     <path d="M17 54 Q17 38 32 38 Q47 38 47 54" fill="url(#ag)" />
//   </svg>
// );

// const BlockchainIcon: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={56} height={56} fill="none">
//     <defs>
//       <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#3b82f6" />
//         <stop offset="100%" stopColor="#1e3a8a" />
//       </linearGradient>
//     </defs>
//     <rect x="26" y="6"  width="24" height="42" rx="5" fill="url(#bg2)" />
//     <rect x="29" y="10" width="18" height="30" rx="3" fill="white" opacity={0.12} />
//     <circle cx="38" cy="44" r="2.2" fill="white" opacity={0.55} />
//     <line x1="6"  y1="20" x2="24" y2="20" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" />
//     <line x1="10" y1="29" x2="24" y2="29" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" />
//     <line x1="6"  y1="38" x2="24" y2="38" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" />
//   </svg>
// );

// const AbhiwanLogo: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width={68} height={68} fill="none">
//     <defs>
//       <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0%" stopColor="#38bdf8" />
//         <stop offset="100%" stopColor="#2563eb" />
//       </linearGradient>
//       <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0%" stopColor="#60a5fa" />
//         <stop offset="100%" stopColor="#1d4ed8" />
//       </linearGradient>
//     </defs>
//     <polygon points="45,5 80,25 80,65 45,85 10,65 10,25" stroke="url(#lg1)" strokeWidth="3" fill="none" />
//     <polygon points="45,20 63,33 45,46 27,33" fill="url(#lg1)" opacity={0.9} />
//     <polygon points="45,44 63,57 45,70 27,57" fill="url(#lg2)" opacity={0.75} />
//   </svg>
// );

// const GlobeIcon: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"
//     fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10" />
//     <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//   </svg>
// );

// const LinkedInIcon: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );

// const InstagramIcon: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"
//     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//   </svg>
// );

// const TwitterIcon: React.FC = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
//     <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//   </svg>
// );

// /* ─────────────────────────────────────────────
//    Data
// ───────────────────────────────────────────── */
// const SERVICES: Service[] = [
//   { id: 1, label: "AI Solutions",                icon: <AIIcon /> },
//   { id: 2, label: "Metaverse\nDevelopment",      icon: <MetaverseIcon /> },
//   { id: 3, label: "AR/VR\nExperiences",          icon: <ARVRIcon /> },
//   { id: 4, label: "Blockchain &\nDigital Twins", icon: <BlockchainIcon /> },
// ];

// const SOCIAL_LINKS: SocialLink[] = [
//   { id: 1, label: "abhiwan.com", href: "https://abhiwan.com", icon: <GlobeIcon /> },
//   { id: 2, label: "LinkedIn",   href: "#", icon: <LinkedInIcon /> },
//   { id: 3, label: "Instagram",  href: "#", icon: <InstagramIcon /> },
//   { id: 4, label: "Twitter",    href: "#", icon: <TwitterIcon /> },
// ];

// /* ─────────────────────────────────────────────
//    Scoped styles — identical to preview.html CSS
// ───────────────────────────────────────────── */
// const PageStyles: React.FC = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

//     .ty-root { font-family: 'DM Sans', sans-serif; }

//     @keyframes fadeDown {
//       from { opacity: 0; transform: translateY(-14px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes fadeIn {
//       from { opacity: 0; }
//       to   { opacity: 1; }
//     }
//     .anim-0 { animation: fadeDown 0.6s 0.00s ease both; }
//     .anim-1 { animation: fadeDown 0.6s 0.10s ease both; }
//     .anim-2 { animation: fadeDown 0.6s 0.20s ease both; }
//     .anim-3 { animation: fadeDown 0.6s 0.30s ease both; }
//     .anim-4 { animation: fadeIn  0.5s 0.40s ease both; }
//     .anim-5 { animation: fadeDown 0.6s 0.45s ease both; }
//     .anim-6 { animation: fadeDown 0.6s 0.50s ease both; }
//     .anim-7 { animation: fadeDown 0.6s 0.55s ease both; }

//     .ty-btn {
//       display: inline-block;
//       padding: 13px 28px;
//       border-radius: 9999px;
//       font-size: 0.875rem;
//       font-weight: 600;
//       color: #fff;
//       text-decoration: none;
//       background: linear-gradient(180deg, #3b7ff5 0%, #1a3a9e 100%);
//       box-shadow: 0 4px 18px rgba(37,99,235,0.40), inset 0 1px 0 rgba(255,255,255,0.18);
//       border: 1px solid rgba(255,255,255,0.15);
//       cursor: pointer;
//       transition: filter 0.2s, transform 0.15s;
//     }
//     .ty-btn:hover  { filter: brightness(1.12); transform: translateY(-1px); }
//     .ty-btn:active { filter: brightness(0.95); transform: translateY(0); }

//     .ty-divider {
//       width: 100%; max-width: 560px;
//       height: 1px; background: #e5e7eb;
//     }

//     .ty-service-grid {
//       display: grid;
//       grid-template-columns: repeat(4, 1fr);
//       width: 100%; max-width: 560px;
//     }
//     @media (max-width: 480px) {
//       .ty-service-grid { grid-template-columns: repeat(2, 1fr); }
//       .ty-service-item:nth-child(2) { border-right: none !important; }
//       .ty-service-item:nth-child(1),
//       .ty-service-item:nth-child(2) { border-bottom: 1px solid #e5e7eb; }
//     }

//     .ty-social-website {
//       display: flex; align-items: center; gap: 7px;
//       font-size: 0.875rem; color: #374151;
//       text-decoration: none; transition: color 0.2s;
//     }
//     .ty-social-website:hover { color: #2563eb; }

//     .ty-social-icon {
//       width: 36px; height: 36px; border-radius: 8px;
//       background: #1e2d4d; color: #fff;
//       display: flex; align-items: center; justify-content: center;
//       text-decoration: none; transition: background 0.2s, transform 0.15s;
//     }
//     .ty-social-icon:hover { background: #2563eb; transform: translateY(-2px); }

//     .ty-phone-link { color: #2563eb; font-weight: 700; text-decoration: none; }
//     .ty-phone-link:hover { text-decoration: underline; }
//   `}</style>
// );

// /* ─────────────────────────────────────────────
//    Page
// ───────────────────────────────────────────── */
// const ThankYouPage: NextPage = () => {
//   return (
//     <>
//       {/* <Head>
//         <title>Thank You — Abhiwan</title>
//         <meta name="description" content="Thank you for reaching out to Abhiwan. Our team will connect with you shortly." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head> */}

//       <PageStyles />

//       <main
//         className="ty-root"
//         style={{
//           minHeight: "100vh",
//           background: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           padding: "48px 24px 60px",
//         }}
//       >
//         {/* ── Logo ── */}
//         <div className="anim-0" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginBottom: 36 }}>
//           <AbhiwanLogo />
//           <span style={{ letterSpacing: "0.32em", fontSize: 13, fontWeight: 700, color: "#1a2d5a", textTransform: "uppercase" }}>
//             ABHIWAN
//           </span>
//         </div>

//         {/* ─ ─ Heading ── */}
//         <h1
//           className="anim-1"
//           style={{ fontSize: "clamp(1.9rem, 5vw, 2.6rem)", fontWeight: 800, color: "#1e2d4d", textAlign: "center", lineHeight: 1.2, marginBottom: 22 }}
//         >
//           Thank You for<br />Reaching Out!
//         </h1>

//         {/* ── Body copy ── */}
//         <p className="anim-2" style={{ fontSize: "1rem", color: "#4b5563", textAlign: "center", lineHeight: 1.65, maxWidth: 340, marginBottom: 10 }}>
//           Your message has been received and our team will connect with you shortly.
//         </p>
//         <p className="anim-2" style={{ fontSize: "1rem", color: "#4b5563", textAlign: "center", lineHeight: 1.65, maxWidth: 340, marginBottom: 40 }}>
//           We build immersive, AI-powered and interactive solutions for the future.
//         </p>

//         {/* ── CTA Buttons ── */}
//         <div className="anim-3" style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: 44 }}>
//           <a href="/" className="ty-btn">Back to Homepage</a>
//           <a href="/services" className="ty-btn">Explore Our Services</a>
//         </div>

//         {/* ── Divider ── */}
//         <div className="ty-divider anim-4" style={{ marginBottom: 36 }} />

//         {/* ── Services Grid ── */}
//         <div className="ty-service-grid anim-5" style={{ marginBottom: 36 }}>
//           {SERVICES.map((service, index) => (
//             <div
//               key={service.id}
//               className="ty-service-item"
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 12,
//                 padding: "12px 8px",
//                 borderRight: index < SERVICES.length - 1 ? "1px solid #e5e7eb" : undefined,
//               }}
//             >
//               {service.icon}
//               <span style={{ fontSize: "0.78rem", color: "#374151", textAlign: "center", lineHeight: 1.45, fontWeight: 500, whiteSpace: "pre-line" }}>
//                 {service.label}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* ── Divider ── */}
//         <div className="ty-divider anim-4" style={{ marginBottom: 32 }} />

//         {/* ── Social ── */}
//         <div className="anim-6" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 44 }}>
//           <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e2d4d" }}>Follow Our Journey</p>
//           <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
//             <a href={SOCIAL_LINKS[0].href} className="ty-social-website" aria-label="abhiwan.com">
//               {SOCIAL_LINKS[0].icon}
//               <span>abhiwan.com</span>
//             </a>
//             <span style={{ color: "#d1d5db", fontSize: "1.1rem", lineHeight: 1, userSelect: "none" }}>|</span>
//             {SOCIAL_LINKS.slice(1).map((link) => (
//               <a key={link.id} href={link.href} className="ty-social-icon" aria-label={link.label}>
//                 {link.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ── Contact ── */}
//         <div className="anim-7" style={{ textAlign: "center", fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>
//           <p>Need <strong>immediate assistance?</strong></p>
//           <p>Call / WhatsApp: <a href="tel:+919599145805" className="ty-phone-link">+91 95991 45805</a></p>
//         </div>

//       </main>
//     </>
//   );
// };

// export default ThankYouPage;


// >>
// import Image from "next/image";
// import Link from "next/link";
// import { JSX } from "react";

// const metadata = {
//   title: "Thank You | Abhiwan",
//   description: "Thank you for reaching out to Abhiwan Technology.",
// };

// type ServiceItem = {
//   icon: string;
//   title: string;
// };

// const services: ServiceItem[] = [
//   { icon: "/icons/ai.svg", title: "AI Solutions" },
//   { icon: "/icons/metaverse.svg", title: "Metaverse Development" },
//   { icon: "/icons/arvr.svg", title: "AR/VR Experiences" },
//   { icon: "/icons/blockchain.svg", title: "Blockchain & Digital Twins" },
// ];

// export default function ThankYouPage(): JSX.Element {
//   return (
//     <main className="min-h-screen bg-[#F5F6F8] text-[#0F1E3D]">
//       <div className="max-w-5xl mx-auto px-6 py-20 text-center">

//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <Image
//             src="/logo.svg"
//             alt="Abhiwan Logo"
//             width={80}
//             height={80}
//             priority
//           />
//         </div>

//         {/* Brand Name */}
//         <p className="tracking-[0.3em] text-sm font-medium mb-8">
//           ABHIWAN
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
//           Thank You for <br className="hidden md:block" />
//           Reaching Out!
//         </h1>

//         {/* Sub Text */}
//         <p className="text-lg md:text-xl text-[#3C4A63] mb-4">
//           Your message has been received and our team will
//           <br className="hidden md:block" />
//           connect with you shortly.
//         </p>

//         <p className="text-lg md:text-xl text-[#3C4A63] mb-12">
//           We build immersive, AI-powered and interactive
//           <br className="hidden md:block" />
//           solutions for the future.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
//           <Link
//             href="/"
//             className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#123C88] to-[#00C2D3] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
//           >
//             Back to Homepage
//           </Link>

//           <Link
//             href="/services"
//             className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#123C88] to-[#00C2D3] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
//           >
//             Explore Our Services
//           </Link>
//         </div>

//         <hr className="border-gray-300 mb-12" />

//         {/* Services Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
//           {services.map((service) => (
//             <div key={service.title} className="flex flex-col items-center">
//               <Image
//                 src={service.icon}
//                 alt={service.title}
//                 width={60}
//                 height={60}
//                 className="mb-4"
//               />
//               <p className="text-sm md:text-base font-medium">
//                 {service.title}
//               </p>
//             </div>
//           ))}
//         </div>

//         <hr className="border-gray-300 mb-12" />

//         {/* Social Section */}
//         <h3 className="text-xl font-semibold mb-6">
//           Follow Our Journey
//         </h3>

//         <div className="flex items-center justify-center gap-8 mb-16">
//           <Link
//             href="https://www.abhiwan.com"
//             target="_blank"
//             className="text-[#0F1E3D] text-base font-medium"
//           >
//             abhiwan.com
//           </Link>

//           <Image
//             src="/icons/linkedin.svg"
//             alt="LinkedIn"
//             width={28}
//             height={28}
//           />
//           <Image
//             src="/icons/instagram.svg"
//             alt="Instagram"
//             width={28}
//             height={28}
//           />
//           <Image
//             src="/icons/twitter.svg"
//             alt="Twitter"
//             width={28}
//             height={28}
//           />
//         </div>

//         {/* Contact Section */}
//         <div>
//           <p className="text-lg mb-2">
//             Need immediate assistance?
//           </p>
//           <p className="text-xl font-medium">
//             Call / WhatsApp:{" "}
//             <span className="text-[#0077B6]">
//               +91 95991 45805
//             </span>
//           </p>
//         </div>

//       </div>
//     </main>
//   );
// }






        // <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
        //   <Link
        //     href="/"
        //     className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#123C88] to-[#00C2D3] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
        //   >
        //     Back to Homepage
        //   </Link>

        //   <Link
        //     href="/services"
        //     className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#123C88] to-[#00C2D3] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
        //   >
        //     Explore Our Services
        //   </Link>
        // </div>

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width={68} height={68} fill="none">
    //   <defs>
    //     <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
    //       <stop offset="0%" stopColor="#38bdf8" />
    //       <stop offset="100%" stopColor="#2563eb" />
    //     </linearGradient>
    //     <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="1">
    //       <stop offset="0%" stopColor="#60a5fa" />
    //       <stop offset="100%" stopColor="#1d4ed8" />
    //     </linearGradient>
    //   </defs>
    //   <polygon points="45,5 80,25 80,65 45,85 10,65 10,25" stroke="url(#lg1)" strokeWidth="3" fill="none" />
    //   <polygon points="45,20 63,33 45,46 27,33" fill="url(#lg1)" opacity={0.9} />
    //   <polygon points="45,44 63,57 45,70 27,57" fill="url(#lg2)" opacity={0.75} />
    // </svg>