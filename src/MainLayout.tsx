import {ContentWrapper, PageContainer, PageContent, PageFooter} from "./components/styled/PageStyled.ts";
import Navigations from "./components/common/Navigations.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/common/Footer.tsx";

export const MainLayout = () => {
    return (
        <>
            <PageContent>
                <Navigations/>
                <ContentWrapper>
                    <PageContainer>
                        <Outlet/>
                    </PageContainer>
                    <PageFooter>
                        <Footer/>
                    </PageFooter>
                </ContentWrapper>
            </PageContent>
        </>
    );
};