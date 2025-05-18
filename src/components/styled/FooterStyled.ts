import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  padding-top: 25px;
  margin-top: auto;
  padding-bottom: 25px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 55px;
  }
`;

export const FooterContent = styled.div`
  flex-basis: 50%;
  margin-left: -40px;
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export const FooterCredits = styled.div`
  flex-basis: 50%;
  justify-content: flex-end;
  color: var(--tertiary-color);
  font-size: 14px;
  text-align: right;
`;
