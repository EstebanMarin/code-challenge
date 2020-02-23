import React from "react";
import { Header, Main, Toolbar } from "../components";
import { media } from "../utilities/mediaQueries";
import Navbar from '../containers/Navbar'
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
  sideBar: React.ReactNode;
  container: React.ReactNode;
}

const BasicTemplate = ({ sideBar, container }: BasicTemplateProps) => {
  return (
    <div className="page-container">
      <PageContainer>
        <Header>
          <Navbar />
        </Header>
        <Toolbar />
        <Main sideBar={sideBar} container={container} />
      </PageContainer>
    </div>
  );
};

export default BasicTemplate;
