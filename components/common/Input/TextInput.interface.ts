import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

//TODO make TextInput and TextArea separate components
type CommonProps = {
  value: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  bottomText?: string;
  hasError?: boolean;
  hasValidValue?: boolean;
  requiredMessage?: string;
  rows?: number;
  inputType?: 'input' | 'textarea';
};

export interface StyledTextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface StyledTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export type TextAreaProps = StyledTextAreaProps & CommonProps;
export type TextInputProps = StyledTextInputProps & CommonProps;
