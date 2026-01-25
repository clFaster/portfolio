import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  margin-top: auto;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 15px;
  }
`;

export const FooterLink = styled.div`
  a {
    color: var(--tertiary-color);
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export const FooterCredits = styled.div`
  display: flex;
  justify-content: flex-end;
  color: var(--tertiary-color);
  font-size: 14px;

  @media (max-width: 600px) {
    justify-content: center;
    text-align: center;
  }
`;
