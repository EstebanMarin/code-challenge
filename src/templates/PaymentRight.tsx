import React from 'react'
import { PayPalButton, CheckoutButton } from '../components'
import styled from 'styled-components'

const FlexContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const StyledDiv = styled.div`
    margin: 10px;
`
const StyledP = styled.p`
    font-size: large;
    text-align: center;
`
const Payment = (): JSX.Element => {
  return (
    <FlexContainer >
      <CheckoutButton />
      <StyledDiv>
        <StyledP>
          OR
        </StyledP>
      </StyledDiv>
      <PayPalButton />
    </FlexContainer>
  )
}

export default Payment
