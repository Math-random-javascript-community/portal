import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextH2 = styled(Text).attrs({
  as: 'h2'
})`
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  letter-spacing: -0.02em;
`;

const TextH2 = (props: TextProps) => (
  <StyledTextH2 color={props.color} className={props.className}>
    {props.children}
  </StyledTextH2>
);

export default TextH2;
