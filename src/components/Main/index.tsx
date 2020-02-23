import React from 'react';

interface MainProps {
  children: React.ReactNode
}

function Main({ children }: MainProps): JSX.Element {
  return (
    <div className="pageContainer">
      <main className="main">
        {children}
        <div >Side Bar
      </div>
      </main>

    </div>
  );
}

export default Main;
