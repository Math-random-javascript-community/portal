import React from 'react';
import styled from 'styled-components';

export type CustomLinkProps = {
  url: string,
  title?: string
}

const StyledCustomLink = styled.a`
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    color: ${({ theme }) => theme.customLink.defaultColor};
`;

const CustomLink = ({url, title = url}: CustomLinkProps) => (
  <StyledCustomLink href={url} target="_blank">
    {title}
  </StyledCustomLink>
);

export default CustomLink;