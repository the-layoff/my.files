import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TextInput, { InputProps, LabelProps } from './textInput';


export default {
  title: 'Inputs / Textbox',
  component: TextInput,
  args: {
    id: "company-name",
    name: "Company",
    inputType: "text",
    placeholderLabel: "Please enter company name",
    disabled: false,
    defaultInputValue: "",
    addLabel: false,
    form: "",
    htmlFor: "",
    labelContent: "",
  },
  argTypes: {
    id: {
        control: 'text',
    },
    disabled: {
        options: [true, false],
        control: { type: 'radio' },
        defaultValue: false,
    },
    inputType: {
        options: ["text", "email", "password", "hidden"],
        control: { type: 'radio' },
        defaultValue: "text",
    },
    name: {
        control: 'text',
    },
    placeholderLabel: {
        control: 'text',
    },
    defaultInputValue: {
        control: 'text',
    },
    addLabel: {
        options: [true, false],
        control: { type: 'radio' }
    },
    labelContent: {
        control: 'text',
    },
  },
} as ComponentMeta<typeof TextInput>;

const generateComponentArgs = ({ id = "company-name", disabled = false, placeholderLabel = "Please enter company name", name = "Company", defaultInputValue = "", form = "", htmlFor = "", labelContent = "" } = {}
): InputProps & LabelProps => {
    return {
        id,
        disabled,
        placeholderLabel,
        name,
        defaultInputValue,
        form,
        htmlFor,
        labelContent
    };
}

export const TextInputComponent: ComponentStory<typeof TextInput> = (
  args
) => <TextInput {...args} />
TextInputComponent.args = {
    id : "company-name",
    disabled : false,
    placeholderLabel : "Please enter company name",
    name : "Company",
    defaultInputValue : "",
    form : "",
    htmlFor : "",
    labelContent : ""
}

export const AllVariations: any = (args: any) => (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%", rowGap: "1rem" }}>
        <TextInput {...args} />
        <TextInput {...args} addLabel={true} labelContent={"I am a Label"} />
        <TextInput {...args} addLabel={true} inputType={'email'} labelContent={"Email"} placeholderLabel={"Enter Email"} />
        
        <TextInput {...args} addLabel={true} inputType={'password'} labelContent={"Password"} placeholderLabel={"Enter Password"} />
        <TextInput {...args} addLabel={true} inputType={'hidden'} labelContent={"I am hidden!"} placeholderLabel={""} />
    </div>
)
AllVariations.args = generateComponentArgs();
