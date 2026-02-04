



// "use client"
// import { useEffect, useRef } from "react"

// export function HomeHeroSection() {
//   const rowRefs = useRef<(HTMLDivElement | null)[]>([])

//   const portfolioImages = [
//     // row 1
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1un9t9j0l182r2b/super_cart_mwub1qsuvn.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1xa34d061c1e830/stylized_3d_art_4g36hr26xm.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/wiph8qb27zup9l4/stylized_3d_art_2_i5wywapito.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/g7nl50310l735s5/studds_2m7a227emf.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/j6x3u4372u33s5u/skylrk_ilhrwrm9tb.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/26x1ko63b027l6n/safari_rummy_ak59ur7rna.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/i7udj38cf309v83/royal_chess_ehl35dfj7i.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/e31nbng6mjp55dc/racing_kart_pik9c34pjd.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/yu84yz5v6ed50hv/web_ui_bmw2ufsfv8.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/r3cx60vqdmaqyze/weather_confi_zk5juze3yv.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/u12400q2pgu3b4n/walkers_rvev21n9jj.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/lz81q428p5n0t31/vulcan_fighter_649rzqvyfl.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/090626rbz21z7uj/vr_library_n069o26yu8.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/61bi9qspq6xj059/voxel_env_kk0sr5myp9.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/3urihj26ge4o1h7/vaseline_pcj1pqew7i.webp.webp",
//     // row 2
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/e0245t190tzc26m/unreal_racing_6jh7niorij.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/93t7dw0x14m6kb1/unbounded_racing_voxel_29760empnq.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6ou1az80f174283/ultimate_9g3jcjh1xb.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/4n2v8ed7y69822x/ui_ux_t0fj9ygdj9.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/nl785os4l147l7o/thums_up_logo_eiwqlcnjyl.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/cas6ru5qea3dewh/thums_up_njyt7k48np.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/v8s5ajn7ok08873/gl_homes_8gscawxves.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/87l21a8195iw490/tesssearct_7gwip0fzhs.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6gb3g1f3429nedn/environment_3xctao38c1.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/85101trrnb72yb9/edu_vr_k39szde3mx.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1t4938kthodv6l3/echelon_ro4cc2r6k2.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/43bm24tvn740j7d/drip_flip_dodk8p3tck.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/03yb2wne8g8e626/dpworld_logo_sz7o084xbb.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/571s86nw8fnqm7h/dp_world_wevnyfs1fx.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z144q2lnk52pon0/diamond_hooves_khzjo9qkrj.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/f328np6m80n6rc5/dainik_jagran_4yc38vsne2.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/b75bk0r7r0fh2t0/pyago_game_dmp4i9myi3.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0v5xc8wk763l06r/philips_pmgsg760yi.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/o6p28688qsj2171/penguin_karts_zsjlncejmf.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/x60ag0emifqin59/model_now_hhxedl17e1.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/utb623366kb773c/mbr_ffdcmatetb.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0t8o69745g4v651/marina_1ffcrq615k.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/i1u77f110qbwn79/library_phgzjo231h.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/i1u77f110qbwn79/library_phgzjo231h.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/vl4s98z81177ti6/levitate_8vpn61vt0m.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/45y823osy7n189a/leather_bag_product_model_d37sjjdva9.webp",
//     // row 3
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/45ck9ec5a5cgs87/kundli_pro_vsmhlqi98z.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/sdty2rurct7ahic/islenova_au2fhpxv8d.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/72745h55e7ur5n0/iskcon_metaverse_eat3ceasut.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7r74o6ae54dwe4w/iskcon_63sdf4on9f.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/czo8p51k3nmqsl0/indian_army_iuus7hvi1a.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/tp6est30ffdz4u7/imtiaz_zyinchv83t.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/k2u3u2evag2r12x/imns2_3bumuctt0i.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/47ryadq38r689b9/imns_ro8vhyrkx3.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/718ydtaphx6t6cf/house_of_game_uky8ydygzp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/a8hwr0gwb4m6793/horse_racing_06ttcpkhrh.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/04i2seqyx939427/holo_lens_q8smrpm2pb.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/4fi6zgf2ch907fu/guardian_titan_cg8v1p5ry8.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/jdr3f2mvc89s6we/coca_cola2_mbt1zuc0lh.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1kskz6r4i6n8vy8/coca_cola_1jdjmem51d.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/vl88h3w3fj0395k/chatbot_13x882h2ck.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/62frdt1529b47ne/character3_h96lybhzyq.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/b014k1u1020z5b0/character_2d_q1aogk2lsn.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/je435wg6kotb3x8/car_racing_mystic_motors_vmrnp6hk4m.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/9n000puka7d08u4/car_config_tn2txhdv8s.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/69n20888tf2x1nm/betfi_card_games_d64vhtesjz.webp",
//     // row 4
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6q3xzc3ux07yjdw/bajaj_logo_m0utyh5x5z.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7m2a5869984962a/art_gallery_2n4plr4nwi.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/60i84880ekjxq3m/arsenal_3d_game_pdt6y7vu0t.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/wb38pzr0t6yqedq/arsenal_dxn3b9qpuh.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/ak3385hw31htw95/architecture_ybaqsrjyre.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2yno0052ed624n5/architecture_2_dbgubjukn7.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/16ef96h68q7m43g/ar_character_y9ia9ddls5.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/8qb5149zpd462ob/ar0oay4c6axx_l7vxvnfqis.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7890rc2okz945uh/aiims_logo_x2q2z0mcp5.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/l3rl64ne8d7xu7c/aiims_education_game_wo68x64u7p.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/80u203vzsh01nfp/active_shooter_abu_dhabi_police_q9r84u3upu.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2ch88uw52818o13/abu_dhabi_police_6prmeiz589.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z166qnky94vw5vt/3d_product_modeling_5yo5n0tmxr.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/93f7h5518525s3y/3d_product_ise7msbwsy.webp"
//   ]

