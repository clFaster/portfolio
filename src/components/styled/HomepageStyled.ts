import styled from 'styled-components';
import {Subtitle, Text, Title} from "./PageStyled.ts";

export const HomepageContainer = styled.div`
    padding-top: 155px;
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

export const HomepageSubTitle = styled(Subtitle)`
    width: 85% !important;

    @media (max-width: 1024px) {
        width: 100% !important;
        margin-top: 20px;
        order: 2;
    }
`;

export const HomepageText = styled(Text)`
    width: 85% !important;

    @media (max-width: 1024px) {
        width: 100% !important;
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

export const HomepageImageWrapper = styled.div<{ rotationAngle: number }>`
    overflow: hidden;
    border-radius: 10%;
    transform: ${({rotationAngle}) => `rotate(${rotationAngle}deg)`};
    transition: transform 0.3s ease-out; // Adjust transition duration as needed
`;

export const HomepageImage = styled.img`
    width: 100%;
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

export const HomepageWorks = styled.div`
    flex-basis: 600px;
    padding-top: 30px;

    @media (max-width: 1024px) {
        flex-basis: auto;
        margin-left: -25px;
        margin-right: -25px;
    }
`;
