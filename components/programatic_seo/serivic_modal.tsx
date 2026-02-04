
// 'use client'
// import { useState, useEffect } from 'react'
// import { ChevronRight, X } from 'lucide-react'
// import { Button } from '@/components/ui/Button'
// import { useServiceModal } from '@/components/ServiceModalContext'
// import { createPortal } from 'react-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import ImageSlider from '@/components/ImageSlider'
// import { FEATURED } from '@/constants/headerData'

// const CATEGORIES = [
//     { id: 'game-dev', label: 'Game Development', icon: '🎮' },
//     { id: '3d-art', label: '3D Art Services', icon: '🎨' },
//     { id: 'metaverse', label: 'Metaverse Solutions', icon: '🌐' },
//     { id: 'vr', label: 'Virtual Real Estate', icon: '🏠' },
//     { id: 'xr', label: 'Extended Reality (XR)', icon: '🥽' },
//     { id: 'marketing', label: 'Interactive Marketing', icon: '📱' },
//     { id: 'ai', label: 'AI Development', icon: '🤖' },
//     { id: 'it', label: 'IT and Other Services', icon: '💻' },
//     { id: 'blockchain', label: 'Blockchain & Web3 Development', icon: '⛓️' },
// ]

// const SERVICES_MAP: Record<string, string[]> = {
//     'game-dev': [
//         'Simulation Game Development',
//         '2D/3D Game Development',
//         'Puzzle & Arcade Games',
//         'Esports Game Development',
//         'Racing Game Development',
//         'Fighting / Combat Games',
//         'Educational Game Development',
//         'Casino Game Development',
//         'Adver Gaming',
//         'Strategy Game Development',
//     ],
//     '3d-art': [
//         '3D Game Art',
//         '3D Animations',
//         'Environment Designing',
//         'Character Designing',
//         'UI/UX Design Services',
//         '3D Product Modelling',
//         'Meta Human Design',
//     ],
//     metaverse: ['Virtual Worlds', 'Virtual Stores', 'Digital Humans', 'Digital Twin'],
//     vr: ['360° Virtual Property Tours', 'Interior VR Tours', 'Interactive Sales Tools'],
//     xr: [
//         'Augmented Reality',
//         'Virtual Reality',
//         'Industrial Training XR',
//         'Mixed Reality (MR) Simulations',
//         'Learning & Educational XR',
//     ],
//     marketing: [
//         '3D Configurator',
//         'Hologram / Holobox',
//         'Interactive Kiosks',
//         'Gamified Marketing',
//     ],
//     ai: ['AI / ML', 'Chatbot', 'IoT', 'Automation Tools'],
//     it: ['Digital Marketing', 'Website Development', 'App Development'],
// }

// export function ServicesModal() {
//     const { isServiceModalOpen, closeServiceModal } = useServiceModal()
//     const [activeCategory, setActiveCategory] = useState('game-dev')
//     const [activeIndex, setActiveIndex] = useState(0)
//     const [mounted, setMounted] = useState(false)

//     const featuredItems = FEATURED.filter(item => item.images)
//     const featuredImages = featuredItems.map(item => item.images)

//     useEffect(() => setMounted(true), [])

//     useEffect(() => {
//         if (featuredItems.length <= 1) return
//         const timer = setInterval(() => {
//             setActiveIndex(prev =>
//                 prev === featuredItems.length - 1 ? 0 : prev + 1
//             )
//         }, 3000)
//         return () => clearInterval(timer)
//     }, [featuredItems.length])

//     if (!mounted) return null

//     return createPortal(
//         <AnimatePresence>
//             {isServiceModalOpen && (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 lg:-mt-40 2xl:-mt-60"
//                     onClick={closeServiceModal}
//                 >
//                     <motion.div
//                         initial={{ scale: 0.95, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         exit={{ scale: 0.95, opacity: 0 }}
//                         className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex overflow-hidden relative"
//                         onClick={e => e.stopPropagation()}
//                     >
//                         <button
//                             onClick={closeServiceModal}
//                             className="absolute right-4 top-4 bg-gray-100 p-2 rounded-full"
//                         >
//                             <X size={20} />
//                         </button>

//                         {/* Sidebar */}
//                         <div className="w-72 border-r p-4 flex flex-col gap-2">
//                             {CATEGORIES.map(cat => (
//                                 <button
//                                     key={cat.id}
//                                     onClick={() => setActiveCategory(cat.id)}
//                                     className={`px-4 py-3 rounded-lg text-left text-sm font-medium ${activeCategory === cat.id
//                                         ? 'bg-gray-900 text-white'
//                                         : 'bg-gray-200 text-gray-700'
//                                         }`}
//                                 >
//                                     <span className="mr-2">{cat.icon}</span>
//                                     {cat.label}
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1 p-8 overflow-y-auto">
//                             <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">

