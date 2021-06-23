import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "@material-ui/core";

export default {
    component: Button,
    title: 'MaterialUI/Button',
    argTypes: {
        children: {
            type: 'string',
            name: 'buttonText',
            defaultValue: 'Button text',
        },
        disabled: {
            type: 'boolean',
            defaultValue: false,
        },
        fullWidth: {
            type: 'boolean',
            defaultValue: true
        },
        variant: {
            name: 'Some name',
            description: 'Some description',
            defaultValue: 'contained',
            options: ['contained', 'outlined', 'text'],
            control: {
                type: 'inline-radio'
            }
        },
        color: {
            defaultValue: 'primary',
            options: ['default', 'inherit', 'primary', 'secondary'],
            control: {
                type: 'select'
            }
        }
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => (
    <Button {...args} >{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    variant: "contained",
};
