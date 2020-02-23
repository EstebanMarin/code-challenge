import React from "react";
import { Header, Footer, Main } from "../components";
import { media } from "../utilities/mediaQueries";
import styled from "styled-components";

const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop} {
  }
  ${media.tablet} {
  }
  ${media.phone} {
  }
`;

interface BasicTemplateProps {
  children: React.ReactNode;
}

const BasicTemplate = ({ children }: BasicTemplateProps) => {
  return (
    <div className="page-container">
      <PageContainer>
        <Header>Header</Header>
        <Main sideBar="sidebar" container="container" />
        <Footer>Footer</Footer>
      </PageContainer>
    </div>
  );
};

export default BasicTemplate;
