import React from 'react'
import { render } from '@testing-library/react'
import Shipping from './index'

test('Renders correctly the header', () => {
  const test = render(<Shipping />)
  expect(test).toMatchSnapshot()
})
