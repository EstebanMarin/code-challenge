import React from 'react'
import { render } from '@testing-library/react'
import PayPalButtonButton from './index'

test('Renders correctly the header', () => {
  const test = render(<PayPalButtonButton />)
  expect(test).toMatchSnapshot()
})
