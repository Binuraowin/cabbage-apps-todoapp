import { DeleteOutlined } from '@ant-design/icons';
import React from "react";

type Todo ={
    id:string
    task:string
    isCompleted:boolean
}

type TodoProps = {
    todo:Todo
    handleDeleteTodo: (id: string) => void
    handleCheckTodo: (id: string) => void
}

export const Row = ({
    todo: { task, isCompleted,id},handleDeleteTodo,handleCheckTodo
  }: TodoProps) => (
    <div >
      <p >
        {task}
      </p>
      <div>
        <button  onClick={() => handleDeleteTodo(id)}>
            <DeleteOutlined />
        </button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}/>
      </div>
    </div>
  )
  