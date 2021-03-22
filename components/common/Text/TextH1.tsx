import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextH1 = styled(Text).attrs({
  as: 'h1'
})`
  font-weight: bold;
  font-size: 64px;
  line-height: 74px;
  letter-spacing: -0.02em;
`;

const TextH1 = (props: TextProps) => (
  <StyledTextH1 color={props.color} className={props.className}>
    {props.children}
  </StyledTextH1>
);

export default TextH1;
