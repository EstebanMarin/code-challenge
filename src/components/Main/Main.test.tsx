import React from 'react'
import { render } from '@testing-library/react'
import Main from './index'

test('Renders correctly the header', () => {
  const test = render(<Main />)
  expect(test).toMatchSnapshot()
})
