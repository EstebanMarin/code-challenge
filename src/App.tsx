import React from 'react';
import './App.css';
import Basket from  './containers/Basket'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
`


function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Basket />
      </div>
    </>
  );
}

export default App;
