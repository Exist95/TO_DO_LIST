'use client'
import React, { useState } from 'react'
import useTodoStore from '@/store/todoStore'
import styled from 'styled-components'

const AddTodoForm = () => {
  const [text, setText] = useState('')
  const addTodo = useTodoStore(state => state.addTodo)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim()) return;
    addTodo(text)
    setText('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <Button type='submit'>Add</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`

const Input = styled.input`
  display: flex;
  flex-direction: 1;
  padding: 8px;
  border: 2px;
  border-radius: .25rem;
`

const Button = styled.button`
  animation-duration: 200;
  background-color: blue;
  color: white;
  margin-left: 8px;
  border-radius: 0.25rem;
  padding: 8px;
`

export default AddTodoForm