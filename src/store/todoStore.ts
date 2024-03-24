import { create } from "zustand";

export interface ITodo {
  text: string;
  completed: boolean;
  id: number;
}

export interface ITodoStore {
  todos: ITodo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const useTodoStore = create<ITodoStore>(set => ({
  todos: [],
  addTodo: (text: string) => set((state: ITodoStore) => ({ todos: [...state.todos, { text, completed: false, id: Date.now() }] })),
  removeTodo: (id: number) => set((state: ITodoStore) => ({ todos: state.todos.filter((t: any) => t.id !== id) })),
  toggleTodo: (id: number) => set((state: ITodoStore) => ({ todos: state.todos.map((t: any) => t.id === id ? { ...t, completed: !t.completed } : t) }))

}))

export default useTodoStore