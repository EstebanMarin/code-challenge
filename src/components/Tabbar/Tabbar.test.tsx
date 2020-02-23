import React from 'react'
import { render } from '@testing-library/react'
import Tabbar from './index'

test('Renders correctly the header', () => {
  const test = render(<Tabbar text="Hello" />)
  expect(test).toMatchSnapshot()
})
