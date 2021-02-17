import styled from 'styled-components';
import { TextProps } from './Text.interface';

const Text = styled.span<TextProps>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme, color }) => (color ? color : theme.text.defaultColor)};
`;

export default Text;