//   console.log(portfolioImages.length, "length")
//   const ROWS = 5
//   const IMAGES_PER_ROW = 15

//   useEffect(() => {
//     const scrollPositions = new Array(ROWS).fill(0)
//     const SPEED = 100 // pixels per second
//     let lastTime = performance.now()

//     const animate = (time: number) => {
//       const delta = (time - lastTime) / 1000 // seconds
//       lastTime = time

//       rowRefs.current.forEach((row, index) => {
//         if (!row) return

//         scrollPositions[index] += SPEED * delta

//         // Reset when scrolled through one set of images
//         if (scrollPositions[index] >= row.scrollWidth / 2) {
//           scrollPositions[index] = 0
//         }

//         row.style.transform = `translate3d(-${scrollPositions[index]}px,0,0)`
//       })

//       requestAnimationFrame(animate)
//     }

//     const raf = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(raf)
//   }, [])


//   return (
//     <section className="relative h-screen -mt-[124px] overflow-hidden bg-[#19001C] text-white">

//       {/* 🔹 Animated Grid (BACKGROUND) */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="flex flex-col gap-3 w-full">
//           {Array.from({ length: ROWS }).map((_, rowIndex) => {
//             const images = portfolioImages.slice(
//               rowIndex * IMAGES_PER_ROW,
//               (rowIndex + 1) * IMAGES_PER_ROW
//             )

//             return (
//               <div
//                 key={rowIndex}
//                 ref={(el) => {
//                   rowRefs.current[rowIndex] = el
//                 }}
//                 className="flex gap-3 whitespace-nowrap will-change-transform"
//               >
//                 {[...images, ...images].map((image, index) => (
//                   <div
//                     key={index}
//                     className="shrink-0 overflow-hidden rounded-sm"
//                     style={{
//                       width: "280px",
//                       height: `calc((100vh - 100px) / ${ROWS})`,
//                     }}
//                   >
//                     <img
//                       src={image}
//                       className="w-full h-full object-cover"
//                       draggable={false}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* 🔹 FIGMA OVERLAY (THIS WAS WRONG PLACE BEFORE) */}
//       <div className="absolute inset-0 z-[2] pointer-events-none">

//         {/* Gradient Tint */}
//         {/* Color gradients (main figma color) */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `
//       linear-gradient(
//         55.39deg,
//         rgba(74, 0, 49, 0.4) -4.01%,
//         rgba(25, 0, 28, 0.4) 52.89%,
//         rgba(39, 0, 75, 0.4) 107.04%
//       ),
//       linear-gradient(
//         0deg,
//         rgba(0, 0, 0, 0.2),
//         rgba(0, 0, 0, 0.2)
//       )
//     `,
//           }}
//         />

//         {/* Whitish lift layer (THIS WAS MISSING) */}
//         <div className="absolute inset-0 bg-white/[0.04]" />


//         {/* Blur + Black overlay */}
//         {/* Soft blur layer */}
//         {/* Practically no blur */}
//         <div className="absolute inset-0 backdrop-blur-[0.05px]" />

//         {/* Ultra-light dark */}
//         <div className="absolute inset-0 bg-black/[0.01]" />

//       </div>

//       {/* 🔹 HERO CONTENT */}
//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <div className="text-center px-6 max-w-5xl">
//           <h1 className="text-center uppercase font-[var(--font-futura)] leading-[1.05]">
//             <span
//               className="
//       block
//       font-bold
//       tracking-normal
//       text-[clamp(28px,7vw,70px)]
//       sm:whitespace-nowrap
//     "
//             >
//               WHERE IMAGINATION BECOMES
//             </span>

//             <span
//               className="
//       block
//       font-extrabold
//       leading-[0.95]
//       text-[clamp(44px,12vw,144px)]
//     "
//             >
//               INNOVATION
//             </span>
//           </h1>




