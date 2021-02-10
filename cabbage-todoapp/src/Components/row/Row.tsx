import { DeleteOutlined } from '@ant-design/icons';
import React from "react";

type Todo ={
    id:string
    task:string
    isCompleted:boolean
}

type TodoProps = {
    todo:Todo
}

export const Row = ({
    todo: { task, isCompleted }
  }: TodoProps) => (
    <div >
      <p >
        {task}
      </p>
      <div className="w-1/6 flex justify-between items-center mr-2">
        <button>
            <DeleteOutlined />
        </button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => null}/>
      </div>
    </div>
  )
  