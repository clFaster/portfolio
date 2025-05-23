import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NotFoundButton = styled.button`
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  background: var(--link-color);
  color: var(--background-color);
  cursor: pointer;
  box-shadow: 0 2px 8px var(--shadow-color);
  font-family: var(--secondary-font), sans-serif;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background: var(--primary-color);
    color: var(--link-color);
    transform: translateY(-2px) scale(1.04);
  }
`;

export const NotFoundIcon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  margin-right: 0.5rem;
  color: var(--primary-color);
`;

export const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundText = styled.p`
  font-size: 1.3rem;
  margin: 2rem 0;
  color: var(--secondary-color);
  line-height: 1.6;
  max-width: 85%;
`;