//           <p
//             className="
//     mt-5
//     text-gray-200
//     font-inter
//     mx-auto
//     max-w-[90%]
//     sm:max-w-3xl
//     text-sm
//     sm:text-base
//     md:text-lg
//     leading-relaxed
//   "
//           >
//             Transform your ideas into groundbreaking immersive tech experiences across
//             industries such as Digital Twin, AI/ML, Metaverse, AR/VR, Game Development,
//             Blockchain, & more!
//           </p>

//           <button
//             className="
//     mt-8
//     px-8 py-4
//     rounded-full
//     font-medium
//     text-white
//     border border-white/20
//     transition-all
//     hover:scale-[1.02]
//     active:scale-[0.98]
//   "
//             style={{
//               background: `
//       linear-gradient(0deg, rgba(255,255,255,0.15), rgba(255,255,255,0.15)),
//       linear-gradient(270deg, #3952FC 0%, #7F15DC 100%)
//     `,
//             }}
//           >
//             Let’s Build Something Epic
//           </button>

//         </div>
//       </div>

//     </section>

//   )
// }



// "use client"
// import { useEffect, useRef, useState } from "react"

// export function HomeHeroSection() {
//   const rowRefs = useRef<(HTMLDivElement | null)[]>([])
//   const [isMobile, setIsMobile] = useState(false)

//   // Your existing portfolioImages array...
//   // const portfolioImages = [
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1un9t9j0l182r2b/super_cart_mwub1qsuvn.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1xa34d061c1e830/stylized_3d_art_4g36hr26xm.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/wiph8qb27zup9l4/stylized_3d_art_2_i5wywapito.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/g7nl50310l735s5/studds_2m7a227emf.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/j6x3u4372u33s5u/skylrk_ilhrwrm9tb.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/26x1ko63b027l6n/safari_rummy_ak59ur7rna.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/i7udj38cf309v83/royal_chess_ehl35dfj7i.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/e31nbng6mjp55dc/racing_kart_pik9c34pjd.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/yu84yz5v6ed50hv/web_ui_bmw2ufsfv8.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/r3cx60vqdmaqyze/weather_confi_zk5juze3yv.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/u12400q2pgu3b4n/walkers_rvev21n9jj.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/lz81q428p5n0t31/vulcan_fighter_649rzqvyfl.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/090626rbz21z7uj/vr_library_n069o26yu8.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/61bi9qspq6xj059/voxel_env_kk0sr5myp9.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/3urihj26ge4o1h7/vaseline_pcj1pqew7i.webp.webp",
//   //   // row 2
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/e0245t190tzc26m/unreal_racing_6jh7niorij.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/93t7dw0x14m6kb1/unbounded_racing_voxel_29760empnq.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6ou1az80f174283/ultimate_9g3jcjh1xb.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/4n2v8ed7y69822x/ui_ux_t0fj9ygdj9.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/nl785os4l147l7o/thums_up_logo_eiwqlcnjyl.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/cas6ru5qea3dewh/thums_up_njyt7k48np.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/v8s5ajn7ok08873/gl_homes_8gscawxves.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/87l21a8195iw490/tesssearct_7gwip0fzhs.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6gb3g1f3429nedn/environment_3xctao38c1.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/85101trrnb72yb9/edu_vr_k39szde3mx.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1t4938kthodv6l3/echelon_ro4cc2r6k2.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/43bm24tvn740j7d/drip_flip_dodk8p3tck.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/03yb2wne8g8e626/dpworld_logo_sz7o084xbb.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/571s86nw8fnqm7h/dp_world_wevnyfs1fx.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z144q2lnk52pon0/diamond_hooves_khzjo9qkrj.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/f328np6m80n6rc5/dainik_jagran_4yc38vsne2.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/b75bk0r7r0fh2t0/pyago_game_dmp4i9myi3.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0v5xc8wk763l06r/philips_pmgsg760yi.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/o6p28688qsj2171/penguin_karts_zsjlncejmf.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/x60ag0emifqin59/model_now_hhxedl17e1.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/utb623366kb773c/mbr_ffdcmatetb.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0t8o69745g4v651/marina_1ffcrq615k.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/i1u77f110qbwn79/library_phgzjo231h.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/i1u77f110qbwn79/library_phgzjo231h.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/vl4s98z81177ti6/levitate_8vpn61vt0m.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/45y823osy7n189a/leather_bag_product_model_d37sjjdva9.webp",
//   //   //     // row 3
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/45ck9ec5a5cgs87/kundli_pro_vsmhlqi98z.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/sdty2rurct7ahic/islenova_au2fhpxv8d.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/72745h55e7ur5n0/iskcon_metaverse_eat3ceasut.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7r74o6ae54dwe4w/iskcon_63sdf4on9f.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/czo8p51k3nmqsl0/indian_army_iuus7hvi1a.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/tp6est30ffdz4u7/imtiaz_zyinchv83t.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/k2u3u2evag2r12x/imns2_3bumuctt0i.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/47ryadq38r689b9/imns_ro8vhyrkx3.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/718ydtaphx6t6cf/house_of_game_uky8ydygzp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/a8hwr0gwb4m6793/horse_racing_06ttcpkhrh.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/04i2seqyx939427/holo_lens_q8smrpm2pb.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/4fi6zgf2ch907fu/guardian_titan_cg8v1p5ry8.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/jdr3f2mvc89s6we/coca_cola2_mbt1zuc0lh.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1kskz6r4i6n8vy8/coca_cola_1jdjmem51d.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/vl88h3w3fj0395k/chatbot_13x882h2ck.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/62frdt1529b47ne/character3_h96lybhzyq.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/b014k1u1020z5b0/character_2d_q1aogk2lsn.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/je435wg6kotb3x8/car_racing_mystic_motors_vmrnp6hk4m.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/9n000puka7d08u4/car_config_tn2txhdv8s.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/69n20888tf2x1nm/betfi_card_games_d64vhtesjz.webp",
//   //   //     // row 4
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6q3xzc3ux07yjdw/bajaj_logo_m0utyh5x5z.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7m2a5869984962a/art_gallery_2n4plr4nwi.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/60i84880ekjxq3m/arsenal_3d_game_pdt6y7vu0t.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/wb38pzr0t6yqedq/arsenal_dxn3b9qpuh.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/ak3385hw31htw95/architecture_ybaqsrjyre.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2yno0052ed624n5/architecture_2_dbgubjukn7.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/16ef96h68q7m43g/ar_character_y9ia9ddls5.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/8qb5149zpd462ob/ar0oay4c6axx_l7vxvnfqis.webp.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7890rc2okz945uh/aiims_logo_x2q2z0mcp5.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/l3rl64ne8d7xu7c/aiims_education_game_wo68x64u7p.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/80u203vzsh01nfp/active_shooter_abu_dhabi_police_q9r84u3upu.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2ch88uw52818o13/abu_dhabi_police_6prmeiz589.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z166qnky94vw5vt/3d_product_modeling_5yo5n0tmxr.webp",
//   //   "https://cdn.abhiwandemos.com/api/files/pbc_193071544/93f7h5518525s3y/3d_product_ise7msbwsy.webp"
//   // ]

