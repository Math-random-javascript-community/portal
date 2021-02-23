import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextH3 = styled(Text).attrs({
  as: 'h3'
})`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
`;

const TextH3 = (props: TextProps) => (
  <StyledTextH3 color={props.color}>{props.children}</StyledTextH3>
);

export default TextH3;
