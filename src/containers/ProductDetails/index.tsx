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

const ProductDetails = ({basket, dispatch}: any): React.ReactNode => {
    const { data: { totalProductCount, pricing } } = basket
    console.log(basket)
  return (
    <StyledArticle>
      <Margin>
        <h3>YOUR BAG</h3>
      </Margin>
      <Margin>
        <Total amount={pricing?.total} items={totalProductCount} />
      </Margin>
      <Shoes basket={basket} />
      <PaymentLeft />
      <Shipping />
    </StyledArticle>
  )
}

export default ProductDetails
