"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface ServiceModalContextType {
    isServiceModalOpen: boolean
    openServiceModal: () => void
    closeServiceModal: () => void
}

const ServiceModalContext = createContext<ServiceModalContextType | undefined>(undefined)

export function ServiceModalProvider({ children }: { children: ReactNode }) {
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)

    const openServiceModal = () => setIsServiceModalOpen(true)
    const closeServiceModal = () => setIsServiceModalOpen(false)

    return (
        <ServiceModalContext.Provider value={{ isServiceModalOpen, openServiceModal, closeServiceModal }}>
            {children}
        </ServiceModalContext.Provider>
    )
}

export function useServiceModal() {
    const context = useContext(ServiceModalContext)
    if (!context) {
        throw new Error("useServiceModal must be used within a ServiceModalProvider")
    }
    return context
}
