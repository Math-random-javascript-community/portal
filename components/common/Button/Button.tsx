import styled from 'styled-components';

type StyledButtonProps = {
  isRounded?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${({ isRounded }) => isRounded ? '32px' : '4px'};
  width: 100%;
  height: 43px;
  padding: 16px;
  font-size: 10px;
  font-weight: 700;
  line-height: 11px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }

  &:active {
    opacity: 0.9;
  }

  &:focus {
    outline: 0;
  }
`;

StyledButton.defaultProps = {
  isRounded: false,
  type: 'button',
};

export type ButtonProps = StyledButtonProps & {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text, ...props }: ButtonProps) => (
  <StyledButton {...props}>{text}</StyledButton>
);
