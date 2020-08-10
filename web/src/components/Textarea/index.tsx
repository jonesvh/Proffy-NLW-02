import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Input: React.FC<TextareaProps> = ({name, label, ...rest}) => {
    return (
        <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea type="text" id={name} {...rest} />
    </div>
    )
}

export default Input;