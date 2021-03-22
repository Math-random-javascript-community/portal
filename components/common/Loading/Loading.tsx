import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  width: 300px;
  color: ${({ theme }) => theme.text.color};
`;

const Loading = () => <Wrapper>Loading...</Wrapper>;

export default Loading;
