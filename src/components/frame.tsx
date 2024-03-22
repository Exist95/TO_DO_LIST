'use client'
import React from 'react'
import styled from 'styled-components'
import Buttons from './buttons'
import ListSection from './list'

const Frame = () => {
  return (
    <FrameContainer>
      <Title>TO DO LIST</Title>
      <ListSection />
      <Buttons />
    </FrameContainer>
  )
}
export const FrameContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  border-color: red;
  border-bottom: 4px;
`

export default Frame