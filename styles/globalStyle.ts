import { createGlobalStyle, css, DefaultTheme } from 'styled-components';
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
  graphiteLight: 'rgba(86, 86, 86, 1)',
};

const DEFAULT_THEME: DefaultTheme = {
  body: {
    backgroundColor: COLORS.charcoalBlack,
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
    standardColor: COLORS.crystalWhite,
  },
  dropdown: {
    backgroundColor: COLORS.graphiteGrey,
    borderColor: COLORS.brightGrey,
    activeColor: COLORS.crystalWhite
  },
  icon: {
    defaultColor: COLORS.crystalWhite,
    activeColor: COLORS.lemonSun,
  },
  image: {
    backgroundColor: COLORS.graphiteGrey,
    defaultColor: COLORS.graphiteLight,
  },
  avatar: {
    backgroundColor: COLORS.graphiteGrey,
    defaultColor: COLORS.graphiteLight,
  },
  textInput: {
    defaultBorderColor: COLORS.crystalWhite,
    defaultBackground: COLORS.graphiteGrey,
    defaultColor: COLORS.crystalWhite,
    errorBorderColor: COLORS.hotRed,
    validBorderColor: COLORS.toxicGreen,
    requiredSignColor: COLORS.hotRed,
    bottomTextColor: COLORS.brightGrey,
    errorTextColor: COLORS.hotRed,
  },
  text: {
    defaultColor: COLORS.crystalWhite,
  },
  customLink: {
    defaultColor: COLORS.deepSea80
  },
  tag: {
    defaultColor: COLORS.toxicGreen,
  },
  menu: {
    activeColor: COLORS.lemonSun,
    activeBackgroundColor: COLORS.graphiteGrey
  }
};

const UBUNTU_FONT_URL =
  'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap';

const fontStyle = css`
  @font-face {
    font-family: 'Ubuntu';
    font-weight: 400;
    font-style: normal;
    src: url(${UBUNTU_FONT_URL});
  }
`;

const bodyStyle = css`
  ${fontStyle};

  font-family: Ubuntu, sans-serif;
`;

const commonStyle = css`
  box-sizing: border-box;
`;

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    ${commonStyle}
  }
  
  body {
    ${bodyStyle}
  }
`;

export { GlobalStyle, DEFAULT_THEME as APP_THEME };
