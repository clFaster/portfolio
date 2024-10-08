import Navigations from "../components/common/Navigations.tsx";
import {ContentWrapper, PageContent, Title} from "../components/styled/PageStyled.ts";

function About() {
    return (
        <>
            <PageContent>
                <Navigations active="about"/>
                <ContentWrapper>
                    <Title>About</Title>
                </ContentWrapper>
            </PageContent>
        </>
    );
}

export default About;