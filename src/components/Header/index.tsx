import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: black
`

interface HeaderProps {
  text: string
}

function Header({ text }: HeaderProps) {
  return (
    <StyledHeader>
      <header className="header">
        {`${text}`}
      </header>
    </StyledHeader>
  );
}

export default Header;
