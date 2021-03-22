import styled from 'styled-components';
import { TextProps } from './Text.interface';

const StyledText = styled.span<TextProps>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme, color }) => (color ? color : theme.text.defaultColor)};
`;

const Text = (props: TextProps) => (
  <StyledText color={props.color} className={props.className}>
    {props.children}
  </StyledText>
);

export default Text;
