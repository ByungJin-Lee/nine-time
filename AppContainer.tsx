import {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Fallback} from '~/common/components/Fallback';
import {linking} from '~/common/modules/deep-link';

interface AppContainerProps {
  children: ReactNode | ReactNode[];
}

export default function AppContainer({children}: AppContainerProps) {
  return (
    <NavigationContainer linking={linking} fallback={<Fallback />}>
      {children}
    </NavigationContainer>
  );
}
