import React from 'react'
import { render } from '@testing-library/react'
import Details from './index'

test('Renders correctly the header', () => {
  const test = render(<Details />)
  expect(test).toMatchSnapshot()
})
