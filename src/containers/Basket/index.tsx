import React from 'react'
import { Data } from './dataType'
import useBasket from './useBasket'
import ProductDetails from '../ProductDetails'
import BasicTemplate from '../../templates/BasicTemplate'

const Basket = (): JSX.Element => {
  const [basket, dispatch] = useBasket();
  console.log('from basket', basket)
  return (
    <BasicTemplate container={ProductDetails(basket)} sideBar="sidebar" />
  )
}

export default Basket
