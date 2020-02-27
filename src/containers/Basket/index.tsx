import React from 'react'
import useBasket from './useBasket'
import ProductDetails from '../ProductDetails'
import { BasicTemplate, Sidebar } from '../../templates/'
import { createCtx } from '../../utilities/CreateContext'


const Basket = (): JSX.Element => {
  const [basket, dispatch] = useBasket();
  return (
    <BasicTemplate container={ProductDetails({ basket, dispatch })} sideBar={Sidebar({ basket, dispatch })} />
  )
}

export default Basket
