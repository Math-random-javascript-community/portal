import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import React from 'react';
import {APP_THEME} from '../styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={APP_THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
