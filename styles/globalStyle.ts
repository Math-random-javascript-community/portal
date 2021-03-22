import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const COLORS = {
  black: 'rgba(0, 0, 0 ,1)',
  hotRed: 'rgba(255, 63, 6, 1)',
  toxicGreen: 'rgba(6, 255, 187 ,1)',
  lemonSun: 'rgba(255, 228, 0, 1)',
  deepSea: 'rgba(6, 74, 255 ,1)',
  deepSea80: 'rgba(6, 135, 255, 0.8)',
  graphiteGrey: 'rgba(51, 51, 51, 1)',
  crystalWhite: 'rgba(255, 255, 255)',
  charcoalBlack: 'rgba(26,26,26,1)',
  brightGrey: 'rgba(255, 255, 255, 0.6)',
  graphite30: 'rgba(51, 51, 51, 0.3)',
  brown: 'rgb(165, 42, 42)'
};

const DEFAULT_THEME = {
  body: {
    backgroundColor: COLORS.charcoalBlack
  },
  button: {
    primaryBackground: COLORS.lemonSun,
    primaryColor: COLORS.black,
    primaryIconColor: COLORS.graphiteGrey,
    secondaryBorderColor: COLORS.lemonSun,
    secondaryBackground: COLORS.graphiteGrey,
    secondaryColor: COLORS.lemonSun,
    secondaryIconColor: COLORS.lemonSun,
    positiveBackground: COLORS.toxicGreen,
    positiveColor: COLORS.black,
    standardBorderColor: COLORS.crystalWhite,
    standardBackground: COLORS.graphiteGrey,
    standardColor: COLORS.crystalWhite
  },
  dropdown: {
    backgroundColor: COLORS.graphiteGrey,
    borderColor: COLORS.brightGrey,
    activeColor: COLORS.crystalWhite
  },
  icon: {
    defaultColor: COLORS.crystalWhite,
    activeColor: COLORS.lemonSun
  },
  textInput: {
    defaultBorderColor: COLORS.crystalWhite,
    defaultBackground: COLORS.graphiteGrey,
    defaultColor: COLORS.crystalWhite,
    errorBorderColor: COLORS.hotRed,
    validBorderColor: COLORS.toxicGreen,
    requiredSignColor: COLORS.hotRed,
    bottomTextColor: COLORS.brightGrey,
    errorTextColor: COLORS.hotRed
  },
  text: {
    defaultColor: COLORS.crystalWhite
  },
  customLink: {
    defaultColor: COLORS.deepSea80
  },
  tag: {
    defaultColor: COLORS.toxicGreen
  },
  menu: {
    activeColor: COLORS.lemonSun,
    activeBackgroundColor: COLORS.graphiteGrey
  },
  digestItem: {
    backgroundColor: COLORS.graphite30
  },
  horizontalLine: {
    defaultColor: COLORS.lemonSun
  },
  errors: {
    containerBackgroundColor: COLORS.black,
    color: COLORS.brown
  }
};
interface GlobalStyleProps {
  theme: typeof DEFAULT_THEME;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    background-color: ${({ theme }) => theme.body.backgroundColor};
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export { GlobalStyle, DEFAULT_THEME as APP_THEME };
