import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextSubtitle = styled(Text)`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
`;

const TextSubtitle = (props: TextProps) => (
  <StyledTextSubtitle color={props.color}>{props.children}</StyledTextSubtitle>
);

export default TextSubtitle;
