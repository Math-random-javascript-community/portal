import React from 'react';

import { GlobalStyle, APP_THEME } from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';

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
    values: [{
      name: 'black', 
      value: '#000000',
    }],
  },
};
