import React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';

const Text = styled.h1`
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 74px;
    letter-spacing: -0.02em;
    color: ${(props) => props.color ? props.color : 'inherit'};
`;

const TextH1 = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextH1;


