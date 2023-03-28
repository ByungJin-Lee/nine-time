import {FC, PropsWithChildren} from 'react';

import {ThemeProvider as StyledComponentThemeProvider} from '@modules/styled';

import theme from './theme';

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  return <StyledComponentThemeProvider theme={theme} children={children} />;
};

export default ThemeProvider;
