"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

/* -----------------------------
   Counter Component (01 → 07)
------------------------------ */
function Counter({ to = 7, duration = 1.6 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const count = useMotionValue(0);

    const rounded = useTransform(count, (latest) =>
        Math.round(latest)
    );


    useEffect(() => {
        if (isInView) {
            animate(count, to, {
                duration,
                ease: "easeOut",
            });
        }
    }, [isInView, to, duration, count]);

    return (
        <motion.span ref={ref}>
            {rounded}
        </motion.span>
    );
}

/* -----------------------------
   Experience Badge Component
------------------------------ */
// export default function ExperienceBadge() {
//     return (
//         <div
//             className="
//         absolute
//         -top-10  left-4
//         lg:top-auto lg:-bottom-16 lg:-left-16
//         z-20
//         bg-gradient-to-br from-[#6D28D9] to-[#4F46E5]
//         rounded-2xl
//         p-4 lg:p-8
//         text-white
//         shadow-2xl
//         min-w-[140px] lg:min-w-[160px]
//         text-center
//       "
//             style={{
//                 background: "linear-gradient(312.21deg, #3952FC 0.02%, #7F15DC 95.9%)"
//             }}
//         >
//             <div
//                 className="
//     font-futura
//     font-semibold
//     text-[68.23px]
//     leading-[1]
//     tracking-[0]
//     text-center
//     uppercase
//   "
//             >
//                 <Counter to={7} />+
//             </div>


//             <div className="text-[11px] lg:text-[13px] font-medium tracking-wider mt-1 lg:mt-2 opacity-90 whitespace-nowrap">
//                 Years of Experience
//             </div>

//         </div>
//     );
// }


export default function ExperienceBadge() {
  return (
    <div
      className="
        absolute
        -top-10 left-4
        lg:top-auto lg:-bottom-16 lg:-left-16 lg:ml-4  /* add left margin on laptop */
        z-20
        rounded-2xl
        p-4 lg:p-8
        text-white
        shadow-2xl
        min-w-[140px] lg:min-w-[160px]
        text-center
      "
      style={{
        background: "linear-gradient(312.21deg, #3952FC 0.02%, #7F15DC 95.9%)",
      }}
    >
      <div
        className="
          font-futura
          font-semibold
          text-[68.23px]
          leading-[1]
          tracking-[0]
          text-center
          uppercase
        "
      >
        <Counter to={7} />+
      </div>

      <div className="text-[11px] lg:text-[13px] font-medium tracking-wider mt-1 lg:mt-2 opacity-90 whitespace-nowrap">
        Years of Experience
      </div>
    </div>
  );
}
