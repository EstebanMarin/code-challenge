import React from 'react'
import styled from 'styled-components'
import x from './assets/x.png'
import e from './assets/e.png'
import h from './assets/h.png'

const StyledD = styled.div`
    width: 70px;
`
const IconList = styled.div`
    display: flex;
    flex-direction: column;
`
const XImg = styled.img`
    margin-top: 10px;
    height: 35px;
`

const EImg = styled.img`
    margin-top: 15px;
    height: 35px;
`
const HImg = styled.img`
    margin-top: 15px;
    heigh: 10px;
`
const ButtonWrapper = styled.button`
    background: rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    margin: 0px;
`

const Icons = () => {
  return (
    <StyledD>
      <IconList>
        <ButtonWrapper>
          <XImg src={x} />
        </ButtonWrapper>
        <ButtonWrapper>
          <EImg src={e} />
        </ButtonWrapper>
        <ButtonWrapper>
          <HImg src={h} />
        </ButtonWrapper>
      </IconList>
    </StyledD>
  )
}

export default Icons
