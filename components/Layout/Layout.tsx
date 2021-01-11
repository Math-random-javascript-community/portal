import Head from 'next/head';
import Link from 'next/link';
import React, {ReactNode} from 'react';

import {Footer} from '../Footer';
import {Header} from '../Header';
import {SITE_TITLE} from '../../constants/main';
import styled from 'styled-components';
import SubmitWebinar from '../Blocks/SubmitWebinar';

type LayoutProps = {
  children?: ReactNode
  isHome?: boolean
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

`;
const PageWrapper = styled.div`
  width: 1111px;
`;
const BottomWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const StyledBack = styled.div`
  padding: 10px 0;
`;

const Layout = ({children, isHome}: LayoutProps) => (
  <Wrapper>
    <PageWrapper>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Math.random(); community portal"
        />
        <meta name="og:title" content={SITE_TITLE}/>
      </Head>
      <Header isHome={isHome}/>
      <main>
        {children}
      </main>

      {!isHome && (
        <StyledBack>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </StyledBack>
      )}
    </PageWrapper>
    {isHome && (
      <BottomWrapper>
        <SubmitWebinar/>
      </BottomWrapper>
    )}
    <PageWrapper>
      <Footer/>
    </PageWrapper>
  </Wrapper>
);

export default Layout;