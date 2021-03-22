import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextSmall = styled(Text)`
  font-size: 14px;
  line-height: 16px;
`;

const TextSmall = (props: TextProps) => (
  <StyledTextSmall color={props.color} className={props.className}>
    {props.children}
  </StyledTextSmall>
);

export default TextSmall;
