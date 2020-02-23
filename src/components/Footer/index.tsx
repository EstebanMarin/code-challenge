import React from 'react';

interface FooterProps {
  text: string
}

function Footer({ text }: FooterProps) {
  return (
      <footer className="footer">
        {`${text}`}
      </footer>
  );
}

export default Footer;
