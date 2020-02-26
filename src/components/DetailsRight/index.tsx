import React from 'react'
import styled from 'styled-components'

const Border = styled.div`
    border: 1px solid LightGray;
    margin-top: 10px;
`
const Heading = styled.b`
`
const Padding = styled.div`
    margin: 10px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const DetailsRight = () => {
  return (
    <Border>
      <Padding>
        <Heading>ORDER SUMMARY</Heading>
      </Padding>
      <Row>
          <p>1 Item</p>
          <p>$120.00</p>
      </Row>
      <Row>
          <p>DELIVERY</p>
          <p>FREE</p>
      </Row>
      <Row>
          <p>Sales Tax</p>
          <p>-</p>
      </Row>
      <Row>
          <b>Total</b>
          <b>$120.00</b>
      </Row>
    </Border>
  )
}

export default DetailsRight
