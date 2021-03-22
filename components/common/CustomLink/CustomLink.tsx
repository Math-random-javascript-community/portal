import React from 'react';
import styled from 'styled-components';
import { CustomLinkProps } from './CustomLink.interface';

const StyledCustomLink = styled.a`
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  color: ${({ theme }) => theme.customLink.defaultColor};
`;

const CustomLink = ({ url, title = url, className }: CustomLinkProps) => (
  <StyledCustomLink href={url} target="_blank" className="className">
    {title}
  </StyledCustomLink>
);

export default CustomLink;
