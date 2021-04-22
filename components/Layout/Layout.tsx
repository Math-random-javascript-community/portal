import Head from 'next/head';
import React, { ReactNode } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { SITE_TITLE } from '../../constants/main';
import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

interface LayoutProps {
  children?: ReactNode;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  & .content {
    max-width: 1111px;
    width: 100%;
    flex: 1 0 auto;
  }

  & .footer {
    width: 100%;
    flex-shrink: 0;
  }

  @media ${device.tablet} {
    & .main {
      padding: 0 12px;
    }
  }
`;

const HorizontalLine = styled.div`
  height: 1px;
  border: 1px solid ${({ theme }) => theme.horizontalLine.defaultColor};
  width: 100%;
  margin: 48px 0;
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content="Math.random(); community portal" />
      <meta name="og:title" content={SITE_TITLE} />
    </Head>
    <Container>
      <div className="content">
        <Header />
        <main className="main">{children}</main>
      </div>
      <div className="footer">
        <HorizontalLine />
        <Footer />
      </div>
    </Container>
  </>
);

export default Layout;
