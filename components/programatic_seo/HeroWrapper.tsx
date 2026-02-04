import Image from 'next/image';
import HeroSection from './HeroSection'

export default function Home({ name, backgroundImage, country, title }: { name: string; backgroundImage: string; country: string, title: string }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Main Content */}
      <div className="mx-auto">
        {/* Hero Section with Form */}
        <HeroSection name={name} backgroundImage={backgroundImage} country={country} title={title} />
      </div>
    </main>
  )
}
