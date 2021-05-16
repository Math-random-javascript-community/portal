import { InputHTMLAttributes } from 'react';

export interface StyledTextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputProps extends StyledTextInputProps {
  value: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  bottomText?: string;
  hasError?: boolean;
  hasValidValue?: boolean;
  requiredMessage?: string;
}
