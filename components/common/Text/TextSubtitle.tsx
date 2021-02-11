import React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';

const Text = styled.span`
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: ${(props) => props.color ? props.color : 'inherit'};
`;

const TextSubtitle = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextSubtitle;


