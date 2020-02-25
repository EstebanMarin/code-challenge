import React from 'react'
import { render } from '@testing-library/react'
import Total from './index'

test('Renders correctly the header', () => {
  const test = render(<Total amount={180} items={1} />)
  expect(test).toMatchSnapshot()
})
