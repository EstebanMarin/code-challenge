import * as React from 'react'
import styled from 'styled-components'
import toolBar from './assets/Toolbar.png'

const CenterNav = styled.div`
    height: 35px;
    display: flex;
    justify-content: center;
    align-items:center;
`


function Toolbar(): JSX.Element {
  return (
    <CenterNav>
      <nav>
        <img alt="not-Working" src={toolBar} />
      </nav>
    </CenterNav>
  );
}

export default Toolbar;
