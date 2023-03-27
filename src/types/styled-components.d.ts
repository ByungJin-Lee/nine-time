import {theme} from '~/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

type CustomTheme = typeof theme;
