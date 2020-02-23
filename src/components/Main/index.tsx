import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    flex-grow: 1;
`
interface MainProps {
  sideBar: React.ReactNode;
  container: React.ReactNode;
}

function Main({ sideBar, container }: MainProps): JSX.Element {
  return (
    <StyledDiv>
      <main className="main">
        <div className="container">
          {container}
        </div>
        <div className="sidebar">
          {sideBar}
        </div>
      </main>
    </StyledDiv>
  );
}

export default Main;
