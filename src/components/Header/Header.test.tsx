import React from 'react'
import {render} from '@testing-library/react'
import Header from './index'

test('Renders correctly the header', () => {
  const test = render(<Header />)
  expect(test).toMatchSnapshot()
})
