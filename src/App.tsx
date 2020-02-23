import React from 'react';
import { Header, Footer } from './components'
import './App.css';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
`

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header text="hello" />
        <Footer text="hello" />
      </div>
    </>
  );
}

export default App;
