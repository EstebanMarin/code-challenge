import React from 'react'
import shipping from './assets/shipping.png'
import styled from 'styled-components'

const StyledImg = styled.img`
    height: 100px;
    margin: 0px 60px;
`
const Shipping = (): JSX.Element => <StyledImg src={shipping} />

export default Shipping
