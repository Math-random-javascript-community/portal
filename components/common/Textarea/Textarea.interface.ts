import { TextareaHTMLAttributes } from 'react';

export interface StyledTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TextareaProps extends StyledTextareaProps {
  value: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  bottomText?: string;
  hasError?: boolean;
  hasValidValue?: boolean;
  requiredMessage?: string;
  rows?: number;
}
