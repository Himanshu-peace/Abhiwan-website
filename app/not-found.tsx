'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    useEffect(() => {
        // Set page title
        document.title = 'Page Not Found - Abhiwan Tech Solutions'
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Animation/Graphic */}
                <div className="mb-8 relative">
                    <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="text-9xl font-bold text-white">
                            404
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Oops! Page Not Found
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
                    The page you're looking for seems to have vanished into the digital void. 
                    Let's get you back on track!
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link href="/">
                        <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>
                    
                    <Link href="/game-development">
                        <Button className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                            <Search className="w-4 h-4" />
                            Browse Services
                        </Button>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-semibold text-white mb-4">Looking for something?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <Link 
                            href="/game-development" 
                            className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-slate-700/50"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Game Development Services
                        </Link>
                        <Link 
                            href="/game-development/noida" 
                            className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-slate-700/50"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Game Development in Noida
                        </Link>
                        <Link 
                            href="/game-development/dubai" 
                            className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-slate-700/50"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Game Development in Dubai
                        </Link>
                        <Link 
                            href="/game-development/united-states" 
                            className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-slate-700/50"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Game Development in USA
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="text-slate-400 text-sm">
                    <p>Still can't find what you're looking for?</p>
                    <p className="mt-2">
                        Contact us at{' '}
                        <a 
                            href="mailto:info@abhiwan.com" 
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            info@abhiwan.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
