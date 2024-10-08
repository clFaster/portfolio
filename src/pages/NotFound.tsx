import Navigations from "../components/common/Navigations.tsx";
import {ContentWrapper, PageContent, Title} from "../components/styled/PageStyled.ts";

function NotFound() {
    return (
        <>
            <PageContent>
                <Navigations active=""/>
                <ContentWrapper>
                    <Title>Not Found</Title>
                </ContentWrapper>
            </PageContent>
        </>
    );
}

export default NotFound;