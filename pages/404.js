import Layout from '../components/Layout/Layout';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 50px;
  color: brown;
  text-align: center;
  border: 1px solid brown;
  border-radius: 10px;
  padding: 20px;
`;
export default function Custom404() {
  return (
    <Layout>
      <StyledContainer>404 - Page Not Found</StyledContainer>
    </Layout>
  );
}