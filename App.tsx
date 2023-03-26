import React from 'react';

import AppContainer from './AppContainer';
import '~/tasks/setup';
import {AppNavigator} from '~/screens/app';

export default function App(): JSX.Element {
  return (
    <AppContainer>
      <AppNavigator />
    </AppContainer>
  );
}
