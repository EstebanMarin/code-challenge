import * as React from 'react'
import styled from 'styled-components'
import navImage from './assets/nav.png'

const CenterNav = styled.div`
    height: 90px;
    display: flex;
    justify-content: center;
    align-items:center;
`


function Navbar(): JSX.Element {
  return (
    <CenterNav>
      <img alt="not-Working" src={navImage} />
    </CenterNav>
  );
}

export default Navbar;
