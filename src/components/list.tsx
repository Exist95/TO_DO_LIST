'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ListSection = () => {
  const [isData, setIsData] = useState(false)

  useEffect(() => {
    const localData = localStorage.getItem(`todo`)
    setIsData(!!localData)
  }, [])

  return (
    <ListContainer>
      {isData
        ? <div>it is list</div>
        : <div>Please enter what you need to do today.</div>
      }
    </ListContainer>
  )
}

export const ListContainer = styled.section`
  padding: 8px;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
`

export default ListSection