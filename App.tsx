import React from 'react';
import {Button, SafeAreaView} from 'react-native';

import {styled} from '@modules/styled';
import AlarmUtils from '~/libs/alarm-utils';

import Typography from '~/common/components/Typography';
import '~/tasks/setup';

export default function App(): JSX.Element {
  const handleClick = () => {
    AlarmUtils.reserveAlarm(10);
  };

  return (
    <AppContainer>
      <Typography>hello</Typography>
      <Button onPress={handleClick} title="hello" />
    </AppContainer>
  );
}

const AppContainer = styled(SafeAreaView)``;