//   const portfolioImages = [
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1kskz6r4i6n8vy8/coca_cola_1jdjmem51d.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/x60ag0emifqin59/model_now_hhxedl17e1.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/61bi9qspq6xj059/voxel_env_kk0sr5myp9.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/yu84yz5v6ed50hv/web_ui_bmw2ufsfv8.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6q3xzc3ux07yjdw/bajaj_logo_m0utyh5x5z.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/b75bk0r7r0fh2t0/pyago_game_dmp4i9myi3.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/43bm24tvn740j7d/drip_flip_dodk8p3tck.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/26x1ko63b027l6n/safari_rummy_ak59ur7rna.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0v5xc8wk763l06r/philips_pmgsg760yi.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/62frdt1529b47ne/character3_h96lybhzyq.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/cas6ru5qea3dewh/thums_up_njyt7k48np.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/je435wg6kotb3x8/car_racing_mystic_motors_vmrnp6hk4m.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/j6x3u4372u33s5u/skylrk_ilhrwrm9tb.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2yno0052ed624n5/architecture_2_dbgubjukn7.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/i7udj38cf309v83/royal_chess_ehl35dfj7i.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/80u203vzsh01nfp/active_shooter_abu_dhabi_police_q9r84u3upu.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/k2u3u2evag2r12x/imns2_3bumuctt0i.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/3urihj26ge4o1h7/vaseline_pcj1pqew7i.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/vl88h3w3fj0395k/chatbot_13x882h2ck.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/czo8p51k3nmqsl0/indian_army_iuus7hvi1a.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1t4938kthodv6l3/echelon_ro4cc2r6k2.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/4fi6zgf2ch907fu/guardian_titan_cg8v1p5ry8.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/718ydtaphx6t6cf/house_of_game_uky8ydygzp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/utb623366kb773c/mbr_ffdcmatetb.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/16ef96h68q7m43g/ar_character_y9ia9ddls5.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1un9t9j0l182r2b/super_cart_mwub1qsuvn.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7890rc2okz945uh/aiims_logo_x2q2z0mcp5.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/69n20888tf2x1nm/betfi_card_games_d64vhtesjz.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/45ck9ec5a5cgs87/kundli_pro_vsmhlqi98z.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/wb38pzr0t6yqedq/arsenal_dxn3b9qpuh.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/v8s5ajn7ok08873/gl_homes_8gscawxves.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/60i84880ekjxq3m/arsenal_3d_game_pdt6y7vu0t.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/45y823osy7n189a/leather_bag_product_model_d37sjjdva9.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/8qb5149zpd462ob/ar0oay4c6axx_l7vxvnfqis.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/03yb2wne8g8e626/dpworld_logo_sz7o084xbb.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/9n000puka7d08u4/car_config_tn2txhdv8s.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z144q2lnk52pon0/diamond_hooves_khzjo9qkrj.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/ak3385hw31htw95/architecture_ybaqsrjyre.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/f328np6m80n6rc5/dainik_jagran_4yc38vsne2.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/jdr3f2mvc89s6we/coca_cola2_mbt1zuc0lh.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/571s86nw8fnqm7h/dp_world_wevnyfs1fx.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/lz81q428p5n0t31/vulcan_fighter_649rzqvyfl.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/87l21a8195iw490/tesssearct_7gwip0fzhs.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/93f7h5518525s3y/3d_product_ise7msbwsy.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/e0245t190tzc26m/unreal_racing_6jh7niorij.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/u12400q2pgu3b4n/walkers_rvev21n9jj.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7r74o6ae54dwe4w/iskcon_63sdf4on9f.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/sdty2rurct7ahic/islenova_au2fhpxv8d.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/85101trrnb72yb9/edu_vr_k39szde3mx.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/o6p28688qsj2171/penguin_karts_zsjlncejmf.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/g7nl50310l735s5/studds_2m7a227emf.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/04i2seqyx939427/holo_lens_q8smrpm2pb.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/4n2v8ed7y69822x/ui_ux_t0fj9ygdj9.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/b014k1u1020z5b0/character_2d_q1aogk2lsn.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/nl785os4l147l7o/thums_up_logo_eiwqlcnjyl.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/l3rl64ne8d7xu7c/aiims_education_game_wo68x64u7p.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/wiph8qb27zup9l4/stylized_3d_art_2_i5wywapito.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/r3cx60vqdmaqyze/weather_confi_zk5juze3yv.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/47ryadq38r689b9/imns_ro8vhyrkx3.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/i1u77f110qbwn79/library_phgzjo231h.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/a8hwr0gwb4m6793/horse_racing_06ttcpkhrh.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/e31nbng6mjp55dc/racing_kart_pik9c34pjd.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0t8o69745g4v651/marina_1ffcrq615k.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/8e4ls3956zgi4t4/gun_3d_7c6mgunsfv.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1xa34d061c1e830/stylized_3d_art_4g36hr26xm.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/vl4s98z81177ti6/levitate_8vpn61vt0m.webp.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z166qnky94vw5vt/3d_product_modeling_5yo5n0tmxr.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/72745h55e7ur5n0/iskcon_metaverse_eat3ceasut.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7m2a5869984962a/art_gallery_2n4plr4nwi.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/tp6est30ffdz4u7/imtiaz_zyinchv83t.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/090626rbz21z7uj/vr_library_n069o26yu8.webp",
//     "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6ou1az80f174283/ultimate_9g3jcjh1xb.webp"
//   ]

