import React from 'react'
import styled from 'styled-components'
import PayPal from './assets/icon-paypal-logo.svg'
import Arrow from './assets/Arrow.png'

const StyledButton = styled.button`
    border: 2px solid black;
`
const FlexContainer = styled.div`
    display: flex;
    width: 350px;
    flex-direction: row;
    justify-content: space-between;
`

const StyledImg = styled.img`
    height: 25px;
    margin: 0px 0px;
`

const PayPalButton = (): JSX.Element => {
  return (
    <StyledButton>
      <FlexContainer>
        <StyledImg src={PayPal} />
        <StyledImg src={Arrow} />
      </FlexContainer>
    </StyledButton>
  )
}

export default PayPalButton
