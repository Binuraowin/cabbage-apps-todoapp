import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Row} from "./Row"
import { Todo } from "../../types"
export default {
    component: Row,
    title: 'Row',
} as Meta;

export const row = () => <Row todo={{id:"1",task:"task1",isCompleted:false}} handleCheckTodo={id => 1} handleDeleteTodo={id => 1}/>;