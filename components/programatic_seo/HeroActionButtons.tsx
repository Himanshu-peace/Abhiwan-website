"use client"

import { motion } from "framer-motion"
import { useModal } from "@/components/ModalContext"

export function FreeQuoteButton() {
    const { openModal } = useModal()

    return (
        <div className="fixed right-0 top-0 h-full z-50 pointer-events-auto">
            <motion.button
                onClick={openModal}
                className="
                    absolute top-1/2 -translate-y-1/2 right-0
                    bg-gradient-to-r from-purple-600 to-blue-600
                    text-white text-sm font-medium
                    px-2 py-1
                    rounded-l-lg
                    whitespace-nowrap
                    [writing-mode:vertical-rl]
                    shadow-lg
                    sm:text-xs sm:px-1 sm:py-1
                "
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                Free Quote
            </motion.button>
        </div>
    )
}



export function ScheduleCallButton() {
    const { openModal } = useModal()

    return (
        <div className="flex justify-center lg:justify-start sm:mt-4">
            <button
                onClick={openModal}
                style={{
                    background: "linear-gradient(270deg, #3952FC 0%, #7F15DC 100%)",
                }}
                className="
                    w-[180px] h-[48px]
                    rounded-full
                    font-semibold text-white text-base sm:text-lg
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.6)]
                    active:translate-y-0
                    flex items-center justify-center
                "
            >
                Schedule A Call
            </button>
        </div>
    )
}