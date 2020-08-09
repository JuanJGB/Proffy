import React, { TextareaHTMLAttributes } from 'react';
import './styles.css';
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}
const Textarea:React.FC<TextAreaProps> = ({ label, name, ...rest}) => {
  return (
    <div className="TextArea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  )
}

export default Textarea;