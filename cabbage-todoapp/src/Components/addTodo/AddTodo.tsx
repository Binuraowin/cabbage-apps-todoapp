import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined } from '@ant-design/icons';
import { ChangeEvent, FormEvent } from "react";

export type AddTodoProps ={
    task:string
    handleSubmitTodo: (e: FormEvent) => void
    handleChange: (e: ChangeEvent) => void
}

export const AddTodo = ({
handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form  onSubmit={handleSubmitTodo}>

    <input
      type="text"
      name="task"
      value={task}
      onChange={handleChange}
    />
    <Button onClick={handleSubmitTodo} type={"dashed"} aria-label="Add todo">
        <PlusOutlined  />
    </Button>
  </form>
)