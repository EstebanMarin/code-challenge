import React from 'react';
import { Header, Footer, Main } from '../components'
import { media } from '../utilities/mediaQueries'
import styled from 'styled-components';

interface BasicTemplateProps {
  children: React.ReactNode
}

const BasicTemplate = ({ children }: BasicTemplateProps) => {
  return (
    <div>
      <Header text="hello" />
      <Main>{children}</Main>
      <Footer text="hello" />
    </div>
  )
}

export default BasicTemplate
