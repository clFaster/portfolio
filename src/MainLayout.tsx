import {ContentWrapper, PageContainer, PageContent, PageFooter} from "./components/styled/PageStyled.ts";
import Navigations from "./components/common/Navigations.tsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./components/common/Footer.tsx";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/common/PageTransition.tsx";
import { useState, useEffect } from "react";

// Mobile breakpoint
const MOBILE_BREAKPOINT = 768;

export const MainLayout = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);
      // Check screen size on mount and window resize
    useEffect(() => {
        const checkIsMobile = () => {
            const mobile = window.innerWidth < MOBILE_BREAKPOINT;
            setIsMobile(mobile);
            console.log("MainLayout - Screen width:", window.innerWidth, "Is Mobile:", mobile);
        };
        
        checkIsMobile();
        
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);
    const containerStyle = {
        position: "relative",
        overflow: "hidden",
        minHeight: isMobile ? "auto" : undefined
    };
    
    return (
        <PageContent>
            <Navigations/>
            <ContentWrapper>
                <PageContainer style={containerStyle as React.CSSProperties}>
                    {isMobile ? (
                        /* On mobile, render without animation wrapper */
                        <Outlet/>
                    ) : (
                        /* On desktop, use animations */
                        <AnimatePresence mode="wait" initial={false}>
                            <PageTransition key={location.pathname}>
                                <Outlet/>
                            </PageTransition>
                        </AnimatePresence>
                    )}
                </PageContainer>
                <PageFooter>
                    <Footer/>
                </PageFooter>
            </ContentWrapper>
        </PageContent>
    );
};