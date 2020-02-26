import React from 'react'
import { render } from '@testing-library/react'
import Icons from './index'

test('Renders correctly the header', () => {
  const test = render(<Icons />)
  expect(test).toMatchSnapshot()
})
