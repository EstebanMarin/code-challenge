import React from 'react'
import { render } from '@testing-library/react'
import CheckoutButton from './index'

test('Renders correctly the header', () => {
  const test = render(<CheckoutButton />)
  expect(test).toMatchSnapshot()
})
