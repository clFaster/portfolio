import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SocialsContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 15px 0;
    gap: 20px;
`;

export const SocialIcon = styled(FontAwesomeIcon)`
    padding: 10px;
    font-size: 30px;
    transition: color 0.3s ease-in-out;
    color: var(--secondary-color);

    &:hover {
        color: var(--link-color);
    }
`;