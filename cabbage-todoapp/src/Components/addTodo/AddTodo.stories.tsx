import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {AddTodo} from "./AddTodo"
import { Todo } from "../../types"
import {Row} from "../row/Row";
export default {
    component: AddTodo,
    title: 'Todo',
} as Meta;

export const todo = () => <AddTodo task={"task"} handleSubmitTodo={id => 1} handleChange={id => 1}/>;
