import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, APP_THEME } from '../styles/globalStyle';

export const decorators = [
  Story => (
    <>
      <ThemeProvider theme={APP_THEME}>
        <Story />
        <GlobalStyle />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'black',
    values: [{
      name: 'black', 
      value: '#000000',
    }, {
      name: 'white',
      value: '#ffffff',
    }],
  },
};
