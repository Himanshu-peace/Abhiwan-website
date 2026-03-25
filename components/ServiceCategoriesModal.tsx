'use client';

import { useState } from 'react';

const CATEGORIES = [
  { id: 'game-dev', label: 'Game Development Services', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/2v87y4kf79b1ikr/game_controller_svgrepo_44c78eufvs.com.webp' },
  { id: '3d-art', label: '3D Art Services', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/0756f8bo4lkzbs6/art_design_paint_pallet_format_text_svgrepo_g1p7kuuioe.com.png' },
  { id: 'metaverse', label: 'Metaverse Solutions', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/v6g79i701703y06/game_controller_svgrepo_0faau2bf9p.com-3.png' },
  { id: 'vr', label: 'Virtual Real Estate', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/8n4fkdb7bxb5916/game_controller_svgrepo_z2lvv5fh3v.com-2.png' },
  { id: 'xr', label: 'Extended Reality (XR)', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/63b93l90s86u3b7/vr_glasses_goggles_headset_svgrepo_7pk9d6530c.com.png' },
  { id: 'marketing', label: 'Interactive Marketing', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/il65y09a7urembo/tech_laptop_svgrepo_44sknbif9u.com.png' },
  { id: 'ai', label: 'AI Development', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/l5749xm77zehkdy/game_controller_svgrepo_2kt5r3c2cf.com-1.png' },
  { id: 'it', label: 'IT and Other Services', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/jahhp3p6164427z/code_svgrepo_gw9jce7535.com.png' },
  { id: 'blockchain', label: 'Blockchain & Web3 Development', icon: 'https://cdn.abhiwandemos.com/api/files/pbc_193071544/1g3875h211dx17f/game_controller_svgrepo_vz2uq6mkhg.com.png' },
];

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
};

export default function ServiceCategoriesModal() {
  const [expandedId, setExpandedId] = useState<string>('3d-art');

  const toggleCategory = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <div className="w-full h-119.25 md:max-w-md md:h-auto mx-auto bg-white rounded-t-lg md:rounded-lg shadow-lg overflow-hidden flex flex-col">

      {/* CONTENT */}
      <div className="overflow-y-auto flex-1">

        {CATEGORIES.map((category) => (
          <div key={category.id} className="border-b border-gray-200">

            {/* CATEGORY HEADER */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between px-6 py-4"
            >
              <div className="flex items-center gap-3">
                <img 
                  src={category.icon} 
                  alt={category.label}
                  className="w-6 h-6 shrink-0"
                />

                <span
                  className="
                    font-inter
                    font-medium
                    text-[16px]
                    leading-none
                    tracking-normal
                    text-[#222222]
                    text-left
                  "
                >
                  {category.label}
                </span>
              </div>

              {/* FIXED PLUS ICON */}
              <span className="text-[#222222] text-3xl font-light">
                {expandedId === category.id ? '−' : '+'}
              </span>
            </button>


            {/* SERVICES */}
            {expandedId === category.id && (
              <div className="bg-white px-6 py-2 pl-14 space-y-2">
                {SERVICES_MAP[category.id]?.map((service, index) => (
                  <div
                    key={index}
                    className="
                      w-full
                      font-inter
                      font-medium
                      text-[14px]
                      leading-none
                      tracking-[0.02em]
                      text-[#1178FF]
                      px-3 py-2
                      rounded
                      hover:bg-[#EAF2FF]
                      cursor-pointer
                    "
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}
