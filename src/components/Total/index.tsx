import React from 'react'
import styled from 'styled-components'

interface Total {
  items: number,
  amount: number,
}

const StyledP = styled.p`
    margin: 25px;
`

const Total = ({ items, amount }: Total): JSX.Element => {
  return (
    <StyledP>TOTAL: ({`${items}`} items) <b>${`${amount}`}</b></StyledP>
  )
}

export default Total
