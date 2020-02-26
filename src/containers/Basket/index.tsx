import React from 'react'
import useBasket from './useBasket'
import ProductDetails from '../ProductDetails'
import { BasicTemplate, Sidebar } from '../../templates/'

const Basket = (): JSX.Element => {
    const [basket, dispatch] = useBasket();
    return (
    <BasicTemplate container={ProductDetails(basket)} sideBar={Sidebar()} />
  )
}

export default Basket
