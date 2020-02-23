import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
`

interface MainProps {
    children: JSX.Element[]
}

function Main({ children }: MainProps) {
  return (
    <StyledMain>
        <main className="main" >
            {children}
        </main>
    </StyledMain>
  );
}

export default Main;
