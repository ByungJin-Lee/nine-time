import React from 'react';
import {SafeAreaView} from 'react-native';

import {styled} from '@modules/styled';
import Typography from '~/common/components/Typography';
import '~/tasks/setup';

export default function App(): JSX.Element {
  return (
    <AppContainer>
      <Typography>hello</Typography>
    </AppContainer>
  );
}

const AppContainer = styled(SafeAreaView)``;
