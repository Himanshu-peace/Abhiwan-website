"use client"

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  showCloseButton?: boolean
  closeOnBackdropClick?: boolean
  preventBodyScroll?: boolean
}

export function Modal({
  isOpen,
  onClose,
  children,
  className = "",
  showCloseButton = true,
  closeOnBackdropClick = true,
  preventBodyScroll = true,
}: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (preventBodyScroll) {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = '0px' // Prevent layout shift
      } else {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen, preventBodyScroll])

  if (!mounted) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className={`relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden ${className}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-50 bg-white/90 backdrop-blur hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-105"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

// Modal Content wrapper for consistent padding
export function ModalContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 md:p-8 ${className}`}>{children}</div>
}

// Modal Header component
export function ModalHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-6 ${className}`}>{children}</div>
}

// Modal Footer component
export function ModalFooter({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mt-6 pt-6 border-t border-gray-200 ${className}`}>{children}</div>
}
