import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.interface';

const Text = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${({ theme, color }) => (color ? color : theme.text.defaultColor)};
`;

const TextH3 = (props: TextProps) => <Text color={props.color}>{props.children}</Text>;

export default TextH3;
