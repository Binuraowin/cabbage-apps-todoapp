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
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <Button onClick={handleSubmitTodo} type={"dashed"} aria-label="Add todo">
        <PlusOutlined className="shadow-sm border-none h-10 w-7 flex h-7 w-7 flex justify-center items-center" />
    </Button>
  </form>
)