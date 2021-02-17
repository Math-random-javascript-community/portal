import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextBold = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

const TextBold = (props: TextProps) => (
  <StyledTextBold color={props.color}>{props.children}</StyledTextBold>
);

export default TextBold;
