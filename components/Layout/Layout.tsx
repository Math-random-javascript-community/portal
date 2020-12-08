import Head from 'next/head';
import Link from 'next/link';
import React, {ReactNode} from 'react';

import {Footer} from '../Footer/index';
import FiltersLayout from './Filters';
import {Filter} from "../../interfaces";


const siteTitle: string = 'Math.random(); community portal';

type PropsDataT = {
    itemsList: Array<object>
    filtersList: Filter[]
    errors: string
}

type Props = {
    children?: ReactNode
    home?: boolean
    propsData?: PropsDataT
}

const Layout =({ children, home, propsData }: Props) =>  (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Math.random(); community portal"
      />
      <meta name="og:title" content={siteTitle} />
    </Head>
    <header>
      <h2>Page header</h2>
        
      {home ? (
        <>
          <FiltersLayout data={propsData.filtersList}/>
          <h2>Home page </h2>
          <h3>{siteTitle}</h3>
        </>
      ) : (
        <>
          <h2>Not Home page </h2>
          <h4 >
            <Link href="/">
              <a >{siteTitle}</a>
            </Link>
          </h4>
        </>
      )}
    </header>
    <main>
      <h2>page content</h2>
      {children}
    </main>
        
    {!home && (
      <div>
        <h2>Not home page </h2>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
    <Footer />
  </div>
);

export default Layout;