import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, APP_THEME } from '../styles/globalStyle';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={APP_THEME}>
        <Story />
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
