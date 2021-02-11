import React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';

const Text = styled.span`
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 11px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${(props) => props.color ? props.color : 'inherit'};
`;

const TextPreTitle = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextPreTitle;


