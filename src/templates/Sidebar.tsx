import React from 'react'
import styled from 'styled-components'
import { DetailsRight } from '../components'
import { PaymentRight } from './index'

const StyledDiv = styled.div`
    margin-top: 150px;
`

const Sidebar = () => {
  return (
    <StyledDiv>
        <PaymentRight />
        <DetailsRight />
    </StyledDiv>
  )
}

export default Sidebar
