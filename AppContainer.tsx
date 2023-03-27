import {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {linking} from '@modules/deep-link';

import {Fallback} from '~/components/Fallback';
import {DBServiceProvider} from '~/context/database-service-context';
import {ThemeProvider} from '~/theme';

interface AppContainerProps {
  children: ReactNode | ReactNode[];
}

export default function AppContainer({children}: AppContainerProps) {
  return (
    <ThemeProvider>
      <NavigationContainer linking={linking} fallback={<Fallback />}>
        <DBServiceProvider>{children}</DBServiceProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
