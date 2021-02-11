import React from 'react';
import styled from 'styled-components';
import TextProps from './TextProps';

const Text = styled.span`
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.color ? props.color : 'inherit'};
`;

const TextBold = (props: TextProps) => (
  <Text color={props.color}>{props.children}</Text>
);

export default TextBold;



