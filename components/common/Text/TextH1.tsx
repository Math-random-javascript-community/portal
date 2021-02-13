import React from 'react';
import styled from 'styled-components';
import { TextProps } from './TextProps';

const Text = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 74px;
    letter-spacing: -0.02em;
    color: ${({ theme, color }) => color ? color : theme.text.defaultColor};
`;

const TextH1 = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextH1;
