import React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';

const Text = styled.h2`
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 46px;
    letter-spacing: -0.02em;
    color: ${(props) => props.color ? props.color : 'inherit'};
`;

const TextH2 = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextH2;


