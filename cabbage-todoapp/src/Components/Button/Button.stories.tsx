import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from "antd";
import "antd/dist/antd.css";

export default {
    component: Button,
    title: 'Button',
} as Meta;

export const Dashed = () => <Button  type={"dashed"} >Dashed</Button>
export const Primary = () => <Button  type={"primary"} >Primary</Button>
export const Default = () => <Button  type={"default"} >Default</Button>


