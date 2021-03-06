import React from 'react'
import { Details, Icons } from '../components'
import styled from 'styled-components'

const Frame = styled.div`
    border: solid 1px grey;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Shoes = ({basket}: any): JSX.Element => {
  return (
      <Frame>
          <img alt="" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/6b8320c5b7464865be7aaa6b00f5cdbd_9366/G28859_660_01_standard.jpg"/>
          <Details />
          <Icons />
    </Frame>
  )
}

export default Shoes