//                                 {/* Services */}
//                                 {/* Services */}
//                                 <div className="w-full max-w-[360px] flex flex-col">
//                                     <h2 className="text-2xl font-bold mb-6 text-gray-900">
//                                         Services
//                                     </h2>

//                                     {/* FIXED HEIGHT LIST */}
//                                     <div className="h-[480px] overflow-y-auto pr-2 space-y-2">
//                                         {SERVICES_MAP[activeCategory]?.map((service, i) => (
//                                             <div
//                                                 key={i}
//                                                 className="px-4 py-2 rounded-md text-sm cursor-pointer transition border border-transparent hover:text-purple-500 hover:border-purple-500"
//                                             >
//                                                 {service}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Featured */}

//                                 <div>
//                                     {/* FEATURED HEADING */}
//                                     <div className="flex items-center gap-2 mb-2">
//                                         <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
//                                         <h3 className="text-base font-semibold tracking-wide text-gray-900">
//                                             FEATURED
//                                         </h3>
//                                     </div>

//                                     <div className="h-56 relative rounded-lg overflow-hidden">
//                                         <ImageSlider images={featuredImages} activeIndex={activeIndex} />
//                                     </div>

//                                     {/* TEXT + BUTTON WRAPPER */}
//                                     <div className="mt-4 relative h-[140px]">
//                                         <h4 className="font-bold line-clamp-2">
//                                             {featuredItems[activeIndex]?.title}
//                                         </h4>

//                                         <div className="absolute bottom-0 -my-5 left-0 p-[1px] rounded-md bg-gradient-to-r from-[#3952FC] to-[#7F15DC]">
//                                             <Link href={featuredItems[activeIndex]?.link || "/portfolio"}>
//                                                 <Button
//                                                     size="sm"
//                                                     className="bg-white text-black border-0 rounded-md hover:bg-white hover:text-black"
//                                                 >
//                                                     View More <ChevronRight className="ml-1 w-4 h-4" />
//                                                 </Button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             )}
//         </AnimatePresence>,
//         document.body
//     )
// }


'use client'
import { useState, useEffect } from 'react'
import { ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useServiceModal } from '@/components/ServiceModalContext'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ImageSlider from '@/components/ImageSlider'
import { FEATURED } from '@/constants/headerData'
import Link from 'next/link'

