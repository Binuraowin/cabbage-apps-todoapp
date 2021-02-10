import { Button, DatePicker, version ,Input} from "antd";
import "antd/dist/antd.css";
import { SendOutlined } from '@ant-design/icons';
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
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>

    <Input
      type="text"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <Button onClick={handleSubmitTodo} type={"default"} className="shadow-sm border-none h-15 w-12 flex justify-center items-center" aria-label="Add todo">
        <SendOutlined   className="shadow-sm border-none h-5 w-5"/>
    </Button>
  </form>
)