//   // Check screen size on mount and resize
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   const ROWS = 5
//   const IMAGES_PER_ROW_DESKTOP = 15
//   const IMAGES_PER_ROW_MOBILE = 3

//   const IMAGES_PER_ROW = isMobile
//     ? IMAGES_PER_ROW_MOBILE
//     : IMAGES_PER_ROW_DESKTOP

//   const IMAGE_WIDTH = isMobile ? "180px" : "280px"


//   useEffect(() => {
//     const scrollPositions = new Array(ROWS).fill(0)
//     const SPEED = isMobile ? 80 : 100 // Slower speed for mobile
//     let lastTime = performance.now()

//     const animate = (time: number) => {
//       const delta = (time - lastTime) / 1000 // seconds
//       lastTime = time

//       rowRefs.current.forEach((row, index) => {
//         if (!row) return

//         scrollPositions[index] += SPEED * delta

//         // Reset when scrolled through one set of images
//         if (scrollPositions[index] >= row.scrollWidth / 2) {
//           scrollPositions[index] = 0
//         }

//         row.style.transform = `translate3d(-${scrollPositions[index]}px,0,0)`
//       })

//       requestAnimationFrame(animate)
//     }

//     const raf = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(raf)
//   }, [isMobile])

//   return (
//     <section className="relative h-screen -mt-[124px] overflow-hidden bg-[#19001C] text-white">
//       {/* 🔹 Animated Grid (BACKGROUND) */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="flex flex-col gap-3 w-full">
//           {Array.from({ length: ROWS }).map((_, rowIndex) => {
//             // Get images for this row
//             const startIdx = rowIndex * IMAGES_PER_ROW
//             const endIdx = startIdx + IMAGES_PER_ROW
//             let rowImages = portfolioImages.slice(startIdx, endIdx)

