"use client";
import { AppContextType } from "@/types/custom-dt";
import React, { createContext, useState } from "react";

// Define default context value
const defaultContextValue: AppContextType = {
    isPrimaryOffcanvasOpen: false,
    setIsPrimaryOffcanvasOpen: () => { },
    togglePrimaryOffcanvas: () => { },
    isSecondaryOffcanvasOpen: false,
    setIsSecondaryOffcanvasOpen: () => { },
    toggleSecondaryOffcanvas: () => { },
    openSearch: false,
    setOpenSearch: () => { },
    toggleSearch: () => { },
    openMiniCart: false,
    setOpenMiniCart: () => { },
    toggleMiniCart: () => { },
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPrimaryOffcanvasOpen, setIsPrimaryOffcanvasOpen] = useState<boolean>(false);
    const [isSecondaryOffcanvasOpen, setIsSecondaryOffcanvasOpen] = useState<boolean>(false);
    const [openMiniCart, setOpenMiniCart] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);


    const contextValue: AppContextType = {
        isPrimaryOffcanvasOpen,
        setIsPrimaryOffcanvasOpen,
        togglePrimaryOffcanvas: () => setIsPrimaryOffcanvasOpen(prev => !prev),
        isSecondaryOffcanvasOpen,
        setIsSecondaryOffcanvasOpen,
        toggleSecondaryOffcanvas: () => setIsSecondaryOffcanvasOpen(prev => !prev),
        openMiniCart,
        setOpenMiniCart,
        toggleMiniCart: () => setOpenMiniCart(prev => !prev),
        openSearch,
        setOpenSearch,
        toggleSearch: () => setOpenSearch(prev => !prev),
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;