import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AllProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding-bottom: 30px;
`;

export const AllProjectsProject = styled.div`
  width: calc(100% / 3);
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;

  @media (max-width: 1224px) {
    width: calc(100% / 2);
  }

  @media (max-width: 680px) {
    width: 95%;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  font-size: 12px;
  padding-top: 15px;
`;

export const ProjectStyled = styled.div`
  mix-blend-mode: normal;
  border-radius: 20px;
  opacity: 0.8;
  height: 100%;
  transition:
    background 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  &:hover {
    background: var(--card-background);
    opacity: 1;
  }

  &:hover ${ProjectLinkContainer} {
    color: var(--link-color);
    transition: color 0.3s ease-in-out;
  }

  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const ProjectContainer = styled.div`
  padding: 30px;
`;

export const ProjectLogo = styled.div`
  width: 30px;

  img {
    width: 100%;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: var(--secondary-font), sans-serif;
  color: var(--primary-color);
  font-size: 16px;
  padding-top: 15px;
  margin-bottom: 1em;
  font-weight: 700;
`;

export const ProjectDescription = styled.p`
  color: var(--secondary-color);
`;

export const ProjectLinkIcon = styled(FontAwesomeIcon)`
  padding-left: 5px;
  font-size: 13px;
`;

export const ProjectLinkText = styled.span`
  padding-left: 20px;
  font-weight: 700;
`;
