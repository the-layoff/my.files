import React, { ChangeEventHandler, FocusEventHandler, LabelHTMLAttributes, MouseEventHandler, ReactNode, useState } from "react";
import "./textInput.css";

type ValueOf<T> = T[keyof T];

interface InputTypeAttribute {
    text: "text";
    password: "password";
    email: "email";
    hidden: "hidden";
}
type ValueOfInputTypeAttribute = ValueOf<InputTypeAttribute>;
export const InputTypeAttributeValues: Array<ValueOf<InputTypeAttribute>> = ["text", "hidden", "email", "password"];

interface InputEventHandlers {
    onClick?: MouseEventHandler;
    onFocus?: FocusEventHandler;
    onChange?: ChangeEventHandler;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}

export interface LabelProps<T = Element> extends LabelHTMLAttributes<T> {
    form?: string;
    htmlFor?: string;
    labelContent?: string;
    children?: ReactNode;
}

export interface InputProps extends InputEventHandlers {
    id?: string;
    name: string;
    placeholderLabel?: string;
    defaultInputValue?: string;
    addLabel?: boolean;
    disabled?: boolean;
    inputType?: ValueOfInputTypeAttribute;
    children?: ReactNode;
    labelProps?: keyof LabelProps;
}

const FormLabel = ({ form, htmlFor, labelContent, children }: LabelProps): JSX.Element => (
    <label form={form} htmlFor={htmlFor} className="mf-text-label">{labelContent} {children}</label>
);

function FormInput({
    id,
    name,
    defaultInputValue,
    children,
    placeholderLabel,
    inputType,
    addLabel,
    disabled,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    form,
    htmlFor,
    labelContent,
}: InputProps & LabelProps): JSX.Element {
    const [textInputValue, setInputValue] = useState(defaultInputValue ?? ""); // default state ~empty string~

    const InputTextBox =
        <input
            id={id ?? name}
            name={name}
            type={inputType ?? "text"}
            disabled={disabled ?? false}
            placeholder={placeholderLabel ?? ""}
            onFocus={onFocus}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onChange={e => setInputValue(e.target.value)}
            value={textInputValue}
            className="mf-text-input"
        >
            {children}
        </input>;

    return (
        addLabel ?? false ?
            <FormLabel
                form={form}
                htmlFor={htmlFor}
                labelContent={labelContent}
            >
                {InputTextBox}
            </FormLabel>
            : InputTextBox
    )
}

export default FormInput;
