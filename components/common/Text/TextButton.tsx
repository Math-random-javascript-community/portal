import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextButton = styled(Text)`
  font-weight: bold;
  font-size: 10px;
  line-height: 11px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const TextButton = (props: TextProps) => (
  <StyledTextButton color={props.color}>{props.children}</StyledTextButton>
);

export default TextButton;
