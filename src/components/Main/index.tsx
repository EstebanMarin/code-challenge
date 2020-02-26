import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    flex-grow: 1;
    position: relative;
`
const CenterChildren = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display:flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`
const StyledContainer = styled.div`
    width: 50%;
    margin: 30px 30px 0px 320px;
`

const StyledSidebar = styled.div`
    width: 50%;
    margin: 30px 70px;
`

interface MainProps {
  sideBar?: React.ReactNode;
  container: React.ReactNode;
}

function Main({ sideBar, container }: MainProps): JSX.Element {
  return (
    <StyledDiv>
      <CenterChildren>
        <StyledContainer>{container}</StyledContainer>
        <StyledSidebar>{sideBar}</StyledSidebar>
      </CenterChildren>
    </StyledDiv>
  );
}

export default Main;
