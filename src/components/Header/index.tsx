import React, { ReactNode } from 'react';
import styled from 'styled-components'

interface HeaderProps {
  children: ReactNode
}

const StyledHeader = styled.div`
   background-color: black;
    height: 100px;
`


function Header({ children }: HeaderProps) {
  return (
    <StyledHeader >
        {children}
    </StyledHeader>
  );
}

export default Header;
