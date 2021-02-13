import React from 'react';
import styled from 'styled-components';
import { TextProps } from './TextProps';

const Text = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 11px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${({ theme, color }) => color ? color : theme.text.defaultColor};
`;

const TextButton = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextButton;
