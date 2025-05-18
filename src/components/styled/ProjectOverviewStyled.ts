import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AllProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  padding-bottom: 50px;
  margin: 0 -15px;
  
  @media (max-width: 680px) {
    margin: 0;
  }
`;

export const AllProjectsProject = styled.div`
  width: calc(100% / 3);
  box-sizing: border-box;
  padding: 15px;
  overflow: hidden;
  margin-bottom: 10px;

  @media (max-width: 1224px) {
    width: calc(100% / 2);
  }

  @media (max-width: 680px) {
    width: 100%;
    padding: 15px 0;
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
  margin-top: auto;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 100%;
    height: 1px;
    background-color: var(--border-color);
    opacity: 0.5;
  }
`;

export const ProjectStyled = styled.div`
  mix-blend-mode: normal;
  border-radius: 20px;
  opacity: 0.95;
  height: 100%;
  border: 1px solid transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transform: translateY(0);
  transition:
    background 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover {
    background: var(--card-background);
    opacity: 1;
    transform: translateY(-5px);
    border-color: var(--border-color);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
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
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
`;

export const ProjectLogo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--quaternary-color);
  border-radius: 10px;
  padding: 8px;
  transition: transform 0.3s ease;
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  ${ProjectStyled}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectTitle = styled.h2`
  font-family: var(--secondary-font), sans-serif;
  color: var(--primary-color);
  font-size: 18px;
  padding-top: 15px;
  margin-bottom: 1em;
  font-weight: 700;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 35px;
    height: 3px;
    background-color: var(--link-color);
    transition: width 0.3s ease-in-out;
  }
  
  ${ProjectStyled}:hover &:after {
    width: 60px;
  }
`;

export const ProjectDescription = styled.p`
  color: var(--secondary-color);
  line-height: 1.6;
  margin: 1.2em 0;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProjectLinkIcon = styled(FontAwesomeIcon)`
  font-size: 13px;
  transition: transform 0.3s ease;
  
  ${ProjectStyled}:hover & {
    transform: translateX(2px);
  }
`;

export const ProjectLinkText = styled.span`
  padding-left: 10px;
  font-weight: 700;
  position: relative;
  transition: padding-left 0.3s ease;
  
  ${ProjectStyled}:hover & {
    padding-left: 12px;
  }
`;
