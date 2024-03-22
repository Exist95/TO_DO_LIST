import React from 'react'
import styled from 'styled-components'

const Buttons = () => {

  const clickPlus = () => {
    let data = localStorage.getItem('todo')
    let plus = Number(data) + 1
    localStorage.setItem('todo', String(plus))
    location.reload()
  }

  return (
    <BottomBtn onClick={clickPlus}>
      PLUS
    </BottomBtn>
  )
}


const BottomBtn = styled.div`
  background-color: black;
  padding: 8px;
  display: flex;
  justify-content: center;
  border-radius: 0 0 12px 12px;
  color: white;
  cursor: pointer;
`



export default Buttons