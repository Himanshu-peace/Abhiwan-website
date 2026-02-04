export default function HeaderCurve() {
  return (
    /* 1. Changed h-[160px] to responsive h-[60px] md:h-[160px]
       2. Added w-screen to ensure it always spans the full width
    */
    <div className="relative z-10 w-full h-[60px] md:h-[80px] overflow-hidden">
      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          w-full
          h-[60px] 
          md:h-[80px]
        "
      >
        <svg
          /* Using preserveAspectRatio="none" allows the curve to flatten 
             proportionally when the container height drops.
          */
          viewBox="0 0 1606 124"
          preserveAspectRatio="none"
          className="w-full h-full block"
        >
          <path
            d="
              M0 40
              C300 65, 550 78, 803 78
              C1056 78, 1306 65, 1606 40
              L1606 0
              L0 0
              Z
            "
            fill="var(--header-curve)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

// export  function AboutTopCurve() {
//   return (
//     <div className="absolute top-0 left-0 w-full h-[100px] z-20 pointer-events-none">
//       <svg
//         viewBox="0 0 1606 124"
//         preserveAspectRatio="none"
//         className="w-full h-full block"
//       >
//         <path
//           /* This path creates the 'U' dip:
//              M0 0: Start top left
//              L1606 0: Line to top right
//              L1606 124: Down to bottom right
//              Q 803 40, 0 124: Quadratic curve dipping in the middle 
//              Z: Close back to start
//           */
//           d="M0 0 L1606 0 L1606 124 Q 803 40, 0 124 Z"
//           fill="#19001C" // Must match your Hero Section background
//         />
//       </svg>
//     </div>
//   );
// }



// export function AboutTopCurve() {
//   return (
//     <div className="absolute top-0 left-0 w-full h-[160px] md:h-[100px] z-30 pointer-events-none">
//       <svg
//         viewBox="0 0 1606 160"
//         preserveAspectRatio="none"
//         className="w-full h-full block"
//       >
//         <path
//           /* This path fills the TOP part with dark color:
//             1. Start at top-left (0,0)
//             2. Go to top-right (1606, 0)
//             3. Go down the side to (1606, 40)
//             4. Curve ACROSS the middle, arching UPWARDS (Q 803 -20)
//             5. End at (0, 40) and close.
//           */
//           d="M0 0 L1606 0 L1606 40 Q 803 -20, 0 40 Z"
//           fill="#19001C" // Must match your dark Hero background color
//         />
//       </svg>
//     </div>
//   );
// }


// export function AboutTopCurve() {
//   return (
//     /* We use a negative top margin to pull this white curve over the dark section */
//     <div className="absolute -top-[99px] left-0 w-full h-[100px] z-30 pointer-events-none">
//       <svg
//         viewBox="0 0 1606 124"
//         preserveAspectRatio="none"
//         className="w-full h-full block"
//       >
//         <path
//           /* This path creates the white "Upward" arch:
//              M0 124: Start bottom left
//              L1606 124: Line to bottom right
//              L1606 124: Stay at bottom
//              Q 803 0, 0 124: Quadratic curve reaching UP to the top center
//           */
//           d="M0 124 L1606 124 L1606 124 Q 803 0, 0 124 Z"
//           fill="#ffffff" // White color to match the About section
//         />
//       </svg>
//     </div>
//   );
// }

export function AboutTopCurve() {
  return (
    /* 1. Changed -top and h- to be responsive: 
          - Mobile: -top-[39px] h-[40px]
          - Desktop (md): -top-[99px] h-[100px]
    */
    <div className="absolute -top-[39px] md:-top-[99px] left-0 w-full h-[40px] md:h-[100px] z-30 pointer-events-none">
      <svg
        viewBox="0 0 1606 124"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <path
          /* The path remains the same, but because the container height 
             is reduced on mobile, the curve will appear much flatter.
          */
          d="M0 124 L1606 124 L1606 124 Q 803 0, 0 124 Z"
          fill="#ffffff" 
        />
      </svg>
    </div>
  );
}