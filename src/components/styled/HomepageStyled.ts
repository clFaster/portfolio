import styled from 'styled-components';
import {Subtitle, Title} from "./PageStyled.ts";

export const HomepageLogoContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    padding-top: 130px;
`;

export const HomepageFirstArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const HomepageFirstAreaLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        order: 2;
    }
`;

export const HomepageTitle = styled(Title)`
    width: 85% !important;

    @media (max-width: 1024px) {
        width: 100% !important;
        margin-top: 20px;
        order: 2;
    }
`;

export const HomepageSubtitle = styled(Subtitle)`
    width: 85% !important;

    @media (max-width: 1024px) {
        width: 100% !important;
        margin-top: 10px;
        order: 3;
    }
`;

export const HomepageFirstAreaRightSide = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
        width: 100%;
        order: 1;
    }
`;

export const HomepageImageContainer = styled.div`
    width: 370px;
    height: 370px;

    @media (max-width: 1024px) {
        padding-top: 50px;
        padding-bottom: 50px;
        margin-left: 10px;
        order: 1;
    }
`;

export const HomepageImageWrapper = styled.div`
    overflow: hidden;
    border-radius: 10%;
    transform: rotate(3deg);
`;

export const HomepageImage = styled.img`
    width: 100%;
`;

export const HomepageSocials = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    padding-top: 30px;
`;

export const HomepageSocialIcon = styled.div`
    padding-right: 20px;
    font-size: 25px;
    transition: color 0.2s ease-in-out;
    color: var(--secondary-color);

    &:hover {
        color: var(--primary-color);
    }
`;

export const HomepageAfterTitle = styled.div`
    display: flex;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const HomepageProjects = styled.div`
    flex-basis: 300px;
    padding-top: 40px;

    @media (max-width: 1024px) {
        flex-basis: auto;
    }
`;

export const HomepageArticles = styled.div`
    flex-basis: 900px;
    padding-top: 30px;
    margin-left: -30px;

    @media (max-width: 1024px) {
        flex-basis: auto;
    }
`;

export const HomepageArticle = styled.div`
    padding-bottom: 5px;
`;

export const HomepageWorks = styled.div`
    flex-basis: 600px;
    padding-top: 30px;

    @media (max-width: 1024px) {
        flex-basis: auto;
        margin-left: -25px;
        margin-right: -25px;
    }
`;
