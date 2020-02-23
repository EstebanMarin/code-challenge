import React, { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode
}

function Footer({ children }: FooterProps) {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
}

export default Footer;