//             // If this row doesn't have enough images, pad with images from start
//             if (rowImages.length < IMAGES_PER_ROW) {
//               const needed = IMAGES_PER_ROW - rowImages.length
//               rowImages.push(...portfolioImages.slice(0, needed))
//             }

//             return (
//               <div
//                 key={rowIndex}
//                 ref={(el) => {
//                   rowRefs.current[rowIndex] = el
//                 }}
//                 className="flex gap-3 whitespace-nowrap will-change-transform"
//               >
//                 {/* Duplicate the images for seamless scrolling */}
//                 {[...rowImages, ...rowImages].map((image, index) => (
//                   <div
//                     key={index}
//                     className="shrink-0 overflow-hidden rounded-sm"
//                     style={{
//                       width: IMAGE_WIDTH,
//                       height: `calc((100vh - 100px) / ${ROWS})`,
//                     }}
//                   >
//                     <img
//                       src={image}
//                       className="w-full h-full object-cover"
//                       draggable={false}
//                       alt="Portfolio image"
//                     />
//                   </div>
//                 ))}
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* 🔹 FIGMA OVERLAY */}
//       <div className="absolute inset-0 z-[2] pointer-events-none">
//         {/* Gradient Tint */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `
//               linear-gradient(
//                 55.39deg,
//                 rgba(74, 0, 49, 0.4) -4.01%,
//                 rgba(25, 0, 28, 0.4) 52.89%,
//                 rgba(39, 0, 75, 0.4) 107.04%
//               ),
//               linear-gradient(
//                 0deg,
//                 rgba(0, 0, 0, 0.2),
//                 rgba(0, 0, 0, 0.2)
//               )
//             `,
//           }}
//         />

//         {/* Whitish lift layer */}
//         <div className="absolute inset-0 bg-white/[0.04]" />

//         {/* Blur + Black overlay */}
//         <div className="absolute inset-0 backdrop-blur-[0.05px]" />
//         <div className="absolute inset-0 bg-black/[0.01]" />
//       </div>

//       {/* 🔹 HERO CONTENT */}
//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <div className="text-center px-4 sm:px-6 max-w-5xl">
//           <h1 className="text-center uppercase font-[var(--font-futura)] leading-[1.05]">
//             <span
//               className="
//                 block
//                 font-bold
//                 tracking-normal
//                 text-[clamp(28px,7vw,70px)]
//                 sm:whitespace-nowrap
//               "
//             >
//               WHERE IMAGINATION BECOMES
//             </span>

//             <span
//               className="
//                 block
//                 font-extrabold
//                 leading-[0.95]
//                 text-[clamp(44px,12vw,144px)]
//               "
//             >
//               INNOVATION
//             </span>
//           </h1>

//           <p
//             className="
//               mt-5
//               text-gray-200
//               font-inter
//               mx-auto
//               max-w-[90%]
//               sm:max-w-3xl
//               text-sm
//               sm:text-base
//               md:text-lg
//               leading-relaxed
//             "
//           >
//             Transform your ideas into groundbreaking immersive tech experiences across
//             industries such as Digital Twin, AI/ML, Metaverse, AR/VR, Game Development,
//             Blockchain, & more!
//           </p>

//           <button
//             className="
//     mt-8
//     px-6 sm:px-8
//     py-3 sm:py-4
//     rounded-full
//     font-medium
//     text-white
//     border border-white/20
//     transition-all
//     hover:scale-[1.02]
//     active:scale-[0.98]
//     text-sm sm:text-base
//   "
//             style={{
//               background: `
//       linear-gradient(0deg, rgba(255,255,255,0.15), rgba(255,255,255,0.15)),
//       linear-gradient(270deg, #3952FC 0%, #7F15DC 100%)
//     `,
//             }}
//           >
//             <img
//               src="/hero_logo.png"
//               alt=""
//               className="inline-block align-middle w-4 h-4 sm:w-5 sm:h-5 mr-2"
//             />

//             <span className="align-middle whitespace-nowrap">
//               Let's Build Something Epic
//             </span>
//           </button>

//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useEffect, useRef, useState } from "react"

