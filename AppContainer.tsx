import {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Fallback} from '~/common/components/Fallback';
import {DatabaseProvider} from '~/context/database-context';
import {linking} from '@modules/deep-link';

interface AppContainerProps {
  children: ReactNode | ReactNode[];
}

export default function AppContainer({children}: AppContainerProps) {
  return (
    <NavigationContainer linking={linking} fallback={<Fallback />}>
      <DatabaseProvider>{children}</DatabaseProvider>
    </NavigationContainer>
  );
}
