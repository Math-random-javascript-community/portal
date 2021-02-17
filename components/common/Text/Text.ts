import styled from 'styled-components';
import { TextProps } from './Text.interface';

const Text = styled.span<TextProps>`
  font-style: normal;
  color: ${({ theme, color }) => (color ? color : theme.text.defaultColor)};
`;

export default Text;
