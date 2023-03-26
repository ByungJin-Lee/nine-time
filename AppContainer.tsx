import {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Fallback} from '~/common/components/Fallback';
import {DBServiceProvider} from '~/context/database-service-context';
import {linking} from '@modules/deep-link';

interface AppContainerProps {
  children: ReactNode | ReactNode[];
}

export default function AppContainer({children}: AppContainerProps) {
  return (
    <NavigationContainer linking={linking} fallback={<Fallback />}>
      <DBServiceProvider>{children}</DBServiceProvider>
    </NavigationContainer>
  );
}
