import React from 'react';

interface HeaderProps {
  text: string
}

function Header({ text }: HeaderProps) {
  return (
    <header className="header">
      {`${text}`}
    </header>
  );
}

export default Header;
