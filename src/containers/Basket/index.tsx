import React from 'react'
import useBasket from './useBasket'
import BasicTemplate from '../../templates/BasicTemplate'

const Basket = (): JSX.Element => {
  const [basket, dispatch] = useBasket();
  console.log('from basket', basket)
  return (
    <BasicTemplate container="container" />
  )
}

export default Basket
