import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: black
`

interface FooterProps {
  text: string
}

function Footer({ text }: FooterProps) {
  return (
    <StyledFooter>
      <footer className="footer">
        {`${text}`}
      </footer>
    </StyledFooter>
  );
}

export default Footer;
