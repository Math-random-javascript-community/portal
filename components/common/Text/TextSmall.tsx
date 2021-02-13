import React from 'react';
import styled from 'styled-components';
import { TextProps } from './TextProps';

const Text = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme, color }) => color ? color : theme.text.defaultColor};
`;

const TextSmall = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextSmall;
