import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined } from '@ant-design/icons';

export type AddTodoProps ={
    task:string
}

export const AddTodo = ({
  task,
}: AddTodoProps) => (
  <form  onSubmit={() => null}>

    <input
      type="text"
      name="task"
      value={task}
      onChange={() => null}
    />
    <Button onClick={() => null} type={"dashed"} aria-label="Add todo">
        <PlusOutlined  />
    </Button>
  </form>
)