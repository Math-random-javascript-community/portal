import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.interface';

const Text = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme, color }) => (color ? color : theme.text.defaultColor)};
`;

const TextBold = (props: TextProps) => <Text color={props.color}>{props.children}</Text>;

export default TextBold;
