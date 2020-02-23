import React from 'react'
import { render } from '@testing-library/react'
import Toolbar from './index'

test('Renders correctly the header', () => {
  const testElement: React.ReactNode = <p>hello</p>
  const test = render(<Toolbar>{testElement}</Toolbar>)
  expect(test).toMatchSnapshot()
})
