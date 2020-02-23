import React from 'react';
import './App.css';
import BasicTemplate from './templates/BasicTemplate'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

`
function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <BasicTemplate sideBar="side-bar" container="container" />
      </div>
    </>
  );
}

export default App;
