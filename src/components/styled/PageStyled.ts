import styled from "styled-components";

export const PageContent = styled.div`
  background-color: white;
  position: relative;
  min-height: 100vh;
  scroll-behavior: smooth;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: calc((100% - 1200px) / 2);
    background-color: #fafafa;
    border: 1px solid #f4f4f5;
  }

  &:before {
    left: 0;
    z-index: 1;
  }

  &:after {
    right: 0;
    z-index: 1;
  }

  // Scrollbar styling

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #383636;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(0, 0, 0);
  }

  @media (max-width: 1270px) {
    &:before,
    &:after {
      width: calc((100% - 90%) / 2);
    }
  }

  @media (max-width: 1024px) {
    &:before,
    &:after {
      width: calc((100% - 950px) / 2);
    }
  }

  @media (max-width: 800px) {
    &:before,
    &:after {
      display: none;
    }
  }
`;

export const PageContainer = styled.div`
  padding-top: 120px;
  flex-grow: 1;
`;

export const ContentWrapper = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1270px) {
    max-width: 90%;
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: 1024px) {
    max-width: 980px;
  }

  @media (max-width: 800px) {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 10px;
  }
`;

export const Title = styled.h1`
  color: var(--primary-color);
  font-family: var(--secondary-font), serif;
  font-size: 45px;
  font-weight: 700;
  width: 70%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h2`
  padding-top: 10px;
  color: var(--secondary-color);
  font-size: 24px;
  line-height: 28px;
  width: 70%;
  margin-top: 25px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  padding-top: 10px;
  color: var(--secondary-color);
  font-size: 16px;
  line-height: 28px;
  width: 70%;
  margin-top: 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const PageFooter = styled.footer`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border-top: 2px solid var(--tertiary-color);
  }
`;