const CATEGORIES = [
    { id: 'game-dev', label: 'Game Development', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/2v87y4kf79b1ikr/game_controller_svgrepo_44c78eufvs.com.webp' },
    { id: '3d-art', label: '3D Art Services', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/0756f8bo4lkzbs6/art_design_paint_pallet_format_text_svgrepo_g1p7kuuioe.com.png' },
    { id: 'metaverse', label: 'Metaverse Solutions', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/v6g79i701703y06/game_controller_svgrepo_0faau2bf9p.com-3.png' },
    { id: 'vr', label: 'Virtual Real Estate', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/8n4fkdb7bxb5916/game_controller_svgrepo_z2lvv5fh3v.com-2.png' },
    { id: 'xr', label: 'Extended Reality (XR)', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/63b93l90s86u3b7/vr_glasses_goggles_headset_svgrepo_7pk9d6530c.com.png' },
    { id: 'marketing', label: 'Interactive Marketing', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/il65y09a7urembo/tech_laptop_svgrepo_44sknbif9u.com.png' },
    { id: 'ai', label: 'AI Development', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/l5749xm77zehkdy/game_controller_svgrepo_2kt5r3c2cf.com-1.png' },
    { id: 'it', label: 'IT and Other Services', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/jahhp3p6164427z/code_svgrepo_gw9jce7535.com.png' },
    { id: 'blockchain', label: 'Blockchain & Web3 Development', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/1g3875h211dx17f/game_controller_svgrepo_vz2uq6mkhg.com.png' },
]

const SERVICES_MAP: Record<string, string[]> = {
    'game-dev': [
        'Simulation Game Development',
        '2D/3D Game Development',
        'Puzzle & Arcade Games',
        'Esports Game Development',
        'Racing Game Development',
        'Fighting / Combat Games',
        'Educational Game Development',
        'Casino Game Development',
        'Adver Gaming',
        'Strategy Game Development',
    ],
    '3d-art': [
        '3D Game Art',
        '3D Animations',
        'Environment Designing',
        'Character Designing',
        'UI/UX Design Services',
        '3D Product Modelling',
        'Meta Human Design',
    ],
    metaverse: ['Virtual Worlds', 'Virtual Stores', 'Digital Humans', 'Digital Twin'],
    vr: ['360° Virtual Property Tours', 'Interior VR Tours', 'Interactive Sales Tools'],
    xr: [
        'Augmented Reality',
        'Virtual Reality',
        'Industrial Training XR',
        'Mixed Reality (MR) Simulations',
        'Learning & Educational XR',
    ],
    marketing: [
        '3D Configurator',
        'Hologram / Holobox',
        'Interactive Kiosks',
        'Gamified Marketing',
    ],
    ai: ['AI / ML', 'Chatbot', 'IoT', 'Automation Tools'],
    it: ['Digital Marketing', 'Website Development', 'App Development'],
    blockchain: [
        'Blockchain Token Development',
        'NFT / Marketplace',
        'Web3 Game Development',
        'Smart Contracts',
    ],
}


export function ServicesModal() {
    const { isServiceModalOpen, closeServiceModal } = useServiceModal()
    const [activeCategory, setActiveCategory] = useState('game-dev')
    const [activeIndex, setActiveIndex] = useState(0)
    const [mounted, setMounted] = useState(false)

    const featuredItems = FEATURED.filter(item => item.images)
    const featuredImages = featuredItems.map(item => item.images)

    useEffect(() => setMounted(true), [])

    useEffect(() => {
        if (featuredItems.length <= 1) return
        const timer = setInterval(() => {
            setActiveIndex(prev =>
                prev === featuredItems.length - 1 ? 0 : prev + 1
            )
        }, 3000)
        return () => clearInterval(timer)
    }, [featuredItems.length])

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {isServiceModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // FIX: items-center ko hatakar items-start kiya hai
                    // lg:pt-20 se bade screen par modal upar rahega, lekin header ke niche
                    className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-10 lg:pt-20 px-4 overflow-y-auto"
                    onClick={closeServiceModal}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: -20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: -20 }}
                        // Design same hai, bas margin-bottom add kiya taaki scroll space mile
                        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex overflow-hidden relative mb-6"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={closeServiceModal}
                            className="absolute right-4 top-4 bg-gray-100 p-2 rounded-full z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Sidebar */}
                        <div className="w-72 border-r p-4 flex flex-col gap-2 shrink-0">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-2 rounded-lg text-left text-sm font-medium transition-colors ${activeCategory === cat.id
                                            ? "bg-gray-900 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Icon */}
                                        <img
                                            src={cat.icon}
                                            alt=""
                                            className={`w-6 h-6 flex-shrink-0 ${activeCategory === cat.id ? "invert" : ""
                                                }`}
                                        />

                                        {/* Text */}
                                        <span className="leading-snug whitespace-normal">
                                            {cat.label}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>




                        {/* Content Area */}
                        <div className="flex-1 p-8 overflow-y-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">

                                {/* Services */}
                                <div className="w-full max-w-[360px] flex flex-col">
                                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                                        Services
                                    </h2>

                                    <div className="h-[480px] overflow-y-auto pr-2 space-y-2">
                                        {SERVICES_MAP[activeCategory]?.map((service, i) => (
                                            <div
                                                key={i}
                                                className="px-4 py-2 rounded-md text-sm cursor-pointer transition
                 border border-transparent hover:text-purple-500 hover:border-purple-500
                 whitespace-nowrap"
                                            >
                                                {service}
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* Featured */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                                        <h3 className="text-base font-semibold tracking-wide text-gray-900">
                                            FEATURED
                                        </h3>
                                    </div>

                                    <div className="h-56 relative rounded-lg overflow-hidden">
                                        <ImageSlider images={featuredImages} activeIndex={activeIndex} />
                                    </div>

                                    <div className="mt-4 relative h-[140px]">
                                        <h4 className="font-bold line-clamp-2">
                                            {featuredItems[activeIndex]?.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 line-clamp-3 mb-10">
                                            {featuredItems[activeIndex]?.description}
                                        </p>

                                        <div className="absolute bottom-0 -my-5 left-0 p-[1px] rounded-md bg-gradient-to-r from-[#3952FC] to-[#7F15DC]">
                                            <Link href={featuredItems[activeIndex]?.link || "/portfolio"}>
                                                <Button
                                                    size="sm"
                                                    className="bg-white text-black border-0 rounded-md hover:bg-white hover:text-black"
                                                >
                                                    View More <ChevronRight className="ml-1 w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}