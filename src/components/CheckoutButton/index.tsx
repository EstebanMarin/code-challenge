import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border: 3px solid black;
    background-color: black;
    width: 520px;
`
const StyledB = styled.p`
   font-size: large;
    color: white;
`

const CheckoutButton = (): JSX.Element => {
  return (
    <StyledButton>
      <StyledB> GO TO CHECKOUT </StyledB>
    </StyledButton>
  )
}

export default CheckoutButton
