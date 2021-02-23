export interface StyledButtonProps {
  isRounded?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonProps extends StyledButtonProps {
  text: string;
}
