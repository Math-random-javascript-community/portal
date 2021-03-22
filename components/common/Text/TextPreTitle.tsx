import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextPreTitle = styled(Text)`
  font-weight: bold;
  font-size: 10px;
  line-height: 11px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const TextPreTitle = (props: TextProps) => (
  <StyledTextPreTitle color={props.color} className={props.className}>
    {props.children}
  </StyledTextPreTitle>
);

export default TextPreTitle;
