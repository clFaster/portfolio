import Navigations from "../components/common/Navigations.tsx";
import {ContentWrapper, PageContent, Title} from "../components/styled/PageStyled.ts";

function Contact() {
    return (
        <>
            <PageContent>
                <Navigations active="contact"/>
                <ContentWrapper>
                    <Title>Contact</Title>
                </ContentWrapper>
            </PageContent>
        </>
    );
}

export default Contact;