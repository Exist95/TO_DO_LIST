'use client'
import AddTodoForm from '@/components/addTodoForm'
import TodoList from '@/components/todoList'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Frame>
        <h1>Todo List</h1>
        <AddTodoForm />
        <TodoList />
      </Frame>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    margin-top: auto;
    justify-content: center;
   
    height: 100vh;
    padding: 0 24px;
  `

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 2px;
  border-radius: 12px;
  box-shadow: 2px;
  height: 100%;
`