import React from 'react'
import styled from 'styled-components'

const FlexboxContainerNamePrice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 270px;
`
const DetailsMargin = styled.div`
   margin: 20px 0px 0px 5px 
`

const Details = () => {
  return (
    <DetailsMargin>
      <FlexboxContainerNamePrice>
        <p>SUPER START SHOES</p>
        <p>$80.00</p>
      </FlexboxContainerNamePrice>
      <p>
        CORE BLACK / TEAM ORANGE
</p>
      <p>
        SIZE: M 6 / W 7
</p>
      <p>
        QTY: 1
</p>
    </DetailsMargin>
  )
}

export default Details
