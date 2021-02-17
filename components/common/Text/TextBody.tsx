import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.interface';

const Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme, color }) => (color ? color : theme.text.defaultColor)};
`;

const TextBody = (props: TextProps) => <Text color={props.color}>{props.children}</Text>;

export default TextBody;