export function HomeHeroSection() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isMobile, setIsMobile] = useState(false)

  const portfolioImages = [
    // Row 1 - Images 1-15
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1kskz6r4i6n8vy8/coca_cola_1jdjmem51d.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/x60ag0emifqin59/model_now_hhxedl17e1.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/4b2975r63r9n448/car_bow8tokqrd.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/c606pxfc50au360/starbucks_6y2smblte8.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6q3xzc3ux07yjdw/bajaj_logo_m0utyh5x5z.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/b75bk0r7r0fh2t0/pyago_game_dmp4i9myi3.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/43bm24tvn740j7d/drip_flip_dodk8p3tck.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/26x1ko63b027l6n/safari_rummy_ak59ur7rna.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0v5xc8wk763l06r/philips_pmgsg760yi.webp.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/62frdt1529b47ne/character3_h96lybhzyq.webp.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/cas6ru5qea3dewh/thums_up_njyt7k48np.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/6790f7dzm6o0r5i/coca_cola_87a0l3pmz3.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/j6x3u4372u33s5u/skylrk_ilhrwrm9tb.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/2yno0052ed624n5/architecture_2_dbgubjukn7.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/fumwf48ew518m60/chess_eoqnmlkoj5.webp",

    // Row 2 - Images 16-30
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/80u203vzsh01nfp/active_shooter_abu_dhabi_police_q9r84u3upu.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/y4xgmpl18d6l087/abu_dhabi_police_irp3zxofzz.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/k2u3u2evag2r12x/imns2_3bumuctt0i.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/3urihj26ge4o1h7/vaseline_pcj1pqew7i.webp.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/vl88h3w3fj0395k/chatbot_13x882h2ck.webp.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/czo8p51k3nmqsl0/indian_army_iuus7hvi1a.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1t4938kthodv6l3/echelon_ro4cc2r6k2.webp.webp",

    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/ov3du035l87o84q/arj4dm4g00a1_x1zrf3wwk0.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/k2e45ut8eq2qwm1/vrsn12o3fkpi_fzmvs4w5ys.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/h8ot8co21ws23xj/mohammed_bin_rashid_housing_est_u4kcgpb5tj..webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/cfvhj7kh3kzx376/vr_world_cixr1uwv7e.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/28671fusop4gg9q/rhino_76w1506j2d.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/wb8r91ktsz57ee6/super_cat_fy0ac05rgr.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/g64pq5vqbib5mjj/aiims_63wtj38sv0.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/40w3naa5jwj0s94/bet_fi_21pm4fbs3w.webp",

    // Row 3 - Images 31-45
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/45ck9ec5a5cgs87/kundli_pro_vsmhlqi98z.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/97p1206le2t4qf4/rectangle_3463469_xoiu46riol.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/v8s5ajn7ok08873/gl_homes_8gscawxves.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/60i84880ekjxq3m/arsenal_3d_game_pdt6y7vu0t.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/45y823osy7n189a/leather_bag_product_model_d37sjjdva9.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/8qb5149zpd462ob/ar0oay4c6axx_l7vxvnfqis.webp.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/03yb2wne8g8e626/dpworld_logo_sz7o084xbb.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/9n000puka7d08u4/car_config_tn2txhdv8s.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z144q2lnk52pon0/diamond_hooves_khzjo9qkrj.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/ak3385hw31htw95/architecture_ybaqsrjyre.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/f328np6m80n6rc5/dainik_jagran_4yc38vsne2.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/jdr3f2mvc89s6we/coca_cola2_mbt1zuc0lh.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/571s86nw8fnqm7h/dp_world_wevnyfs1fx.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/lz81q428p5n0t31/vulcan_fighter_649rzqvyfl.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/87l21a8195iw490/tesssearct_7gwip0fzhs.webp",

    // Row 4 - Images 46-60
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/93f7h5518525s3y/3d_product_ise7msbwsy.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/e0245t190tzc26m/unreal_racing_6jh7niorij.webp",

    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/u12400q2pgu3b4n/walkers_rvev21n9jj.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7r74o6ae54dwe4w/iskcon_63sdf4on9f.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/sdty2rurct7ahic/islenova_au2fhpxv8d.webp.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/85101trrnb72yb9/edu_vr_k39szde3mx.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/o6p28688qsj2171/penguin_karts_zsjlncejmf.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/g7nl50310l735s5/studds_2m7a227emf.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/04i2seqyx939427/holo_lens_q8smrpm2pb.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/4n2v8ed7y69822x/ui_ux_t0fj9ygdj9.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/yu54672gjk0svum/dragan_mj86ajnua7.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/nl785os4l147l7o/thums_up_logo_eiwqlcnjyl.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/l3rl64ne8d7xu7c/aiims_education_game_wo68x64u7p.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/wiph8qb27zup9l4/stylized_3d_art_2_i5wywapito.webp",

    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/si6trcg04508o6l/ultimate_r2x1wwo8b1.webp",

    // Row 5 - Images 61-72 (final row with 12 images)
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/152rj83wl378t2b/army_2f36wc85ic.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/tvj8199tzi7g886/vr_world_8e8elfunrx.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/a8hwr0gwb4m6793/horse_racing_06ttcpkhrh.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/e31nbng6mjp55dc/racing_kart_pik9c34pjd.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/0t8o69745g4v651/marina_1ffcrq615k.webp.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/8e4ls3956zgi4t4/gun_3d_7c6mgunsfv.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/1xa34d061c1e830/stylized_3d_art_4g36hr26xm.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/vl4s98z81177ti6/levitate_8vpn61vt0m.webp.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/z166qnky94vw5vt/3d_product_modeling_5yo5n0tmxr.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/72745h55e7ur5n0/iskcon_metaverse_eat3ceasut.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/7m2a5869984962a/art_gallery_2n4plr4nwi.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/tp6est30ffdz4u7/imtiaz_zyinchv83t.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/30ou2q8cscp8u0s/forest_rw3pab6vof.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/dwvs1944avo61k0/vroayfokuq61_785koc7mdj.webp",
    "https://cdn.abhiwandemos.com/api/files/pbc_193071544/jqf9eou0gc6rd08/ultimate_6081nq75da.webp",
  ]

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const ROWS = 5
  const IMAGES_PER_ROW_DESKTOP = 15
  const IMAGES_PER_ROW_MOBILE = 3

  const IMAGES_PER_ROW = isMobile
    ? IMAGES_PER_ROW_MOBILE
    : IMAGES_PER_ROW_DESKTOP

  const IMAGE_WIDTH = isMobile ? "180px" : "280px"

  useEffect(() => {
    const scrollPositions = new Array(ROWS).fill(0)
    const SPEED = isMobile ? 80 : 100
    let lastTime = performance.now()

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000
      lastTime = time

      rowRefs.current.forEach((row, index) => {
        if (!row) return

        scrollPositions[index] += SPEED * delta

        if (scrollPositions[index] >= row.scrollWidth / 2) {
          scrollPositions[index] = 0
        }

        row.style.transform = `translate3d(-${scrollPositions[index]}px,0,0)`
      })

      requestAnimationFrame(animate)
    }

    const raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isMobile])

  return (
    <section className="relative h-screen -mt-[124px] overflow-hidden bg-[#19001C] text-white">
      {/* 🔹 Animated Grid (BACKGROUND) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex flex-col gap-3 w-full">
          {Array.from({ length: ROWS }).map((_, rowIndex) => {
            // Slice 15 images for desktop (or 3 for mobile) per row
            const startIdx = rowIndex * IMAGES_PER_ROW
            const endIdx = startIdx + IMAGES_PER_ROW
            let rowImages = portfolioImages.slice(startIdx, endIdx)

            // If row doesn't have enough images, pad from the start
            if (rowImages.length < IMAGES_PER_ROW) {
              const needed = IMAGES_PER_ROW - rowImages.length
              rowImages.push(...portfolioImages.slice(0, needed))
            }

            return (
              <div
                key={rowIndex}
                ref={(el) => {
                  rowRefs.current[rowIndex] = el
                }}
                className="flex gap-3 whitespace-nowrap will-change-transform"
              >
                {/* Duplicate for smooth infinite scroll */}
                {[...rowImages, ...rowImages].map((image, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 overflow-hidden rounded-sm"
                    style={{
                      width: IMAGE_WIDTH,
                      height: `calc((100vh - 100px) / ${ROWS})`,
                    }}
                  >
                    <img
                      src={image}
                      className="w-full h-full object-cover"
                      draggable={false}
                      alt="Portfolio image"
                    />
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>

      {/* 🔹 FIGMA OVERLAY */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                55.39deg,
                rgba(74, 0, 49, 0.4) -4.01%,
                rgba(25, 0, 28, 0.4) 52.89%,
                rgba(39, 0, 75, 0.4) 107.04%
              ),
              linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
              )
            `,
          }}
        />
        <div className="absolute inset-0 bg-white/[0.04]" />
        <div className="absolute inset-0 backdrop-blur-[0.05px]" />
        <div className="absolute inset-0 bg-black/[0.01]" />
      </div>

      {/* 🔹 HERO CONTENT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 max-w-5xl">
          <h1 className="text-center uppercase font-[var(--font-futura)] leading-[1.05]">
            <span className="block font-bold tracking-normal text-[clamp(28px,7vw,70px)] sm:whitespace-nowrap">
              WHERE IMAGINATION BECOMES
            </span>
            <span className="block font-extrabold leading-[0.95] text-[clamp(44px,12vw,144px)]">
              INNOVATION
            </span>
          </h1>

          <p className="mt-5 text-gray-200 font-inter mx-auto max-w-[90%] sm:max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
            Transform your ideas into groundbreaking immersive tech experiences across industries
            such as Digital Twin, AI/ML, Metaverse, AR/VR, Game Development, Blockchain, & more!
          </p>

          <button
            className="mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-white border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            style={{
              background: `
                linear-gradient(0deg, rgba(255,255,255,0.15), rgba(255,255,255,0.15)),
                linear-gradient(270deg, #3952FC 0%, #7F15DC 100%)
              `,
            }}
          >
            <img
              src="/hero_logo.png"
              alt=""
              className="inline-block align-middle w-4 h-4 sm:w-5 sm:h-5 mr-2"
            />
            <span className="align-middle whitespace-nowrap">Let's Build Something Epic</span>
          </button>
        </div>
      </div>
    </section>
  )
}
