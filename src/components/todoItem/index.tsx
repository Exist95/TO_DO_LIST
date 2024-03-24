import useTodoStore, { ITodo } from '@/store/todoStore'
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const { removeTodo, toggleTodo } = useTodoStore()

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <Motion variants={variants} initial='initial' animate='animate' layout>
      <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <Text completed={todo.completed}>{todo.text}</Text>
      <Button onClick={() => removeTodo(todo.id)}>
        Delete
      </Button>
    </Motion>
  )
}

interface ITextProps {
  completed?: boolean;
}

const Motion = styled(motion.li)`
  width: 240px;
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 8px;
`

const Text = styled.span<ITextProps>`
  display: flex;
  margin: 0 0 0 4px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : '')};
`;

const Button = styled.button`
  padding: 4px 8px;
  background-color: red;
  color: white;
  border-radius: 0.25rem;
`

export default TodoItem