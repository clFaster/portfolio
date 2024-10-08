import {ContentWrapper, PageContent, Title} from "../components/styled/PageStyled.ts";
import Navigations from "../components/common/Navigations.tsx";

function Projects() {
    return (
        <>
            <PageContent>
                <Navigations active="projects"/>
                <ContentWrapper>
                    <Title>Projects</Title>
                </ContentWrapper>
            </PageContent>
        </>
    );
}

export default Projects;