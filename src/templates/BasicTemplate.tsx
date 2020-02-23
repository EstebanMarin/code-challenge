import React from 'react';
import { Header, Footer, Main } from '../components'
import { media } from '../utilities/mediaQueries'
import styled from 'styled-components';
import BasicTemplateStyled from './styles.tw'

interface BasicTemplateProps {
  children: React.ReactNode
}

const UnstyledBasicTemplate = ({ children }: BasicTemplateProps) => {
  return (
    <BasicTemplateStyled>
      <Header text="hello" />
      <Main>{children}</Main>
      <Footer text="hello" />
    </BasicTemplateStyled>
  )
}

const BasicTemplate = styled(UnstyledBasicTemplate)`
  ${media.desktop} {
    background: dodgerblue;
  }
  ${media.tablet} {
    background: mediumseagreen;
  }
  ${media.phone} {
    background: palevioletred;
  }
`

export default BasicTemplate
