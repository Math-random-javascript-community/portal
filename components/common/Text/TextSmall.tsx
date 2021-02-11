import React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';

const Text = styled.span`
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.color ? props.color : 'inherit'};
`;

const TextSmall = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextSmall;


