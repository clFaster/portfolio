import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Socials = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    padding-top: 30px;
`;

export const SocialIcon = styled(FontAwesomeIcon)`
    padding-right: 20px;
    font-size: 25px;
    transition: color 0.2s ease-in-out;
    color: var(--secondary-color);

    &:hover {
        color: var(--primary-color);
    }
`;