import {ContentWrapper, PageContainer, PageContent, PageFooter} from "./components/styled/PageStyled.ts";
import Navigations from "./components/common/Navigations.tsx";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "./components/common/Footer.tsx";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/common/PageTransition.tsx";

export const MainLayout = () => {
    const location = useLocation();
    
    return (
        <>
            <PageContent>
                <Navigations/>
                <ContentWrapper>
                    <PageContainer style={{ position: "relative", overflow: "hidden" }}>
                        <AnimatePresence mode="wait" initial={false}>
                            <PageTransition key={location.pathname}>
                                <Outlet/>
                            </PageTransition>
                        </AnimatePresence>
                    </PageContainer>
                    <PageFooter>
                        <Footer/>
                    </PageFooter>
                </ContentWrapper>
            </PageContent>
        </>
    );
};