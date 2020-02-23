import React from 'react'
import { render } from '@testing-library/react'
import Footer from './index'

test('Renders correctly the header', () => {
  const test = render(<Footer text="Hello" />)
  expect(test).toMatchSnapshot()
})
