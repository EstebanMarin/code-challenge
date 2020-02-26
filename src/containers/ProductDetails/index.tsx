import React from 'react'
import { Shipping, Total } from '../../components'
import { PaymentLeft, Shoes } from '../../templates'
import styled from 'styled-components'

const StyledArticle = styled.article`
    margin: 0px 50px;
`
const Margin = styled.div`
    margin: 30px 0px;
`

const ProductDetails = (basket: any): React.ReactNode => {

  return (
    <StyledArticle>
      <Margin>
        <h3>YOUR BAG</h3>
      </Margin>
      <Margin>
        <Total amount={180} items={1} />
      </Margin>
      <Shoes />
    <PaymentLeft />
      <Shipping />
    </StyledArticle>
  )
}

export default ProductDetails
