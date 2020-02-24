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
`

interface MainProps {
  sideBar?: React.ReactNode;
  container: React.ReactNode;
}

function Main({ sideBar, container }: MainProps): JSX.Element {
  return (
    <StyledDiv>
      <CenterChildren>
        <main className="main">
          <div className="sidebar">
            {sideBar}
          </div>
          <div className="container">
            {container}
          </div>
        </main>
      </CenterChildren>
    </StyledDiv>
  );
}

export default Main;
