import React from 'react'
import { render } from '@testing-library/react'
import Main from './index'

test('Renders correctly the header', () => {
  const testElement: React.ReactNode = <p>hello</p>
  const test = render(<Main>{testElement}</Main>)
  expect(test).toMatchSnapshot()
})
