import React from 'react';
import Link from 'next/link';
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
} from 'react-icons/fi';
import { BiNetworkChart } from 'react-icons/bi';
import { TbAugmentedReality, TbDevices } from 'react-icons/tb';
import { IoCubeOutline } from 'react-icons/io5';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 font-sans text-slate-900">
      <main className="max-w-3xl w-full space-y-12 text-center">
        
        {/* --- Logo Section --- */}
        <div className="flex flex-col items-center space-y-3">
          {/* <FiHexagon className="w-12 h-12 text-blue-600/80" style={{ strokeWidth: '1.5' }} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width={68} height={68} fill="none">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <polygon points="45,5 80,25 80,65 45,85 10,65 10,25" stroke="url(#lg1)" strokeWidth="3" fill="none" />
            <polygon points="45,20 63,33 45,46 27,33" fill="url(#lg1)" opacity={0.9} />
            <polygon points="45,44 63,57 45,70 27,57" fill="url(#lg2)" opacity={0.75} />
          </svg>
          <h2 className="text-xl font-semibold tracking-[0.15em] text-slate-800 uppercase">
            Abhiwan
          </h2>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 leading-tight">
            Thank You for
            <br />
            Reaching Out!
          </h1>

          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Your message has been received and our team will connect with you
              shortly.
            </p>
            <p>
              We build immersive, AI-powered and interactive solutions for the
              future.
            </p>
          </div>
        </div>

        {/* --- CTA Buttons Section --- */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <Button href="/">Back to Homepage</Button>
          <Button href="/services">Explore Our Services</Button>
        </div> */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <Link
            href="/"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#123C88] to-[#00C2D3] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
          >
            Back to Homepage
          </Link>

          <Link
            href="/services"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#123C88] to-[#00C2D3] text-white text-lg font-medium shadow-lg hover:opacity-90 transition"
          >
            Explore Our Services
          </Link>
        </div>

        {/* --- Services Grid Section --- */}
        {/* Bounded by light horizontal lines */}
        <div className="border-t border-b border-slate-100 py-10 my-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <ServiceItem icon={<BiNetworkChart />} title="AI Solutions" />
            <ServiceItem icon={<TbAugmentedReality />} title="Metaverse Development" />
            <ServiceItem icon={<IoCubeOutline />} title="AR/VR Experiences" />
            <ServiceItem icon={<TbDevices />} title="Blockchain & Digital Twins" />
          </div>
        </div>

        {/* --- Footer Section --- */}
        <div className="space-y-8">
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-800">
              Follow Our Journey
            </h3>
            <div className="flex items-center justify-center gap-6 text-slate-700">
              <Link href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <FiGlobe className="w-6 h-6" />
                <span className=" sm:inline">abhiwan.com</span>
              </Link>
              <SocialIcon icon={<FiLinkedin />} />
              <SocialIcon icon={<FiInstagram />} />
              <SocialIcon icon={<FiTwitter />} />
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-slate-600">
            <p>Need immediate assistance?</p>
            <p>
              Call / WhatsApp:{' '}
              <a
                href="tel:+919599145805"
                className="font-semibold text-blue-600 hover:underline"
              >
                +91 95991 45805
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Reusable Sub-components ---

// Button Component designed to match the image's blue gradient style
interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-white 
                 bg-gradient-to-b from-blue-800 to-cyan-600 
                 shadow-[0_4px_10px_rgba(0,100,200,0.3)]
                 hover:shadow-[0_6px_15px_rgba(0,100,200,0.4)]
                 hover:brightness-105 active:scale-[0.98]
                 transition-all duration-200 ease-in-out"
    >
      {children}
    </Link>
  );
};

// Service Item Component for the grid
interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center group">
      {/* Icon container with brand color style */}
      <div className="text-4xl text-cyan-600 group-hover:text-blue-700 transition-colors duration-300">
        {icon}
      </div>
      <h4 className="text-sm sm:text-base font-medium text-slate-700 max-w-[120px] leading-tight">
        {title}
      </h4>
    </div>
  );
};

// Simple Social Media Icon Link Component
interface SocialIconProps {
  icon: React.ReactNode;
  href?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href = '#' }) => {
  return (
    <Link
      href={href}
      className="p-1 hover:text-blue-600 transition-colors duration-200"
    >
      <div className="w-6 h-6">{icon} </div>
    </Link>
  );
};

export default ThankYouPage;