import React from 'react';
import { Header, Footer, Main } from './components'
import './App.css';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

`
interface BasicTemplateProps {
  children: React.ReactNode
}
const BasicTemplate = ({ children }: BasicTemplateProps) => {
  return (
    <div>
      <Header text="hello" />
      <Main>{children}</Main>
      <Footer text="hello" />
    </div>
  )
}

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <BasicTemplate>
          Hello
          </BasicTemplate>
      </div>
    </>
  );
}

export default App;
