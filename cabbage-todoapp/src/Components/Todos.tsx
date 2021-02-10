import { Row } from "./row/Row"
import { data } from "../todos"
import { useState } from "react"

type Todo ={
    id: string
    task: string
    isCompleted: boolean
}

export const Todos = () =>{
    const [todos, setTodos] = useState<Todo[]>(data)

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
      }

      const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          }
          return todo
        })
        setTodos(updatedTodos)
      }

    return (
        <section>
            {todos.map((todo) => (
                <Row key={todo.id}  todo={todo} handleDeleteTodo={handleDeleteTodo} handleCheckTodo={handleCheckTodo}/>
            ))}
        </section>
    )
}