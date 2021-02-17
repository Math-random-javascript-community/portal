import styled from 'styled-components';
import Text from './Text';
import { TextProps } from './Text.interface';

const StyledTextSmall = styled(Text)`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`;

const TextSmall = (props: TextProps) => (
  <StyledTextSmall color={props.color}>{props.children}</StyledTextSmall>
);

export default TextSmall;
